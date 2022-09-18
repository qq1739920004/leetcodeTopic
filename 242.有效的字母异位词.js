/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length!==t.length) return false
  let surPlus='a'.charCodeAt()
  const arr1=new Array(26).fill(0)
  for(let i=0;i<s.length;i++){
    arr1[s.charCodeAt(i)-surPlus]++
  }
  for(let ii=0;ii<t.length;ii++){
    if(!arr1[t.charCodeAt(ii)-surPlus]) return false
    arr1[t.charCodeAt(ii)-surPlus]--
  }
  return true

};
// @lc code=end

