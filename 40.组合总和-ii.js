/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  let sum=0,len=candidates.length
   let resArr=[],resItem=[]  
   candidates.sort((a,b)=>a-b)
   const backFn=(starIndex,resItem)=>{
     if(sum>target) return
     if(sum==target) {
       resArr.push([...resItem])
       return
     }
     for(let i=starIndex;i<len || sum+candidates[i]<target;i++){
         if(i>starIndex && candidates[i]===candidates[i-1]){
             console.log(22222222)
             continue
         }
       sum+=candidates[i]
       resItem.push(candidates[i])
       backFn(i+1,resItem)
       sum -= candidates[i];
       resItem.pop()
     }
   }
     backFn(0,resItem)
 
   return resArr
};
// @lc code=end

