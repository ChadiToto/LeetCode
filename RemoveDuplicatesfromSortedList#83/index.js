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
var deleteDuplicates = function (head) {
  let current = head; // pointer on list
  while (current) {
    if (current.next != null && current.val == current.next.val) {
      current.next = current.next.next; // point the current elements towards the next element after the dupe
    } else {
      current = current.next; // advance if no dupe encountered
    }
  }
  return head;
};
