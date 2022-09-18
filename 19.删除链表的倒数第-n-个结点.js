/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!head || n<=0)return
  let node=new ListNode(0,head)
  let first=node
  let end=node
  while(n>0){
    n--
    first=first.next
  }
  while(first.next){
   end=end.next
   first=first.next 
  }
  end.next=end.next.next
  return node.next
};
// @lc code=end

