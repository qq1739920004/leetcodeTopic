/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let len=nums.length
  let l=sum=r=0
  let res=nums.length+1
  while(r<len){
    sum+=nums[r++]
    while(sum>=target){
      res = res < r - l ? res : r - l;
      sum-=nums[l++]
    }
  }
  return res > len ? 0 : res;
};
// @lc code=end
console.log(minSubArrayLen(7,[2,3,1,2,4,3]));


