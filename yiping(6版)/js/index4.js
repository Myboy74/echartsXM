// 党员年龄分布
var myChart_age = echarts.init(document.getElementById('gyt_age'));
var option_gyt_age = {
    color: ['#ebe20c', '#126413', '#1389d6', '#ff4200', '#55d7ff'],
    title: {
        show: true,
        text: '年龄',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{c}人"
    },
    series: [
        {
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '58%'],
          color: ['#ff5400', '#ff7800', '#ffa200', '#ffde00','#d2ff00','#66ff00','#00ff8a','#00d8ff','#0096ff','#0048ff'],
            label: {
            normal: {
                formatter: '{b}\n{d}%',

                textStyle: {
                    color: '#34c4ff',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                { value: 762, name: '20岁以下' },
                { value: 586705, name: '21岁~30岁' },
                { value: 996390, name: '31岁~40岁' },
                { value: 1240669, name: '41岁~50岁' },
                { value: 1095069, name: '51岁~60岁' },
                { value: 1166139, name: '60岁以上' },
            ]
        }
    ]
};
myChart_age.setOption(option_gyt_age);

// 党员性别分布
var myChart_sex = echarts.init(document.getElementById('gyt_sex'));
var option_gyt_sex = {
    color: ['#ebe20c', '#148edf'],
    title: {
        show: true,
        text: '性别',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:{c}人"
    },
    series: [
        {
            name: '',
            type: 'pie',
            legendHoverLink: false,
            radius: ['40%', '58%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                  formatter: '{b}\n{d}%',
                  textStyle: {
                      color: '#34c4ff',
                      fontWeight: 'nomal',
                      fontSize: 14
                  }
              }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:10,
                    length2:5
                }
            },
            data: [
                { value: 3850774, name: '男' },
                { value: 1234960, name: '女' }

            ]
        }
    ]
};
myChart_sex.setOption(option_gyt_sex);

// 党员学历分布
var myChart_edu = echarts.init(document.getElementById('gyt_edu'));
var option_gyt_edu = {
    // color: ['#ebe20c', '#148edf','#39b54a'],
    title: {
        show: true,
        text: '学历',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:{c}人"
    },
        series: [
            {
                name: '',
                type: 'pie',
                legendHoverLink: false,
                radius: ['40%', '58%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                      formatter: '{b}\n{d}%',
                      textStyle: {
                          color: '#34c4ff',
                          fontWeight: 'nomal',
                          fontSize: 14
                      }
                  }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:10,
                        length2:5
                    }
                },
                data: [
                    { value: 217141, name: '研究生教育' },
                    { value: 2166660, name: '本专科教育' },
                    { value: 467196, name: '中等职业学校' },
                    { value: 750757, name: '普通高中' },
                    { value: 1483980, name: '初中及以下' }
                ]
            }
        ]
};
myChart_edu.setOption(option_gyt_edu);

// 党员岗位分布
var myChart_job = echarts.init(document.getElementById('gyt_job'));
var option_gyt_job = {
    color: ['#ebe20c', '#148edf','#39b54a', '#e60000', '#F4A460'],
    title: {
        show: true,
        text: '岗位',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:{c}人"
    },
        series: [
            {
                name: '',
                type: 'pie',
                legendHoverLink: false,
                radius: ['40%', '58%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                      formatter: '{b}\n{d}%',
                      textStyle: {
                          color: '#34c4ff',
                          fontWeight: 'nomal',
                          fontSize: 14
                      }
                  }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:10,
                        length2:5
                    }
                },
                data: [
                    { value: 2221303, name: '在岗职工' },
                    { value: 1718628, name: '农牧渔民' },
                    { value: 6264, name: '解放军、武警' },                   
                    { value: 543280, name: '离退休人员' },
                    { value: 534648, name: '其他人员' },
                    { value: 61611, name: '学生' }
                ]
            }
        ]
};
myChart_job.setOption(option_gyt_job);

