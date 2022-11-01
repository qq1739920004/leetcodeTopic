/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a,b)=>{
    return b-a
  })
  s.sort((a,b)=>{
    return b-a
  })
  let i=0,j=0
  while(g[i] && s[j]){
    if(g[i]>s[j]){
      j++
    }
    else{
      j++
      i++
    }
  }
  return i
};
console.log(findContentChildren([1,2,3],[10,11,10,1])); 


let arr=[1,2,3,4,5];
[arr[0],arr[1]]=[arr[1],arr[0]];
console.log(arr);
// @lc code=end

