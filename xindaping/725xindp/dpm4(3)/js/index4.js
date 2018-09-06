// 党员年龄分布
var myChart_age = echarts.init(document.getElementById('gyt_age'));
var option_gyt_age = {
    color: ['#ebe20c', '#126413', '#1389d6', '#ff4200', '#55d7ff'],
    title: {
        show: true,
        text: '年龄',
        x: 'center',
        y: '85',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br/>{b}:{c}人"
    },
    series: [
        {
            name: '人员类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            center:['50%','50%'],
            radius: ['47%', '65%'],
            color: [ '#1D5F84',  '#1F3A8D', '#0B3B77'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,
            },

            data: [{
                value: 100,
                name: ''
            },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                }
            ]
        },
        {
            name: '年龄',
            type: 'pie',
            center:['50%','50%'],
            radius: ['55%', '70%'],
            color: ['#967adc', '#8cc152', '#37bc9b', '#f6bb42', '#4a89dc', '#d770ad'],
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b}人数:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#12EABE',
                            align: 'left',
                            padding: 2
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        },
                        c: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        }
                    }
                }
            },
            data: [
                {value: 762, name: '20岁以下'},
                {value: 586705, name: '21岁~30岁'},
                {value: 996390, name: '31岁~40岁'},
                {value: 1240669, name: '41岁~50岁'},
                {value: 1095069, name: '51岁~60岁'},
                {value: 1166139, name: '60岁以上'}
            ]
        }
    ]
};
myChart_age.setOption(option_gyt_age);

// 党员性别分布
var myChart_sex = echarts.init(document.getElementById('gyt_sex'));
var option_gyt_sex = {
    color: ['#8cc152', '#37bc9b'],
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
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:{c}人"
    },
    series: [
        {
            name: '人员类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['38%', '45%'],
            color: ['#006495', '#1D5F84', '#255C6D', '#3C5C67', '#40486C', '#3F3C73', '#403D84', '#1F3A8D', '#0B3B77'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,


            },

            data: [{
                value: 100,
                name: ''
            },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                }
            ]
        },
        {
            name: '性别',
            type: 'pie',
            radius: ['43%', '55%'],
            color: ['#8cc152', '#4a89dc'],
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '性别:{b}\n{hr|}\n人数:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#12EABE',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 4
                        }
                    }
                }
            },
            data: [
                {
                    value: 3850774,
                    name: '男'
                },
                {
                    value: 1234960,
                    name: '女'
                }
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
        y: '85',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:{c}人"
    },
    series: [
        {
            name: '人员类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            center:['50%','50%'],
            radius: ['47%', '65%'],
            color: ['#006495', '#1D5F84',  '#403D84', '#1F3A8D', '#0B3B77'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,


            },

            data: [{
                value: 100,
                name: ''
            },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                }
            ]
        },
        {
            name: '学历',
            type: 'pie',
            center:['50%','50%'],
            radius: ['55%', '70%'],
            color: ['#4a89dc', '#967adc', '#8cc152', '#d770ad', '#f6bb42'],
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 3,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b}人数:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#12EABE',
                            align: 'left',
                            padding: 2
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        },
                        c: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        }
                    }
                }
            },
            data: [
                {value: 217141, name: '研究生教育'},
                {value: 2166660, name: '本专科教育'},
                {value: 467196, name: '中等职业学校'},
                {value: 750757, name: '普通高中'},
                {value: 1483980, name: '初中及以下'}
            ]
        }
    ]
};
myChart_edu.setOption(option_gyt_edu);

// 党员岗位分布
var myChart_job = echarts.init(document.getElementById('gyt_job'));
var option_gyt_job = {
    color: ['#4a89dc', '#967adc', '#8cc152', '#d770ad', '#f6bb42'],
    title: {
        show: true,
        text: '岗位',
        x: 'center',
        y: '85',
        textStyle: {
            color: '#34c4ff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:{c}人"
    },
    series: [
        {
            name: '人员类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            center:['50%','50%'],
            radius: ['47%', '65%'],
            color: ['#006495',  '#3C5C67', '#40486C', '#3F3C73', '#403D84', '#1F3A8D', '#0B3B77'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,


            },

            data: [{
                value: 100,
                name: ''
            },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                }
            ]
        },
        {
            name: '岗位',
            type: 'pie',
            center:['50%','50%'],
            radius: ['55%', '70%'],
            color: ['#4a89dc', '#967adc', '#8cc152','#37bc9b', '#d770ad', '#f6bb42'],
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 5,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b}人数:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#12EABE',
                            align: 'left',
                            padding: 2
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        },
                        c: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        }
                    }
                }
            },
            data: [
                {value: 2221303, name: '在岗职工'},
                {value: 61611, name: '学生'},
                {value: 1718628, name: '农牧渔民'},
                {value: 6264, name: '解放军、武警'},
                {value: 543280, name: '离退休人员'},
                {value: 534648, name: '其他人员'}

            ]
        }
    ]
};
myChart_job.setOption(option_gyt_job);

// 23个党工委参与情况
var joinRate = echarts.init(document.getElementById('joinRate'));
var joinRate_option = {
    color: ['#a0d468', '#4fc1e9'],
    title: {
        text: '党支部参与情况',
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        },
        top: '3%',
        x: '20'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}<br />{a2}: {c2}<br/>{a1}: {c1}%',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        top: '30',
        right: '90px',
        data: [
             {
                name: '党支部总数',
                textStyle: {fontWeight: 'bold', color: 'rgba(255,255,255,.7)'}
            },
            {
                name: '党支部参与数',
                textStyle: {fontWeight: 'bold', color: 'rgba(255,255,255,.7)'}
            },
            {
                name: '参与率',
                textStyle: {fontWeight: 'bold', color: 'rgba(255,255,255,0.7)'}
            }]
    },
    grid: {
        left: '80px'
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: 'false',
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 12,
                textStyle: {
                    color: 'rgba(255,255,255,.8)'
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
            data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直机关工委', '省委教育工委', '省国资委党委', '胜利油田党委', '齐鲁石化党委', '黄三角党工委']
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
            max:40000,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)'
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
            interval: 25,
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
                    color: 'rgba(255,255,255,0.7)'
                },
                formatter: function (value) {
                    return value + "%"
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
            name: "党支部总数",
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '23%',
            barGap: 1,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#4a89dc' // 0% 处的颜色'#a0d468', '#4fc1e9'
                        }, {
                            offset: 1,
                            color: '#4a89dc' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
            smooth: true,
            data: [20723, 30547, 13770, 9417, 6379, 20936, 25133, 19377,
                13887, 10038, 8710, 4050, 20822, 15376, 14313, 11757,
                11845, 8172, 3902, 2631, 5195, 678, 133
            ]
        },
        {
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: 'rgb(55,188,155)',
                    borderColor: 'rgba(55,188,155,0.27)',
                    borderWidth: 8
                }
            },
            name: "参与率",
            type: 'line',
            yAxisIndex: 1,
            barWidth: 10,
            data: [93.07, 95.31, 99.72, 85.31, 96.43, 89.28, 89.79, 94.11,
                92.47, 93.78, 94.28, 73.93, 99.77, 99.83, 98.25, 95.55,
                97.67, 83.13, 76.81, 99.81, 52.18, 41.00, 90.23
            ]
        },
        {
            name: '党支部参与数',
            type: 'bar',
            barWidth: '23%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barGap: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#967adc'
                        },
                            {
                                offset: 1,
                                color: '#967adc'
                            }
                        ]
                    )
                }
            },
            zlevel: 11,
            data: [19286, 29115, 13732, 8034, 6151, 18691, 22568,
                18235, 12842, 9414, 8212, 2994, 20775, 15350, 14063, 11234, 11569, 6793,
                2997, 2626, 2711, 278, 120],

        },
       /* {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100,100,100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: -9
        },*/
    ]
};
joinRate.setOption(joinRate_option);

