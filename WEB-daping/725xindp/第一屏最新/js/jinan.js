$(function(){
    $("#scrollDiv").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
    $("#scrollDiv1").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
    $("#scrollDiv2").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
   
    $('.w_tipbar li').first().addClass('active_bar')
    $('.w_tipbar li').mouseover(function(){
    $(this).addClass('active_bar').siblings().removeClass('active_bar')
    var sum=$(this).index();
    $('.navbars').eq(sum).stop(true,true).slideDown().siblings('.navbars').hide()
    })
    $('.w_tipbar1 li').first().addClass('active_bar')
    $('.w_tipbar1 li').mouseover(function(){
    $(this).addClass('active_bar').siblings().removeClass('active_bar')
    var sum=$(this).index();
    $('.wangchaos').eq(sum).stop(true,true).show().siblings('.wangchaos').hide()
    })
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
        $('.counter').countUp();
        $('#mapChange').on('click',function (){
          $('.province').hide();
          $('.jinanmap').show();
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
          $('.province').show();
          $('.map_bg').hide();
          $('#return').hide();
          $('.zibo').hide();
          $('.weifang').hide();
          $('.qingdao').hide();
          $('.jinan').hide();
          $('.jinandata').hide();
          $('.zaozhuang').hide();
          })
    
})
/**性别年龄**/
function sex5(){
    var chart = echarts.init(document.getElementById('lsex5'));
    var data = [{
        value:20418,
        name: '男'
    }, {
        value: 8911,
        name: '女'
    }];
    option = {
        title: {
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },

        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color:['#39b54a','#00aafa'],

            label: {
                position:'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding:20,
                        lineHeight:'222',
                    }
                },

            },
            labelLine: {

                normal: {
                    show: true,
                    length:9,
                    length2:17,
                }
            },
            data: data
        }]
    };
    chart.setOption(option);
};
//sex5()
/**性别年龄**/
function sex4(){
    var chart = echarts.init(document.getElementById('lsex4'));
    var data = [{
        value:6279,
        name: '30岁及以下'
    }, {
        value: 11916,
        name: '31-40岁'
    }, {
        value: 6253,
        name: '41-50岁'
    },  {
        value: 3558,
        name: '51-60岁'
    },{
        value: 1323,
        name: '61岁及以上'
    }];
    option = {
        title: {
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },
        series: [{
            type: 'pie',
            top:'-20',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],

            label: {
                position:'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding:20,
                        lineHeight:'222',
                    }
                },

            } ,labelLine: {

                normal: {
                    show: true,
                    length:9,
                    length2:17,
                }
            },
            data: data
        }]
    };
    chart.setOption(option);
};
//sex4()
/**性别年龄**/
function sex6(){
    var chart = echarts.init(document.getElementById('lsex6'));
    var data = [{
        value:5737,
        name: '初中及以下'
    }, {
        value: 6200,
        name: '高中/中专'
    }, {
        value: 15210,
        name: '本科/专科'
    },  {
        value: 2182,
        name: '研究生及以上'
    }];
    option = {
        title: {
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },

        series: [{
            type: 'pie',
            top:'-20',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],

            label: {
                position:'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding:20,
                        lineHeight:'222',
                    }
                },
            },
            labelLine: {

                normal: {
                    show: true,
                    length:9,
                    length2:17,
                }
            },
            data: data
        }]
    };
    chart.setOption(option);
};
//sex6()

    //   WEB/APP/微信访问分布饼状图
    function w_pie11(){
        var chart = echarts.init(document.getElementById('w_pie11'));
        option = {
            title : {
                text: '',
                subtext: '',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
            },
        
            series : [
                {
        
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    color: ['#29ABE2', '#FBB03B','#4BD100'],
                    data:[
                        {value:39638691, name:'WEB'},
                        {value:61898901, name:'APP'},
                        {value:1934328, name:'微信'},
                    ],
                      label: {
                    position:'bottom',
                      normal: {
                        formatter: '{b}\n{d}%',
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
//    w_pie11()
      function makeChart22() {
        var chart = echarts.init(document.getElementById('lect22'));
        option = {
        // backgroundColor: '#394056',
        title: {
            text: '济南直属党(工)委所属党支部开通e支部情况',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体'
            },
            left: '2%',
            top:'2%',
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
            top:'15%',
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
                show:'false',
                lineStyle: {
                    color: '#57617B',
                },
               
            },
            
            
            axisLabel:{
                // textStyle: {
                //     fontSize: 14,
                //     color:'#fff'
                // },
                clickable:true,//并给图表添加单击事件  根据返回值判断点击的是哪里
                interval : 3,//横轴信息显示
                formatter : function(params){
                    if(params.search("有限")!=-1){//限制责任公司、有限公司字符太长
                        params=params.replace("股份有限公司","");
                        params=params.replace("有限公司","");
                        params=params.replace("有限责任公司","");
                    }
                    var newParamsName = "";// 最终拼接成的字符串
                    var paramsNameNumber = 8;// 实际标签的个数
                    var provideNumber = 4;// 每行能显示的字的个数
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
                },
                // fontSize:10,字体太小
            color:'#fff'   ,
            },
            data:['中国石油化工股份有限公司','平阴县','轨道交通集团有限公司','产业发展投资集团有限公司','高新技术产业开发区工作'  ,'山东省电力公司','市市中区','中国重型汽车集团有限公司','长清区','地方税务局' ,'质量技术监督局','历下区','金融控股集团有限公司','山东省石油集团','济阳县' ,'市文化广电新闻出版局','山东中烟工业有限责任公司','市槐荫区','市经济和信息化','中国联合网络通信集团有限公司' ,'市规划局','国际医学科学中心','齐鲁银行股份有限公司','市民政局','济钢集团有限公司' ,'市食品药品监督管理局','华电章丘发电有限公司','市住房保障和房产管理局','市城乡建设','商河县' ,'人民政府国有资产监督管','城乡交通运输','城市管理局','旅发展集团有限公司','司法局' ,'烟草专卖局','财政局','供销合作社','公共交通总公司','新旧动能转换先行区' ,'市公安局','城市投资集团有限公司','市教育局','中国移动通信','南部山区' ,'市卫生和计划生育','市委市直机关工作','黄台发电有限公司','市体育局','市天桥区','市人力资源和社会保障','市历城区 ','城市建设集团有限公司','广播电视台 ','中国邮政集团公司  ','章丘区 ']
        }, {
            axisPointer: {
                show: false
            },
            axisLabel :{
                interval:0
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
            max: 2500,
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
        }],
        series: [{
            name: '开通量',
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
                    color: 'rgb(234,166,58)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12
    
                }
            },
            data: [
                12   ,
                878  ,
                17   ,
                67   ,
                696  ,
                3    ,
                1223 ,
                311  ,
                1649 ,
                77   ,
                13   ,
                1197 ,
                6    ,
                18   ,
                1630 ,
                42   ,
                32   ,
                946  ,
                37   ,
                46   ,
                28   ,
                1    ,
                106  ,
                115  ,
                2    ,
                6    ,
                8    ,
                26   ,
                63   ,
                1351 ,
                451  ,
                49   ,
                41   ,
                5    ,
                126  ,
                14   ,
                31   ,
                24   ,
                80   ,
                1    ,
                310  ,
                152  ,
                383  ,
                20   ,
                432  ,
                124  ,
                1127 ,
                26   ,
                14   ,
                1156 ,
                106  ,
                1265 ,
                47   ,
                24   ,
                31   ,
                2154 ,
                
            ]
        }]
    };
    chart.setOption(option);
    }
//  makeChart22();
    function makeChart33() {
        var chart = echarts.init(document.getElementById('lect33'));
        option = {
        // backgroundColor: '#394056',
        title: {
            text: '济南直属党(工)委所属党员注册分布情况',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体'
            },
            left: '2%',
            top:'2%',
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
            top:'15%',
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
            // interval:0,//横轴信息全部显示
            color:'#fff' ,
            },
            data:['平阴县','济阳县', '商河县', '历下区', '市中区', '槐荫区', '天桥区', '历城区', '长清区', '章丘区', '高新区', '市直机关','南部山区','经信委','教委','公安局','民政局','司法局','财政局','人社局','规划局','城市管理局','交通运输','文化广电新闻出版局','卫生和计划生育委员会','食品药品监督局','体育局','国资委','住房保障房产管理局','质量技术监督局','供销合作社','广播电视台','税务局','烟草局','邮政集团','中国重汽集团','齐鲁银行','电力公司','联合网络通信','中国移动','中国石化','山东石油集团','山东机车车辆','济钢集团','中烟工业','黄台电厂','章丘发电','新旧动能转换先行区','国际医学科学中心','城市投资集团','城市建设','产业发展投资','轨道交通','金融控股公司','文旅发展集团','公共交通总公司','城乡建设委员会']
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
            max: 60000,
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
        }],
        series: [{
            name: '注册量',
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
            data: [24152,
                26267,
                26326,
                33816,
                34528,
                27369,
                32057,
                35564,
                36412,
                55523,
                17294,
                17698,
                10213,
                668  ,
                7756 ,
                5674 ,
                3581 ,
                1640 ,
                382  ,
                2931 ,
                423  ,
                834  ,
                689  ,
                448  ,
                4220 ,
                115  ,
                345  ,
                9025 ,
                734  ,
                214  ,
                228  ,
                530  ,
                824  ,
                366  ,
                445  ,
                4564 ,
                1359 ,
                845  ,
                1723 ,
                422  ,
                911  ,
                301  ,
                0    ,
                3524 ,
                1020 ,
                944  ,
                199  ,
                18   ,
                11   ,
                3558 ,
                1404 ,
                841  ,
                329  ,
                50   ,
                109  ,
                1662 ,
                1324 ,]
        }]
    };
    chart.setOption(option);
    }
//  makeChart33();


    
    