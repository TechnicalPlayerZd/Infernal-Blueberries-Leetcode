# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        list1 = []
        while l1:
            list1.append(l1.val)
            l1 = l1.next

        list2 = []
        while l2:
            list2.append(l2.val)
            l2 = l2.next

        list1.reverse()
        list2.reverse()
        i1 = int("".join(str(num) for num in list1))
        i2 = int("".join(str(num) for num in list2))

        i3 = list(map(int, str(i1+i2)))
        i3.reverse()
        return list_to_linked(i3)

def list_to_linked(lst):
    dummy = ListNode(0)
    curr = dummy

    for val in lst:
        curr.next = ListNode(val)
        curr = curr.next

    return dummy.next