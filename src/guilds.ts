import fetch from 'node-fetch'
import { API_BASE_URL } from './config.js'

import type { WynncraftGuild } from './types/guildTypes.js'

export async function getGuild(guildName: string): Promise<WynncraftGuild> {
  if (!guildName || typeof guildName !== 'string') {
    throw new TypeError('Guild name must be a non-empty string')
  }

  try {
    const res = await fetch(`${API_BASE_URL}/guild/${encodeURIComponent(guildName)}`)

    if (res.status === 404) {
      throw new Error(`Guild "${guildName}" not found`)
    }

    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Try again later.')
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    return (await res.json()) as WynncraftGuild
  } catch (err) {
    if (
      err instanceof Error &&
      (err.message.includes('ENOTFOUND') || err.message.includes('ECONNREFUSED'))
    ) {
      throw new Error('Unable to reach Wynncraft API. Check your connection.')
    }
    throw err
  }
} 