// 党员成绩分析 Jmx0Oz94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPyZndDsNCiZsdDtzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMTA5cHgiIHZpZXdCb3g9IjAgMCAxNyAxMDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayImZ3Q7DQogICAgJmx0OyEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0mZ3Q7DQogICAgJmx0O3RpdGxlJmd0OzImbHQ7L3RpdGxlJmd0Ow0KICAgICZsdDtkZXNjJmd0O0NyZWF0ZWQgd2l0aCBTa2V0Y2guJmx0Oy9kZXNjJmd0Ow0KICAgICZsdDtkZWZzJmd0Ow0KICAgICAgICAmbHQ7bGluZWFyR3JhZGllbnQgeDE9IjI1LjcwODEzMTglIiB5MT0iMzEuMTc4Njk2NyUiIHgyPSI4Ny4xMDI2NDY0JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiJmd0Ow0KICAgICAgICAgICAgJmx0O3N0b3Agc3RvcC1jb2xvcj0iIzQ0NUI3QyIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIiZndDsmbHQ7L3N0b3AmZ3Q7DQogICAgICAgICAgICAmbHQ7c3RvcCBzdG9wLWNvbG9yPSIjNDQ1QjdDIiBvZmZzZXQ9IjEwMCUiJmd0OyZsdDsvc3RvcCZndDsNCiAgICAgICAgJmx0Oy9saW5lYXJHcmFkaWVudCZndDsNCiAgICAmbHQ7L2RlZnMmZ3Q7DQogICAgJmx0O2cgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCImZ3Q7DQogICAgICAgICZsdDtnIGlkPSLkuqTpgJrov5DooYznu5/orqHmlLkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTUuMDAwMDAwLCAtMTg4LjAwMDAwMCkiJmd0Ow0KICAgICAgICAgICAgJmx0O2cgaWQ9IjIuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTcuMDAwMDAwLCA1Ni4wMDAwMDApIiZndDsNCiAgICAgICAgICAgICAgICAmbHQ7ZyBpZD0iMS7lnLDpnaLkuqTpgJrov5DokKXnj63mrKHliIbmnpAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCA0NC4wMDAwMDApIiZndDsNCiAgICAgICAgICAgICAgICAgICAgJmx0O2cgaWQ9Ikdyb3VwLTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4wMDAwMDAsIDg1LjAwMDAwMCkiJmd0Ow0KICAgICAgICAgICAgICAgICAgICAgICAgJmx0O2cgaWQ9IjIiJmd0Ow0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICZsdDtwb2x5Z29uIGlkPSJSZWN0YW5nbGUtMyIgZmlsbD0iIzA3MUUzQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuNDA3NDA3LCA1OS4yMDM3MDQpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTExLjQwNzQwNywgLTU5LjIwMzcwNCkgIiBwb2ludHM9IjguMTQ4MTQ4MTUgOS43Nzc3Nzc3OCAxNC42NjY2NjY3IDYuNTE4NTE4NTIgMTQuNjY2NjY2NyAxMDguNjI5NjMgOC4xNDgxNDgxNSAxMTEuODg4ODg5IiZndDsmbHQ7L3BvbHlnb24mZ3Q7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0O3BvbHlnb24gaWQ9IlJlY3RhbmdsZS02IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC45NTI2OTgsIDEwNi43MjU4ODEpIHJvdGF0ZSgyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuOTUyNjk4LCAtMTA2LjcyNTg4MSkgIiBwb2ludHM9IjYuMDkwMTk4NDEgMTAzLjg2MTU1IDEzLjI0NzYzNTcgMTAzLjczMDI3NSAyMS4wMDgxOTg4IDEwNC4yMTY2MzkgMTYuNTAxMjcxMSAxMDkuNzIxNDg3IDAuODk3MTk4MTA3IDEwOS4yOTU2MzciJmd0OyZsdDsvcG9seWdvbiZndDsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7cG9seWdvbiBpZD0iUmVjdGFuZ2xlLTMiIGZpbGw9InJnYigyLDEzMSwyNTUpIiBwb2ludHM9IjE0LjY2NjY2NjcgOS43Nzc3Nzc3OCAyMS4xODUxODUyIDYuNTE4NTE4NTIgMjEuMTg1MTg1MiAxMDguNjI5NjMgMTQuNjY2NjY2NyAxMTEuODg4ODg5IiZndDsmbHQ7L3BvbHlnb24mZ3Q7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0O3BvbHlnb24gaWQ9IlJlY3RhbmdsZS00IiBmaWxsPSIjNDQ1QjdDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC42NzUwMTUsIDYuNTEwMjY5KSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjY3NTAxNSwgLTYuNTEwMjY5KSAiIHBvaW50cz0iMTIuODk5NTgwMiA0LjAwMjM5NDM5IDE5LjI3ODEwMDggMS45MDcxODMzNCAxNi45NjQ3MDE3IDguNzk5OTU1MDYgMTAuMDcxOTMgMTEuMTEzMzU0MSImZ3Q7Jmx0Oy9wb2x5Z29uJmd0Ow0KICAgICAgICAgICAgICAgICAgICAgICAgJmx0Oy9nJmd0Ow0KICAgICAgICAgICAgICAgICAgICAmbHQ7L2cmZ3Q7DQogICAgICAgICAgICAgICAgJmx0Oy9nJmd0Ow0KICAgICAgICAgICAgJmx0Oy9nJmd0Ow0KICAgICAgICAmbHQ7L2cmZ3Q7DQogICAgJmx0Oy9nJmd0Ow0KJmx0Oy9zdmcmZ3Q7
var myChart_score = echarts.init(document.getElementById('score'));
var imgDatUrl = 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIxMDlweCIgdmlld0JveD0iMCAwIDE3IDEwOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDYuMiAoNDQ0OTYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPjI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjI1LjcwODEzMTglIiB5MT0iMzEuMTc4Njk2NyUiIHgyPSI4Ny4xMDI2NDY0JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDQ1QjdDIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ0NUI3QyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLkuqTpgJrov5DooYznu5/orqHmlLkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTUuMDAwMDAwLCAtMTg4LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iMi4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1Ny4wMDAwMDAsIDU2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IjEu5Zyw6Z2i5Lqk6YCa6L+Q6JCl54+t5qyh5YiG5p6QIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgNDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4wMDAwMDAsIDg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLTMiIGZpbGw9IiMwNzFFM0IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjQwNzQwNywgNTkuMjAzNzA0KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMS40MDc0MDcsIC01OS4yMDM3MDQpICIgcG9pbnRzPSI4LjE0ODE0ODE1IDkuNzc3Nzc3NzggMTQuNjY2NjY2NyA2LjUxODUxODUyIDE0LjY2NjY2NjcgMTA4LjYyOTYzIDguMTQ4MTQ4MTUgMTExLjg4ODg4OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS02IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC45NTI2OTgsIDEwNi43MjU4ODEpIHJvdGF0ZSgyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuOTUyNjk4LCAtMTA2LjcyNTg4MSkgIiBwb2ludHM9IjYuMDkwMTk4NDEgMTAzLjg2MTU1IDEzLjI0NzYzNTcgMTAzLjczMDI3NSAyMS4wMDgxOTg4IDEwNC4yMTY2MzkgMTYuNTAxMjcxMSAxMDkuNzIxNDg3IDAuODk3MTk4MTA3IDEwOS4yOTU2MzciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtMyIgZmlsbD0iIzBEQ0U4NSIgcG9pbnRzPSIxNC42NjY2NjY3IDkuNzc3Nzc3NzggMjEuMTg1MTg1MiA2LjUxODUxODUyIDIxLjE4NTE4NTIgMTA4LjYyOTYzIDE0LjY2NjY2NjcgMTExLjg4ODg4OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS00IiBmaWxsPSIjNDQ1QjdDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC42NzUwMTUsIDYuNTEwMjY5KSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjY3NTAxNSwgLTYuNTEwMjY5KSAiIHBvaW50cz0iMTIuODk5NTgwMiA0LjAwMjM5NDM5IDE5LjI3ODEwMDggMS45MDcxODMzNCAxNi45NjQ3MDE3IDguNzk5OTU1MDYgMTAuMDcxOTMgMTEuMTEzMzU0MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
 // var imgDatUrl1 = 'image://data:image/svg+xml;base64,Jmx0Oz94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPyZndDsNCiZsdDtzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMTA5cHgiIHZpZXdCb3g9IjAgMCAxNyAxMDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayImZ3Q7DQogICAgJmx0OyEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0mZ3Q7DQogICAgJmx0O3RpdGxlJmd0OzImbHQ7L3RpdGxlJmd0Ow0KICAgICZsdDtkZXNjJmd0O0NyZWF0ZWQgd2l0aCBTa2V0Y2guJmx0Oy9kZXNjJmd0Ow0KICAgICZsdDtkZWZzJmd0Ow0KICAgICAgICAmbHQ7bGluZWFyR3JhZGllbnQgeDE9IjI1LjcwODEzMTglIiB5MT0iMzEuMTc4Njk2NyUiIHgyPSI4Ny4xMDI2NDY0JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiJmd0Ow0KICAgICAgICAgICAgJmx0O3N0b3Agc3RvcC1jb2xvcj0iIzQ0NUI3QyIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIiZndDsmbHQ7L3N0b3AmZ3Q7DQogICAgICAgICAgICAmbHQ7c3RvcCBzdG9wLWNvbG9yPSIjNDQ1QjdDIiBvZmZzZXQ9IjEwMCUiJmd0OyZsdDsvc3RvcCZndDsNCiAgICAgICAgJmx0Oy9saW5lYXJHcmFkaWVudCZndDsNCiAgICAmbHQ7L2RlZnMmZ3Q7DQogICAgJmx0O2cgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCImZ3Q7DQogICAgICAgICZsdDtnIGlkPSLkuqTpgJrov5DooYznu5/orqHmlLkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTUuMDAwMDAwLCAtMTg4LjAwMDAwMCkiJmd0Ow0KICAgICAgICAgICAgJmx0O2cgaWQ9IjIuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTcuMDAwMDAwLCA1Ni4wMDAwMDApIiZndDsNCiAgICAgICAgICAgICAgICAmbHQ7ZyBpZD0iMS7lnLDpnaLkuqTpgJrov5DokKXnj63mrKHliIbmnpAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCA0NC4wMDAwMDApIiZndDsNCiAgICAgICAgICAgICAgICAgICAgJmx0O2cgaWQ9Ikdyb3VwLTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4wMDAwMDAsIDg1LjAwMDAwMCkiJmd0Ow0KICAgICAgICAgICAgICAgICAgICAgICAgJmx0O2cgaWQ9IjIiJmd0Ow0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICZsdDtwb2x5Z29uIGlkPSJSZWN0YW5nbGUtMyIgZmlsbD0iIzA3MUUzQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuNDA3NDA3LCA1OS4yMDM3MDQpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTExLjQwNzQwNywgLTU5LjIwMzcwNCkgIiBwb2ludHM9IjguMTQ4MTQ4MTUgOS43Nzc3Nzc3OCAxNC42NjY2NjY3IDYuNTE4NTE4NTIgMTQuNjY2NjY2NyAxMDguNjI5NjMgOC4xNDgxNDgxNSAxMTEuODg4ODg5IiZndDsmbHQ7L3BvbHlnb24mZ3Q7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0O3BvbHlnb24gaWQ9IlJlY3RhbmdsZS02IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC45NTI2OTgsIDEwNi43MjU4ODEpIHJvdGF0ZSgyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuOTUyNjk4LCAtMTA2LjcyNTg4MSkgIiBwb2ludHM9IjYuMDkwMTk4NDEgMTAzLjg2MTU1IDEzLjI0NzYzNTcgMTAzLjczMDI3NSAyMS4wMDgxOTg4IDEwNC4yMTY2MzkgMTYuNTAxMjcxMSAxMDkuNzIxNDg3IDAuODk3MTk4MTA3IDEwOS4yOTU2MzciJmd0OyZsdDsvcG9seWdvbiZndDsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7cG9seWdvbiBpZD0iUmVjdGFuZ2xlLTMiIGZpbGw9InJnYigyLDEzMSwyNTUpIiBwb2ludHM9IjE0LjY2NjY2NjcgOS43Nzc3Nzc3OCAyMS4xODUxODUyIDYuNTE4NTE4NTIgMjEuMTg1MTg1MiAxMDguNjI5NjMgMTQuNjY2NjY2NyAxMTEuODg4ODg5IiZndDsmbHQ7L3BvbHlnb24mZ3Q7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0O3BvbHlnb24gaWQ9IlJlY3RhbmdsZS00IiBmaWxsPSIjNDQ1QjdDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC42NzUwMTUsIDYuNTEwMjY5KSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjY3NTAxNSwgLTYuNTEwMjY5KSAiIHBvaW50cz0iMTIuODk5NTgwMiA0LjAwMjM5NDM5IDE5LjI3ODEwMDggMS45MDcxODMzNCAxNi45NjQ3MDE3IDguNzk5OTU1MDYgMTAuMDcxOTMgMTEuMTEzMzU0MSImZ3Q7Jmx0Oy9wb2x5Z29uJmd0Ow0KICAgICAgICAgICAgICAgICAgICAgICAgJmx0Oy9nJmd0Ow0KICAgICAgICAgICAgICAgICAgICAmbHQ7L2cmZ3Q7DQogICAgICAgICAgICAgICAgJmx0Oy9nJmd0Ow0KICAgICAgICAgICAgJmx0Oy9nJmd0Ow0KICAgICAgICAmbHQ7L2cmZ3Q7DQogICAgJmx0Oy9nJmd0Ow0KJmx0Oy9zdmcmZ3Q7';
