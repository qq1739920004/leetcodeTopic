/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if(ransomNote.length>magazine.length) return ransomNote===magazine
  let startNum='a'.charCodeAt()
  let arr=new Array(26).fill(0)
  for(let i=0;i<magazine.length;i++){
    arr[magazine.charCodeAt(i)-startNum]+=1
  }
  for(let i=0;i<ransomNote.length;i++){
    if(arr[ransomNote.charCodeAt(i)-startNum]){
      arr[ransomNote.charCodeAt(i)-startNum]-=1
    }
    else{
      return false
    }
  }
  return true
};
// @lc code=end

