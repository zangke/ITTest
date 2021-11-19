# 程序设计基础
## 算法的表示——流程图

### 什么是算法？
### 算法的特征
- 有限
- 确定
- 可行
- 0-N 输入
- 1-N 输出
### 算法的三种表示方法

#### 自然语言
#### 流程图

图形符号，开始/结束，处理、输入/输出、判断、流程线

![preview](/image/v2-21b66fbe1ce57355d97fd63638713fa5_r.jpg)

注意文档与梯形表示输入输出

<img src="/image/v2-a2c8183856100cda6bfc5e33e3a7917c_r.jpg" alt="preview" style="zoom:67%;" />

- 顺序结构

<img src="/image/v2-59b3b0e18eb0f6838e41c0a556eee072_1440w.jpg" alt="img" style="zoom:70%;" />

- 判断结构

<img src="/image/v2-59872aed21cb4f2f0f24b052841d65b1_1440w.jpg" alt="img" style="zoom:70%;" />

- 循环结构

<img src="/image/v2-f19bab37d5852c276825cce9bc66c3ab_1440w.jpg" alt="img" style="zoom:70%;" />

- 回形结构

<img src="/image/v2-f8b722d40ad76023594fab73d9fec7bd_1440w.jpg" alt="img" style="zoom: 80%;" />

- 固定规范

* 主流程用直线表达。如果结构是竖型就是一条直线，横型就是一条横线。不要歪七倒八。符合从左到右，从上到下的顺序。

<img src="/image/v2-f25ac119b49522a4ec299df47beecab8_1440w.jpg" alt="img" style="zoom: 80%;" />

* 并行的操作关系要对齐
* 单入单出。为避免混乱和歧义，同一个流程只有一个箭头进入，一个箭头出去。（只有判定框可以有多个箭头出去。）

<img src="/image/v2-02aea2326cc54e2b819121c2891511a7_1440w.jpg" alt="img" style="zoom: 80%;" />

* 判定流程中，是/否的位置取决于哪方处于主流程上。
通常“是/Y”位于直线上。
<img src="/image/v2-8d4fb1233b7f55d9d9e5fef32e1e5ca4_1440w.jpg" alt="img" style="zoom:80%;" />

但有时候“否/N”才表达主要流程。例如这张疫情隔离说明图。

<img src="/image/v2-248766f2d207dbdcffe81661e72feb51_1440w.jpg" alt="img" style="zoom: 60%;" />


* 一个流程只有一个开始。可以有一个结束或者多个结束，或者省略结束。
* 同一路径符（线条）只有一个箭头。且避免与其他路径交叉。
* 字号图形大小一致。



#### 伪代码
伪代码1：
```javascript
if 九点以前 then
    do 私人事务；
if 9点到18点 then
    工作；
else
    下班；
end if
```
伪代码2：
```javascript
x ← 0
y ← 0
z ← 0

while x < N do 
    x ← x + 1
    y ← x + y
    for t ← 0 to 10 do 
        z ← ( z + x * y ) / 100
        repeat
           y ← y + 1
           z ← z - y
        until z < 0
    z ← x * y

y ← y / 2
```
C语言代码：
```c
x = y = z = 0;

while( z < N )
{
   x ++;
　　y += x;

　　for( t = 0; t < 10; t++ )
　　{
　　     z = ( z + x * y ) / 100;
　　     do 
　　     {
			      y ++;
			      z -= y;
　　     } while( z >= 0 );
    }

　　z = x * y;
}

y /= 2;
```



## 面向对象程序设计基础

## VB语言基础
### VB基本数据类型
### 常量、变量的定义及使用
### 基本运算、表达式与常用的标准函数

## VB基础语句

### 赋值语句
### 判断语句
### 循环语句