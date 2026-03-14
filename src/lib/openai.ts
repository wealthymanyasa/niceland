// Client-side OpenAI functions - call API routes instead of using OpenAI directly

export async function getChatResponse(messages: Array<{ role: string; content: string }>) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      throw new Error('Failed to get AI response')
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error('Chat API error:', error)
    return "Sorry, I'm having trouble connecting right now. Please try again in a moment or browse our product catalog directly."
  }
}

export async function getProductRecommendations(userPreferences: string) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        messages: [
          {
            role: "system",
            content: `You are a shoe expert at NiceLand. Based on the user's preferences, provide specific shoe recommendations. 

Consider these categories:
- Running shoes (cushioning, stability, speed)
- Basketball shoes (ankle support, traction)
- Lifestyle sneakers (style, comfort, versatility)
- Training shoes (support, flexibility)

For each recommendation, include:
- Type of shoe
- Key features
- Best use case
- Style notes

Keep recommendations practical and helpful.`
          },
          {
            role: "user",
            content: userPreferences
          }
        ]
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to get recommendations')
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error('Recommendations API error:', error)
    return "I'm having trouble with recommendations right now. Please browse our product catalog for the latest shoe offerings."
  }
}
