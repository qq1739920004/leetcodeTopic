/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len=nums.length
  let resNum=-Infinity
  let curNum=0
  for(let i=0;i<len;i++){
    curNum+=nums[i]
    if(curNum>resNum){
      resNum=curNum
    }
    if(curNum<0){
      curNum=0
    }
  }
  return resNum
};
// @lc code=end

