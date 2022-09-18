/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
class LinkNode{
  constructor(val,next){
    this.val=val
    this.next=next
  }
}


var MyLinkedList = function() {
  this._size=0
  this._head=null
  this._tail=null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
    if(index < 0 || index >= this._size) return null;
    // 创建虚拟头节点
    let cur = new LinkNode(0, this._head);
    // 0 -> head
    while(index-- >= 0) {
        cur = cur.next;
    }
    return cur;
};
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) return -1;
    // 获取当前节点
    return this.getNode(index).val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this._size++
  let head=new LinkNode(val,this._head)
  this._head=head
  if(!this._tail){
    this._tail=head
  }
  
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this._size++
  let tail=new LinkNode(val,null)
  if(!this._tail){
    this._tail=tail
    this._head=tail
    return
  }
  this._tail.next=tail
  this._tail=tail
 
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index>this._size) return
  else if(index<=0){
    this.addAtHead(val)
    return
  }
  else if(index===this._size){
    this.addAtTail(val)
    return
  }
  
    const node = this.getNode(index);
    const curr = new LinkNode(node.val,node.next)
    node.next=curr
    node.val=val
    this._size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index<0 || index>=this._size || this._size===0) return
  if(this._size===1){
    this._head=null
    this._tail=null
    this._size=0
    return
  }
  if(index===0){
    const cur=this.getNode(index)
    this._head=cur.next
    this._size--
    return
  }
 const node = this.getNode(index - 1);    
    node.next = node.next.next;
    // 处理尾节点
    if(index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

