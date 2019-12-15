// 滑动窗口方法

exports.lengthOfLongestSubstring = function (s) {
  let hashMap = {} // 记录字符最后出现的位置
  let left = 0 // 记录左边界的位置
  let result = 0 // 记录长度
  if (s.length < 2) {
    return s.length
  }
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i]
    if (hashMap[currentChar] !== undefined) {
      left = Math.max(left, hashMap[currentChar])
    }
    hashMap[currentChar] = i + 1
    result = Math.max(result, i - left + 1)
  }
  return result
}