const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function sanitizeText(value) {
  return String(value || '').trim().replace(/[<>]/g, '')
}

export function validateContactPayload(payload) {
  const errors = []
  const name = sanitizeText(payload.name)
  const email = String(payload.email || '').trim()
  const message = sanitizeText(payload.message)

  if (!name || name.length < 2 || name.length > 80) {
    errors.push('Name must be between 2 and 80 characters.')
  }

  if (!EMAIL_REGEX.test(email)) {
    errors.push('Please provide a valid email address.')
  }

  if (!message || message.length < 10 || message.length > 750) {
    errors.push('Message must be between 10 and 750 characters.')
  }

  return {
    sanitized: { name, email, message },
    errors,
  }
}

export function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  return request.headers.get('x-real-ip') || 'unknown'
}
