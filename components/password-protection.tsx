"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"
import { verifyProjectPassword } from "@/app/actions/verify-password"

interface PasswordProtectionProps {
  onSuccess: () => void
  projectTitle: string
}

export function PasswordProtection({ onSuccess, projectTitle }: PasswordProtectionProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await verifyProjectPassword(password)

      if (result.success) {
        onSuccess()
      } else {
        setError(result.message)
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Card className="w-full max-w-md bg-background-secondary border-background-tertiary">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-background-tertiary rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-foreground-secondary" />
          </div>
          <CardTitle className="text-2xl font-medium text-foreground">Protected Project</CardTitle>
          <p className="text-foreground-secondary mt-2">
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
                className="w-full bg-background-tertiary text-foreground border-background-tertiary focus:ring-foreground focus:border-foreground"
                disabled={isLoading}
                autoComplete="current-password"
              />
              {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
            </div>
            <Button
              type="submit"
              className="w-full bg-foreground text-background hover:bg-foreground-secondary"
              disabled={isLoading || !password.trim()}
            >
              {isLoading ? "Verifying..." : "Access Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
