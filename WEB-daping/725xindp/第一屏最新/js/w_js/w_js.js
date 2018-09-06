// 23个党工委人员  共有多少人     目前在线 多少人
$('.w_fanhui').hide();
//var w_chart = echarts.init(document.getElementById('lfbu'));

function makeChartl1ddd(id) {
    w_option = {
        // backgroundColor: '#394056',
        title: {
            text: '23个党工委各共多少人',
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
         legend: {
	    
	        "x": "center",
	        "y": "2%",
//	        "data": [
//	            "总共人数",
//	            "目前在线人数",
//	        ],
	        "textStyle": {
	            "color": "#fff"
	        }
    	},
        tooltip: {
            trigger: 'axis',
			formatter: '{a0}: {c0}<br />{a1}: {c1}',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
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
            // boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            // axisLabel:{
            //     interval:0,//横轴信息全部显示
            //     color:'#fff'
            // },
            axisLabel:{
                interval: 0,
                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: '#fff',

                },
                    formatter:function (params){
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
                offset: 20,

            }],
        yAxis: [
            {

                type: 'value',
//              min: 0,
//              max: 40000,
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
                    
                    
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
        ],
        series: [
            {
                name: '总共人数',
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
                        color: '#29abe2',
                    }
                },
//              data: [18765, 29238, 13488, 9299, 6257, 20594, 24566,
//                  19260, 13678, 9787, 8542, 4006, 19899, 14846, 13548,
//                  11598, 11813, 6968, 3615, 2483, 3164, 454, 121
//              ],

            },
//          {
//              name: '目前在线人数',
//              type: 'bar',
//              barWidth:10,
//              barGap:20,
//              smooth: true,
//              stack: 'sum',
//              // symbol: 'triangle',
//              symbolSize: 5,
//              showSymbol: true,
//              lineStyle: {
//                  normal: {
//                      width: 1
//                  }
//              },
//              areaStyle: {
//                  normal: {
//                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                          offset: 0,
//                          color: 'rgba(234,166,58, 0.4)'
//                      }, {
//                          offset: 1,
//                          color: 'rgba(234,166,58, 0.1)'
//                      }], false),
//                      shadowColor: 'rgba(0, 0, 0, 0.1)',
//                      shadowBlur: 10
//                  }
//              },
//              itemStyle: {
//                  normal: {
//                      color: '#9ad945',
//
//
//                  }
//              },
//              data:[1958, 1309, 282, 118, 122, 342, 567,
//                  117, 209, 251, 168, 44, 923, 530, 765,
//                  159, 32, 1204, 287, 148, 2031, 224, 12
//              ]
//          },
        ]
    };
    if(id==1){
    	$.getJSON('js/w_js/renshu.json',function(res){
	    	console.log(res);
	//  	w_option.xAxis[0].data=res.data;
	    	w_option.series[0].data=res.value;
	//  	w_option.series[1].data=res.online;
	    	w_chart.setOption(w_option);
	    })
    }else if(id==2){
    	$.getJSON('js/w_js/renshu.json',function(res){
	    	console.log(res);
	//  	w_option.xAxis[0].data=res.data;
	    	w_option.series[0].data=res.online;
	//  	w_option.series[1].data=res.online;
	    	w_chart.setOption(w_option);
	    })
    }
    
    
    
    
}
//makeChartl1(1);

//
//  w_chart.on('click',function(z){
//  	if(z.name=='济南'){
//		    $.getJSON('js/w_js/jinan2.json',function(res){
//		  		w_option.xAxis[0].data=res.data;
//		  		w_option.dataZoom=[{
//			        "show": true,
//			        "height": 20,
//			        "xAxisIndex": [
//			            0
//			        ],
//		        	bottom: 10,
//		        	"start": 0,
//		        	"end": 10,
//		        	handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
//		        	handleSize: '110%',
//			        handleStyle:{
//			            color:"#ddd",	            
//			        },
//			        textStyle:{
//			            color:"#fff"
//			        },
//		           	borderColor:"#eee" 
//				    }, {
//				        "type": "inside",
//				        "show": true,
//				        "height": 15,
//				        "start": 1,
//				        "end": 35
//				    }];
//		    	w_option.series[0].data=res.value;
//		    	w_option.series[1].data=res.online;
//		    	w_chart.setOption(w_option);
//		    })
//
//  		$('.w_fanhui').show();
//  		w_chart.setOption(w_option);
//  	}else if(z.name=='青岛'){
//			$.getJSON('js/w_js/qingdao2.json',function(res){
//
//		  		w_option.xAxis[0].data=res.data;
//		  		w_option.dataZoom=[{
//			        "show": true,
//			        "height": 20,
//			        "xAxisIndex": [
//			            0
//			        ],
//		        	bottom: 10,
//		        	"start": 0,
//		        	"end": 10,
//		        	handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
//		        	handleSize: '110%',
//			        handleStyle:{
//			            color:"#ddd",	            
//			        },
//			        textStyle:{
//			            color:"#fff"
//			        },
//		           	borderColor:"#eee" 
//				    }, {
//				        "type": "inside",
//				        "show": true,
//				        "height": 15,
//				        "start": 1,
//				        "end": 35
//				    }]
//		    	w_option.series[0].data=res.value;
//		    	w_option.series[1].data=res.online;
//		    	w_chart.setOption(w_option);
//		    })
//  		$('.w_fanhui').show();
//  		w_chart.setOption(w_option);
//  	}
//  })
//  $('.w_fanhui').click(function(){
//
//  	$.getJSON('js/w_js/renshu.json',function(res){
//
//              w_option.xAxis[0].data=['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直机关工委','省委教育工委','省国资委党委','胜利油田党委','齐鲁石化党委','黄三角党工委']
//		    	w_option.series[0].data=res.value;
//		    	w_option.series[1].data=res.online;
//		    	w_option.dataZoom=[{
//		    		'show':false,
//		    		"start": 0,
//      			"end": 100,
//		    	}];
//		    	w_chart.setOption(w_option);
//		    })    		
//  	w_chart.setOption(w_option);
//  	$('.w_fanhui').hide()
//  })


