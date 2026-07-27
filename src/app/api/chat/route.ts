import { NextResponse } from "next/server"
import { buildSystemPrompt } from "@/lib/chatbot-context"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile"
const MAX_HISTORY = 10

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured. Set GROQ_API_KEY in your environment." },
      { status: 503 }
    )
  }

  const body = await request.json().catch(() => null)
  const messages: ChatMessage[] = body?.messages

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const trimmedHistory = messages.slice(-MAX_HISTORY).filter(
    (m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
  )

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: "system", content: buildSystemPrompt() }, ...trimmedHistory],
        temperature: 0.4,
        max_tokens: 500,
      }),
    })

    if (!groqRes.ok) {
      const errText = await groqRes.text().catch(() => "")
      console.error("[chat] Groq API error:", groqRes.status, errText)
      return NextResponse.json({ error: "The assistant is temporarily unavailable." }, { status: 502 })
    }

    const data = await groqRes.json()
    const reply: string | undefined = data?.choices?.[0]?.message?.content

    if (!reply) {
      return NextResponse.json({ error: "No response generated." }, { status: 502 })
    }

    return NextResponse.json({ reply })
  } catch (err) {
    console.error("[chat] Request failed:", err)
    return NextResponse.json({ error: "The assistant is temporarily unavailable." }, { status: 502 })
  }
}
