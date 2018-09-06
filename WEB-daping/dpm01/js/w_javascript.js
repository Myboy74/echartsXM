// 全省基层党支部开展活动情况(单位:次)
var w_myChart1 = echarts.init(document.getElementById('w_maintt'));
var w_option =
    {

    title:{
        text: '全省基层党支部开展活动情况(单位:次)',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data :  ['党\n小组会 ','支部\n委员会','支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员',  '评选\n优秀党员 ', '主题\n党日'],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[142469,	222625,	352603,	160045,	41618,	159479,	36536,	11138,	531845
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
w_option.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
w_myChart1.setOption(w_option);

//省委直属党(工)委所属党支部活动开展情况(单位:次)
function makeChart11() {
    var chart = echarts.init(document.getElementById('lect'));
    option = {
        // backgroundColor: '#394056',
        title: {
            text: '省委直属党(工)委所属党支部活动开展情况(单位:次)',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体'
            },
            left: '30px'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel:{
                interval:0,//横轴信息全部显示
                color:'#fff'
            },
            data:['济南','青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
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
            offset: 20,

        }],
        yAxis: [{
            type: 'value',
            // min: 0,
            // max: 150000,
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
                color:'#fff',
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '',
            type: 'line',
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
                        color: 'rgba(64,180,7, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(64,180,7, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(64,180,7)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12

                }
            },
            data: [44948, 69491, 110573, 114613, 27365, 189076, 97879,
                34928, 51405, 95552, 21504, 11640, 141595, 58628,
                10940, 80362, 34655, 13241, 5327, 16860, 5753, 234, 0
            ]
        }]
    };
    chart.setOption(option);
}
makeChart11();


