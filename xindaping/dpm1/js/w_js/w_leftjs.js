// 党员年龄分布
function w_age(){
var myChart_age = echarts.init(document.getElementById('w_age2'));
var option_gyt_age = {
//  color: ['#ebe20c', '#126413', '#1389d6', '#ff4200', '#55d7ff'],
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
          color: ['#5d9cec', '#ac92ed', '#ec87bf', '#ed5564','#48cfae','#66ff00','#00ff8a','#00d8ff','#0096ff','#0048ff'],
            label: {
            normal: {
                formatter: '{b}\n{d}%',
                textStyle: {
                     color: 'rgba(255,255,255,0.7)',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true,
                    length:5,
                    length2:7,
                     color: 'rgba(255,255,255,0.7)',
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
};
w_age();


// 党员年龄分布
function w_sex(){
var myChart_age = echarts.init(document.getElementById('w_xueli'));
var option_gyt_age = {
    tooltip: {},
//  legend: {
//      data: ['学历']
//  },
    radar: {
        // shape: 'circle',
        radius:72, // 雷达图 大小
        name: {
            textStyle: {
                color: 'rgba(255,255,255,0.7)',
                borderRadius: 1,
                padding: [3, 15]
           }
        },
        splitArea: {
            areaStyle: {
//              color: ['rgba(81,159,252,1)', 'rgba(81,159,252,0.8)', 'rgba(81,159,252,0.6)', 'rgba(81,159,252,0.4)', 'rgba(81,159,252,0.2)'],
//              shadowColor: 'rgba(0, 100, 0, 0.3)'
				color:['rgba(81,159,252,0.1)']
            }
        },
        indicator: [
           { name: '小学', max: 6500},
           { name: '初中', max: 16000},
           { name: '高中', max: 30000},
           { name: '中专', max: 38000},
           { name: '大学', max: 52000},
           { name: '研究生', max: 25000}
        ]
    },
    series: [{
        name: '学历',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '学历'
            }
        ],
        lineStyle: {
            width: 6,
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default'
                },
                color: '#ed5564',
            }
        },
    }]
};
myChart_age.setOption(option_gyt_age);
};
w_sex();



// 工作岗位
function w_gangwei(){
var myChart_age = echarts.init(document.getElementById('w_work'));
var option_gyt_age = {
    color: ['#ebe20c', '#126413', '#1389d6', '#ff4200', '#55d7ff'],
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
            frontSize:10
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
          color: ['#48cfae', '#50c0e8', '#5d9cec', '#ac92ed','#d2ff00','#66ff00','#00ff8a','#00d8ff','#0096ff','#0048ff'],
            label: {
            normal: {
                formatter: '{b}\n{d}%',

                textStyle: {
                     color: 'rgba(255,255,255,0.7)',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true,
                    length:9,
                    length2:7,
                     color: 'rgba(255,255,255,0.7)',
                }
            },
            data: [
                { value: 762, name: '在岗职工' },
                { value: 586705, name: '农牧渔民' },
                { value: 996390, name: '解放军' },
                { value: 1240669, name: '武警' },
                { value: 1095069, name: '离退休人员' },
                { value: 1166139, name: '其他人员' },
            ]
        }
    ]
};
myChart_age.setOption(option_gyt_age);
};
w_gangwei();

