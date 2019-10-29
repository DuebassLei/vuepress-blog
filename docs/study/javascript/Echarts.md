# :candy: Echarts 实现多图表加载
## 实现效果图

![效果图](https://upload-images.jianshu.io/upload_images/4335059-75ea4eb4e172fcf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## html code

```html
<body>             
    <div id="chart3" style="height:300px;"></div>
    <div id="chart4" style="height:300px;"></div>
    <div id="chart5" style="height:300px;"></div>             
    <div id="chart6" style="height:300px;"></div>
</body>
```
## javascript code

```javascript
<!--引用echarts.js文件 -->
<script src="${pageContext.request.contextPath }/lib/echarts/echarts.min.js"></script>
<script>
    var chart3 = document.getElementById('chart3');
    var chart4 = document.getElementById('chart4');
    var chart5 = document.getElementById('chart5');
    var chart6 = document.getElementById('chart6');

    var charts  =[];//创建一个数组，把option实例存储在这个数组里
    
    // Chart3_left
    mychart = echarts.init(chart3);
    option = {
        title: {
            text: '原油运输计划完成情况',
        },
        tooltip: {},
        legend: {
            data: ['月累输油', '月计划']
        },
        xAxis: {
            data: ["阿独线", "独乌线", "乌鄯线", "鄯兰线", "轮库鄯线", "王化线"]
        },
        yAxis: {},
        series: [
            {
                name: '月累输油',
                type: 'bar',
                data: [8, 9, 6, 4, 9, 8],
                itemStyle: {
                    normal: {
                        color: '#F13A30'
                    }
                },
            },
            {
                name: '月计划',
                type: 'bar',
                stack: '',
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: '#5553CE'
                    }
                },
                data: [7, 8, 6, 3, 6, 8]
            }

        ]
    };
    mychart.setOption(option);
    charts.push(mychart);

    // Chart4_right
    mychart = echarts.init(chart4);
    option = {
        title: {
            text: '原油库存统计',
        },
        tooltip: {},
        legend: {
            data: ['总库容', '有效库容','实际库容']
        },
        xAxis: {
            data: ["西部管道", "鄯善", "兰州", "轮南库尔勒", "阿独线", "玉门"]
        },
        yAxis: {},
        series: [
            {
                name: '总库容',
                type: 'bar',
                data: [8, 9, 6, 4, 9, 8],
                itemStyle: {
                    normal: {
                        color: '#F13A30'
                    }
                },
            },
            {
                name: '有效库容',
                type: 'bar',
                stack: '',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: '#5553CE'
                    }
                },
                data: [7, 8, 6, 3, 6, 8]
            },
            {
                name: '实际库容',
                type: 'bar',
                stack: '',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: '#FFFF00'
                    }
                },
                data: [2, 5, 9, 2, 8, 9]
            }

        ]
    };
    mychart.setOption(option);
    charts.push(mychart);

    // Chart5_left
    mychart = echarts.init(chart5);
    option = {
        title : {
            text: '天然气管道计划完成情况',
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['月累输气','月计划']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['中亚气','轮吐线','塔里木气','青海气','兰银线','善乌线']
            }
        ],
        yAxis : {},
        series : [
            {
                name: '月累输气',
                type: 'line',
                data: [25, 55, 70, 80, 60, 45],
            },
            {
                name:'月计划',
                type:'line',
                data:[75, 85, 75, 80, 65, 79],

            }
        ]
    };
    mychart.setOption(option);
    charts.push(mychart);

    // Chart6_right
    mychart = echarts.init(chart6);
    option = {
        title : {
            text: '天然气管道管存统计',
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['西二、三管存','西二、三目标管存','西二、三最高安全管存']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['中亚气','轮吐线','塔里木气','青海气','兰银线','善乌线']
            }
        ],
        yAxis : {},
        series : [
            {
                name: '西二、三管存',
                type: 'line',
                data: [25, 55, 70, 80, 60, 45],
            },
            {
                name:'西二、三目标管存',
                type:'line',
                data:[75, 85, 75, 80, 65, 79],

            },
            {
                name:'西二、三最高安全管存',
                type:'line',
                data:[65, 55, 65, 78, 70, 60],
            }
        ]
    };
    mychart.setOption(option);
    charts.push(mychart);
    
    // 遍历图表数组里的echarts实列，加载图表数据
    window.onresize = function () {
        for (var i = 0; i <charts.length ; i++) {
           charts[i].resize();
        }
    };
</script>
```
##  参考文章

[ECharts标签引用多个图表用于同一个页面](https://jingyan.baidu.com/article/f00622286214f8fbd3f0c8d7.html)



