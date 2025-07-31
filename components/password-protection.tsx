"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"

interface PasswordProtectionProps {
  onSuccess: () => void
  projectTitle: string
}

export function PasswordProtection({ onSuccess, projectTitle }: PasswordProtectionProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate a brief loading state
    setTimeout(() => {
      if (password === "0731XYZ") {
        onSuccess()
      } else {
        setError("Incorrect password. Please try again.")
      }
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-gray-600" />
          </div>
          <CardTitle className="text-2xl font-medium">Protected Project</CardTitle>
          <p className="text-gray-600 mt-2">
            {projectTitle} is password protected. Please enter the password to continue.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                disabled={isLoading}
              />
              {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Access Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