//  党组织 
//getshandong()
function getshandong(){
$.getJSON("js/w_js/shandong.json", function(res) {
    echarts.registerMap('shandong', res );
    var myChart = echarts.init(document.getElementById('lect'));
    myChart.hideLoading();
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
    }
    var data = [
        {name: '济南市', value: 390},
        {name: '菏泽市', value: 158},
        {name: '德州市', value: 252},
        {name: '聊城市', value: 99},
        {name: '泰安市', value: 189},
        {name: '临沂市', value: 52},
        {name: '淄博市', value: 158},
        {name: '枣庄市', value: 152},
        {name: '滨州市', value: 189},
        {name: '潍坊市', value: 160},
        {name: '东营市', value: 80},
        {name: '青岛市', value: 180},
        {name: '烟台市', value: 190},
        {name: '威海市', value: 290},
        {name: '日照市', value: 190},
        {name: '济宁市', value: 190},
        {name: '莱芜市', value: 290},
        
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
    option = {
        backgroundColor: '#020933',
        title: {
            top:10,
            text: '党组织：23个党工委党组织注册开通分布图',
            subtext: '',
            x: 'left',
            textStyle: {
                color: '#ccc'
            }
        },    

        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
     /*   legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
             data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },*/
            legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
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
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
            show: true,
            map: 'shandong',
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
                    areaColor: '#2B91B7', //鼠标画上颜色
                }
            }
        },
        series : [
      	{
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo', //该系列使用的坐标系，  'cartesian2d'二维的直角坐标系        'polar'使用极坐标系，通过 polarIndex 指定相应的极坐标组件      'geo' 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}', //标题
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
            map: 'shandong',
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
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#FFFFFF',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: 'Top 10',  //前 10
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 10)), // 取 前10 位  放波
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke' //涟漪效果  可选值为 'stroke' 和 'fill'，默认情况下使用：'fill'。
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
    
    myChart.setOption(option);
});
}

//getDangyuan()
function getDangyuan(){
$.getJSON("js/w_js/shandong.json", function(res) {
    echarts.registerMap('shandong', res );
    var myChart = echarts.init(document.getElementById('lects'));
    myChart.hideLoading();
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
    }
    var data = [
        {name: '济南市', value: 390},
        {name: '菏泽市', value: 158},
        {name: '德州市', value: 252},
        {name: '聊城市', value: 199},
        {name: '泰安市', value: 189},
        {name: '临沂市', value: 352},
        {name: '淄博市', value: 158},
        {name: '枣庄市', value: 152},
        {name: '滨州市', value: 189},
        {name: '潍坊市', value: 160},
        {name: '东营市', value: 380},
        {name: '青岛市', value: 180},
        {name: '烟台市', value: 190},
        {name: '威海市', value: 290},
        {name: '日照市', value: 190},
        {name: '济宁市', value: 190},
        {name: '莱芜市', value: 290},
        
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
    option = {
        backgroundColor: '#020933',
        title: {
            top:10,
            text: '党组织：23个党工委党组织注册开通分布图',
            subtext: '',
            x: 'left',
            textStyle: {
                color: '#ccc'
            }
        },    

        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
     /*   legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
             data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },*/
            legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
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
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
            show: true,
            map: 'shandong',
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
                    areaColor: '#2B91B7', //鼠标画上颜色
                }
            }
        },
        series : [
      	{
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo', //该系列使用的坐标系，  'cartesian2d'二维的直角坐标系        'polar'使用极坐标系，通过 polarIndex 指定相应的极坐标组件      'geo' 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}', //标题
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
            map: 'shandong',
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
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#FFFFFF',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: 'Top 10',  //前 10
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 10)), // 取 前10 位  放波
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke' //涟漪效果  可选值为 'stroke' 和 'fill'，默认情况下使用：'fill'。
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
    
    myChart.setOption(option);
});
}