// 总数
function w_all(){
var myChart = echarts.init(document.getElementById('w_allz'));
	optionxx = {
//backgroundColor: "#062a44",
  series: [{
    name: '刻度',
    type: 'gauge',
    radius: '90%',
    min:0,
    max:9800,
    splitNumber:10, //刻度数量
    startAngle: 220,
    endAngle: -40,
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: [[1,'rgba(0,0,0,0)']]
      }
    },//仪表盘轴线
    axisLabel: {
      show: true,
      color:'rgba(255,255,255,0.7)',
      distance:-30
    },//刻度标签。
    axisTick: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.7)',
        width: 1
      },
      length: -8
    },//刻度样式
    splitLine: {
      show: true,
      length: -10,
      lineStyle: {
        color: 'rgba(255,255,255,0.7)'
      }
    },//分隔线样式
    detail: {
      show: false
    },
    pointer: {
      show: false
    }
  },
    {
      type: 'gauge',
      radius: '80%',
      center: ['50%', '50%'],

      splitNumber: 0, //刻度数量
      startAngle: 220,
      endAngle: -40,
      axisLine: {
        show: true,
        lineStyle: {
          width:25,
          color: [
            [
              0.98, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#ae3df6'
            },
              {
                offset: 1,
                color: '#53bef9'
              }
            ]
              )
            ],
            [
              1, '#222e7d'
            ]
          ]
        }
      },
      //分隔线样式。
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      title: {
        show: true,
        offsetCenter: [0, '-20%'], // x, y，单位px
        textStyle: {
          color: '#ddd',
          fontSize: 15
        }
      },
      //仪表盘详情，用于显示数据。
      detail: {
        show: true,
        offsetCenter: [0, 0],
        color: '#ddd',
        formatter: function(params) {
      return params
    },
    textStyle: {
      fontSize: 25
    }
    },
    data: [{
    name: "党组织管理员总数",
    value: 98000
    }]
  }
  ]
};
myChart.setOption(optionxx)
}
w_all()

//开通率
w_kai()
function w_kai(){

var myChart = echarts.init(document.getElementById('w_kaitong'));
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};
var dataStyle = {
    normal: {
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '28',
            fontWeight: 'normal',
            color: 'rgba(255,255,255,0.7)'
        }
    }
};
option = {
	title: [
       {
        text: '党组织管理员开通率',
        left: '50%',
        top: '50%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
        },
    }],
    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['65%', '85%'],
            center: ['50%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#99da69'
                            }, {
                                offset: 1,
                                color: '#01babc'
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },

            ]
        },

        

    ]
};
myChart.setOption(option)

}

// 
w_ditu()
function w_ditu(){
	var  myChart = echarts.init(document.getElementById('w_ditu'));
	$.getJSON('js/w_js/china.json', function(tGeoDt) {
    	echarts.registerMap('china', tGeoDt);
//  	var convertData = function (data) {
//		    var res = [];
//		    for (var i = 0; i < data.length; i++) {
//		        var geoCoord = geoCoordMap[data[i].name];
//		        if (geoCoord) {
//		            res.push({
//		                name: data[i].name,
//		                value: geoCoord.concat(data[i].value)
//		            });
//		        }
//	    }
//  	return res;
	
	var geoCoordMap = {
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '贵阳': [106.6992, 26.7682],
        '西安': [109.1162, 34.2004],
        '深圳': [114.5435, 22.5439],
        '济南': [117.1582, 36.8701],
        '海口': [110.3893, 19.8516],
        '沈阳': [123.1238, 42.1216],
        '武汉': [114.3896, 30.6628],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '成都': [103.9526, 30.7617],
        '拉萨': [91.1865, 30.1465],
        '天津': [117.4219, 39.4189],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '哈尔滨': [127.9688, 45.368],
        '北京': [116.4551, 40.2539],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '乌鲁木齐': [87.9236, 43.5883],
        '上海': [121.4648, 31.2891],

    };

    var data = [{
        name: '长春',
        value: 90
    }, {
        name: '长沙',
        value: 10
    }, {
        name: '贵阳',
        value: 20
    }, {
        name: '西安',
        value: 20
    }, {
        name: '深圳',
        value: 20
    }, {
        name: '济南',
        value: 50
    }, {
        name: '海口',
        value: 58
    }, {
        name: '沈阳',
        value: 64
    }, {
        name: '武汉',
        value: 68
    }, {
        name: '昆明',
        value: 45
    }, {
        name: '杭州',
        value: 68
    }, {
        name: '成都',
        value: 49
    }, {
        name: '拉萨',
        value: 66
    }, {
        name: '天津',
        value: 86
    }, {
        name: '合肥',
        value: 58
    }, {
        name: '呼和浩特',
        value: 59
    }, {
        name: '哈尔滨',
        value: 95
    }, {
        name: '北京',
        value: 68
    }, {
        name: '南京',
        value: 56
    }, {
        name: '南宁',
        value: 89
    }, {
        name: '南昌',
        value: 48
    }, {
        name: '乌鲁木齐',
        value: 49
    }, {
        name: '上海',
        value: 78
    },

    ];

    function formtGCData(geoData, data, srcNam, dest) {
        var tGeoDt = [];
        if (dest) {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[srcNam], geoData[data[i].name]]
                    });
                }
            }
        } else {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[data[i].name], geoData[srcNam]]
                    });
                }
            }
        }
        return tGeoDt;
    }

    function formtVData(geoData, data, srcNam) {
        var tGeoDt = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var tNam = data[i].name
            if (srcNam != tNam) {
                tGeoDt.push({
                    name: tNam,
                    value: geoData[tNam]
                });
            }

        }
        tGeoDt.push({
            name: srcNam,
            value: geoData[srcNam],
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: 'red',
                    borderColor: '#000'
                }
            }
        });
        return tGeoDt;
    }

    //var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var planePath = 'arrow';