var option_gyt_score = {
    title: {
        text: '党员参与情况',
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        },
        top: '3%',
        x: '20'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}人<br />{a1}: {c1}%',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
     legend: {
            top: '25',
            right: '80',
            data: [
                {
                    name: '党员参与数',
                    textStyle: {fontWeight: 'bold', color: 'rgba(255,255,255,.7)'}
                },
                {
                    name: '满分率',
                    textStyle: {fontWeight: 'bold', color:'rgba(255,255,255,.7)'}
                }]
     },
    calculable: true,
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom:'2%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: 'false',
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 12,
                textStyle: {
                    color: 'rgba(255,255,255,.8)'
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
            data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直机关工委', '省委教育工委', '省国资委党委', '胜利油田党委', '齐鲁石化党委', '黄三角党工委']
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
            max:800000,
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
                    color: 'rgba(255,255,255,0.7)'
                },
                formatter: function (value) {
                    return value ;
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
            interval: 25,
            max: 100,
            show:true,
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
                    color: 'rgba(255,255,255,0.7)'
                },
                formatter: function (value) {
                    return value+'%';
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
            name: '党员参与数',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '10',
            barGap: 1,
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
                        color: 'rgba(234,166,58, 1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10,
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(140,193,82,.6)'
                    }, {
                        offset: 1,
                        color: 'rgba(140,193,82,.8)'
                    }]),
                    opacity: 1,
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
            data: [343922, 509592, 270378, 131093, 106933, 492718, 538150,
                369988, 267583, 147207, 175431, 50765, 497200, 254322, 237929,
                187730, 317968, 77745, 38884, 36620, 28480, 3866, 1230
            ],

        },
        {
            symbol: 'emptyCircle',
            /*smooth:true,*/
            symbolSize:5,
            itemStyle: {
                normal: {
                    color: 'rgb(140,193,82)',
                    borderColor: 'rgba(22,168,149,0.27)',
                    borderWidth: 8
                }
            },
            name: "满分率",
            type: 'line',
            zlevel: -1,
            yAxisIndex: 1,
            barWidth: 10,
            data: [59.4, 57.5, 66.3, 51.7, 64.8, 67.0, 62.8, 61.8,
                47.3, 56.0, 53.6, 45.0, 61.3, 64.4, 57.2, 51.1,
                58.7, 55.7, 50.5, 44.2, 50.7, 43.9, 55.1
            ]
        }
    ]
};
myChart_score.setOption(option_gyt_score);
//var myChart_pjf = echarts.init(document.getElementById('score2'));
var option_gyt_pjf ={
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}次<br />{a1}: {c1}分',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        top: '10',
        right: '50',
        data: [
            {
                name: '人均答题次数',
                textStyle: {fontWeight: 'bold', color: 'rgba(255,255,255,.7)'}
            },
            {
                name: '平均分/次',
                textStyle: {fontWeight: 'bold', color: 'rgba(255,255,255,.7)'}
            }]
    },
    calculable: true,
    grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: 'false',
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 12,
                textStyle: {
                    color: 'rgba(255,255,255,.8)'
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
            data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直机关工委', '省委教育工委', '省国资委党委', '胜利油田党委', '齐鲁石化党委', '黄三角党工委']
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
            max:40,
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
                    color: 'rgba(255,255,255,0.7)'
                },
                formatter: function (value) {
                    return value+"次" ;
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
            interval: 25,
            max: 100,
            show:true,
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
                    color: 'rgba(255,255,255,0.7)'
                },
                formatter: function (value) {
                    return value+'分';
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
            name: "人均答题次数",
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '10',
            barGap: 1,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#229aff'
                        },
                            {
                                offset: 1,
                                color: '#13bfe8'
                            }
                        ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(59,175,218,.6)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(59,175,218,.8)'
                            }
                        ]
                    ),
                    opacity: 1,
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
            data: [33.5, 29.9, 35.1, 18.3, 38.5, 32.4, 34.5, 32.8,
                22.4, 29.5, 30.2, 13.8, 32.1, 28.0, 30.2, 29.8,
                32.3, 22.1, 14.5, 37.2, 6.8, 5.3, 23.8
            ]
        },
        {
            symbol: 'emptyCircle',
            symbolSize:5,
            itemStyle: {
                normal: {
                    color: 'rgb(59,175,218)',
                    borderColor: 'rgba(2,126,255,0.27)',
                    borderWidth: 12
                }
            },
            name: "平均分/次",
            type: 'line',
            yAxisIndex: 1,
            barWidth: 10,
            zlevel: -1,
            // smooth: true,
            data: [94.3, 93.7, 95.5, 91, 95.4, 95.2, 94.8, 95.0,
                90.1, 93, 92.9, 87.4, 94.6, 94.7, 94.0, 92.7,
                93.7, 92.6, 91.3, 95.7, 85.4, 84.1, 92.0
            ]
        }
    ]
};
//myChart_pjf.setOption(option_gyt_pjf);

