const strStr = function (haystack, needle) {
  if (!needle) return 0
  const stackLength = haystack.length
  const needleLength = needle.length
  let i = j = 0
  while (i < stackLength && j < needleLength) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }
  if (i === stackLength && j < needleLength) return -1
  return i - j
}

exports.strStr = strStr
