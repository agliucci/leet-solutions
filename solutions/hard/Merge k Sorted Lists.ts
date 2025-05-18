// Title: Merge k Sorted Lists
            // Difficulty: Hard
            // Language: TypeScript
            // Link: https://leetcode.com/problems/merge-k-sorted-lists/

    const push = (node: ListNode | null) => {
        if (!node) return;
        heap.push(node);
        heap.sort((a, b) => a.val - b.val); // min heap
    };

    const heap: ListNode[] = [];
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

 */
 * }