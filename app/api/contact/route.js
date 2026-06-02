import { getClientIp, validateContactPayload } from '../../../lib/validators'

const requestHistory = new Map()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000
const MAX_REQUESTS = 8

function isRateLimited(ip) {
  const now = Date.now()
  const history = requestHistory.get(ip) || []
  const recent = history.filter((timestamp) => timestamp > now - RATE_LIMIT_WINDOW)
  requestHistory.set(ip, [...recent, now])
  return recent.length >= MAX_REQUESTS
}

export async function POST(request) {
  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let payload
  try {
    payload = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request format.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (payload.honeypot) {
    return new Response(JSON.stringify({ error: 'Spam detected.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { sanitized, errors } = validateContactPayload(payload)
  if (errors.length) {
    return new Response(JSON.stringify({ error: errors.join(' ') }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // In production, connect to an email or CRM service using environment variables.
  // Example: sendContactMessage(process.env.CONTACT_RECIPIENT_EMAIL, sanitized)

  return new Response(JSON.stringify({ message: 'Your message has been received.' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
