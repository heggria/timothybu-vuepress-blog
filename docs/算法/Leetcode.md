---
title:
---

## [两数(链表)相加](https://leetcode-cn.com/problems/add-two-numbers/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 进位
  let add = 0;
  // 头结点
  let head = new ListNode();
  // 当前 和 指针
  let current = head;
  // 和 缓存
  let sum = 0;
  while (l1 || l2) {
    // 加法器
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    // 进位判断
    add = sum >= 10 ? 1 : 0;
    // 当前指针永远指向 和 指针
    current = current.next = new ListNode(sum % 10);
    // 短路 + 移动指针
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  // 最终进位
  add && (current.next = new ListNode(add));
  return head.next;
};
```

## [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 使用 map 做滑动窗口
  var map = new Map();
  var maxNum = (i = j = 0);
  while (j < s.length) {
    // 不做删除操作
    // 检测字符是否存在
    // 判断 s[j]的下标 + 1 是否比当前 i 大（可能弃用）
    map.has(s[j]) && (i = Math.max(map.get(s[j]) + 1, i));
    map.set(s[j], j++);
    maxNum = Math.max(j - i, maxNum);
  }
  return maxNum;
};
```

## [寻找两个正序数组的中位数](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let temp = nums1.concat(nums2).sort((a, b) => a - b);
  let l = temp.length;
  if (!(l % 2)) return (temp[l / 2 - 1] + temp[l / 2]) / 2;
  else return temp[Math.floor(l / 2)];
};
```
