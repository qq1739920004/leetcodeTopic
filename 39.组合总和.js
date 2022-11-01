/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let sum=0,len=candidates.length
  let resArr=[],resItem=[]  
  const backFn=(starIndex,resItem)=>{
    if(sum>target) return
    if(sum==target) {
      resArr.push([...resItem])
      return
    }
    for(let i=starIndex;i<len;i++){
      sum+=candidates[i]
      resItem.push(candidates[i])
      backFn(i,resItem)
      sum -= candidates[i];
      resItem.pop()
    }
  }
  backFn(0,resItem)
  return resArr
};
console.log(combinationSum([2,3,6,7],7));

// @lc code=end