/*点击跳转到《济南党组织关系转接迁徙模拟图》*/
function makeChart_jinan() {//转入
    var chart = echarts.init(document.getElementById('f_lects'));
    var data2=[791, 25643, 66, 96, 24, 17, 63, 41,
        46, 77, 17, 21, 11, 48, 57, 46, 26, 27, 249,
        118, 216, 3, 2, 0
    ];
    option = {
        title: {
            text: '济南党组织关系转接迁徙模拟图',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体',

            },
            top:'2%',
            left: '3%'
        },
        tooltip: {
            // show: true,
            // trigger: 'item',
            formatter:function(params){//悬浮提示框显示的内容
                if (params.data.isnode) {return params.data.name+":"+params.data.value;}
                else {return params.data.source+"--"+params.data.target;}
            }
        },
        // backgroundColor:"#000000", //画布背景颜色
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'force',
                // draggable:'false',  //可以拖拽圆球
                // focusNodeAdjacency:'false',   //over上去其他节点变透明
                symbol:'circle',  //设置节点的形状
                force:{
                    edgeLength: [20,800] // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
                },
                // symbolSize: 50,  //决定圆的大小
                roam:false,   //设置是否可拖拽图形
                label: {
                    normal: {
                        show:true,
                        formatter:  function( data ) {
                            return  data.name;
                        },
                        rich: {
                            gray: {
                                fontSize:10,
                                color: 'white',
                            },
                            green: {
                                fontSize:12,
                                color: '#519FFC',
                            }
                        },
                        color:'#ffffff',
                    },
                },
                focusNodeAdjacency: true,
                // edgeSymbol: ['arrow', 'line'],
                // edgeSymbolSize: [10, 4],
                edgeLabel: {
                    normal: {
                        show:false,
                        textStyle: {
                            fontSize: 30
                        },
                    }
                },
                data: [
                    {
                        name: '青岛',
                        x: 360,
                        y: 100,
                        value:data2[2],
                        isnode:true,//这是一个开关 用来判断是否显示  ---45行tooltip显示
                        symbolSize: 60, //决定圆的大小
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '淄博',
                        x: 700,
                        y: 219,
                        value:data2[3],
                        isnode:true,
                        symbolSize: 65,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '济南',

                        x: 500,
                        y: 200,
                        value:data2[1],
                        isnode:true,
                        fixed:true, //固定
                        label:{
                            fontSize:'14',
                        },
                        effectType:'ripple',
                        symbolSize: 130,
                        showEffectOn: 'render',
                        itemStyle: {
                            // normal: {
                            //     borderColor: '#519FFC',
                            //     borderWidth: 0,
                            //     borderType:'solid',
                            //     shadowBlur: 50,
                            //     shadowColor: '#519FFC',
                            //     color: '#519FFC',
                            // }

                            normal: {
                                color: {
                                    type: 'radial',
                                    colorStops: [{
                                        offset: 0, color: 'rgba(81,159,252,1)' // 0% 处的颜色
                                    }, {
                                        offset: 0.7, color: 'rgba(81,159,252,1)'
                                    }, {
                                        offset: 0.8, color: 'rgba(81,159,252,0.5)'
                                    }, {
                                        offset: 0.9, color: 'rgba(81,159,252,0.4)'
                                    }, {
                                        offset: 1, color: 'rgba(81,159,252,0.15)'
                                    }],
                                    globalCoord: true // 缺省为 false
                                },
                                shadowBlur: 0,
                                shadowColor: '#25fffb'
                            }
                        }
                    },
                    {
                        name: '枣庄',
                        x: 550,
                        y: 300,
                        value:data2[4],
                        isnode:true,
                        symbolSize: 34,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '东营',
                        x: 450,
                        y: 300,
                        value:data2[5],
                        isnode:true,
                        symbolSize:27,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '烟台',
                        x: 250,
                        y: 300,
                        value:data2[6],
                        isnode:true,
                        symbolSize: 58,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '潍坊',
                        x: 250,
                        y: 300,
                        value:data2[7],
                        isnode:true,
                        symbolSize: 41,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '济宁',
                        x: 250,
                        y: 300,
                        value:data2[8],
                        isnode:true,
                        symbolSize:46,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '泰安',
                        x: 250,
                        y: 300,
                        value:data2[9],
                        isnode:true,
                        symbolSize: 70,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '威海',
                        x: 250,
                        y: 300,
                        value:data2[10],
                        isnode:true,
                        symbolSize: 27,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '日照',
                        x: 300,
                        y: 300,
                        value:data2[11],
                        isnode:true,
                        symbolSize: 21,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '莱芜',
                        x: 300,
                        y: 300,
                        value:data2[12],
                        isnode:true,
                        symbolSize: 13,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '临沂',
                        x: 300,
                        y: 300,
                        value:data2[13],
                        isnode:true,
                        symbolSize: 48,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '德州',
                        x: 300,
                        y: 300,
                        value:data2[14],
                        isnode:true,
                        symbolSize: 50,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '聊城',
                        x: 300,
                        y: 300,
                        value:data2[15],
                        isnode:true,
                        symbolSize: 46,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '滨州',
                        x: 300,
                        y: 300,
                        value:data2[16],
                        isnode:true,
                        symbolSize: 26,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '菏泽',
                        x: 300,
                        y: 300,
                        value:data2[17],
                        isnode:true,
                        symbolSize: 27,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '省直\n机关\n工委',
                        x: 300,
                        y: 300,
                        value:data2[18],
                        isnode:true,
                        symbolSize: 75,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '省委\n教育\n工委',
                        x: 300,
                        y: 300,
                        value:data2[19],
                        isnode:true,
                        symbolSize:68,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '省国\n资委\n党委',
                        x: 300,
                        y: 300,
                        value:data2[20],
                        isnode:true,
                        symbolSize: 70,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '胜利\n油田\n党委',
                        x: 300,
                        y: 300,
                        value:data2[21],
                        isnode:true,
                        symbolSize: 12,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '齐鲁\n石化\n党委',
                        x: 300,
                        y: 300,
                        value:data2[22],
                        isnode:true,
                        symbolSize: 11,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '黄三\n角党\n工委',
                        x: 300,
                        y: 300,
                        value:data2[23],
                        isnode:true,
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '省外',
                        x: 300,
                        y: 300,
                        value:data2[0],
                        isnode:true,
                        symbolSize: 85,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    }
                ],
                links: [
                    {
                        source: '济南',
                        target: '青岛',
                    }, {
                        source: '济南',
                        target: '淄博'
                    }, {
                        source: '济南',
                        target: '枣庄'
                    }, {
                        source: '济南',
                        target: '东营'
                    }, {
                        source: '济南',
                        target: '烟台'
                    }, {
                        source: '济南',
                        target: '潍坊'
                    }, {
                        source: '济南',
                        target: '济宁'
                    }, {
                        source: '济南',
                        target: '泰安'
                    }, {
                        source: '济南',
                        target: '威海'
                    }, {
                        source: '济南',
                        target: '日照'
                    }, {
                        source: '济南',
                        target: '莱芜'
                    }, {
                        source: '济南',
                        target: '临沂'
                    }, {
                        source: '济南',
                        target: '德州'
                    }, {
                        source: '济南',
                        target: '聊城'
                    }, {
                        source: '济南',
                        target: '滨州'
                    }, {
                        source: '济南',
                        target: '菏泽'
                    }, {
                        source: '济南',
                        target: '省直\n机关\n工委'
                    },{
                        source: '济南',
                        target: '省委\n教育\n工委'
                    },{
                        source: '济南',
                        target: '省国\n资委\n党委'
                    },{
                        source: '济南',
                        target: '胜利\n油田\n党委'
                    },
                    {
                        source: '济南',
                        target: '齐鲁\n石化\n党委'
                    },
                    {
                        source: '济南',
                        target: '黄三\n角党\n工委'
                    },
                    {
                        source: '济南',
                        target: '省外'
                    }

                ],
                animation:true,
                markArea:{
                    animation:false,
                },
                markPoint:{
                    symbol: 'arrow',
                },
                markLine:{
                    symbol: 'arrow',
                    precision:5
                },
                itemStyle:{
                    color:'#1b486d',
                },
                lineStyle: {
                    normal: {
                        type:'dashed',

                        width: 1,
                        curveness: 0,
                        color:'#519FFC',

                    }
                },
                force: {
                    repulsion:[300,300],
                    // edgeLength: [10, 200],
                    // layoutAnimation:false,
                    //initLayout:'circle',
                    gravity:0.1
                }
            }
        ]
    };
    chart.setOption(option);
}
// makeChart_jinan();
function makeChart_jinan1() {//转出
    var chart = echarts.init(document.getElementById('f_lects'));
    var data2=[261, 25643, 50, 24, 8, 7, 34, 37,
        34, 31, 15, 11, 19, 38, 24, 30, 20,
        22, 249, 53, 232, 1, 0, 0
    ];
    option = {
        tooltip: {
            // show: true,
            // trigger: 'item',
            formatter:function(params){//悬浮提示框显示的内容
                if (params.data.isnode) {return params.data.name+":"+params.data.value;}
                else {return params.data.source+"--"+params.data.target;}
            }
        },
        // backgroundColor:"#000000", //画布背景颜色
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'force',
                // draggable:'false',  //可以拖拽圆球
                // focusNodeAdjacency:'false',   //over上去其他节点变透明
                symbol:'circle',  //设置节点的形状
                force:{
                    edgeLength: [20,1000] // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
                },
                // symbolSize: 50,  //决定圆的大小
                roam:false,   //设置是否可拖拽图形
                label: {
                    normal: {
                        show:true,
                        formatter:  function( data ) {
                            return  data.name;
                        },
                        rich: {
                            gray: {
                                fontSize:10,
                                color: 'white',
                            },
                            green: {
                                fontSize:12,
                                color: '#EA4245',
                            },
                            gold: {
                                fontSize:10,
                                color: '#FFFFFF',
                                opacity: 0.6,
                            }
                        },
                        // position:['-50%','-50%'],//改变内容的位置
                        color:'#ffffff',
                    },
                },
                focusNodeAdjacency: true,
                // edgeSymbol: ['line', 'arrow'],
                // edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        show:false,
                        textStyle: {
                            fontSize: 30
                        },
                    }
                },
                data: [
                    {
                        name: '青岛',
                        x: 360,
                        y: 100,
                        value:data2[2],
                        isnode:true,
                        symbolSize: 50, //决定圆的大小

                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                                shadowBlur: 20,
                            }
                        }
                    }, {
                        name: '淄博',
                        x: 700,
                        y: 219,
                        value:data2[3],
                        isnode:true,
                        symbolSize: 28,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '济南',
                        x:740,
                        y: 350,
                        value:data2[1],
                        isnode:true,
                        fixed:true, //固定
                        label:{
                            fontSize:'14',
                        },
                        effectType:'ripple',
                        symbolSize: 130,
                        showEffectOn: 'render',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'radial',
                                    colorStops: [{
                                        offset: 0, color: 'rgba(234,66,69,1)' // 0% 处的颜色
                                    }, {
                                        offset: 0.7, color: 'rgba(234,66,69,1)'
                                    }, {
                                        offset: 0.8, color: 'rgba(234,66,69,0.5)'
                                    }, {
                                        offset: 0.9, color: 'rgba(234,66,69,0.4)'
                                    }, {
                                        offset: 1, color: 'rgba(234,66,69,0.15)'
                                    }],
                                    globalCoord: true // 缺省为 false
                                },
                                shadowBlur: 0,
                                shadowColor: '#25fffb'
                            }
                        }
                    }, {
                        name: '枣庄',
                        x: 550,
                        y: 300,
                        value:data2[4],
                        isnode:true,
                        symbolSize:18,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '东营',
                        x: 450,
                        y: 300,
                        value:data2[5],
                        isnode:true,
                        symbolSize: 17,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '烟台',
                        x: 250,
                        y: 300,
                        value:data2[6],
                        isnode:true,
                        symbolSize: 34,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '潍坊',
                        x: 250,
                        y: 300,
                        value:data2[7],
                        isnode:true,
                        symbolSize: 37,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '济宁',
                        x: 250,
                        y: 300,
                        value:data2[8],
                        isnode:true,
                        symbolSize:34,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '泰安',
                        x: 200,
                        y: 300,
                        value:data2[9],
                        isnode:true,
                        symbolSize: 31,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '威海',
                        x: 250,
                        y: 300,
                        value:data2[10],
                        isnode:true,
                        symbolSize: 25,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '日照',
                        x: 300,
                        y: 300,
                        value:data2[11],
                        isnode:true,
                        symbolSize: 21,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '莱芜',
                        x: 300,
                        y: 300,
                        value:data2[12],
                        isnode:true,
                        symbolSize: 28,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '临沂',
                        x: 300,
                        y: 300,
                        value:data2[13],
                        isnode:true,
                        symbolSize: 38,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '德州',
                        x: 300,
                        y: 300,
                        value:data2[14],
                        isnode:true,
                        symbolSize: 28,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '聊城',
                        x: 300,
                        y: 300,
                        value:data2[15],
                        isnode:true,
                        symbolSize: 30,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '滨州',
                        x: 300,
                        y: 300,
                        value:data2[16],
                        isnode:true,
                        symbolSize: 30,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '菏泽',
                        x: 300,
                        y: 300,
                        value:data2[17],
                        isnode:true,
                        symbolSize:32,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省直\n机关\n工委',
                        x: 300,
                        y: 50,
                        value:data2[18],
                        isnode:true,
                        symbolSize: 65,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省委\n教育\n工委',
                        x: 300,
                        y: 60,
                        value:data2[19],
                        isnode:true,
                        symbolSize: 53,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省国\n资委\n党委',
                        x: 200,
                        y: 300,
                        value:data2[20],
                        isnode:true,
                        symbolSize: 60,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '胜利\n油田\n党委',
                        x:350,
                        y: 350,
                        label:{
                            position:['110%','-10%']
                        },
                        value:data2[21],
                        isnode:true,
                        symbolSize: 11,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '齐鲁\n石化\n党委',
                        x: 300,
                        y: 300,
                        value:data2[22],
                        isnode:true,
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '黄三\n角党\n工委',
                        x: 300,
                        y: 300,
                        value:data2[23],
                        isnode:true,
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '省外',
                        x: 200,
                        y: 80,
                        value:data2[0],
                        isnode:true,
                        symbolSize:80,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },
                ],
                links: [
                    {
                        source: '济南',
                        target: '青岛'
                    }, {
                        source: '济南',
                        target: '淄博'
                    }, {
                        source: '济南',
                        target: '枣庄'
                    }, {
                        source: '济南',
                        target: '东营'
                    }, {
                        source: '济南',
                        target: '烟台'
                    }, {
                        source: '济南',
                        target: '潍坊'
                    }, {
                        source: '济南',
                        target: '济宁'
                    }, {
                        source: '济南',
                        target: '泰安'
                    }, {
                        source: '济南',
                        target: '威海'
                    }, {
                        source: '济南',
                        target: '日照'
                    }, {
                        source: '济南',
                        target: '莱芜'
                    }, {
                        source: '济南',
                        target: '临沂'
                    }, {
                        source: '济南',
                        target: '德州'
                    }, {
                        source: '济南',
                        target: '聊城'
                    }, {
                        source: '济南',
                        target: '滨州'
                    }, {
                        source: '济南',
                        target: '菏泽'
                    }, {
                        source: '济南',
                        target: '省直\n机关\n工委'
                    },{
                        source: '济南',
                        target: '省委\n教育\n工委'
                    },{
                        source: '济南',
                        target: '省国\n资委\n党委'
                    },
                    {
                        source: '济南',
                        target: '胜利\n油田\n党委'
                    },
                    {
                        source: '济南',
                        target: '齐鲁\n石化\n党委'
                    },
                    {
                        source: '济南',
                        target: '黄三\n角党\n工委'
                    },
                    {
                        source: '济南',
                        target: '省外'
                    },
                ],
                animation:true,
                markArea:{
                    animation:false,
                },
                markPoint:{
                    symbol: 'arrow',
                },
                markLine:{
                    symbol: 'arrow',
                    precision:5
                },
                itemStyle:{
                    color:'#8f4848',
                    // color:'#1b486d',
                },
                lineStyle: {
                    normal: {
                        type:'dashed',
                        width: 1,
                        curveness: 0,
                        color:'#EA4245',
                    }
                },
                force: {
                    repulsion:[300, 100],
                    // edgeLength: [10, 200],
                    // layoutAnimation:false,
                    //initLayout:'circle',
                    gravity:0.1
                }
            }
        ]
    };
    chart.resize();
    chart.setOption(option);
}

