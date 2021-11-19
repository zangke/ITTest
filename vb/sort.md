# 排序
## 冒泡排序算法的思想方法
## 冒泡排序算法的程序实现
## 选择排序算法的思想方法
## 选择排序算法的程序实现

## 桶排序


[桶排序 高考信息技术喜刷刷系列_哔哩哔哩_bilibili](https://www.bilibili.com/video/av797281685/)

# 对考试成绩排序

在某个期末考试中，老师要把大家的分数排序，比如有 5 个学生，分别考 5、9、5、1、6 分（满分 10 分），从大到小排序应该是 9、6、5、5、1

找到 11 个桶，分别编号为 0-10，对应 0-10 分：

<img src="/image/image-20210829083242830.png" alt="image-20210829083242830" style="zoom:67%;" />

把这些分数按照桶的编号放入桶中

<img src="/image/image-20210829083402995.png" alt="image-20210829083402995" style="zoom:67%;" />

从最大编号的桶到最小编号的桶依次输出每个桶中的分数，分别是 9、6、5、5、1 了。

# 桶排序

桶排序(Bucket sort)，也叫作箱排序，是一种基于计数的排序算法，工作的原理是将数据分到有限数量的桶子里，然后每个桶再分别排序。

桶排序按下面4步进行：

- 1. 设置固定数量的空桶。
- 2. 把数据放到对应的桶中。
- 3. 对每个不为空的桶中数据进行排序。
- 4. 拼接从不为空的桶中数据，得到结果。

对考试成绩排序是简易版的桶排序，我们想象一下，如果考试分数的范围是 0～100 万该怎么办？弄 100 万个桶吗？

实际上在这种情况下，一个桶并不总是放同一个元素，在很多时候一个桶里可能会放多个元素

利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点：

1. 在额外空间充足的情况下，尽量增大桶的数量
2. 使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中



## javascript 实现

```javascript
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }

    var i;
    var minValue = arr[0];  //记录最小值
    var maxValue = arr[0];  //记录最大值
    //求最小值、最大值
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];                // 输入数据的最小值
      } else if (arr[i] > maxValue) {
          maxValue = arr[i];                // 输入数据的最大值
      }
    }

    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;   
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;   //桶的数量
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                      
        }
    }

    return arr;
}

function insertionSort(buckets){
}
```

## C++实现

```c
// 8-4.桶排序.cpp : 定义控制台应用程序的入口点。
  
#include <stdio.h>
#include <stdlib.h>
  
//链表结点描述 
typedef struct Node{ 
    double key; 
    struct Node * next;  
}Node; 

//辅助数组元素描述 
typedef struct{ 
    Node * next; 
}Head;
  
void bucketSort(double* a,int n) 
{ 
    int i,j; 
    Head head[10]={NULL}; 
    Node * p; 
    Node * q; 
    Node * node; 
    for(i=0;i<=n;i++){ 
        node=(Node*)malloc(sizeof(Node)); 
        node->key=a[i]; 
        node->next=NULL; 
        p = q =head[(int)(a[i]*10)].next; 
        if(p == NULL){ 
            head[(int)(a[i]*10)].next=node; 
            continue; 
        } 
        while(p){ 
            if(node->key < p->key) 
                break; 
            q=p; 
            p=p->next; 
        } 
        if(p == NULL){ 
            q->next=node; 
        }else{ 
            node->next=p; 
            q->next=node; 
        } 
    } 
    j=0; 
    for(i=0;i<10;i++){ 
        p=head[i].next; 
        while(p){ 
            a[j++]=p->key; 
            p=p->next; 
        } 
    } 
}
  
int main(int argc, char* argv[])
{
    int i; 
    double a[13]={0.5,0.13,0.25,0.18,0.29,0.81,0.52,0.52,0.83,0.52,0.69,0.13,0.16};
    bucketSort(a,12); 
    for(i=0;i<=12;i++) 
        printf("%-6.2f",a[i]); 
    printf("\n"); 
    return 0;
}
```

# 示例1

设有数组 array = [63, 157, 189, 51, 101, 47, 141, 121, 157, 156, 194, 117, 98, 139, 67, 133, 181, 13, 28, 109]，对其进行桶排序：

原始数据：

![image-20210829085226650](/image/image-20210829085226650.png)

分桶数据：

minValue=13, maxValue=194, bucketCount= 5

每个桶的范围 = (maxValue - minValue +1) / bucketCount =  (194-13+1)/5 = 182/5 = 36.2

![image-20210829085302046](/image/image-20210829085302046.png)

合并数据：

![image-20210829085340443](/image/image-20210829085340443.png)

排序结果：

![image-20210829085407323](/image/image-20210829085407323.png)

# 示例2

现在有一组数据[7, 36, 65, 56, 33, 60, 110, 42, 42, 94, 59, 22, 83, 84, 63, 77, 67, 101]，怎么对其按从小到大顺序排序呢？

原始数据：

![image-20210829092734857](/image/image-20210829092734857.png)

分桶数据：

![image-20210829092757267](/image/image-20210829092757267.png)

合并数据：

![image-20210829092820633](/image/image-20210829092820633.png)

排序结果：

![image-20210829092839600](/image/image-20210829092839600.png)

操作步骤说明：

- 1. 设置桶的数量为5个空桶，找到最大值110，最小值7，每个桶的范围20.8=(110-7+1)/5 。
- 2. 遍历原始数据，以链表结构，放到对应的桶中。数字7，桶索引值为0，计算公式为floor((7 – 7) / 20.8)， 数字36，桶索引值为1，计算公式floor((36 – 7) / 20.8)。
- 3. 当向同一个索引的桶，第二次插入数据时，判断桶中已存在的数字与新插入数字的大小，按照左到右，从小到大的顺序插入。如：索引为2的桶，在插入63时，桶中已存在4个数字56，59，60，65，则数字63，插入到65的左边。
- 4. 合并非空的桶，按从左到右的顺序合并0，1，2，3，4桶。
- 5. 得到桶排序的结构

# 总结

桶排序，主要适用于小范围整数数据，且独立均匀分布，可以计算的数据量很大，而且符合线性期望时间。

同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。

数据大，不能一次在内存中执行，一般用外部存储

## 什么时候最快

当输入的数据可以均匀的分配到每一个桶中。

## 什么时候最慢

当输入的数据被分配到了同一个桶中。



[python实现·十大排序算法之桶排序(Bucket Sort) - SegmentFault 思否](https://segmentfault.com/a/1190000022767400)

## 索引排序

## 特定位置的排序

## 特定数据存储结构的排序 
## 其他排序算法