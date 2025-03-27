"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Counter() {
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition()

  const increment = () => {
    startTransition(() => {
      setCount((c) => c + 1)
    })
  }

  const decrement = () => {
    startTransition(() => {
      setCount((c) => c - 1)
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-center">React 19 Counter Example</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div className="text-4xl font-bold">{count}</div>
          <div className="flex gap-4">
            <Button onClick={decrement} variant="outline" disabled={isPending} aria-label="Decrement counter">
              -
            </Button>
            <Button onClick={increment} disabled={isPending} aria-label="Increment counter">
              +
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
            This counter uses React 19's improved useTransition hook
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