option = {

    title: [{
        text: '全国省份访问量',
        left: '30%',
        top: '10px',
         textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
    },
   ],
    tooltip: {
        trigger: 'item',
    },
    
    geo: {
        map: 'china',
        layoutCenter: ['38%', '52%'], //地图位置
        layoutSize: "120%",// 放大比例
        label: {
            emphasis: {
                show: false,
                aspect :10,
            }
        },
        roam: true,
        silent: true,
        itemStyle: {
            normal: {
                areaColor: 'rgba(1,1,1,0)',
                borderColor: '#198df4',
                width:30,
            },
            emphasis: {
                areaColor: 'yellow'
            }
        }
    },

    series: [{
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                color: 'rgba(0,0,0,0)',
                symbol: planePath,
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: formtGCData(geoCoordMap, data, '济南', true)
        },
            {

                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 3,
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    
                    color: 'rgba(255,255,255,0.5)',
                    symbol: planePath,
                    symbolSize: 8
                },
                lineStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data: formtGCData(geoCoordMap, data, '济南', false)
            },
            {

                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbol: 'circle',
            symbolSize: function(val) {
                return 4 + val[2] / 1000; //圆环大小
            },
                
                itemStyle: {
                    normal: {
                        color: 'write',
                        borderColor: 'rgba(255,255,255,0.8)'
                    }
                },

                data: formtVData(geoCoordMap, data, '济南')
            },
    ]
};
myChart.setOption(option)
})
}
zhus();
function zhus(){
	var  myChart = echarts.init(document.getElementById('lkst'));
	

var xData = ['山东','北京','天津','河北','河南','安徽','吉林','广西','新疆','甘肃'].reverse();

var datas = [13.7, 13.4, 13.5, 16.1, 17.4,13.7, 13.4, 13.5, 16.1, 17.4]

var data=datas.sort(function(a,b){
    return a-b;
});
option = {
    title:{
        text: 'TOP10排行榜',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
       left:'60',
       
    },
    tooltip: {
        show: "true",
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [10, 10], //内边距
    },
    grid: {
        borderWidth: 0,
        top: 60,
        left:35,
        right:15,
        bottom: 30,
        textStyle: {
            color: "#fff"
        }
    },
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#363e83',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
        },
        data: xData,
    }, {
        type: 'category',
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: xData,
    }],
    xAxis: {
        type: 'value',
        position:'top',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#2f3640',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#2f3640 ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: '{value}k',
        },
    },
    series: [{
            name: '',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00c0e9'
                    }, {
                        offset: 1,
                        color: '#3b73cf'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(105,123, 214, 0.7)'
                }
            },
            zlevel: 2,
            barWidth: '20%',
            data: data,
        },
        {
            name: '',
            type: 'bar',
            yAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#121847',
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
            barWidth: '20%',
            data: [30, 30, 30, 30, 30,30, 30, 30, 30, 30]
        }
    ]
}
	
	myChart.setOption(option)
}