// 23个党工委参与情况
var joinRate = echarts.init(document.getElementById('joinRate'));
var joinRate_option = {
    color: ['#ebe20c', '#148edf'],
    title: {
        text: '23个党工委参与情况',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        top:'3%',
        x: '20'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a2}: {c2}人<br/>{a0}: {c0}人<br />{a1}: {c1}%',
        axisPointer: {
            // type: 'cross',
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        //  selectedMode:false,
        top:'10',
        right:'50px',
        data: ['支部总数','参与支部数','参与率'],
              data: [
                    {
                        name: '参与支部数',
                        textStyle: { fontWeight: 'bold', color: '#2d9fd7' }
                    },{
                       name: '支部总数',
                       textStyle: { fontWeight: 'bold', color: '#b8b51a' }
                    },
                      {
                        name: '参与率',
                        textStyle: { fontWeight: 'bold', color: 'grey' }
                    }]
    },
     grid: {
        left: '80px'
       /* right: '4%',
        bottom: '3%',
        containLabel: true*/
    },
     xAxis: [
        {
            type: 'category',
            axisLine: {
                show:'false',
                lineStyle: {
                    color: '#57617B'
                }
            },
           axisLabel: {
                    interval: 0,
                    fontSize: 12,
                    textStyle:{
                        color:'white'
                    },
                    formatter: function (params) {
                        var newParamsName = "";// 最终拼接成的字符串
                        var paramsNameNumber = params.length;// 实际标签的个数
                        var provideNumber = 2;// 每行能显示的字的个数
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                        /**
                         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                         */
                        // 条件等同于rowNumber>1
                        if (paramsNameNumber > provideNumber) {
                            /** 循环每一行,p表示行 */
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";// 表示每一次截取的字符串
                                var start = p * provideNumber;// 开始截取的位置
                                var end = start + provideNumber;// 结束截取的位置
                                // 此处特殊处理最后一行的索引值
                                if (p == rowNumber - 1) {
                                    // 最后一次不换行
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    // 每一次拼接字符串并换行
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;// 最终拼成的字符串

                            }

                        } else {
                            // 将旧标签的值赋给新标签
                            newParamsName = params;
                        }
                        //将最终的字符串返回

                        return newParamsName
                    }
                },
            data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直机关工委','省委教育工委','省国资委党委','胜利油田党委','齐鲁石化党委','黄三角党工委']
        },
        {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            offset: 20
        }],
        yAxis: [
        {

            type: 'value',
            min: 0,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color:'#fff'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
          {

            type: 'value',
            min: 0,
            interval:25,
            max: 100,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color:'#fff'
                },
                formatter:function(value){
                    return value+"%"
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }
    ],
    series: [
     {
            itemStyle: {
                normal: {
                    color: 'gold'
                }
            },
            name:"支部总数",
            type:'line',
            yAxisIndex: 0,
            barWidth:10,
            smooth: true,
            data:[20723, 30547, 13770, 9417, 6379, 20936, 25133, 19377,
                13887, 10038, 8710, 4050, 20822, 15376, 14313, 11757,
                11845, 8172, 3902, 2631, 5195, 678, 133
            ]
     },
      {
            itemStyle: {
                normal: {
                    color: 'grey',
                }
            },
            name:"参与率",
            type:'line',
            yAxisIndex: 1,
            barWidth:10,
            smooth: true,
            data:[93.07, 95.31, 99.72, 85.31, 96.43, 89.28, 89.79, 94.11,
                92.47, 93.78, 94.28, 73.93, 99.77, 99.83, 98.25, 95.55,
                97.67, 83.13, 76.81, 99.81, 52.18, 41.00, 90.23
            ]
        },
     {
            name: '参与支部数',
            type: 'bar',
            barWidth:10,
            barGap:20,
            stack: 'sum',
            smooth: true,
            symbolSize: 5,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(234,166,58, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(234,166,58, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#29abe2'
                }
            },
            data: [19286, 29115, 13732, 8034, 6151, 18691, 22568,
                18235, 12842, 9414, 8212,2994, 20775, 15350, 14063, 11234, 11569, 6793,
                2997, 2626, 2711, 278,120],

        }
    ]
};
joinRate.setOption(joinRate_option);

// 党员成绩分析
var myChart_score = echarts.init(document.getElementById('score'));
var option_gyt_score = {
    title: {
        text: '23个省委直属党(工)委党员成绩对比分析',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        top:'2%',
        x: '20'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}人<br />{a1}: {c1}次<br/>{a2}: {c2}分<br>{a3}: {c3}%',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
     legend: {
        top:'10',
        right:'50',
        data: ['参赛党员数','人均答题次数','平均分/次', '满分率'],
              data: [{
                       name: '参赛党员数',
                       textStyle: { fontWeight: 'bold', color: '#2d9fd7' }
                    },
                    {
                        name: '人均答题次数',
                        textStyle: { fontWeight: 'bold', color: '#b8b51a' }
                    },
                      {
                        name: '平均分/次',
                        textStyle: { fontWeight: 'bold', color: 'grey' }
                    },
                    {
                      name: '满分率',
                      textStyle: { fontWeight: 'bold', color: '#e60000' }
                  }]
    },
    calculable : true,
    grid: {
        top:'15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show:'false',
                lineStyle: {
                    color: '#57617B'
                }
            },
           axisLabel: {
                    interval: 0,
                    fontSize: 12,
                    textStyle:{
                        color:'white'
                    },
                    formatter: function (params) {
                        var newParamsName = "";// 最终拼接成的字符串
                        var paramsNameNumber = params.length;// 实际标签的个数
                        var provideNumber = 1;// 每行能显示的字的个数
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                        /**
                         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                         */
                        // 条件等同于rowNumber>1
                        if (paramsNameNumber > provideNumber) {
                            /** 循环每一行,p表示行 */
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";// 表示每一次截取的字符串
                                var start = p * provideNumber;// 开始截取的位置
                                var end = start + provideNumber;// 结束截取的位置
                                // 此处特殊处理最后一行的索引值
                                if (p == rowNumber - 1) {
                                    // 最后一次不换行
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    // 每一次拼接字符串并换行
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;// 最终拼成的字符串

                            }

                        } else {
                            // 将旧标签的值赋给新标签
                            newParamsName = params;
                        }
                        //将最终的字符串返回

                        return newParamsName
                    }
                },
            data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直机关工委','省委教育工委','省国资委党委','胜利油田党委','齐鲁石化党委','黄三角党工委']
        },
        {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            offset: 20
        }],
    yAxis: [
        {
            type: 'value',
            min: 0,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color:'#fff'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        {

            type: 'value',
            min: 0,
            interval:25,
            max: 100,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color:'#fff'
                },
                formatter:function(value){
                    return value+"%"
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }
    ],
    series: [
        {
            name: '参赛党员数',
            type: 'bar',
            barWidth:10,
            barGap:20,
            stack: 'sum',
            smooth: true,
            // symbol: 'triangle',
            symbolSize: 5,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(234,166,58, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(234,166,58, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#29abe2'
                }
            },
            data: [343922, 509592, 270378, 131093, 106933, 492718, 538150,
                369988, 267583, 147207, 175431, 50765, 497200, 254322, 237929,
                187730, 317968, 77745, 38884, 36620, 28480, 3866, 1230
            ],

        },
        {
            itemStyle: {
                normal: {
                    color: 'gold'
                }
            },
            name:"人均答题次数",
            type:'line',
            yAxisIndex: 1,
            barWidth:10,
            smooth: true,           
            data:[33.5, 29.9, 35.1, 18.3, 38.5, 32.4, 34.5, 32.8,
                22.4, 29.5, 30.2, 13.8, 32.1, 28.0, 30.2, 29.8,
                32.3, 22.1, 14.5, 37.2, 6.8, 5.3, 23.8
            ]
        },
        {
            itemStyle: {
                normal: {
                    color: 'grey'
                }
            },
            name:"平均分/次",
            type:'line',
            yAxisIndex: 1,
            barWidth:10,
            smooth: true,
            data:[94.3, 93.7, 95.5, 91, 95.4, 95.2, 94.8, 95.0,
                90.1, 93, 92.9, 87.4, 94.6, 94.7, 94.0, 92.7,
                93.7, 92.6, 91.3, 95.7, 85.4, 84.1, 92.0
            ]
        },
        {
            itemStyle: {
                normal: {
                    color: '#e60000'
                }
            },
            name:"满分率",
            type:'line',
            yAxisIndex: 1,
            barWidth:10,
            smooth: true,
            data:[59.4, 57.5, 66.3, 51.7, 64.8, 67.0,62.8, 61.8,
                47.3, 56.0, 53.6, 45.0, 61.3, 64.4, 57.2,51.1,
                58.7, 55.7, 50.5, 44.2,50.7, 43.9, 55.1
            ]
        }
    ]
};
myChart_score.setOption(option_gyt_score);

