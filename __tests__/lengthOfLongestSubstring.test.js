const lengthOfLongestSubstring = require('../2019-12-15/lengthOfLongestSubstring').lengthOfLongestSubstring

describe('test for lengthOfLongestSubstring', () => {
  test('abcabcbb', () => {
    let s = 'abcabcbb'
    expect(lengthOfLongestSubstring(s)).toEqual(3)
  })
  test('bbbbb', () => {
    let s = 'bbbbb'
    expect(lengthOfLongestSubstring(s)).toEqual(1)
  })
  test('pwwkeew', () => {
    let s = 'pwwkeew'
    expect(lengthOfLongestSubstring(s)).toEqual(3)
  })
  test('" "', () => {
    let s = ' '
    expect(lengthOfLongestSubstring(s)).toEqual(1)
  })
  test('""', () => {
    let s = ''
    expect(lengthOfLongestSubstring(s)).toEqual(0)
  })
  test('aa', () => {
    let s = 'aa'
    expect(lengthOfLongestSubstring(s)).toEqual(1)
  })
  test('au', () => {
    let s = 'au'
    expect(lengthOfLongestSubstring(s)).toEqual(2)
  })
})

