/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let numMap = new Map()
  let count = 0

  for (let i = 0; i < nums1.length; i++) {
    for (let ii = 0; ii < nums2.length; ii++) {
      let sum = 0
      sum = nums1[i] + nums2[ii]
      numMap.set(sum, (numMap.get(sum) || 0) + 1)

    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let ii = 0; ii < nums4.length; ii++) {
      let sum = 0
      sum = nums3[i] + nums4[ii]
      count += (numMap.get(0 - sum) || 0)
    }
  }
  return count

};
// @lc code=end