// 线上竞赛党员对比分析-年龄
var compare_age = echarts.init(document.getElementById('compare_age'));
var compare_age_option = {
    color: ['#ebe20c', '#126413', '#1389d6', '#ff4200'],
    title: {
        show: true,
        text: '年龄',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{c}人"
    },
    series: [
        {
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '58%'],
          color: ['#ff5400', '#ff7800', '#ffa200', '#ffde00','#d2ff00','#66ff00','#00ff8a','#00d8ff','#0096ff','#0048ff'],
            label: {
            normal: {
                formatter: '{b}\n{d}%',
                textStyle: {
                    color: '#34c4ff',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                { value: 587500, name: '30岁以下' },
                { value: 996400, name: '31岁~40岁' },
                { value: 1240700, name: '41岁~50岁' },
                { value: 1095100, name: '51岁~60岁' },
                { value: 1166000, name: '61岁以上' },
            ]
        }
    ]
};
compare_age.setOption(compare_age_option);

// 线上竞赛党员对比分析-学历
var compare_edu = echarts.init(document.getElementById('compare_edu'));
var compare_edu_option = {
    
    title: {
        show: true,
        text: '学历',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{c}人"
    },
    series: [
        {
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '58%'],
          color: ['#ebe20c', '#126413', '#1389d6', '#ff4200', '#55d7ff'],
            label: {
            normal: {
                formatter: '{b}\n{d}%',
                textStyle: {
                    color: '#34c4ff',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                { value: 277100, name: '研究生教育' },
                { value: 2166700, name: '本专科教育' },
                { value: 467200, name: '中等职业学校' },
                { value: 750800, name: '普通高中' },
                { value: 1484000, name: '初中及以下' }
            ]
        }
    ]
};
compare_edu.setOption(compare_edu_option);

// 线上竞赛党员对比分析-岗位
var compare_job = echarts.init(document.getElementById('compare_job'));
var compare_job_option = {
    color: ['#ebe20c', '#126413', '#1389d6', '#ff4200'],
    title: {
        show: true,
        text: '岗位',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{c}人"
    },
    series: [
        {
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '58%'],
          color: ['#ff5a88', '#f22800', '#16a2cc', '#ffd77e','#da7f99','#623810','#0d669a','#31d8ff','#00cd25','#00d1cf'],
            label: {
            normal: {
                formatter: '{b}\n{d}%',
                textStyle: {
                    color: '#34c4ff',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                { value: 2221300, name: '在岗职工' },
                { value: 1718600, name: '农牧渔民' },
                { value: 6000, name: '解放军、武警' },
                { value: 61600, name: '学生' },
                { value: 543300, name: '离退休人员' },
                { value: 534600, name: '其他人员' }
            ]
        }
    ]
};
compare_job.setOption(compare_job_option);

var spreadPer = echarts.init(document.getElementById('spreadPer'));
var spreadPer_option = {
  tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'媒介传播的占比分布',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:168, name:'自媒体'},
                {value:14, name:'论坛'},
                {value:371, name:'新闻'}
            ]
        },
        {
            name:'媒介传播的占比分布',
            type:'pie',
            radius: ['50%', '65%'],
            data:[
                {value:335, name:'网络新闻'},
                {value:24, name:'报纸'},
                {value:11, name:'移动App'},
                {value:86, name:'微信'},
                {value:10, name:'博客'},
                {value:72, name:'自媒体'},
                {value:8, name:'论坛'},
                {value:6, name:'贴吧'},
                {value:1, name:'境外新闻'}
            ]
        }
    ]
};
spreadPer.setOption(spreadPer_option);