var tableList = echarts.init(document.getElementById('tableList'));
var options_tableList = {
    color: ["#967adc"],
    title : {
        text: '社交媒体Top5',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            fontFamily: '黑体'
        },
        top: '2%',
        x: '20'
    },
    calculable : true,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b} <br> 数量: {c}"
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        color:"rgba(255,255,255,0.7)",
        axisLabel: {
            interval: 0,
            fontSize: 12,
            textStyle: {
                color: 'white'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ["微信", "今日头条号", "百家号", "新浪博客", "搜狐自媒体"].reverse(),
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 0,
            margin: 10,
            inside: false,
            textStyle: {
                color: 'rgba(255,255,255,0.7)',
                fontWeight: '50'
            }
        }
    },
    series: [{
        type: 'bar',
        barWidth:15,
        label: {
            normal: {
                show: true,
                formatter: function(v) {
                    var val = v.data;
                    if (val == 0) {
                        return '';
                    }
                    return val;
                },
                color: 'rgba(255,255,255,0.7)'
            }
        },
        itemStyle:{
            normal:{
                barBorderRadius: 30
            }
        },
        data: [51,13,13,9,7].reverse()
    }]
};
var data_tablelist = {
    'social': {
        name: ["搜狐自媒体", "新浪博客", "百家号", "今日头条号", "微信"],
        num: [7, 9, 13, 13, 51]
    },
    'others': {
        name: ["东方圣城网", "华夏经纬网", "中国文明网", "中国高校之窗", "莲山课件"],
        num: [5, 5, 7, 7, 9]
    },
    'difang': {
        name: ["鲁网",  "临沂新闻网","中国煤炭新闻网","齐鲁网", "大众网"],
        num: [4, 4, 5, 8, 16]
    },
    'shangye': {
        name: ["新浪新闻", "凤凰网", "网易", "搜狐", "百度文库"],
        num: [3, 3, 4, 12, 25]
    },
    'zhengfu': {
        name: ["中国威海", "山东淄博政府网", "日照市东港区政府", "临沂市教育局", "济南市政府"],
        num: [2, 2, 2, 2, 4]
    },
    'zhongyang': {
        name: ["中国共产党新闻网", "中国网","党建网","人民网", "新华网" ],
        num: [2, 2, 2, 4, 9]
    },
    'jingwai': {
        name: ["商业周刊中文版"],
        num: [1]
    },

};
tableList.setOption(options_tableList);

