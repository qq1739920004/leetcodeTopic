/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let newArray=[]
  let newPointer=nums.length-1
  for(let i=0;i<=newPointer;){
    if(nums[i]*nums[i]>nums[newPointer]*nums[newPointer]){
      newArray.unshift(nums[i]*nums[i])
      i++
    }
    else{
      newArray.unshift(nums[newPointer]*nums[newPointer])
      newPointer--
    }
  }
  return newArray
};
// @lc code=end

console.log(sortedSquares([-4,-1,0,3,10]));

