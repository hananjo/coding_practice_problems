//Give the head of a singly linked list, reverse the list and return the reversed list



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
var reverseList = function(head) {
    
//recursive soplution
    // if (head == null || head.next == null) return head;
    // let res = reverseList(head.next);
    // head.next.next = head
    // head.next = null;
    // return res

let prev = null
let curr = head


while(curr !== null) {
  let nextNode = curr.next
    curr.next = prev
    prev = curr
    curr = nextNode
}

return prev
};