//答题用时

var makeTime = echarts.init(document.getElementById('makeTime'));
var makeTime_option = {
    color: ['#a0d468', '#4fc1e9'],
    title: {
        text: '每期前10名平均用时情况',
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        },
        top: '3%',
        x: '20'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c}秒',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '80px'
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: 'false',
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 12,
                textStyle: {
                    color: 'rgba(255,255,255,.8)'
                }
            },
            data: [ '2017年12月', '2018年1月', '2018年2月', '2018年3月', '2018年4月', '2018年5月']
        },
        {
            axisPointer: {
                show: false
            },
            axisLine: {
                show:false,
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
            min: 15,
            axisTick: {
                show: false
            },
            max:30,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)'
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
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: 'rgb(74,137,220)',
                    borderColor: 'rgba(74,137,220,0.27)',
                    borderWidth: 8
                }
            },
            name: "平均用时",
            type: 'line',
            yAxisIndex: 0,
            barWidth: 10,
            data: [26.81, 21.19, 20.21, 22.44, 23.00, 26.52],
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(74,137,220,.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(74,137,220,.3)'
                    }], false)
                }
            }

        }
    ]
};
makeTime.setOption(makeTime_option);
//中国地图
var myChart = echarts.init(document.getElementById('chinaMap'));
var uploadedDataURL = "./js/data-china.json";
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('zhongguo', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        "内蒙古":[117.5977,44.3408],
        "黑龙江":[128.1445,48.5156],
        "新疆":[84.9023,41.748],
        "西藏":[88.7695,31.6846],
        "青海":[96.2402,35.4199],
        "四川":[102.9199,30.1904],
        "甘肃":[95.7129,40.166],
        "云南":[101.8652,25.1807],
        "广西":[108.2813,23.6426],
        "湖南":[111.5332,27.3779],
        "陕西":[109.5996,35.6396],
        "广东":[113.4668,22.8076],
        "吉林":[126.4746,43.5938],
        "河北":[115.4004,37.9688],
        "湖北":[112.2363,31.1572],
        "贵州":[106.6113,26.9385],
        "山东":[118.7402,36.4307],
        "江西":[116.0156,27.29],
        "河南":[113.4668,33.8818],
        "辽宁":[122.3438,41.0889],
        "山西":[112.4121,37.6611],
        "安徽":[117.2461,32.0361],
        "福建": [118.3008,25.9277],
        "浙江": [120.498,29.0918],
        "江苏": [120.0586,32.915],
        "重庆": [107.7539,30.1904],
        "宁夏": [105.9961,37.3096],
        "海南": [109.9512,19.2041],
        "台湾": [121.0254,23.5986],
        "北京": [116.4551,40.2539],
        "天津": [117.4219,39.4189],
        "上海": [121.4648,31.2891],
        "香港": [114.2578,22.3242],
        "澳门": [113.5547,22.1484]
    };
    var data = [  {name: '北京', value: '122'}, {name: '天津', value: '0'},
        {name: '上海', value: '4'}, {name: '重庆', value:'8' },
        {name: '河北', value: '0'}, {name: '河南', value: '4'},
        {name: '云南', value: '0'}, {name: '辽宁', value: '6'},
        {name: '黑龙江', value: '0'}, {name: '湖南', value: '7'},
        {name: '安徽', value: '14'}, {name: '山东', value: '228', selected: true},
        {name: '新疆', value: '0'}, {name: '江苏', value: '7'},
        {name: '浙江', value: '7'}, {name: '江西', value: '4'},
        {name: '湖北', value: '4'}, {name: '广西', value: '4'},
        {name: '甘肃', value: '0'}, {name: '山西', value: '0'},
        {name: '内蒙古', value: '0'}, {name: '陕西', value: '0'},
        {name: '吉林', value: '0'}, {name: '福建', value: '8'},
        {name: '贵州', value: '0'}, {name: '广东', value: '10'},
        {name: '青海', value: '4'}, {name: '西藏', value: '0'},
        {name: '四川', value: '6'}, {name: '宁夏', value: '0'},
        {name: '海南', value: '8'}, {name: '台湾', value: '0'},
        {name: '香港', value: '0'}, {name: '澳门', value: '0'}
    ];
    var max = 350,
        min = 0; // todo
    var maxSize4Pin = 100,
        minSize4Pin = 30;
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    option = {
        title: {
            text: '媒体地域分布',
            x: '30',
            top:'30',
            textStyle: {
                color: 'rgba(255,255,255,0.7)',
                fontSize:16
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    return params.name + ' : ' + params.value;
                } else {
                    return params.name + ' : ' + params.value[2];
                }
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['sell_area'],
            textStyle: {
                color: 'rgba(255,255,255,0.7)'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        geo: {
            show: true,
            map: 'zhongguo',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series: [
            {
            name: 'credit_pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10000;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9'
                }
            }
        },
            {
                type: 'map',
                map: 'zhongguo',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: 'rgba(255,255,255,0.7)'
                        }
                    }
                },
                roam: true,

                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: function(val) {
                    var a = (maxSize4Pin - minSize4Pin) / (max - min);
                    var b = minSize4Pin - a * min;
                    b = maxSize4Pin - a * max;
                    return a * val[2] + b;
                },
                label: {
                    normal: {
                        formatter: function(params) {
                            if (typeof(params.value)[2] == undefined) {
                                return params.value;
                            }else if(params.value[2]==0){
                                return '';
                            }
                            else {
                                return params.value[2];
                            }
                        },
                        show: true,
                        textStyle: {
                            color: 'rgba(255,255,255,1)',
                            fontSize: 9,
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color:function(params){
                            if (params.name=="山东"){
                                console.log(params);
                                return "#ff0000"
                            }  else if (params.value[2]==0) {
                                return "rgba(0,70,127,0)"
                            }else{
                                return "#54ac21";
                            }
                        }
                        /*color: '#CDBA96', //标志颜色*/
                    }
                },
                zlevel: 6,
                data: convertData(data),
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function(val) {
                    return val[2] / 5000;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },

        ]
    };
    myChart.setOption(option);
});
// 中国地图点击山东弹窗
/*myChart.on('click', function(params){
    if(params.name == '山东') {
        layer.open({
            type: 1
            ,title: false //不显示标题栏
            ,closeBtn: false
            ,area: ['100%', '100%']
            ,shade: 0
            ,closeBtn: 2
            ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
            ,btnAlign: 'c'
            ,moveType: 1 //拖拽模式，0或者1
            ,content: $('.layerchart1')
            ,shade: 0 //不显示遮罩
            ,yes: function(){
                layer.closeAll();
            }
            ,end: function () {
                $('.layerchart1').hide();
            }
        });
    }
});*/
//山东地图
//var sdMap = echarts.init(document.getElementById('sdMap'));
/*var uploadedDataURL = "./js/sdMap.json";
sdMap.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    sdMap.hideLoading();
    var geoCoordMap = {
        '济南市':[117.121225,36.66466],
        '菏泽市':[115.480656,35.23375],
        '济宁市':[116.59,35.38],
        '德州市':[116.39,37.45],
        '聊城市':[115.97,36.45],
        '泰安市':[117.13,36.18],
        '临沂市':[118.35,35.05],
        '淄博市':[118.05,36.78],
        '枣庄市':[117.57,34.86],
        '滨州市':[118.03,37.36],
        '潍坊市':[119.1,36.62],
        '东营市':[118.49,37.46],
        '青岛市':[120.3,36.62],
        '烟台市':[120.9,37.32],
        '威海市':[122.1,37.2],
        '日照市':[119.1,35.62],
        '济宁市':[116.7,35.42],
        '莱芜市':[117.70,36.28],
    };
    var data = [
        {name: '济南市', value: 39},
        {name: '菏泽市', value: 4},
        {name: '德州市', value: 28},
        {name: '聊城市', value: 4},
        {name: '泰安市', value: 17},
        {name: '临沂市', value: 0},
        {name: '淄博市', value: 19},
        {name: '枣庄市', value: 19},
        {name: '滨州市', value: 1},
        {name: '潍坊市', value: 7},
        {name: '东营市', value: 1},
        {name: '青岛市', value: 4},
        {name: '烟台市', value: 8},
        {name: '威海市', value: 16},
        {name: '日照市', value: 3},
        {name: '济宁市', value: 7},
        {name: '莱芜市', value: 1}
    ];
    var max = 480, min = 9; // todo
    var maxSize4Pin = 100, minSize4Pin = 20;
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    sdOption = {
        title: {
            top:20,
            text: '山东省内各市文章分布',
            x: 'center',
            textStyle: {
                color: 'rgba(255,255,255,0.7)'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if(typeof(params.value)[2] == "undefined"){
                    return params.name + ' : ' + params.value+"篇";
                }else{
                    return params.name + ' : ' + params.value[2];
                }
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: {
                color: 'rgba(255,255,255,0.7)'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                //color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        geo: {
            show: true,
            map: 'jiangxi',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
            {
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2];
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F4E925'
                    }
                }
            },
            {
                type: 'map',
                map: 'jiangxi',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: 'rgba(255,255,255,0.7)'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: 'rgba(255,255,255,0.7)FFF',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function (val) {
                    return val[2];
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F4E925',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },

        ]
    };
    sdMap.setOption(sdOption);
});*/
$('#ciyun').on('click', function(){
    layer.open({
            type: 2
            ,title: false //不显示标题栏
            ,area: ['100%', '100%']
            ,closeBtn: 2
            ,id: 'LAY_layuipro1' //设定一个id，防止重复弹出
            ,btnAlign: 'c'
            ,moveType: 1 //拖拽模式，0或者1
            ,content: './sd.html'
            // ,content: $('.layerchart2')
            ,shade: 0 //不显示遮罩
            ,yes: function(){
                layer.closeAll();
            }
        });
})
//词云
// var ciyun = echarts.init(document.getElementById('ciyun'));
// var ciyun_option = {
//     tooltip:{
//         show:true
//     },
//     series : [ {
//         type : 'wordCloud',
//         shape:'smooth',
//         gridSize : 2,
//         sizeRange : [ 12, 30 ],
//         rotationRange : [-45, 45 ],
//         textStyle : {
//             normal : {
//                 color : function() {
//                     return 'rgb('
//                         + [ Math.round(Math.random() * 255),
//                             Math.round(Math.random() * 255),
//                             Math.round(Math.random() * 255) ]
//                             .join(',') + ')';
//                 }
//             },
//             emphasis : {
//                 shadowBlur : 10,
//                 shadowColor : '#333'
//             }
//         },
//         data : [
//             {
//                 name: '学习竞赛',
//                 value: 780,
//             },
//             {
//                 name: '学习竞赛活动',
//                 value: 750
//             },
//             {
//                 name: '党员干部群众',
//                 value: 750
//             },
//             {
//                 name: '知识竞赛',
//                 value: 750
//             }, {
//                 name: '基层党组织',
//                 value: 720
//             }, {
//                 name: '认真组织',
//                 value: 690
//             }, {
//                 name: '灯塔党建',
//                 value: 690
//             }, {
//                 name: '答题活动',
//                 value: 660
//             }, {
//                 name: '组织党员',
//                 value: 660
//             }, {
//                 name: '开展学习',
//                 value: 660
//             },
//             {
//                 name: '主题党日',
//                 value: 660
//             },
//             {
//                 name: '市直机关工委',
//                 value: 630
//             },
//             {
//                 name: '党建工作',
//                 value: 630
//             },
//             {
//                 name: '广大党员干部',
//                 value: 600
//             },
//             {
//                 name: '党员答题',
//                 value: 600
//             },
//             {
//                 name: '党员学习',
//                 value: 600
//             },
//             {
//                 name: '竞赛答题',
//                 value: 600
//             },
//             {
//                 name: '组织开展',
//                 value: 540
//             },
//             {
//                 name: '市委组织部',
//                 value: 540
//             },
//             {
//                 name: '微信群',
//                 value: 510
//             }, {
//                 name: '集体学习',
//                 value: 510
//             }, {
//                 name: '党员同志',
//                 value: 480
//             }, {
//                 name: '党支部书记',
//                 value: 450
//             }, {
//                 name: '党支部党员',
//                 value: 360
//             }]
//     } ]
// };
// ciyun.setOption(ciyun_option);
// ciyun.on('click', function(params) {
//     if (params.name != ""){
//         layer.open({
//             type: 2
//             ,title: false //不显示标题栏
//             ,area: ['100%', '100%']
//             ,closeBtn: 2
//             ,id: 'LAY_layuipro1' //设定一个id，防止重复弹出
//             ,btnAlign: 'c'
//             ,moveType: 1 //拖拽模式，0或者1
//             ,content: './sd.html'
//             // ,content: $('.layerchart2')
//             ,shade: 0 //不显示遮罩
//             ,yes: function(){
//                 layer.closeAll();
//             }
//             ,end: function () {
//                 $('.layerchart2').hide();
//             }
//         });
//     }
// });
//媒体占比与传播趋势
var mtzb = echarts.init(document.getElementById('mtzb'));
var mtzb_option = {
    title: {
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        },
        text: '媒体报道分布情况',
        x: '20',
        top: '12'
    },
    color: ['#8cc152','#967adc',  '#37bc9b', '#f6bb42', '#4a89dc', '#d770ad','#3bafda'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '媒体报道分布情况',
            type: 'pie',
            label: {
                normal: {
                    formatter: '{b}报道数:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#12EABE',
                            align: 'left',
                            padding: 2
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        },
                        c: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        }
                    }
                }
            },
            radius: '55%',
            center:['50%','67%'],
            data: [
                {value: 147, name: '其他'},
                {value: 115, name: '社交媒体'},
                {value: 75, name: '地方媒体'},

                {value: 61, name: '商业门户'},
                {value: 33, name: '政府网站'},
                {value: 23, name: '中央媒体'},
                {value: 1, name: '境外媒体'}
            ]
        }
    ]
};
mtzb.setOption(mtzb_option);
mtzb.on('click', function(params){
    var name = params.name;
    options_tableList.title.text = name+"Top5";
    switch(name) {
        case '社交媒体':
            options_tableList.color = ['#967adc'];
            options_tableList.yAxis.data = data_tablelist.social.name;
            options_tableList.series[0].data = data_tablelist.social.num;
            break;
        case '其他':
            options_tableList.color = ['#8cc152'];
            options_tableList.yAxis.data = data_tablelist.others.name;
            options_tableList.series[0].data = data_tablelist.others.num;
            break;
        case '地方媒体':
            options_tableList.color = ['#37bc9b'];
            options_tableList.yAxis.data = data_tablelist.difang.name;
            options_tableList.series[0].data = data_tablelist.difang.num;
            break;
        case '商业门户':
            options_tableList.color = ['#f6bb42'];
            options_tableList.yAxis.data = data_tablelist.shangye.name;
            options_tableList.series[0].data = data_tablelist.shangye.num;
            break;
        case '政府网站':
            options_tableList.color = ['#4a89dc'];
            options_tableList.yAxis.data = data_tablelist.zhengfu.name;
            options_tableList.series[0].data = data_tablelist.zhengfu.num;
            break;
        case '中央媒体':
            options_tableList.color = ['#d770ad'];
            options_tableList.yAxis.data = data_tablelist.zhongyang.name;
            options_tableList.series[0].data = data_tablelist.zhongyang.num;
            break;
        case '境外媒体':
            options_tableList.color = ['#3bafda'];
            options_tableList.yAxis.data = data_tablelist.jingwai.name;
            options_tableList.series[0].data = data_tablelist.jingwai.num;
    }
    tableList.setOption(options_tableList);
});
//三个饼图
// var xinwenLd = echarts.init(document.getElementById('xinwen'));
var xinwen_option = {
    color: ["#4a89dc", "#37bc9b", "#967adc"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}<br/>占比:{d}%"
    },
    calculable: true,
    series: [
        {
            name: '人员类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['35%', '45%'],
            center:['50%','50%'],
            color: [ '#403D84', '#1F3A8D', '#0B3B77'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,
            },

            data: [{
                value: 100,
                name: ''
            },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                }
            ]
        },
        {
            name: '新闻',
            type: 'pie',
            radius: ['45%', '55%'],
            center:['50%','50%'],
            color: [ '#4a89dc', '#967adc', '#3bafda'],
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b}数量:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#12EABE',
                            align: 'left',
                            padding: 2
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        },
                        c: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        }
                    }
                }
            },
            data: [{
                name: '网络新闻',
                value:315
            },
                {
                    name: '报纸',
                    value: 16
                },
                {
                    name: '移动APP',
                    value: 7
                }
            ]
        }
    ]
};
// xinwenLd.setOption(xinwen_option);

