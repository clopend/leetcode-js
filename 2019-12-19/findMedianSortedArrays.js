const findMedianSortedArrays = function (nums1, nums2) {
  var i = 0
  var j = 0
  var sortedArray = []

  function isDef(v) {
    return v !== undefined && v !== null
  }

  while(isDef(nums1[i]) || isDef(nums2[j])) {
    if (nums1[i] > nums2[j] || !isDef(nums1[i])) {
      sortedArray.push(nums2[j++])
      continue
    }
    if (nums1[i] <= nums2[j] || !isDef(nums2[j])) {
      sortedArray.push(nums1[i++])
    }
  }
  var half = Math.floor(sortedArray.length / 2)
  if (sortedArray.length % 2 === 0) {
    return (sortedArray[half - 1] + sortedArray[half]) / 2
  } else {
    return sortedArray[half]
  }
}

exports.findMedianSortedArrays = findMedianSortedArrays