"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, X, Send, Loader2, Bot, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm the LOYAL Air Compressor assistant. Ask me about our products, industries we serve, certifications, or how to request a quote.",
}

const SUGGESTED_PROMPTS = [
  "What products do you offer?",
  "Which industries do you serve?",
  "What certifications do you have?",
  "How do I request a quote?",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, isLoading])

  function clearChat() {
    setMessages([GREETING])
  }

  async function sendMessage(e: React.SyntheticEvent, override?: string) {
    e.preventDefault()
    const trimmed = (override ?? input).trim()
    if (!trimmed || isLoading) return

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }]
    setMessages(nextMessages)
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error || "Request failed")
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble responding right now. Please try again or reach us via the Contact page.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed right-6 bottom-6 z-40 flex size-14 items-center justify-center rounded-full bg-brand-accent text-brand-accent-foreground shadow-[0_8px_24px_-6px_rgba(26,92,230,0.5)] transition-all duration-200 hover:scale-110 hover:bg-brand-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:right-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            {isOpen ? <X className="size-6" strokeWidth={2} /> : <MessageCircle className="size-6" strokeWidth={2} />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed right-6 bottom-24 z-40 flex h-[min(600px,70vh)] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_20px_50px_-12px_rgba(15,23,42,0.35)] md:right-8"
          >
            <div className="flex items-center gap-3 border-b border-border/70 bg-primary px-5 py-4 text-primary-foreground">
              <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
                <Bot className="size-5" strokeWidth={1.75} />
              </span>
              <div className="flex-1">
                <p className="font-heading text-sm font-bold">LOYAL Assistant</p>
                <p className="text-xs text-primary-foreground/70">Ask about our products & services</p>
              </div>
              <button
                type="button"
                onClick={clearChat}
                aria-label="Clear conversation"
                title="Clear conversation"
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-primary-foreground/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Trash2 className="size-4" strokeWidth={1.75} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      message.role === "user"
                        ? "rounded-br-sm bg-primary text-primary-foreground"
                        : "rounded-bl-sm bg-muted text-foreground"
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5">
                    <Loader2 className="size-4 animate-spin text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Thinking…</span>
                  </div>
                </div>
              )}
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-col gap-2 pt-1">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={(e) => sendMessage(e, prompt)}
                      className="rounded-xl border border-border/70 bg-card px-3.5 py-2 text-left text-sm text-foreground shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-brand-accent/40 hover:bg-muted"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-border/70 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our products…"
                disabled={isLoading}
                className="h-10 flex-1 rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent text-brand-accent-foreground transition-colors hover:bg-brand-accent/90 disabled:pointer-events-none disabled:opacity-50"
              >
                <Send className="size-4" strokeWidth={2} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