// var zimeitiLd = echarts.init(document.getElementById('zimeiti'));
var zimeiti_option = {
    color: ["#37bc9b", "#967adc", "#4a89dc"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}<br/>占比:{d}%"
    },
    calculable: true,
    series: [
        {
            name: '人员类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['35%', '45%'],
            center:['50%','50%'],
            color: [ '#403D84', '#1F3A8D', '#0B3B77'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,
            },

            data: [{
                value: 100,
                name: ''
            },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                }
            ]
        },
        {
            name: '自媒体',
            type: 'pie',
            radius: ['45%', '55%'],
            center:['50%','50%'],
            color: [ '#37bc9b', '#8cc152', '#d770ad'],
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b}数量:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#12EABE',
                            align: 'left',
                            padding: 2
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        },
                        c: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        }
                    }
                }
            },
            data: [{
                name: '微信',
                value:51
            },
                {
                    name: '博客',
                    value: 9
                },
                {
                    name: '其他媒体',
                    value: 43
                }
            ]
        }
    ]
};
// zimeitiLd.setOption(zimeiti_option);

// var luntanLd = echarts.init(document.getElementById('luntan'));
var luntan_option = {
    color: ["#4a89dc", "#3bafda"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}<br/>占比:{d}%"
    },
    calculable: true,
    series: [
        {
            name: '人员类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['35%', '45%'],
            center:['50%','50%'],
            color: [ '#403D84', '#0B3B77'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,
            },

            data: [{
                value: 100,
                name: ''
            },
                {
                    value: 100,
                    name: ''
                }
            ]
        },
        {
            name: '论坛',
            type: 'pie',
            radius: ['45%', '55%'],
            center:['50%','50%'],
            color: [ '#4a89dc', '#8cc152'],
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b}数量:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#12EABE',
                            align: 'left',
                            padding: 2
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        },
                        c: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                            align: 'left',
                            padding: 2
                        }
                    }
                }
            },
            data: [{
                name: '贴吧',
                value:5
            }, {
                name: '论坛',
                value: 8
            }
            ]
        }
    ]
};
// luntanLd.setOption(luntan_option);
var saihou = echarts.init(document.getElementById('saihou'));
var saihou_option =  {
    color: ['#a0d468', '#4fc1e9'],
    grid:{
        left:'70',
        bottom:'30',
        right:'20'
    },
    title: {
        text: '今日参与学习竞赛情况',
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            fontFamily: '黑体'
        },
        top: '5%',
        x: '25'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}次',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: 'false',
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 12,
                textStyle: {
                    color: 'rgba(255,255,255,.8)'
                }
            },
            data: [ '00:00', '01:00','02:00', '03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00']
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
            max:'1500',
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
                    color: 'rgba(255,255,255,0.7)'
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
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: 'rgb(233,87,63)',
                    borderColor: 'rgba(233,87,63,0.27)',
                    borderWidth: 8
                }
            },
            name: "参与次数",
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: 10,
            data: [ 23,  11,  3,  13,  45,  167,  368,  566,  1025 , 1259,  1112,  684,  455,  489,  642],
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(218,68,83,.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(218,68,83,.3)'
                    }], false)
                }
            }
        }
    ]
};
saihou.setOption(saihou_option);


