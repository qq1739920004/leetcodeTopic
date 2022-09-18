/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function countSize(head){
  let i=0,cur=head
  while(cur){
    i++
    cur=cur.next
  }
  return i
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let curA=headA,curB=headB
  let sizeA=countSize(curA)
  let sizeB=countSize(curB)   
  if(sizeA<sizeB){
    [curA,curB]=[curB,curA];
    [sizeA,sizeB]=[sizeB,sizeA]
  }
  let i=sizeA-sizeB
  while(i-- > 0){
    curA=curA.next
  }
  while(curA && curA!==curB){
    curA=curA.next
    curB=curB.next
  }
  return curA
};
// @lc code=end

