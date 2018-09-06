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
        // $('.counter').countUp();
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
            // makeChart121();
          })

    //关系转接切换
    $('.qie li').first().addClass('qiecla')
    $('.qie li').click(function(){
        $(this).addClass('qiecla').siblings().removeClass('qiecla')
        var sum=$(this).index();
        $('#lects12').eq(sum).stop(true,true).slideDown().siblings('#lects12').hide();
        if(sum==0){
            makeChart1212();
        }else if(sum==1){
            makeChart1213();
        }
    })
    
})
function makeChart12() {
    var chart = echarts.init(document.getElementById('lect12'));
    option = {
    // backgroundColor: '#394056',
    title: {
        text: '济南直属党(工)委所属党支部活动开展情况(单位:次)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        left: '6%'
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
    dataZoom: [{
        show: false,
    }, {
        type: 'inside'
    }],
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel:{
        interval:1,//横轴信息全部显示
            rotate:40,
        color:'#fff'
        },

        data:['城乡建设委员会','中国移动通信','经信委','华电章丘发电','城市规划局','济南卷烟厂','南部山区','教育局','广播电台','卫生和计划生育','长清区','民政局','体育局','高新区','人力资源和社会保障局','住房保障和房产管理局','济南产业发展投资','城市管理局','税务局','市直机关','槐荫区','平阴县','济阳县','章丘区','天桥区','公安局','商河县','市中区','城市投资集团','历下区','历城区','中国重汽','国资委']
    }, {
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
        min: 0,
        max: 5000,
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
            color: '#fff',
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
        data: [20,
            8,
            6,
            1,
            1,
            1,
            3,
            16,
            10,
            5,
            26,
            84,
            40,
            18,
            21,
            17,
            79,
            209,
            679,
            194,
            1860,
            785,
            3045, 2059,2036,1253,2913,1120,2975,2306,1805,4340,372]
    }]
};
chart.setOption(option);
}
makeChart12();
function makeChart1212() {//转入
    var chart = echarts.init(document.getElementById('lects12'));
    var data2=[
        14145,
        17,
        40,
        8,
        6,
        16,
        17,
        17,
        26,
        4,
        10,
        2,
        19,
        25,
        16,
        8,
        5,
        75,
        29,
        82,
        1,
        254
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
                        textStyle: {
                            fontSize: 30
                        }
                    }
                },
                data: [
                    {
                        name: '青岛',
                        x: 360,
                        y: 100,
                        value:data2[1],
                        isnode:true,
                        symbolSize: 25, //决定圆的大小
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    }, {
                        name: '淄博',
                        x: 700,
                        y: 219,
                        value:data2[2],
                        isnode:true,
                        symbolSize: 30,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },{
                        name: '济南',

                        x: 500,
                        y: 200,
                        value:data2[0],
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
                        name: '枣庄',
                        x: 550,
                        y: 300,
                        value:data2[3],
                        isnode:true,
                        symbolSize: 10,
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
                        value:data2[4],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[5],
                        isnode:true,
                        symbolSize: 25,
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
                        value:data2[6],
                        isnode:true,
                        symbolSize: 25,
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
                        value:data2[7],
                        isnode:true,
                        symbolSize:25,
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
                        value:data2[8],
                        isnode:true,
                        symbolSize: 30,
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
                        value:data2[9],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[10],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[11],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[12],
                        isnode:true,
                        symbolSize: 25,
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
                        value:data2[13],
                        isnode:true,
                        symbolSize: 30,
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
                        value:data2[14],
                        isnode:true,
                        symbolSize: 25,
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
                        value:data2[15],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[16],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[17],
                        isnode:true,
                        symbolSize: 50,
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
                        value:data2[18],
                        isnode:true,
                        symbolSize:30,
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
                        value:data2[19],
                        isnode:true,
                        symbolSize: 50,
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
                        value:data2[20],
                        label:{
                            position:['100%','-10%']
                        },
                        isnode:true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                borderColor: '#519FFC',
                                borderType:'solid',
                            }
                        }
                    },
                    // {
                    //     name: '齐鲁\n石化\n党委',
                    //     x: 300,
                    //     y: 300,
                    //     value:data2[21],
                    //     label:{
                    //         position:['100%','-20%']
                    //     },
                    //     isnode:true,
                    //     symbolSize: 20,
                    //     itemStyle: {
                    //         normal: {
                    //             borderColor: '#519FFC',
                    //             borderType:'solid',
                    //         }
                    //     }
                    // },
                    {
                        name: '省外',
                        x: 300,
                        y: 300,
                        value:data2[21],
                        isnode:true,
                        symbolSize: 70,
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
                    // {
                    //     source: '济南',
                    //     target: '齐鲁\n石化\n党委'
                    // }
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
    chart.resize();
    chart.setOption(option);
}
makeChart1212();
function makeChart1213() {//转出
    var chart = echarts.init(document.getElementById('lects12'));
    var data2=[
        14145,
        13,
        11,
        1,
        5,
        9,
        4,
        7,
        16,
        7,
        1,
        4,
        12,
        9,
        14,
        1,
        5,
        99,
        25,
        57,
        52
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
                        textStyle: {
                            fontSize: 30
                        }
                    }
                },
                data: [
                    {
                        name: '青岛',
                        x: 360,
                        y: 100,
                        value:data2[1],
                        isnode:true,
                        symbolSize: 25, //决定圆的大小

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
                        value:data2[2],
                        isnode:true,
                        symbolSize: 25,
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
                        value:data2[0],
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
                        value:data2[3],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[4],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[5],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[6],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[7],
                        isnode:true,
                        symbolSize:20,
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
                        value:data2[8],
                        isnode:true,
                        symbolSize: 30,
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
                        value:data2[9],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[10],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[11],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[12],
                        isnode:true,
                        symbolSize: 25,
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
                        value:data2[13],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[14],
                        isnode:true,
                        symbolSize: 25,
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
                        value:data2[15],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[16],
                        isnode:true,
                        symbolSize: 20,
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
                        value:data2[17],
                        isnode:true,
                        symbolSize: 80,
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
                        value:data2[18],
                        isnode:true,
                        symbolSize: 35,
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
                        value:data2[19],
                        isnode:true,
                        symbolSize: 50,
                        itemStyle: {
                            normal: {
                                borderColor: '#EA4245',
                                // borderWidth: 1,
                                borderType:'solid',
                            }
                        }
                    },
                    // {
                    //     name: '胜利\n油田\n党委',
                    //     x:350,
                    //     y: 350,
                    //     label:{
                    //         position:['110%','-10%']
                    //     },
                    //     value:data2[20],
                    //     isnode:true,
                    //     symbolSize: 20,
                    //     itemStyle: {
                    //         normal: {
                    //             borderColor: '#EA4245',
                    //             borderType:'solid',
                    //         }
                    //     }
                    // },
                    {
                        name: '省外',
                        x: 200,
                        y: 100,
                        value:data2[20],
                        isnode:true,
                        symbolSize: 50,
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
                    // {
                    //     source: '济南',
                    //     target: '胜利\n油田\n党委'
                    // },
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
                    repulsion:[300, 160],
                    gravity:0.1
                }
            }
        ]
    };
    chart.resize();
    chart.setOption(option);
}
// makeChart1213();
function makeChart1312(){
    var chart = echarts.init(document.getElementById('lyuan12'));
    var data = [
        {
        value:179,
        name: '转往省内其他市'
    }, {
        value: 230,
        name: '转往省委直属其他党组织'
    }, {
        value: 743,
        name: '转往市内其他县（市、区）'
    }, {
        value: 456,
        name: '转往市委直属其他党组织'
    }
    , {
        value: 1527,
        name: '转往县（市、区）内其他乡镇（街道）'
    }
    , {
        value: 58,
        name: '转往县（市、区）委直属其他党组织'
    }
    , {
        value: 10406,
        name: '转往本系统内其他党组织'
    }
    , {
        value: 65,
        name: '转往乡镇（街道）直属其他党组织'
    }, {
        value: 228,
        name: '转往外省（区、市）'
    }, {
        value: 2,
        name: '转往军队'
    }, {
        value: 0,
        name: '转往武警部队'
    }];
    option = {
            title: {
                text: '济南组织关系转接转出情况',
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
            data: ['转往省内其他市', '转往省委直属其他党组织', '转往市内其他县（市、区）', '转往市委直属其他党组织','转往县（市、区）内其他乡镇（街道）','转往县（市、区）委直属其他党组织','转往本系统内其他党组织','转往乡镇（街道）直属其他党组织','转往外省（区、市）','转往军队','转往武警部队'],
            itemWidth: 10,
            itemHeight: 10,
            itemGap:7,//legend 间距
            itemBorderRadius: 8,
            orient: 'vertical',
            top: '33px',
            left:'5px',
            textStyle:{
                color:"#fff"
            }
        },
        series: [
            {
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            center: ['70%', '50%'],
            color: ['#00ABFB', '#FBB13A', '#8DC53E', '#ED2024','#FD02FA','#C1262C','#682C8E','#29508B','#2B75B8','#7FA0DF','#6AEEED'],
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
        }
        ]
    };
 chart.setOption(option);
}
makeChart1312()
function makeChart1412(){
    
    var chart = echarts.init(document.getElementById('lyu12'));
    var data = [{
        value:819,
        name: '接收省内其他市'
    }, {
        value: 1,
        name: '接收省委直属其他党组织'
    }, {
        value: 784,
        name: '接收市内其他县（市、区）'
    }
    , {
        value: 462,
        name: '接收市委直属其他党组织'
    }, {
        value: 1549,
        name: '接收县（市、区）内其他乡镇（街道）'
    }
    , {
        value: 58,
        name: '接收县（市、区）委直属其他党组织'
    }

    , {
        value: 10407,
        name: '接收本系统内其他党组织'
    }
    , {
        value: 65,
        name: '接收乡镇（街道）直属其他党组织'
    }, {
        value: 116,
        name: '接收外省（区、市）'
    }, {
        value: 128,
        name: '接收军队'
    }
    , {
        value: 9,
        name: '接收武警部队'
    }
    ];
    option = {
            title: {
                text: '济南组织关系转接转入情况',
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
            data: ['接收省内其他市', '接收省委直属其他党组织', '接收市内其他县（市、区）','接收市委直属其他党组织','接收县（市、区）内其他乡镇（街道）','接收县（市、区）委直属其他党组织','接收本系统内其他党组织','接收乡镇（街道）直属其他党组织','接收外省（区、市）','接收军队','接收武警部队'],
            itemWidth: 10,
            itemHeight: 10,
            itemGap:7,//legend 间距
            itemBorderRadius: 8,
            orient: 'vertical',
            top: '30px',
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
            color: ['#00ABFB', '#FBB13A', '#8DC53E', '#ED2024','#FD02FA','#C1262C','#682C8E','#29508B','#2B75B8','#ED2024','#2F8617'],
    
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
makeChart1412()
function w_pies12(){
    var chart = echarts.init(document.getElementById('w_pies12'));
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
                    {value:57, name:'安全员'},
                    {value:15, name:'审计员'},
                    {value:20864, name:'管理员'},
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
  w_pies12()
  var w_myChartwei = echarts.init(document.getElementById('w_mainttss'));
  
  var w_option = {
  
      title:{
          text: '济南基层党支部开展活动情况(单位:次)',
          textStyle: {
              fontWeight: 'normal',
              fontSize: 18,
              color: '#fff',
              fontWeight:'bolder',
              fontFamily:'黑体'
          },
          left: '30px'
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
              axisLabel:{
                  color:'#fff'
              },
              axisLine: {
                  lineStyle: {
                      width: 1,
                      color: '#57617B',//左边线的颜色
                  },
              },
              data :  ['党\n小组会 ','支部\n委员会','支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员',  '评选\n优秀党员 ', '主题\n党日'],
          }, {
              axisLine: {
                  lineStyle: {
                      color: '#57617B'
                  }
              }
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
              data:[ 2574, 3356, 836, 3261, 722, 7197, 193, 4135, 10610],
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
                  w_myChartwei.setOption(w_option);
  
var w_myChart21 = echarts.init(document.getElementById('w_mainttsqq'));
  
  
      w_optiont1 = {
        title: {
            text: '济南直属党(工)委管理人员数量分布情况(单位:人)',
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
        dataZoom: [{
            show: false,
        }, {
            type: 'inside'
        }],
        xAxis: [{
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
                
            },
            dataZoom: [{
                show: false,
            }, {
                type: 'inside'
            }],
            axisLabel: {
                color:'#fff'
                // interval:0,
                // rotate:30
             }  ,
            type: 'category',
            data:['平阴县','济阳县', '商河县', '历下区', '市中区', '槐荫区', '天桥区', '历城区', '长清区', '章丘区', '高新区', '市直机关','南部山区','经信委','教委','公安局','民政局','司法局','财政局','人社局','规划局','城市管理局','交通运输','文化广电新闻出版局','卫生和计划生育委员会','食品药品监督局','体育局','国资委','住房保障房产管理局','质量技术监督局','供销合作社','广播电视台','税务局','烟草局','邮政集团','中国重汽集团','齐鲁银行','电力公司','联合网络通信','中国移动','中国石化','山东石油集团','山东机车车辆','济钢集团','中烟工业','黄台电厂','章丘发电','新旧动能转换先行区','国际医学科学中心','城市投资集团','城市建设','产业发展投资','轨道交通','金融控股公司','文旅发展集团','公共交通总公司','城乡建设委员会']
        }],
        yAxis: [{
            type: 'value',
          
            axisLabel: {
                formatter: '{value}',
                color:"#fff",
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
            data:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        }, {
            name:'审计员',
            type: 'bar',
            data:[0,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                1,
                1,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                2,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                ]
        }, {
            name:'管理员',
            type: 'bar',
             data:[949 ,
                1537,
                1393,
                1400,
                1445,
                1091,
                1201,
                1385,
                1765,
                2420,
                771 ,
                1372,
                483 ,
                48  ,
                366 ,
                330 ,
                134 ,
                131 ,
                35  ,
                122 ,
                29  ,
                54  ,
                60  ,
                20  ,
                151 ,
                10  ,
                23  ,
                503 ,
                30  ,
                17  ,
                28  ,
                27  ,
                86  ,
                15  ,
                40  ,
                347 ,
                140 ,
                96  ,
                61  ,
                24  ,
                18  ,
                15  ,
                1   ,
                69  ,
                41  ,
                33  ,
                12  ,
                1   ,
                2   ,
                197 ,
                52  ,
                90  ,
                22  ,
                6   ,
                5   ,
                84,
                77
                ]
        }]
    };
  w_myChart21.setOption(w_optiont1);

