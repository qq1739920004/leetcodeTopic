/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if(!head || !head.next) return null
    let pos=0
    let first=head.next.next
    let last=head.next
    while(first && first.next && first.next.next){
      if(first==last){
        let last2=head
        while(last!=last2){
            last=last.next
            last2=last2.next
          pos++

        }
        return seahchPox(pos,head)
      }
        first=first.next.next
        last=last.next
    }
      if(!first || !first.next || !first.next.next) return null;
      return seahchPox(pos,head)

};
function seahchPox(pox,head){
  while(pox>0){
    head=head.next
    pox--
  }
  return head
}
// @lc code=end