/*点击跳转到《青岛党组织关系转接迁徙模拟图》*/
function makeChart_qingdao() {//转入
    var chart = echarts.init(document.getElementById('u_lects'));
    var data2=[1278, 50, 89872, 60, 22, 16,
        148, 96, 45, 67, 40, 41, 21, 46, 15,
        29, 24, 29, 93, 77, 38, 10, 1, 0
    ];
    option = {
        title: {
            text: '青岛党组织关系转接迁徙模拟图',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体',
            },
            top:'2%',
            left: '3%'
        },
        tooltip: {
            // show: true,
            // trigger: 'item',
            formatter:function(params){//悬浮提示框显示的内容
                if (params.data.isnode) {return params.data.name+":"+params.data.value;}
                else {return params.data.source+"--"+params.data.target;}
            }
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'force',
                // draggable:'false',  //可以拖拽圆球
                // focusNodeAdjacency:'false',   //over上去其他节点变透明
                symbol:'circle',  //设置节点的形状
                force:{
                    edgeLength: [20,800] // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
                },
                // symbolSize: 50,  //决定圆的大小
                roam:false,   //设置是否可拖拽图形
                label: {
                    normal: {
                        show:true,
                        formatter:  function( data ) {
                            return  data.name;
                        },
                        rich: {
                            gray: {
                                fontSize:10,
                                color: 'white',
                            },
                            green: {
                                fontSize:12,
                                color: '#519FFC',
                            }
                        },
                        color:'#ffffff',
                    },
                },
                focusNodeAdjacency: true,
                // edgeSymbol: ['arrow', 'line'],
                // edgeSymbolSize: [10, 4],
                edgeLabel: {
                    normal: {
                        show:false,
                        textStyle: {
                            fontSize: 30
                        },
                    }
                },
                data: [
                    {
                        name: '青岛',
                        x: 500,
                        y: 200,
                        value:data2[2],
                        isnode:true,
                        fixed:true, //固定
                        label:{
                            fontSize:'14',
                        },
                        effectType:'ripple',
                        symbolSize: 130,
                        showEffectOn: 'render',
                        itemStyle: {
                            // normal: {
                            //     borderColor: '#519FFC',
                            //     borderWidth: 0,
                            //     borderType:'solid',
                            //     shadowBlur: 50,
                            //     shadowColor: '#519FFC',
                            //     color: '#519FFC',
                            // }

                            normal: {
                                color: {
                                    type: 'radial',
                                    colorStops: [{
                                        offset: 0, color: 'rgba(81,159,252,1)' // 0% 处的颜色
                                    }, {
                                        offset: 0.7, color: 'rgba(81,159,252,1)'
                                    }, {
                                        offset: 0.8, color: 'rgba(81,159,252,0.5)'
                                    }, {
                                        offset: 0.9, color: 'rgba(81,159,252,0.4)'
                                    }, {
                                        offset: 1, color: 'rgba(81,159,252,0.15)'
                                    }],
                                    globalCoord: true // 缺省为 false
                                },
                                shadowBlur: 0,
                                shadowColor: '#25fffb'
                            }
                        }
                    }, {
                        name: '淄博',
                        x: 700,
                        y: 219,
                        value:data2[3],
                        isnode:true,
                        symbolSize: 52,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '济南',
                        x: 360,
                        y: 100,
                        value:data2[1],
                        isnode:true,
                        symbolSize: 50, //决定圆的大小
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '枣庄',
                        x: 550,
                        y: 300,
                        value:data2[4],
                        isnode:true,
                        symbolSize: 22,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '东营',
                        x: 450,
                        y: 300,
                        value:data2[5],
                        isnode:true,
                        symbolSize: 16,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '烟台',
                        x: 250,
                        y: 300,
                        value:data2[6],
                        isnode:true,
                        symbolSize: 65,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '潍坊',
                        x: 250,
                        y: 300,
                        value:data2[7],
                        isnode:true,
                        symbolSize: 60,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '济宁',
                        x: 250,
                        y: 300,
                        value:data2[8],
                        isnode:true,
                        symbolSize: 45,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '泰安',
                        x: 250,
                        y: 300,
                        value:data2[9],
                        isnode:true,
                        symbolSize: 55,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '威海',
                        x: 250,
                        y: 300,
                        value:data2[10],
                        isnode:true,
                        symbolSize: 40,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '日照',
                        x: 300,
                        y: 300,
                        value:data2[11],
                        isnode:true,
                        symbolSize: 41,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '莱芜',
                        x: 300,
                        y: 300,
                        value:data2[12],
                        isnode:true,
                        symbolSize: 21,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '临沂',
                        x: 300,
                        y: 300,
                        value:data2[13],
                        isnode:true,
                        symbolSize: 46,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '德州',
                        x: 300,
                        y: 300,
                        value:data2[14],
                        isnode:true,
                        symbolSize: 15,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '聊城',
                        x: 300,
                        y: 300,
                        value:data2[15],
                        isnode:true,
                        symbolSize: 29,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '滨州',
                        x: 300,
                        y: 300,
                        value:data2[16],
                        isnode:true,
                        symbolSize: 24,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '菏泽',
                        x: 300,
                        y: 300,
                        value:data2[17],
                        isnode:true,
                        symbolSize: 29,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省直\n机关\n工委',
                        x: 300,
                        y: 300,
                        value:data2[18],
                        isnode:true,
                        symbolSize: 59,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省委\n教育\n工委',
                        x: 300,
                        y: 300,
                        value:data2[19],
                        isnode:true,
                        symbolSize: 57,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省国\n资委\n党委',
                        x: 300,
                        y: 300,
                        value:data2[20],
                        isnode:true,
                        symbolSize: 38,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '胜利\n油田\n党委',
                        x: 300,
                        y: 300,
                        value:data2[21],
                        isnode:true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '齐鲁\n石化\n党委',
                        x: 300,
                        y: 300,
                        value:data2[22],
                        isnode:true,
                        symbolSize: 11,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '黄三\n角党\n工委',
                        x: 300,
                        y: 300,
                        value:data2[23],
                        isnode:true,
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '省外',
                        x: 300,
                        y: 300,
                        value:data2[0],
                        isnode:true,
                        symbolSize: 90,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                ],
                links: [
                    {
                        source: '青岛',
                        target: '济南',
                    }, {
                        source: '青岛',
                        target: '淄博'
                    }, {
                        source: '青岛',
                        target: '枣庄'
                    }, {
                        source: '青岛',
                        target: '东营'
                    }, {
                        source: '青岛',
                        target: '烟台'
                    }, {
                        source: '青岛',
                        target: '潍坊'
                    }, {
                        source: '青岛',
                        target: '济宁'
                    }, {
                        source: '青岛',
                        target: '泰安'
                    }, {
                        source: '青岛',
                        target: '威海'
                    }, {
                        source: '青岛',
                        target: '日照'
                    }, {
                        source: '青岛',
                        target: '莱芜'
                    }, {
                        source: '青岛',
                        target: '临沂'
                    }, {
                        source: '青岛',
                        target: '德州'
                    }, {
                        source: '青岛',
                        target: '聊城'
                    }, {
                        source: '青岛',
                        target: '滨州'
                    }, {
                        source: '青岛',
                        target: '菏泽'
                    }, {
                        source: '青岛',
                        target: '省直\n机关\n工委'
                    },{
                        source: '青岛',
                        target: '省委\n教育\n工委'
                    },{
                        source: '青岛',
                        target: '省国\n资委\n党委'
                    },{
                        source: '青岛',
                        target: '胜利\n油田\n党委'
                    },
                    {
                        source: '青岛',
                        target: '齐鲁\n石化\n党委'
                    },
                    {
                        source: '青岛',
                        target: '黄三\n角党\n工委'
                    },
                    {
                        source: '青岛',
                        target: '省外'
                    },
                ],
                animation:true,
                markArea:{
                    animation:false,
                },
                markPoint:{
                    symbol: 'arrow',
                },
                markLine:{
                    symbol: 'arrow',
                    precision:5
                },
                itemStyle:{
                    color:'#1b486d',
                },
                lineStyle: {
                    normal: {
                        type:'dashed',
                        width: 1,
                        curveness: 0,
                        color:'#519FFC',

                    }
                },
                force: {
                    repulsion:[300,230],
                    // edgeLength: [10, 200],
                    // layoutAnimation:false,
                    //initLayout:'circle',
                    gravity:0.1
                }
            }
        ]
    };
    chart.resize();
    chart.setOption(option);
}
// makeChart_qingdao();
function makeChart_qingdao1() {//转出
    var chart = echarts.init(document.getElementById('u_lects'));
    var data2=[664, 66, 89872, 38, 17, 15,
        78, 114, 36, 26, 37, 36, 12, 75, 23,
        24, 36,54, 73, 27, 30, 2, 3, 0
    ];
    option = {
        title: {
            text: '青岛党组织关系转接迁徙模拟图',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体',

            },
            top:'2%',
            left: '3%'
        },
        tooltip: {
            // show: true,
            // trigger: 'item',
            formatter:function(params){//悬浮提示框显示的内容
                if (params.data.isnode) {return params.data.name+":"+params.data.value;}
                else {return params.data.source+"--"+params.data.target;}
            }
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'force',
                // draggable:'false',  //可以拖拽圆球
                // focusNodeAdjacency:'false',   //over上去其他节点变透明
                symbol:'circle',  //设置节点的形状
                force:{
                    edgeLength: [20,800] // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
                },
                // symbolSize: 50,  //决定圆的大小
                roam:false,   //设置是否可拖拽图形
                label: {
                    normal: {
                        show:true,
                        formatter:  function( data ) {
                            return  data.name;
                        },
                        rich: {
                            gray: {
                                fontSize:10,
                                color: 'white',
                            },
                            green: {
                                fontSize:12,
                                color: '#EA4245',
                            },
                        },
                        color:'#ffffff',
                    },
                },
                focusNodeAdjacency: true,
                // edgeSymbol: ['line', 'arrow'],
                // edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        show:false,
                        textStyle: {
                            fontSize: 30
                        },
                    }
                },
                data: [
                    {
                        name: '青岛',
                        x: 735,
                        y: 200,
                        value:data2[2],
                        isnode:true,
                        fixed:true, //固定
                        // itemStyle: {
                        //     normal: {
                        //         borderColor: '#EA4245',
                        //         borderWidth: 1,
                        //         borderType:'solid',
                        //         shadowBlur: 20,
                        //     }
                        // },
                        label:{
                            fontSize:'14',
                        },
                        effectType:'ripple',
                        symbolSize: 130,
                        showEffectOn: 'render',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'radial',
                                    colorStops: [{
                                        offset: 0, color: 'rgba(234,66,69,1)' // 0% 处的颜色
                                    }, {
                                        offset: 0.7, color: 'rgba(234,66,69,1)'
                                    }, {
                                        offset: 0.8, color: 'rgba(234,66,69,0.5)'
                                    }, {
                                        offset: 0.9, color: 'rgba(234,66,69,0.4)'
                                    }, {
                                        offset: 1, color: 'rgba(234,66,69,0.15)'
                                    }],
                                    globalCoord: true // 缺省为 false
                                },
                                shadowBlur: 0,
                                shadowColor: '#25fffb'
                            }
                        }



                    },
                    {
                        name: '淄博',
                        x: 700,
                        y: 219,
                        value:data2[3],
                        isnode:true,
                        symbolSize: 48,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '济南',
                        x: 360,
                        y: 100,
                        value:data2[1],
                        isnode:true,
                        symbolSize: 60,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '枣庄',
                        x: 550,
                        y: 300,
                        value:data2[4],
                        isnode:true,
                        symbolSize: 27,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '东营',
                        x: 450,
                        y: 300,
                        value:data2[5],
                        isnode:true,
                        symbolSize: 25,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '烟台',
                        x: 250,
                        y: 300,
                        value:data2[6],
                        isnode:true,
                        symbolSize: 65,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '潍坊',
                        x: 250,
                        y: 300,
                        value:data2[7],
                        isnode:true,
                        symbolSize: 70,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '济宁',
                        x: 250,
                        y: 300,
                        value:data2[8],
                        isnode:true,
                        symbolSize: 46,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '泰安',
                        x: 200,
                        y: 300,
                        value:data2[9],
                        isnode:true,
                        symbolSize: 36,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '威海',
                        x: 250,
                        y: 300,
                        value:data2[10],
                        isnode:true,
                        symbolSize: 47,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '日照',
                        x: 300,
                        y: 300,
                        value:data2[11],
                        isnode:true,
                        symbolSize: 46,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '莱芜',
                        x: 300,
                        y: 300,
                        value:data2[12],
                        isnode:true,
                        symbolSize: 22,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '临沂',
                        x: 300,
                        y: 300,
                        value:data2[13],
                        isnode:true,
                        symbolSize: 63,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '德州',
                        x: 300,
                        y: 300,
                        value:data2[14],
                        isnode:true,
                        symbolSize: 33,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '聊城',
                        x: 300,
                        y: 300,
                        value:data2[15],
                        isnode:true,
                        symbolSize: 34,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '滨州',
                        x: 300,
                        y: 300,
                        value:data2[16],
                        isnode:true,
                        symbolSize: 46,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '菏泽',
                        x: 300,
                        y: 300,
                        value:data2[17],
                        isnode:true,
                        symbolSize: 54,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省直\n机关\n工委',
                        x: 300,
                        y: 50,
                        value:data2[18],
                        isnode:true,
                        symbolSize: 62,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省委\n教育\n工委',
                        x: 300,
                        y: 60,
                        value:data2[19],
                        isnode:true,
                        symbolSize: 37,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '省国\n资委\n党委',
                        x: 200,
                        y: 300,
                        value:data2[20],
                        isnode:true,
                        symbolSize: 40,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '胜利\n油田\n党委',
                        x:350,
                        y: 350,
                        label:{
                            position:['110%','-10%']
                        },
                        value:data2[21],
                        isnode:true,
                        symbolSize: 12,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '齐鲁\n石化\n党委',
                        x:300,
                        y: 300,
                        label:{
                            position:['110%','-10%']
                        },
                        value:data2[22],
                        isnode:true,
                        symbolSize: 13,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '黄三\n角党\n工委',
                        x: 200,
                        y: 100,
                        value:data2[23],
                        isnode:true,
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },
                    {
                        name: '省外',
                        x: 200,
                        y: 100,
                        value:data2[0],
                        isnode:true,
                        symbolSize: 90,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                borderType:'solid',
                            }
                        }
                    },
                ],
                links: [
                    {
                        source: '青岛',
                        target: '济南',
                    }, {
                        source: '青岛',
                        target: '淄博'
                    }, {
                        source: '青岛',
                        target: '枣庄'
                    }, {
                        source: '青岛',
                        target: '东营'
                    }, {
                        source: '青岛',
                        target: '烟台'
                    }, {
                        source: '青岛',
                        target: '潍坊'
                    }, {
                        source: '青岛',
                        target: '济宁'
                    }, {
                        source: '青岛',
                        target: '泰安'
                    }, {
                        source: '青岛',
                        target: '威海'
                    }, {
                        source: '青岛',
                        target: '日照'
                    }, {
                        source: '青岛',
                        target: '莱芜'
                    }, {
                        source: '青岛',
                        target: '临沂'
                    }, {
                        source: '青岛',
                        target: '德州'
                    }, {
                        source: '青岛',
                        target: '聊城'
                    }, {
                        source: '青岛',
                        target: '滨州'
                    }, {
                        source: '青岛',
                        target: '菏泽'
                    }, {
                        source: '青岛',
                        target: '省直\n机关\n工委'
                    },{
                        source: '青岛',
                        target: '省委\n教育\n工委'
                    },{
                        source: '青岛',
                        target: '省国\n资委\n党委'
                    },{
                        source: '青岛',
                        target: '胜利\n油田\n党委'
                    },
                    {
                        source: '青岛',
                        target: '齐鲁\n石化\n党委'
                    },
                    {
                        source: '青岛',
                        target: '黄三\n角党\n工委'
                    },
                    {
                        source: '青岛',
                        target: '省外'
                    }

                ],
                animation:true,
                markArea:{
                    animation:false,
                },
                markPoint:{
                    symbol: 'arrow',
                },
                markLine:{
                    symbol: 'arrow',
                    precision:5
                },
                itemStyle:{
                    color:'#8f4848',
                },
                lineStyle: {
                    normal: {
                        type:'dashed',
                        width: 1,
                        curveness: 0,
                        color:'#EA4245',
                    }
                },
                force: {
                    repulsion:[400, 300],
                    // edgeLength: [10, 200],
                    // layoutAnimation:false,
                    //initLayout:'circle',
                    gravity:0.1
                }
            }
        ]
    };
    chart.resize();
    chart.setOption(option);
}

