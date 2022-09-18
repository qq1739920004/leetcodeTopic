/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
 let ret=new ListNode(0,head)
 let temp=ret
 while(temp.next && temp.next.next){
  let temp1=temp.next.next.next,temp2=temp.next
  temp.next=temp.next.next
  temp.next.next=temp2
  temp.next.next.next=temp1
  temp=temp.next.next
 }
 return ret.next
};
// @lc code=end

