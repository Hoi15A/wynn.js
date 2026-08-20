import fetch from 'node-fetch'
import { API_BASE_URL } from './config.js'

import type { WynncraftPlayer } from './types/playerTypes.js'

export async function getPlayer(username: string, fullResult: boolean = false): Promise<WynncraftPlayer> {
  if (!username || typeof username !== 'string') {
    throw new TypeError('Username must be a non-empty string')
  }

  try {
    const res = await fetch(`${API_BASE_URL}/player/${encodeURIComponent(username)}${fullResult ? '?fullResult' : ''}`)

    if (res.status === 404) {
      throw new Error(`Player "${username}" not found`)
    }

    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Try again later.')
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    return (await res.json()) as WynncraftPlayer
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

export async function getCharacters(username: string): Promise<WynncraftPlayer> {
  if (!username || typeof username !== 'string') {
    throw new TypeError('Username must be a non-empty string')
  }

  try {
    const res = await fetch(`${API_BASE_URL}/player/${encodeURIComponent(username)}/characters`)

    if (res.status === 404) {
      throw new Error(`Player "${username}" not found`)
    }

    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Try again later.')
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    return (await res.json()) as WynncraftPlayer
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

export async function searchPlayers(username: string): Promise<string[]> {
  if (!username || typeof username !== 'string') {
    throw new TypeError('Username must be a non-empty string')
  }

  try {
    const res = await fetch(`${API_BASE_URL}/search/${encodeURIComponent(username)}?only=players`)

    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Try again later.')
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    const data = (await res.json()) as { players: Record<string, { username: string }> }
    return Object.values(data.players).map(player => player.username)
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