// Use Node.js crypto only on server-side
export function verifyPassword(inputPassword: string): boolean {
  // Import crypto only on server-side
  const crypto = require("crypto")

  // Hash the password server-side (you should store this hash, not the plain password)
  const PASSWORD_HASH = crypto.createHash("sha256").update("0731XYZ").digest("hex")
  const inputHash = crypto.createHash("sha256").update(inputPassword).digest("hex")

  return inputHash === PASSWORD_HASH
}
