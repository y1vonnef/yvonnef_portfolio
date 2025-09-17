"use server"

import { verifyPassword } from "@/lib/auth"

export async function verifyProjectPassword(password: string) {
  // Add a small delay to prevent brute force attacks
  await new Promise((resolve) => setTimeout(resolve, 500))

  const isValid = verifyPassword(password)

  if (isValid) {
    return { success: true, message: "Access granted" }
  } else {
    return { success: false, message: "Incorrect password. Please try again." }
  }
}
