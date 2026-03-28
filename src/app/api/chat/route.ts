import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Missing GROQ_API_KEY' },
        { status: 500 }
      )
    }

    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'llama3-8b-8192',
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

    const anyError = error as any
    const status = anyError?.status ?? anyError?.response?.status
    const code = anyError?.code ?? anyError?.error?.code

    if (status === 429 || code === 'insufficient_quota') {
      return NextResponse.json({
        response:
          "I'm currently unavailable due to API quota limits. Please browse the catalog and try again later."
      })
    }

    return NextResponse.json(
      { error: 'Failed to get AI response' },
      { status: 500 }
    )
  }
}
