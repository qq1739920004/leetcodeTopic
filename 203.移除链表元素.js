/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const ret = new ListNode(0, head);
  let cur = ret;

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return ret.next;
};
// @lc code=end
const arr = [1, 2, 6, 3, 4, 5, 6]
const heads = arr.map((item, index) => {
  return new ListNode(item, arr.slice(index))
})
/**
 * heads变成了
  [
  ListNode { val: 6, next: 3 },
  ListNode { val: 3, next: 4 },
  ListNode { val: 4, next: 5 },
  ListNode { val: 5, next: 6 },
  ListNode { val: 6, next: null }
  ]
 */
heads.map((item, index) => {
  return item.next = heads[index + 1]
})

/**
 * heads变成了
 [
  ListNode { val: 2, next: ListNode { val: 6, next: [ListNode] } },
  ListNode { val: 6, next: ListNode { val: 3, next: [ListNode] } },
  ListNode { val: 3, next: ListNode { val: 4, next: [ListNode] } },
  ListNode { val: 4, next: ListNode { val: 5, next: [ListNode] } },
  ListNode { val: 5, next: ListNode { val: 6, next: undefined } },
  ListNode { val: 6, next: undefined },
  undefined
]
 */
let a = removeElements(heads[0], 6);
const res = []
do {
  res.push(a.val)
  a = a.next
}
while (a)
console.log(res);//[ 1, 2, 3, 4, 5 ]


