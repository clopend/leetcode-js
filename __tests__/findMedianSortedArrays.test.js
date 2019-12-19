const findMedianSortedArrays = require('../2019-12-19/findMedianSortedArrays').findMedianSortedArrays

describe('test for findMedianSortedArrays', () => {
  test('[1, 3], [2]', () => {
    let s1 = [1, 3]
    let s2 = [2]
    expect(findMedianSortedArrays(s1, s2)).toEqual(2)
  })
  test('[1, 3], [2, 4]', () => {
    let s1 = [1, 3]
    let s2 = [2, 4]
    expect(findMedianSortedArrays(s1, s2)).toEqual(2.5)
  })
  test('[0, 0], [0, 0]', () => {
    let s1 = [0, 0]
    let s2 = [0, 0]
    expect(findMedianSortedArrays(s1, s2)).toEqual(0)
  })
})

