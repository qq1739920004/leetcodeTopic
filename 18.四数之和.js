/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if(nums.length<4) return []
  const res=[],len=nums.length
  nums.sort((a,b)=>a-b)
  for(let i=0;i<len-3;i++){
    let Nums1=nums[i]
    if(Nums1>target && target > 0) return res

        //去重
    if(Nums1==nums[i-1]){
      continue
    }
    for(let ii=i+1;ii<len-2;ii++){
      let l=ii+1,r=len-1
      let Nums2=nums[ii]
        //去重
      if(Nums2==nums[ii-1] && ii!=i+1){
        continue
      }
      while(l<r){
      sum=Nums1+Nums2+nums[l]+nums[r]
      if(sum>target) r--
      else if(sum<target) l++
      else{
        res.push([Nums1,Nums2,nums[l],nums[r]])

        //去重
        while(l<r && nums[l] == nums[l+1]){ l++ }
        while(l<r && nums[r] == nums[r-1]){ r-- }
        l++
        r--
      }

    }
  }

  }
  return res
};
// @lc code=end

