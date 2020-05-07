const strStr = require('../2020-05-07/strStr').strStr

describe('test for leetcode 28.Implement strStr()', () => {
  test('hello, ll, 2', () => {
    const hayStack = 'hello'
    const needle = 'll'
    const index = 2
    expect(strStr(hayStack, needle)).toEqual(index)
  })
  test('hello, lo, 3', () => {
    const hayStack = 'hello'
    const needle = 'lo'
    const index = 3
    expect(strStr(hayStack, needle)).toEqual(index)
  })
  test('aaaaa, bba, -1', () => {
    const hayStack = 'aaaaa'
    const needle = 'bba'
    const index = -1
    expect(strStr(hayStack, needle)).toEqual(index)
  })
  test('hello, "", 0', () => {
    const hayStack = 'hello'
    const needle = ''
    const index = 0
    expect(strStr(hayStack, needle)).toEqual(index)
  })
  test('"", a, -1', () => {
    const hayStack = ''
    const needle = 'a'
    const index = -1
    expect(strStr(hayStack, needle)).toEqual(index)
  })
})