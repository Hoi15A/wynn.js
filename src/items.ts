import { API_BASE_URL } from './config.js'
import { fetchApiJson } from './http.js'

import type { WynncraftItem } from './types/itemTypes.js'

export async function searchItem(itemName: string): Promise<WynncraftItem[]> {
  if (!itemName || typeof itemName !== 'string') {
    throw new TypeError('Item name must be a non-empty string')
  }

  return fetchApiJson<WynncraftItem[]>(
    `${API_BASE_URL}/item/search/${encodeURIComponent(itemName)}`,
    `Item "${itemName}" not found`,
  )
}