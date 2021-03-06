<!--
 * @Author: xinranzhou
 * @Date: 2020-07-16 09:18:59
 * @LastEditTime: 2020-07-16 10:20:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data_structure/doc/chapter1.md
--> 
# 如何分析、统计算法的执行效率和资源消耗
数据结构与算法本身解决的问题就是“快”与“省”的问题，即如何让代码运行得更快，更省空间。所以执行效率是衡量一个算法的重要指标。而执行效率可以从时间复杂度，空间复杂度来分析

### 为什么需要复杂度分析
按照通常的统计，让代码在机器上运行一遍，然后通过各种监控，统计工具就能得算法执行的时间和占用的内存大小，为什么还需要做时间和空间复杂度分析呢？

无可否认，这种“事后统计法”评估算法的执行效率是准确的，但是该统计法有很大的局限性
#### 测试结果依赖于测试环境
测试环境中的硬件对测试结果影响很大，比如同样的代码，运行在Intel Core i9 处理器和 Intel Core i3 处理器来运行，不用说，i9 处理器要比 i3 处理器执行的速度快很多。还有，比如原本在这台机器上 a 代码执行的速度比 b 代码要快，等我们换到另一台机器上时，可能会有截然相反的结果

#### 测试结果受数据规模与结构的影响
对于同一个排序算法来说，待排序的数据有序度不同也会影响算法的执行效率，极端情况下数据是有序的，那排序算法就不需要做任何操作，执行时间会相对于无序数据短。除此之外，数据规模越小，也就无法真实的反映算法的性能。

所以我们需要一个不依赖具体的测试数据与环境的表示法来粗略的计算算法的执行效率，时间，空间复杂度

### 大 O 复杂度表示法

算法的执行效率，在代码没有运行的情况下，“肉眼”怎样才能看出代码的执行时间呢？
```
let sum = 0
for (let i = 0; i < n; i++) {
    sum += i
}
```
按照CPU运行执行一段代码操作类似**读数据-运算-写数据**。尽管每行代码对应的 CPU 执行的个数、执行的时间都不一样，但是，我们这里只是粗略估计，所以可以假设每行代码执行的时间都一样，为 unit_time。在这个假设的基础之上，这段代码的总执行时间是多少呢？

第一行运行1 unit_time, 第2， 3行执行了n遍，所以总时间为(2n + 1)*unit_time，可以看出代码执行时间T(n)与没行代码的执行次数成正比，按照这个比例可以推出以下公式，也就是著名的大O表示法
![avatar](https://static001.geekbang.org/resource/image/22/ef/22900968aa2b190072c985a08b0e92ef.png)
T(n)表示代码执行时间，f(n)表示代码执行次数的总和，因为这是一个公式所以用f(n)表示，公式中的O，表示代码执行时间T(n)与代码执行次数总和（fn）成正比。

大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是表示代码执行时间随数据规模增长的变化趋势，所以，也叫作渐进时间复杂度（asymptotic time complexity），简称时间复杂度。

当n值很大时候，常量便可以省略，以上面的代码为例，T(n) = O(2n + 1) 则可以表示为T(n) = O(n),所以此次代码运行的时间复杂度为n。

#### 复杂度分析

O(n^2)
```
for (let i = 0; i < n; i++) {
    for(let j = 0; j < n - 1; j++) {
        
    }
}
```
第一行执行n次，时间复杂度为O(n), 第二行也是执行n次，时间复杂度也为O(n)，因为第二行是嵌套在第一行代码中运行，所以总时间复杂度为O(n) * O(n) => O(n*n) => O(n^2) 

O(nlogn)

```
let i = 1; 
while (i <= n) {
    i = i * 2; 
}
```
从代码中可以看出，变量 i 的值从 1 开始取，每循环一次就乘以 2。当大于 n 时，循环结束.
所以2^0 + 2^1 + 2^k + 2^x = n.

通过2^x=n求解x, x = log2^n, 所以该段代码时间复杂度就是O(log2^n)

### 空间复杂度

时间复杂度的全称是渐进时间复杂度，表示算法的执行时间与数据规模之间的增长关系。类比一下，空间复杂度全称就是渐进空间复杂度（asymptotic space complexity），表示算法的存储空间与数据规模之间的增长关系

空间复杂度分析方法相对于简单，只需要关注数据储存的大小即可，比如数组长度为n，则空间复杂度为n

最后放一张常见时间复杂度对比图
![avatar](https://static001.geekbang.org/resource/image/49/04/497a3f120b7debee07dc0d03984faf04.jpg)
