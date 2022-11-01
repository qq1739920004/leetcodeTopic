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
  let j=0
  let res=0
  for(let i=0;i<g.length;j++){
    if(s[j]==undefined) return i
    res+=s[j]
    if(g[i]<=res){
      i++
      res=0
    }
  }
  return g.length
};
console.log(findContentChildren([1,2,3],[0,10,11,123,123])); 

// @lc code=end