//省委直属党(工)委转出转入情况
function makeChart12() {
    var chart = echarts.init(document.getElementById('lects'));
    option = {
        // backgroundColor: '#394056',
        title: {
            text: '省委直属党(工)委转出转入情况',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体'
            },
            left: '30px'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel:{
                interval:0,//横轴信息全部显示
                color:'#fff'
            },
            data:['济南','青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
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
            offset: 20,

        }],
        yAxis: [
            {
            type: 'value',
            // min: 0,
            // max: 80000,
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
                color:'#fff',
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [
            {
            name: '转入',
            type: 'line',
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
                        color: 'rgba(36,145,192, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(36,145,192, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(36,145,192)',
                    borderColor: 'rgba(36,145,192,0.27)',
                    borderWidth: 12

                }
            },
                data:[27705, 92118, 41286, 32373, 8656, 35639,
                    63002, 35563, 49819, 21013, 12271, 5236, 75040,
                    35683, 17871, 18110, 15332, 12210, 4802, 7081,
                    15102, 2177, 78
                ]
        },
            {
            name: '转出',
            type: 'line',
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
                        color: 'rgba(242,168,49, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(242,168,49, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(242,168,49)',
                    borderColor: 'rgba(36,145,192,0.27)',
                    borderWidth: 12

                }
            },

                data: [26843, 91358, 41204, 32257, 8525, 35695,
                    61211, 34545, 49939, 20901, 12093, 5211,
                    72715, 35613, 17559, 17533, 14909, 12138,
                    5293, 6558, 15179, 2188, 72
                ]
        }]
    };
    chart.resize();
    chart.setOption(option);
}
makeChart12();