$("#scrollDiv").Scroll({line: 1, speed: 500, timer: 3500, up: "but_up", down: "but_down"});
$("#scrollDiv1").Scroll({line: 1, speed: 500, timer: 4000, up: "but_up", down: "but_down"});
$("#scrollDiv2").Scroll({line: 1, speed: 500, timer: 3800, up: "but_up", down: "but_down"});
$("#scrollDiv3").Scroll({line: 1, speed: 500, timer: 5500, up: "but_up", down: "but_down"});
$("#scrollDiv4").Scroll({line: 1, speed: 500, timer: 4000, up: "but_up", down: "but_down"});
$("#scrollDiv5").Scroll({line: 1, speed: 500, timer: 3000, up: "but_up", down: "but_down"});
$("#scrollDiv6").Scroll({line: 1, speed: 500, timer: 3000, up: "but_up", down: "but_down"});
$("#scrollDiv7").Scroll({line: 1, speed: 500, timer: 3000, up: "but_up", down: "but_down"});
$('.scrollbox2 li').mouseover(function () {
    $(this).addClass('active_bar').siblings().removeClass('active_bar')
    var sum = $(this).index();
    $('.scrollbox2 .wangchaos').eq(sum).stop(true, true).show().siblings('.wangchaos').hide()
})
$('.scrollbox3 .w_tipbar1 li').mouseover(function () {
    $(this).addClass('active_bar').siblings().removeClass('active_bar')
    var sum = $(this).index();
    $('.scrollbox3 .wangchaos').eq(sum).stop(true, true).show().siblings('.wangchaos').hide()
})

$('.lecet .w_tipbar1 li').mouseover(function () {
    // alert(1)
    $(this).addClass('active_bar').siblings().removeClass('active_bar')
    var sum = $(this).index();
    $('.lecet .wangchaos').eq(sum).stop(true, true).show().siblings('.wangchaos').hide()
})

$('.tabs_2 .w_tipbar1 li').mouseover(function () {
    $(this).addClass('active_bar').siblings().removeClass('active_bar')
    var sum = $(this).index();
    $('.tabs_2 .wangchaos').eq(sum).stop(true, true).show().siblings('.wangchaos').hide()
})
$('.tabs_3 .w_tipbar li').mouseover(function () {
    $(this).addClass('active_bar').siblings().removeClass('active_bar')
    var sum = $(this).index();
    $('.tabs_3 .wangchaos').eq(sum).stop(true, true).show().siblings('.wangchaos').hide()
})