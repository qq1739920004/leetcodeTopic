/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map =new Map()
  for(let index=0;index<nums.length;index++){
    const num=nums[index]
    const num2=target-num
    if(map.has(num2)){
      return [index,map.get(num2)]
    }
    else{
      map.set(num,index)
    }
  }
};
// @lc code=end