$(function(){
           //日期倒计时,现在距离下面的日期
           var data_show = $('.data-box');
           for (var i = 1; i <= data_show.length; i++) {
               function_name($("#dateShow" + i).data("date"), "#dateShow" + i);
           }
           function function_name(time, obj) {
            $.leftTime(time, function (d) {
                if (d.status) {
                    var $dateShow1 = $(obj);
                    $dateShow1.find(".d").html(d.d);
                    $dateShow1.find(".h").html(d.h);
                    $dateShow1.find(".m").html(d.m);
                    $dateShow1.find(".s").html(d.s);
                }
            });
        };
        //地图切换
        $('#mapChange').on('click',function (){
          $('.province').hide();
          $('.jinan').show();
          $('.jinandatas').show();
          $('#map_bg').hide();
          $('.map_bg').show();
          $('#return').show();
          $('.weifang').hide();
          $('.qingdao').hide();
          $('.zibo').hide();
          })
        $('#zibo').on('click',function (){
          $('#map_bg').hide();
          $('.zibo').show();
          $('#return').show();
          $('.map_bg').hide();
          $('.zaozhuang').hide();
          $('.weifang').hide();
          $('.qingdao').hide();
          })
        $('#weifang').on('click',function (){
          $('#map_bg').hide();
          $('.weifang').show();
          $('#return').show();
          $('.qingdao').hide();
          $('.map_bg').hide();
          $('.zaozhuang').hide();
          $('.zibo').hide();
          })
        $('#qingdao').on('click',function (){
          $('#map_bg').hide();
          $('.qingdao').show();
          $('#return').show();
          $('.map_bg').hide();
          $('.zaozhuang').hide();
          $('.zibo').hide();
          $('.weifang').hide();
          })
        $('#zaozhuang').on('click',function (){
          $('#map_bg').hide();
          $('.zaozhuang').show();
          $('#return').show();
          $('.zibo').hide();
          $('.weifang').hide();
          $('.qingdao').hide();
          $('.map_bg').hide();
          })
        $('#return').on('click',function (){
          $('#map_bg').show();
          $('.map_bg').hide();
          $('#return').hide();
          $('.zibo').hide();
          $('.weifang').hide();
          $('.qingdao').hide();
          $('.jinan').hide();
          $('.zaozhuang').hide();
          $('.jinandatas').hide();
          $('.province').show();
            $('#lects').show();
            $('.zong').hide();
            $('.u_qingdao').show();


          })

//关系转接切换
    $('.gx .qie li').first().addClass('qiecla');
    $('.gx .qie li').click(function(){

        $(this).addClass('qiecla').siblings().removeClass('qiecla')
        var sum=$(this).index();
        $('#f_lects').eq(sum).stop(true,true).slideDown().siblings('#f_lects').hide();
        if(sum==0){
            makeChart_jinan();
            $('.zong').show();
            $('.zong2').hide();
        }else if(sum==1){
            makeChart_jinan1();
            $('.zong').hide();
            $('.zong2').show();
        }
    });
    $('.gx2 .qie li').first().addClass('qiecla');
    $('.gx2 .qie li').click(function(){
        $(this).addClass('qiecla').siblings().removeClass('qiecla')
        var sum1=$(this).index();
        $('#u_lects').eq(sum1).stop(true,true).slideDown().siblings('#u_lects').hide();
        if(sum1==0){
            makeChart_qingdao();
            $('.zong').show();
            $('.zong2').hide();
        }else if(sum1==1){
            makeChart_qingdao1();
            $('.zong').hide();
            $('.zong2').show();
        }
    });
    //点击 省委直属党（工）委转出转入情况 转换到 《济南党组织关系转接迁徙模拟图》
    $(".zong").hide();$(".zong2").hide();
    $(".f_jinan").on("click",function(){
        makeChart_jinan();
        $(".f_jinan").hide();
        $(".u_qingdao").hide();
        $(".gx").show();
        $("#lects").hide();
        $("#f_lects").show();
        $(".f_fanHui").show();
        $(".zong").show();
    })
    $(".f_fanHui").on("click",function(){
        $(".f_jinan").show();
        $(".u_qingdao").show();
        $(".gx").hide();
        $(".gx2").hide();
        $("#lects").show();
        $("#f_lects").hide();
        $("#u_lects").hide();
        $(".f_fanHui").hide();
        $(".zong").hide();
        $(".zong2").hide();
    })
//点击 省委直属党（工）委转出转入情况 转换到 《青岛党组织关系转接迁徙模拟图》
    $(".u_qingdao").on("click",function(){
        makeChart_qingdao();
        $("#lects").hide();
        $(".f_jinan").hide();
        $(".u_qingdao").hide();
        $(".gx2").show();
        $("#u_lects").show();
        $(".f_fanHui").show();
        $(".zong").show();
    })
})

