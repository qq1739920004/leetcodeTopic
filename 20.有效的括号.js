/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
  if (s.length % 2 === 1) return false
  const arr = []
  const sMap =new Map()
  sMap.set('(',')')
  sMap.set('[',']')
  sMap.set('{','}')
  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (sMap.has(item)) {
      arr.push(item)
    }
    else {
      const t = arr[arr.length - 1]
      if (
       item === sMap.get(t)
      ) {
        arr.pop()
      }
      else {
        return false
      }
    }
  }
    return arr.length===0

};
// @lc code=end

