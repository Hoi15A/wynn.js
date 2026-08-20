import fetch from 'node-fetch'
import { API_BASE_URL } from './config.js'

import type { WynncraftItem } from './types/itemTypes.js'

export async function searchItem(itemName: string): Promise<WynncraftItem[]> {
  if (!itemName || typeof itemName !== 'string') {
    throw new TypeError('Item name must be a non-empty string')
  }

  try {
    const res = await fetch(`${API_BASE_URL}/item/search/${encodeURIComponent(itemName)}`)

    if (res.status === 404) {
      throw new Error(`Item "${itemName}" not found`)
    }

    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Try again later.')
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    return (await res.json()) as WynncraftItem[]
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