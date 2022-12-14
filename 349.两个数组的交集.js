/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let res= new Set()
  if(nums1.length<nums2.length){
    [nums1,nums2]=[nums2,nums1];
  }
  const numsSet=new Set(nums1)
  for(let i=0;i<nums2.length;i++){
    if(numsSet.has(nums2[i])){
      res.add(nums2[i])
    }
  }
  return [...res]
};
// @lc code=end

