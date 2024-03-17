---
title: Leetcode第278题 第一个错误的版本
tags:
    - Leetcode
categories:
    - 算法
date: 2022-07-01 12:01:01
thumbnail:
---

## 🌟 题目描述

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 n 个版本` [1, 2, ..., n]`，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 `bool isBadVersion(version)` 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。


示例 1：

```
输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false 
调用 isBadVersion(5) -> true 
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。
```

示例 2：

```
输入：n = 1, bad = 1
输出：1
```


提示：

`1 <= bad <= n <= 231 - 1`

## 🐂 解题方法

### 1⃣️ 方法一：二分查找

因为题目要求尽量减少调用检查接口的次数，所以不能对每个版本都调用检查接口，而是应该将调用检查接口的次数降到最低。

注意到一个性质：当一个版本为正确版本，则该版本之前的所有版本均为正确版本；当一个版本为错误版本，则该版本之后的所有版本均为错误版本。我们可以利用这个性质进行二分查找。

具体地，将左右边界分别初始化为  1 和  n，其中  n 是给定的版本数量。设定左右边界之后，每次我们都依据左右边界找到其中间的版本，检查其是否为正确版本。如果该版本为正确版本，那么第一个错误的版本必然位于该版本的右侧，我们缩紧左边界；否则第一个错误的版本必然位于该版本及该版本的左侧，我们缩紧右边界。

这样我们每判断一次都可以缩紧一次边界，而每次缩紧时两边界距离将变为原来的一半，因此我们至多只需要缩紧  O(logn) 次。

<code-group>
  <code-block title="JAVA 二分查找" active>

  ```java
/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        if (n == 1) return n;
        
        int l = 1; 
        int r = n;

        while(l < r) {
            int m = l + ((r - l) >> 1);

            if (isBadVersion(m)) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
}
  ```

</code-block>
</code-group>

<img src="https://file.pandacode.cn/blog/202201271524785.png" alt="image-20220127115203101" style="zoom:50%;" />

**复杂度分析**

时间复杂度： O(logn)，其中  n 是给定版本的数量。
空间复杂度： O(1)。我们只需要常数的空间保存若干变量。

## 🙏 感谢

- [力扣（LeetCode）](https://leetcode-cn.com/)
