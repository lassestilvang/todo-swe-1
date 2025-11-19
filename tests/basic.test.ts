import { describe, it, expect } from 'bun:test'

describe('Basic functionality', () => {
  it('should pass a simple test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should handle string operations', () => {
    const str = 'Hello, World!'
    expect(str).toContain('Hello')
    expect(str.length).toBe(13)
  })

  it('should work with arrays', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(arr).toHaveLength(5)
    expect(arr.includes(3)).toBe(true)
  })
})
