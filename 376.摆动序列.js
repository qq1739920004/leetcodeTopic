/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if(nums.length<2) return nums.length
  let curDiff=0,preDiff=0
  let len=nums.length
  let res=1
  for(let i=0;i<(len-1);i++){
    curDiff=nums[i+1]-nums[i]
    if((curDiff>0 && preDiff<=0) || (curDiff<0 && preDiff >=0)){
      res++
      preDiff=curDiff
    }
  }
  return res
};
// @lc code=end