/*山东省转出总量统计*/
function makeChart13(){
    var chart = echarts.init(document.getElementById('lyuan'));
    var data = [
        {
            value:7120,
            name: '转往省内其他市'
        }, {
            value: 2571,
            name: '转往省委直属其他党组织'
        }, {
            value: 11727,
            name: '转往市内其他县（市、区）'
        }, {
            value:11312 ,
            name: '转往市委直属其他党组织'
        }
        , {
            value: 46401,
            name: '转往县（市、区）内其他乡镇（街道）'
        }
        , {
            value: 4583,
            name: '转往县（市、区）委直属其他党组织'
        }
        , {
            value: 525762,
            name: '转往本系统内其他党组织'
        }
        , {
            value: 6506,
            name: '转往乡镇（街道）直属其他党组织'
        }, {
            value: 3527,
            name: '转往外省（区、市）'
        }, {
            value: 28,
            name: '转往军队'
        }, {
            value: 2,
            name: '转往武警部队'
        },{
            value: 0,
            name: '转往国（境）外'

        }
        ];

    option = {
            title: {
                text: '全省组织关系转接转出情况',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: '#fff',
                    fontWeight:'bolder',
                    fontFamily:'黑体'
                },
                left: '6%'
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            // show: false,
            trigger: 'item',
            // formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            bottom: '0%',
            data: ['转往省内其他市', '转往省委直属其他党组织', '转往市内其他县（市、区）', '转往市委直属其他党组织','转往县（市、区）内其他乡镇（街道）','转往县（市、区）委直属其他党组织','转往本系统内其他党组织','转往乡镇（街道）直属其他党组织','转往外省（区、市）','转往军队','转往武警部队','转往国（境）外'],
            itemWidth: 10,
            itemHeight: 10,
            itemGap:7,//legend 间距
            itemBorderRadius: 8,
            orient: 'vertical',
            top: '25px',
            left:'5px',
            textStyle:{
                color:"#fff"
            }
        },
        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            center: ['70%', '50%'],
            color: ['#00ABFB', '#FBB13A', '#8DC53E', '#ED2024','#FD02FA','#C1262C','#682C8E','#29508B','#2B75B8','#7FA0DF','#6AEEED','#b783b5'],
    
            label: {
                normal: {
                    formatter: '{d}%',
                    textStyle: {
                        color: '#00ABFB',
                        fontWeight: 'bold',
                        fontSize: 12
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:1,
                    length2:7,
                }
            },
            data: data
        }]
    };
 chart.setOption(option); 
}
makeChart13()
/*山东省接收转入总量统计*/
function makeChart14(){
    var chart = echarts.init(document.getElementById('lyu'));
    var data = [
        {
            value:7120,
            name: '接收省内其他市'
        }, {
            value: 2571,
            name: '接收省委直属其他党组织'
        }, {
            value: 11727,
            name: '接收市内其他县（市、区）'
        }
        , {
            value: 11312,
            name: '接收市委直属其他党组织'
        }, {
            value: 46401,
            name: '接收县（市、区）内其他乡镇（街道）'
        }
        , {
            value: 4583,
            name: '接收县（市、区）委直属其他党组织'
        }

        , {
            value: 525762,
            name: '接收本系统内其他党组织'
        }
        , {
            value: 6506,
            name: '接收乡镇（街道）直属其他党组织'
        }, {
            value: 5261,
            name: '接收外省（区、市）'
        }, {
            value: 5532,
            name: '接收军队'
        }
        , {
            value: 1391,
            name: '接收武警部队'
        }, {
            value: 1,
            name: '接收国（境）外'
        }
    ];
    option = {
            title: {
                text: '全省组织关系转接转入情况',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: '#fff',
                    fontWeight:'bolder',
                    fontFamily:'黑体'
                },
                left: '6%'
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'horizontal',
            bottom: '0%',
            data: ['接收省内其他市', '接收省委直属其他党组织', '接收市内其他县（市、区）','接收市委直属其他党组织','接收县（市、区）内其他乡镇（街道）','接收县（市、区）委直属其他党组织','接收本系统内其他党组织','接收乡镇（街道）直属其他党组织','接收外省（区、市）','接收军队','接收武警部队','接收国（境）外'],
            itemWidth: 10,
            itemHeight: 10,
            itemGap:7,//legend 间距
            itemBorderRadius: 8,
            orient: 'vertical',
            top: '25px',
            left:'5px',
            textStyle:{
                color:"#fff"
            }
        },
        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            center: ['70%', '50%'],
            color: ['#00ABFB', '#FBB13A', '#8DC53E', '#ED2024','#FD02FA','#C1262C','#682C8E','#29508B','#2B75B8','#7FA0DF','#6AEEED','#b783b5'],

            label: {
                normal: {
                    formatter: '{d}%',
    
                    textStyle: {
                        color: '#00ABFB',
                        fontWeight: 'bold',
                        fontSize: 12
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:1,
                    length2:7,
                }
            },
            data: data
        }]
    };
    chart.setOption(option); 
}
makeChart14()


