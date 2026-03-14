import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful AI assistant for NiceLand, a premium shoe store. You help customers find the perfect shoes based on their preferences, needs, and style. 

Your expertise includes:
- Running shoes, basketball shoes, lifestyle sneakers
- Size recommendations and fit guidance
- Style advice and outfit suggestions
- Product recommendations based on customer preferences

Always be friendly, helpful, and specific. When recommending products, consider factors like:
- Intended use (running, basketball, casual wear)
- Comfort preferences
- Style preferences
- Budget considerations

If you don't have specific product information, provide general guidance and suggest they browse our product catalog for current offerings.`
        },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const response = completion.choices[0].message.content

    return NextResponse.json({ response })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 }
    )
  }
}