// 党员用时TOP10
// var time = echarts.init(document.getElementById('time'));
var time_option = {
    color: ['#ebe20c', '#148edf'],
    title: {
        text: '党员答题用时top10',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        top:'3%',
        x: '20'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a}: {c}',
        axisPointer: {
            // type: 'cross',
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    // legend: {
    //     //  selectedMode:false,
    //     top:'10',
    //     right:'50px',
    //     data: ['支部总数','参与支部数','参与率'],
    //           data: [
    //                 {
    //                     name: '参与支部数',
    //                     textStyle: { fontWeight: 'bold', color: '#2d9fd7' }
    //                 },{
    //                    name: '支部总数',
    //                    textStyle: { fontWeight: 'bold', color: '#b8b51a' }
    //                 },
    //                   {
    //                     name: '参与率',
    //                     textStyle: { fontWeight: 'bold', color: 'grey' }
    //                 }]
    // },
     grid: {
        left: '80px'
       /* right: '4%',
        bottom: '3%',
        containLabel: true*/
    },
     xAxis: [
        {
            type: 'category',
            axisLine: {
                show:'false',
                lineStyle: {
                    color: '#57617B'
                }
            },
           axisLabel: {
                    interval: 0,
                    fontSize: 12,
                    textStyle:{
                        color:'white'
                    }
                },
            data:['于*洋','邵*辉', '姚*妍', '任*刚', '莱芜','临沂','德州','聊城','滨州','菏泽','省直机关工委','省委教育工委','省国资委党委','胜利油田党委','齐鲁石化党委','黄三角党工委']
        },
        {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            offset: 20
        }],
        yAxis: [
        {

            type: 'value',
            min: 0,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color:'#fff'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
          {

            type: 'value',
            min: 0,
            interval:25,
            max: 100,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color:'#fff'
                },
                formatter:function(value){
                    return value+"%"
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }
    ],
    series: [
     {
            itemStyle: {
                normal: {
                    color: 'gold'
                }
            },
            name:"支部总数",
            type:'line',
            yAxisIndex: 0,
            barWidth:10,
            smooth: true,
            data:[20723, 30547, 13770, 9417, 6379, 20936, 25133, 19377,
                13887, 10038, 8710, 4050, 20822, 15376, 14313, 11757,
                11845, 8172, 3902, 2631, 5195, 678, 133
            ]
     },
      {
            itemStyle: {
                normal: {
                    color: 'grey',
                }
            },
            name:"参与率",
            type:'line',
            yAxisIndex: 1,
            barWidth:10,
            smooth: true,
            data:[93.07, 95.31, 99.72, 85.31, 96.43, 89.28, 89.79, 94.11,
                92.47, 93.78, 94.28, 73.93, 99.77, 99.83, 98.25, 95.55,
                97.67, 83.13, 76.81, 99.81, 52.18, 41.00, 90.23
            ]
        },
     {
            name: '参与支部数',
            type: 'bar',
            barWidth:10,
            barGap:20,
            stack: 'sum',
            smooth: true,
            symbolSize: 5,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(234,166,58, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(234,166,58, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#29abe2'
                }
            },
            data: [19286, 29115, 13732, 8034, 6151, 18691, 22568,
                18235, 12842, 9414, 8212,2994, 20775, 15350, 14063, 11234, 11569, 6793,
                2997, 2626, 2711, 278,120],

        }
    ]
};
// time.setOption(time_option);

$("#scrollDiv").Scroll({line:1,speed:500,timer:3500,up:"but_up",down:"but_down"});
$("#scrollDiv1").Scroll({line:1,speed:500,timer:4000,up:"but_up",down:"but_down"});
$("#scrollDiv2").Scroll({line:1,speed:500,timer:3800,up:"but_up",down:"but_down"});
$("#scrollDiv3").Scroll({line:1,speed:500,timer:5500,up:"but_up",down:"but_down"});
$("#scrollDiv4").Scroll({line:1,speed:500,timer:4000,up:"but_up",down:"but_down"});
$("#scrollDiv5").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});

$('.w_tipbar1 li').mouseover(function(){
    $(this).addClass('active_bar').siblings().removeClass('active_bar')
    var sum=$(this).index();
    $('.scrollbox .wangchaos').eq(sum).stop(true,true).show().siblings('.wangchaos').hide()
})