//管理人员类型
function w_pies(){
    var chart = echarts.init(document.getElementById('w_pies'));
    option = {
        title : {
            text: '',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
    
        series : [
            {
    
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                color:['#c1262c','#28abe3','#fbb13a'],
                data:[
                    {value:1029, name:'安全员'},
                    {value:509, name:'审计员'},
                    {value:292128, name:'管理员'},
                ],
                  label: {
                position:'bottom',
                  normal: {
                    formatter: '{b}{d}%',
                      textStyle: {
                          color: '#29ABE2',
                          fontWeight: 'bold',
                          fontSize: 14,
                          padding:20,
                            lineHeight:'222',
                      }
                  },
    
              },
              
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chart.setOption(option);
  };
  w_pies()


//  省委直属党(工)委管理人员数量分布情况(单位:人)
var w_myChart2 = echarts.init(document.getElementById('w_maintts'));
      w_optiont1 = {
        title: {
            text: '省委直属党(工)委管理人员数量分布情况(单位:人)',
  textStyle: {
    fontWeight: 'normal',
    fontSize: 18,
    color: '#fff',
    fontWeight:'bolder',
    fontFamily:'黑体',
    
},
top:'10px',
left:'30px'
        },
         color: ['#4BD100','#29ABE2','#FBB03B'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
            axisLabel: {
                interval:0,
                color:'#fff'
                // rotate:30
             }  ,
            data: ['济南','青岛','淄博' ,'枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
        }, {
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }
        ],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                color:'#fff',
                fontSize:14
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{

            name:'安全员',
            type: 'bar',
            data:[58,
                128,
                54,
                38,
                23,
                79,
                43,
                55,
                18,
                33,
                22,
                13,
                27,
                17,
                15,
                19,
                48,
                147,
                23,
                38,
                85,
                41,
                5
            ]
        },
            {
            name:'审计员',
            type: 'bar',
            data:[16,
                41,
                28,
                3,
                25,
                67,
                24,
                48,
                2,
                57,
                17,
                3,
                10,
                20,
                3,
                3,
                2,
                57,
                5,
                6,
                69,
                3,
                0
            ]
        },
            {
            name:'管理员',
            type: 'bar',
             data:[20991,
                 31631,
                 14753,
                 10035,
                 7427,
                 21527,
                 24285,
                 21297,
                 15980,
                 10885,
                 10048,
                 4719,
                 21604,
                 14846,
                 15005,
                 13062,
                 12898,
                 8361,
                 4363,
                 2973,
                 4688,
                 600,
                 150
             ]
        }]
    };
  w_myChart2.setOption(w_optiont1);