
$(function(){
    $("#scrollDiv").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
    $("#scrollDiv1").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
    $("#scrollDiv2").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});

    $('.w_tipbar1 li').first().addClass('active_bar')
//  新闻关注TOP10
	$('#lkls').html('新闻关注TOP10');
    $('.w_tipbar1 li').mouseover(function(){
        $(this).addClass('active_bar').siblings().removeClass('active_bar')
        var sum=$(this).index();
        if(sum>0){
        	$('#lkls').html('页面访问');
        }else{
        	$('#lkls').html('新闻关注TOP10');
        }
        $('.wangchao').eq(sum).stop(true,true).show().siblings('.wangchao').hide()
    })
    $('.w_tipbar_w li').first().addClass('active_bar')
    sessionStorage.setItem('w_z','1')
     $('.w_tipbar_w li').mouseover(function(){
        $(this).addClass('active_bar').siblings().removeClass('active_bar');
        if($(this).html()=='总计人数'){
        	makeChartl1(1);

        	sessionStorage.setItem('w_z','1')
        }else{
        	makeChartl1(2)

        	sessionStorage.setItem('w_z','2')
        }
//      $('.wangchao').eq(sum).stop(true,true).show().siblings('.wangchao').hide()
    })
	  $('.w_tipbar1s li').first().addClass('active_bar');
     $('.w_tipbar1s li').mouseover(function(){
        $(this).addClass('active_bar').siblings().removeClass('active_bar')
        var sum=$(this).index();
        $('#zxts .w_bt').eq(sum).removeClass('hide').siblings().addClass('hide')
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
        $('.jinandata').show();
        $('#map_bg').hide();
        $('.map_bg').show();
        $('#return').show();
        $('.weifang').hide();
        $('.qingdao').hide();
        $('.zibo').hide();
        $('.taian').hide();
    })
    $('#zibo').on('click',function (){
        $('#map_bg').hide();
        $('.zibo').show();
        $('#return').show();
        $('.map_bg').hide();
        $('.zaozhuang').hide();
        $('.weifang').hide();
        $('.qingdao').hide();
        $('.taian').hide();
    })
    $('#weifang').on('click',function (){
        $('#map_bg').hide();
        $('.weifang').show();
        $('#return').show();
        $('.qingdao').hide();
        $('.map_bg').hide();
        $('.zaozhuang').hide();
        $('.zibo').hide();
        $('.taian').hide();
    })
    $('#qingdao').on('click',function (){
        $('#map_bg').hide();
        $('.qingdao').show();
        $('#return').show();
        $('.map_bg').hide();
        $('.zaozhuang').hide();
        $('.zibo').hide();
        $('.weifang').hide();
        $('.taian').hide();
    })
    $('#zaozhuang').on('click',function (){
        $('#map_bg').hide();
        $('.zaozhuang').show();
        $('#return').show();
        $('.zibo').hide();
        $('.weifang').hide();
        $('.qingdao').hide();
        $('.map_bg').hide();
        $('.taian').hide();
    })
    $('#taian').on('click',function (){
        $('#map_bg').hide();
        $('.taian').show();
        $('#return').show();
        $('.zaozhuang').hide();
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
        $('.taian').hide();
    })


    $("#w_maintt").hide();
    $("#w_maintt2").hide();
    $("#w_maintt3").hide();
    $("#w_maintt4").hide();
    $("#w_maintt5").hide();
    $("#w_maintt6").hide();
    $("#w_maintt7").hide();
    $("#w_maintt8").hide();
    $("#w_maintt9").hide();
    $("#w_maintt10").hide();
    $("#w_maintt11").hide();
    $("#w_maintt12").hide();
    $("#w_maintt13").hide();
    $("#w_maintt14").hide();
    $("#w_maintt15").hide();
    $("#w_maintt16").hide();
    $("#w_maintt17").hide();
    $("#w_maintt18").hide();
    $("#w_maintt19").hide();
    $("#w_maintt20").hide();
    $("#w_maintt21").hide();
    $("#w_maintt22").hide();
    $("#w_maintt23").hide();
    // e支部详情点击(济南)
    $(".jinan_ezb").on("click",function(){
        $("#w_main").hide();
        $("#w_maintt").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".qd_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt2").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".zb_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt3").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".zz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt4").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".dy_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt5").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".yt_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt6").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".wf_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt7").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jn_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt8").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".tn_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt9").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".wh_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt10").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".rz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt11").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lw_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt12").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lx_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt13").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".dz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt14").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lc_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt15").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".bz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt16").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".hz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt17").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jggw_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt18").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jwgw_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt19").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".gzw_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt20").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".slyt_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt21").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".qlsh_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt22").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })

    $(".u_fanhui").on("click",function(){
        $(".ezb").show();
        $("#w_main").show();
        $("#w_maintt").hide();
        $("#w_maintt2").hide();
        $("#w_maintt3").hide();
        $("#w_maintt4").hide();
        $("#w_maintt5").hide();
        $("#w_maintt6").hide();
        $("#w_maintt7").hide();
        $("#w_maintt8").hide();
        $("#w_maintt9").hide();
        $("#w_maintt10").hide();
        $("#w_maintt11").hide();
        $("#w_maintt12").hide();
        $("#w_maintt13").hide();
        $("#w_maintt14").hide();
        $("#w_maintt15").hide();
        $("#w_maintt16").hide();
        $("#w_maintt17").hide();
        $("#w_maintt18").hide();
        $("#w_maintt19").hide();
        $("#w_maintt20").hide();
        $("#w_maintt21").hide();
        $("#w_maintt22").hide();
        $("#w_maintt23").hide();
        $(".jinan_ezb").show();
        $(".u_fanhui").hide();
        })
});


/**性别年龄(性别)**/
function sexl(){
    var chart = echarts.init(document.getElementById('lsex1'));
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
            data: [
                {value:127541, name: '男'},
                {value: 52271, name: '女'}
            ],

        }]
    };
    chart.setOption(option);
};
//sexl();
/**性别年龄(年龄)**/
function sex2(){
    var chart = echarts.init(document.getElementById('lsex2'));
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
            data:[
                {value:25282, name: '30岁及以下'},
                {value: 40961, name: '31-40岁'},
                {value: 54933, name: '41-50岁'},
                {value: 45097, name: '51-60岁'},
                {value: 13540, name: '61岁及以上'}
            ],

        }]
    };
    chart.setOption(option);
};
//sex2();
/**性别年龄(学历)**/
function sex3(){
    var chart = echarts.init(document.getElementById('lsex3'));
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
            data:[
                {value:50042, name: '初中及以下'},
                {value: 41213, name: '高中/中专'},
                {value: 78290, name: '专科/本科'},
                {value: 10267, name: '研究生及以上'}
            ],

        }]
    };
    chart.setOption(option);
};
//sex3()
//访客年龄性别
// 党员年龄分布
function w_ages(){
var myChart_age = echarts.init(document.getElementById('w_age2s'));
var option_gyt_age = {
    color: ['#ebe20c', '#126413', '#1389d6', '#ff4200', '#55d7ff'],
    title: {
        show: true,
        text: '岗位',
        x: 'center',
        y: 'center',
        textStyle: {
            color: 'rgba(255,255,255,0.7)',
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
          color: ['#ffce54','#37bc9b',],
            label: {
            normal: {
                formatter: '{b}{c}\n{d}%',

                textStyle: {
//                  color: 'rgba(255,255,255,0.7)',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:15,
                    length2:7,
                }
            },
            data: [
            
                { value: 30022, name: '女' },
                { value: 73254, name: '男' },
               
            ]
        }
    ]
};
myChart_age.setOption( option_gyt_age);
};
w_ages();
// 工作岗位
function w_gangweis(){
var myChart_age = echarts.init(document.getElementById('w_works'));
var option_gyt_age = {
    color: ['#ebe20c', '#126413', '#1389d6', '#ff4200', '#55d7ff'],
    title: {
        show: true,
        text: '岗位',
        x: 'center',
        y: 'center',
        textStyle: {
            color: 'rgba(255,255,255,0.7)',
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
          color: ['#967adc','#37bc9b','#ac92ec','#da4453','#ffce54'],
            label: {
            normal: {
                formatter: '{b}:{c}\n占比{d}%',

                textStyle: {
//                  color: 'rgba(255,255,255,0.7)',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:15,
                    length2:7,
                }
            },
            data: [
            
                { value: 14520, name: '30岁及以下' },
                { value: 23526, name: '31-40岁' },
                { value: 31551, name: '41-50岁' },
                { value: 25902, name: '51-60岁' },
                { value: 7777, name: '61岁及以上' },
            ]
        }
    ]
};
myChart_age.setOption(option_gyt_age);
};
w_gangweis();
// 党员年龄分布
function w_sexs(){
var myChart_age = echarts.init(document.getElementById('w_xuelis'));
var option_gyt_age = {
//  color: ['#ebe20c', '#126413', '#1389d6', '#ff4200', '#55d7ff'],
    title: {
        show: true,
        text: '学历',
        x: 'center',
        y: 'center',
        textStyle: {
            color:'rgba(255,255,255,0.8)',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{c}人",
        
    },
     grid:{
    	left:'10%',
    },
    series: [
        {
          type: 'pie',
          selectedMode: 'single',
          radius: ['40%', '58%'],
          color: ['#8cc152', '#37bc9b', '#3bafda', '#4a89dc','#d770ad','#f6bb42',],
            label: {
            normal: {
                formatter: '{b}:{c}\n占比{d}%',
				 rich: {
//                      b: {
//                         
//                          color: '#12EABE',
//                      
//                         
//                      },
//                      hr: {
//                          borderColor: '#12EABE',
//                          width: '100%',
//                          borderWidth: 2,
//                          height: 0
//                      },
//                      d: {
//                         
//                          color: '#fff',
//                         
//                      },
//                      c: {
//                        
//                          color: '#fff',
//                         
//                      }
                   },
                textStyle: {
//                  color: 'rgba(255,255,255,0.7)',
                    fontWeight: 'nomal'
                }
            }
        },
            labelLine: {
                normal: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:15,
                    length2:5,
                }
            },
            data: [
                {value:28741, name: '初中及以下'},
                {value: 23671, name: '高中/中专'},
                {value: 23926, name: '专科'},
                {value: 21040, name: '本科'},
                {value: 5898, name: '研究生及以上'}
            ]
        }
    ]
};
myChart_age.setOption(option_gyt_age);
};
w_sexs();
//   WEB/APP/微信访问分布饼状图
function w_pie(){
    var chart = echarts.init(document.getElementById('w_pie'));
  	ls2_option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
        name: '业务指标',
        type: 'gauge',
         min:0,
    max:1000000,
        detail: {
            formatter: '{value}'
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        data: [{
            value: 10000,
            name: '今日访问流量',
        }]

    }]
};
setInterval(function() {
    option.series[0].data[0].value += Math.floor(Math.random()*400)+10022;
    chart.setOption(ls2_option, true);
}, 2000);
//  chart.setOption(option);
};
//w_pie();
// 23个党工委人员
var w_chart = echarts.init(document.getElementById('lfbu'));

function makeChartl1(id) {
    w_optionx = {
        // backgroundColor: '#394056',
        title: {
            text: '省委直属党(工)委所属党组织管理员分布 (单位:人)',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.7)',
                fontWeight:'bolder',
                fontFamily:'黑体',
            },
            top:'2%',
            left: '3%'
        },
         legend: {
	    
	        "x": "center",
	        "y": "2%",
	        "data": [
	            "总共人数",
	            "目前在线人数",
	        ],
	        "textStyle": {
	            "color": "rgba(255,255,255,0.7)"
	        }
    	},
        tooltip: {
            trigger: 'axis',
			formatter: '{a0}: {c0}',
            axisPointer: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.7)'
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
//          axisLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.7)',
//                  boderColor:'rgba(255,255,255,0.7)'
//              }
//          },
            // axisLabel:{
            //     interval:0,//横轴信息全部显示
            //     color:'#fff'
            // },
            axisLabel:{
                interval: 0,
                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: 'rgba(255,255,255,0.7)',

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
                        color: 'rgba(255,255,255,0.2)'
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
                        color: 'rgba(255,255,255,0.7)'
                    }
                },
//              axisLabel: {
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color:'#fff'
//                  },
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.7)'
//                  }
//              },
                
            axisLabel:{
                color:'rgba(255,255,255,0.7)',
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
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
                            color: 'rgba(93,156,236, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(75,137,220, 1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255,255,255,0.7)',
                        barBorderRadius:15,
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
    	$.getJSON('bigScreen/23党工委管理员分布.json',function(res){
//	    	console.log(res);
	//  	w_option.xAxis[0].data=res.data;
			w_optionx.series[0].name='总计人数';
			w_optionx.series[0].itemStyle.normal.color=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(93,156,236, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(75,137,220, 0.5)'
                        }], false),
            
	    	w_optionx.series[0].data=res.value;

	    	w_chart.setOption(w_optionx);
	    })
    }else if(id==2){
    	$.getJSON('bigScreen/23党工委管理员分布.json',function(res){
//	    	console.log(res);
	  		w_optionx.series[0].name='在线人数';
	  		w_optionx.series[0].itemStyle.normal.color=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(72,207,174,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(72,207,174,0.4)'
                        }], false),
	    	w_optionx.series[0].data=res.online;

	    	w_chart.setOption(w_optionx);
	    })
    }

    
}
makeChartl1(1);
//
    w_chart.on('click',function(z){
    	var w_z=sessionStorage.getItem('w_z')
    	if(z.name=='济南'&&w_z==1){
		    $.getJSON('bigScreen/全省23个党工委人数济南.json',function(res){
		  		w_optionx.xAxis[0].data=res.data;
		  		w_optionx.dataZoom=[{
			        "show": true,
			        "height": 20,
			        "xAxisIndex": [
			            0
			        ],
		        	bottom: 10,
		        	"start": 0,
		        	"end": 10,
		        	handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
		        	handleSize: '110%',
			        handleStyle:{
			            color:"#ddd",	            
			        },
			        textStyle:{
			            color:"#fff"
			        },
		           	borderColor:"#eee" 
				    }, {
				        "type": "inside",
				        "show": true,
				        "height": 15,
				        "start": 1,
				        "end": 35
				    }];
		    	w_optionx.series[0].data=res.value;
//		    	w_optionx.series[1].data=res.online;
		    	w_chart.setOption(w_optionx);
		    })

    		$('.w_fanhui').show();
    		w_chart.setOption(w_optionx);
    	}else if(z.name=='青岛'&&w_z==1){
			$.getJSON('bigScreen/全省23个党工委人数青岛.json',function(res){

		  		w_optionx.xAxis[0].data=res.data;
		  		w_optionx.dataZoom=[{
			        "show": true,
			        "height": 20,
			        "xAxisIndex": [
			            0
			        ],
		        	bottom: 10,
		        	"start": 0,
		        	"end": 10,
		        	handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
		        	handleSize: '110%',
			        handleStyle:{
			            color:"#ddd",	            
			        },
			        textStyle:{
			            color:"#fff"
			        },
		           	borderColor:"#eee" 
				    }, {
				        "type": "inside",
				        "show": true,
				        "height": 15,
				        "start": 1,
				        "end": 35
				    }]
		    	w_optionx.series[0].data=res.value;
//		    	w_optionx.series[1].data=res.online;
		    	w_chart.setOption(w_optionx);
		    })
    		$('.w_fanhui').show();
    		w_chart.setOption(w_optionx);
    	}
    })
    $('.w_fanhui').click(function(){

    	$.getJSON('js/w_js/renshu.json',function(res){

                w_optionx.xAxis[0].data=['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直机关工委','省委教育工委','省国资委党委','胜利油田党委','齐鲁石化党委','黄三角党工委']
		    	w_optionx.series[0].data=res.value;
//		    	w_optionx.series[1].data=res.online;
		    	w_optionx.dataZoom=[{
		    		'show':false,
		    		"start": 0,
        			"end": 100,
		    	}];
		    	w_chart.setOption(w_optionx);
		    })    		
    	w_chart.setOption(w_optionx);
    	$('.w_fanhui').hide()
    })

// <!-- 各时间段管理人数在线 -->
function itemload(){
    var chart = echarts.init(document.getElementById('lgls'));
    var data = [
        {"value": 0, "name": "0-2点"},
        {"value": 0, "name": "2-4点"}, 
        {"value": 0, "name": "4-6点" }, 
        {"value":50, "name": "6-8点"}, 
        {"value": 142, "name": "8-10点"}, 
        {"value": 500, "name": "10-12点"}, 
        {"value": 456, "name": "12-14点"}, 
        {"value": 512, "name": "14-16点"}, 
        {"value": 423,"name": "16-18点"}, 
        {"value": 20, "name": "18-20点"}, 
        {"value": 12, "name": "20-22点"}, 
        {"value": 0, "name": "22-0点"}
    ];
    data_name = [];
    for (var n  in data){
        data[n]['name'] = data[n]['name'] + ' '+data[n]['value']
        data_name.push(data[n]['name'])
    }
    
    option = {
       
        title: {
            text: '各时间段管理员在线情况',
            left: '50%',
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
            trigger: 'item',
            formatter: "{b}"
        },
        series: [
            {
                name:'',
                type:'pie',
                radius: ['40%', '55%'],
                center: ['50%','55%'],
                data:data
            }
        ]
    };
    chart.setOption(option);
}
//itemload();
// 各业务系统在线管理人数
function xtglrs(){
    var chart = echarts.init(document.getElementById('lgll'));
    var data = [
        {"value": 26, "name": "0-2点"},
        {"value": 16.7, "name": "2-4点"}, 
        {"value": 12.4, "name": "4-6点" }, 
        {"value": 12.2, "name": "6-8点"}, 
        {"value": 8.4, "name": "8-10点"}, 
        {"value": 7.6, "name": "10-12点"}, 
        {"value": 5.9, "name": "12-14点"}, 
        {"value": 3.6, "name": "14-16点"}, 
        {"value": 2.9,"name": "16-18点"}, 
        {"value": 2.2, "name": "18-20点"}, 
        {"value": 1.7, "name": "20-22点"}, 
        {"value": 0.4, "name": "22-0点"}
    ];
    data_name = [];
    for (var n  in data){
        data[n]['name'] = data[n]['name'] + ' '+data[n]['value']
        data_name.push(data[n]['name'])
    }
    
    option = {
       
        title: {
            text: '各时间段管理员在线情况',
            left: '50%',
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
            trigger: 'item',
            formatter: "{b}"
        },
        series: [
            {
                name:'',
                type:'pie',
                radius: ['40%', '55%'],
                center: ['50%','55%'],
                data:data
            }
        ]
    };
    chart.setOption(option);
}
//xtglrs()
// 党组织-23个直属党（工）委数量分布图
function makeChart11() {
    var chart = echarts.init(document.getElementById('lect'));
    l_option = {
        // backgroundColor: '#394056',
        title: {
            text: '党组织-23个直属党（工）委数量分布图',
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
            trigger: 'axis',
            formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}%',
            axisPointer: {
                // type: 'cross',
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
        data: ['总人数', '在线人数','在线率'],
        top:5,
        right: 20,
        textStyle: {
            color: '#fff',
        },
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
                    show:'false',
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

                    }
                },
                data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
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
                // max: 4000,
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
                    }, formatter: '{value}%'
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
                name: '总人数',
                type: 'pictorialBar',
                symbol: 'rect',
                symbolRepeat: true,
		        symbolSize: [12, 4],
		        symbolMargin: 1,
                barWidth:10,
                barGap:20,
                stack: 'sum',
                smooth: true,
                symbol: 'rect',
                symbolSize: [12, 4],
		        symbolMargin: 1,
		        z: -10,
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

                data:data1

            },
            {
                name: '在线人数',
                type: 'bar',
                barWidth:10,
                barGap:20,
                smooth: true,
                stack: 'sum',
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
                        color: '#9ad945',


                    }
                },
                data:data2
            },
               {
                   itemStyle: {
                       normal: {
                           color: 'gold',
                       }
                   },
                   // show:true,
                   name:"在线率",
                   type:'line',
                   yAxisIndex: 1,
//                    stack: 'sum',
//                    formatter:'{a2}:{c2}%',
                   barWidth:10,
                   smooth: true,
                   data:[90.72, 95.70, 97.83, 98.42, 98.33, 98.35, 97.78, 99.45,
                       98.49, 97.58, 98.12, 98.91, 95.79, 96.58, 94.60, 98.77,
                       99.78, 85.09, 92.46, 94.58, 60.74, 66.96, 90.98
                   ],

               }
        ]
    };
    var data1=null;
    var data2=null;
    $.getJSON('js/l_js/ldzz.json',function(res){
        data1=res.value; // 总人数
        l_option.series[0].data=data1
        data2=res.online;// 在线人数
        l_option.series[1].data=data2
        chart.setOption(l_option);
       
    })
//  chart.setOption(option);
}
//makeChart11();
//党员24小时在线人数
function mksd(){
	 var chart = echarts.init(document.getElementById('l24zx'));
	l24_option = {
    title: {
        text: '省委直属党(工)委所属党组织管理员24小时人员分布 (单位:人)',
         textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.7)',
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
            	return params.data+'人'
//              if (params.data.isnode) {return params.data.name+":"+params.data.value;}
//              else {return params.data.source+"--"+params.data.target;}
            }
        },
    color: ['#f9b239'],
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
//  toolbox: {
//      feature: {
//          saveAsImage: {}
//      }
//  },
    xAxis: {
        type: 'category',       
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel:{
                interval:0,//横轴信息全部显示
                color:'rgba(255,255,255,0.7)'
        },
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            }
        },
        axisTick: {
            show: false
        },
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00','12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00','22:00', '23:00', ]
    },
    yAxis: [{
        type: 'value',
          axisLine: {
            lineStyle: {
                color: '#f9b239'
            }
        },
        axisLabel: {
            formatter: '{value} ',
            
        },
        axisLabel:{
                color:'rgba(255,255,255,0.7)',
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }
    }],

    series: [{
        name: '在线数',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1,
            }
        },
        areaStyle: {
            normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(94,155,235, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(94,155,235, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
        },        
        itemStyle: {
            normal: {
                color: 'rgb(94,155,235,1)',
                borderColor: 'rgba(94,155,235,0.25)',
                borderWidth: 12

            }
        },
        data: [0,0,2,3,546, 452, 370, 542, 638, 774, 702, 609, 456, 420, 398, 326,546, 452, 370, 542, 638, 774, 702, 609, 456, 420, 398, 326,546, 452, 370, 542, 638, 774, 702, 609, 456, 420, 398, 326,]
    }]
};
//chart.resize();

  $.getJSON('bigScreen/各时间段在线管理员人数.json',function(res){  	
        let times=[];
        let renshu=[];
        res.forEach(function(item){
        	times.push(item.name);
        	renshu.push(item.value);
        })
        l24_option.xAxis.data=times
    	l24_option.series[0].data=renshu
        chart.setOption(l24_option);
       
    })
chart.setOption(l24_option);
}
mksd()
//省委直属党(工)委所属党员注册分布情况
function makeChart12() {
    var chart = echarts.init(document.getElementById('lects'));
    var data1=null;
    var data2=null;
    l2_option = {
        // backgroundColor: '#394056',
        title: {
            text: '党员-23个直属党（工）委数量分布图',
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
               formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}%',
               axisPointer: {
                   lineStyle: {
                       color: '#57617B'
                   }
               }
           },
           legend: {
            data: ['总人数', '在线人数','在线率'],
             top:5,
		        right: 20,
		        textStyle: {
		            color: '#fff',
		        },
        },
        grid: {
            top:'15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
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

                }
            },
            data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
        }
            , {
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
                // max: 800000,
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
                max: 100,
                interval:25,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    formatter:'{value}%',
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
            }
        ],
        series: [
            {
                name: '总人数',
                type: 'bar',
                smooth: true,
                barWidth:10,
                stack: 'sum',
                // symbol: 'triangle',
                symbolSize: 5,
                showSymbol: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                barGap:20,
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
                        // borderColor: 'rgba(36,145,192,0.27)',
                        // borderWidth: 12

                    }
                },
                data: data1
            },
            {
                name: '在线人数',
                type: 'bar',
                smooth: true,
                barWidth:10,
                stack: 'sum',
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
                        color: '#fbb03b',
                        // borderColor: 'rgba(36,145,192,0.27)',
                        // borderWidth: 12

                    }
                },
                data: data2
            },
            {
                itemStyle: {
                    normal: {
                        color: '#9ad945',


                    }
                },
                // show:true,
                name:"在线率",
                type:'line',
                yAxisIndex: 1,
                // stack: 'sum',
                formatter:'{b3}:{c3}'+'%',
                barWidth:10,
                smooth: true,
                data:[94.70, 94.29, 97.52, 96.94, 98.10, 98.71, 99.32,
                93.45, 92.19, 94.67, 95.35, 98.48, 94.13, 94.16, 95.53,
                98.63, 99.53, 71.78, 84.69, 92.72, 48.79, 51.08, 40.85
                ],
            }
        ]

    };
     
    $.getJSON('js/l_js/ldy.json',function(res){
        data1=res.value; // 总人数
        l2_option.series[0].data=data1
        data2=res.online;// 在线人数
        l2_option.series[1].data=data2
        chart.setOption(l2_option);
       
    })
//  chart.setOption(option);
}
// makeChart12();
// 24小时在线人数

// 各应用系统在线管理员人数
var myChart = echarts.init(document.getElementById('w_main'));
var w_option = {
    width:'800px',
    title:{
        text: '省委直属党（工）委所属党组织管理员配备情况',
        textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: 'rgba(255,255,255,0.7)',
                fontWeight:'bolder',
                fontFamily:'黑体'
            },
            left: '2%',
            top:'2%',
    },
    tooltip : {
        trigger: 'axis',
//         formatter: '{a0}: {c0}%', 开通率 ：10%
           formatter: '{c0}%',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委'],
            axisLabel:{
                interval: 0,
                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: 'rgba(255,255,255,0.7)',

                }
            }

        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            // interval:20,
               max: 100,
            axisLabel:{
                color:'rgba(255,255,255,0.7)',
                formatter: '{value} %'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }
        },
       
    ],
    series : [
        {
            name:'开通率',
            type:'bar',
            stack: 'sum',
            data: [86, 94, 97, 95, 95, 92, 89,
                    96, 97, 96, 97, 93, 96, 95, 96,
                    99, 92, 95, 95, 94, 78, 74, 100
                ],
            barWidth:10,
            barBorderRadius:15,
            barGap:20
        },
//         {
//             itemStyle: {
//                 normal: {
//                     color: '#9ad945',
//                 }
//             },
//             name:"活跃率",
//             type:'line',
//             yAxisIndex: 1,
//             barWidth:10,
//             smooth: true,
//             data:[25.01, 29.94, 74.06, 86.95, 49.57, 49.03,
//             47.13, 23.87, 49.98, 63.71, 37.66, 28.52, 64.67,
//                 56.86, 15.84, 73.11, 37.41, 12.82, 16.97, 35.31,
//             7.97, 3.69, 0.00
//
//             ],
//         }
    ]
};
w_option.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#4a89dc','#967adc'];

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
myChart.setOption(w_option);

//e支部详情（济南基层党支部开展活动情况(单位:次)）
var u_myChart1 = echarts.init(document.getElementById('w_maintt'));
var u_option = {
    width:'757px',
    title:{
        text: '济南基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[6704,	9679,	9553,	7699,	1449,	4742,	1474,	357,	18592],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option.series[0].itemStyle={
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
u_myChart1.setOption(u_option);

//e支部详情（青岛基层党支部开展活动情况(单位:次)）
var u_myChart2 = echarts.init(document.getElementById('w_maintt2'));
var u_option2 = {
    width:'757px',
    title:{
        text: '青岛基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[7751,	11417,	17667,	12972,	4455,	8747,	23919,	1577,	25143],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option2.series[0].itemStyle={
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
u_myChart2.setOption(u_option2);

//e支部详情（淄博）
var u_myChart3 = echarts.init(document.getElementById('w_maintt3'));
var u_option3 = {
    width:'757px',
    title:{
        text: '淄博基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[11578,	14675,	24969,	11820,	3018,	13089,	3009,	481,	56671],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option3.series[0].itemStyle={
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
u_myChart3.setOption(u_option3);

//e支部详情（枣庄）
var u_myChart4 = echarts.init(document.getElementById('w_maintt4'));
var u_option4 = {
    width:'757px',
    title:{
        text: '枣庄基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[6770,	15048,	27252,	12292,	4043,	20701,	2908,	440, 54429
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option4.series[0].itemStyle={
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
u_myChart4.setOption(u_option4);
//e支部详情（东营）
var u_myChart5 = echarts.init(document.getElementById('w_maintt5'));
var u_option5 = {
    width:'757px',
    title:{
        text: '东营基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[1874,	3697,	9261,	3867,	1799,	6887,	1275,	654,	17719
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option5.series[0].itemStyle={
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
u_myChart5.setOption(u_option5);
//e支部详情（烟台）
var u_myChart6 = echarts.init(document.getElementById('w_maintt6'));
var u_option6 = {
    width:'757px',
    title:{
        text: '烟台基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[41244,	44069,	68868,	22534,	2632,	10576,	4113,	1472,	63383
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option6.series[0].itemStyle={
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
u_myChart6.setOption(u_option6);
//e支部详情（潍坊）
var u_myChart7 = echarts.init(document.getElementById('w_maintt7'));
var u_option7 = {
    width:'757px',
    title:{
        text: '潍坊基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[10542,	22034,	40948,	17556,	5026,	17617,	2567,	936,	30326
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option7.series[0].itemStyle={
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
u_myChart7.setOption(u_option7);
//e支部详情（济宁）
var u_myChart8 = echarts.init(document.getElementById('w_maintt8'));
var u_option8 = {
    width:'757px',
    title:{
        text: '济宁基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[2647,	5701,	9534,	4348,	1289,	4164,	1205,	234,	15762
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option8.series[0].itemStyle={
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
u_myChart8.setOption(u_option8);
//e支部详情（泰安）
var u_myChart9 = echarts.init(document.getElementById('w_maintt9'));
var u_option9 = {
    width:'757px',
    title:{
        text: '泰安基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[9254,	10906,	14710,	5817,	2216,	7156,	1769,	514,	20494
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option9.series[0].itemStyle={
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
u_myChart9.setOption(u_option9);
//e支部详情（威海）
var u_myChart10 = echarts.init(document.getElementById('w_maintt10'));
var u_option10 = {
    width:'757px',
    title:{
        text: '威海基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[7877,	19564,	20842,	19762,	1170,	6485,	2314,	244,	39871
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option10.series[0].itemStyle={
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
u_myChart10.setOption(u_option10);
//e支部详情（日照）
var u_myChart11 = echarts.init(document.getElementById('w_maintt11'));
var u_option11 = {
    width:'757px',
    title:{
        text: '日照基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[1852,	2537,	5469,	2789,	1202,	4123,	799,	359,	10760
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option11.series[0].itemStyle={
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
u_myChart11.setOption(u_option11);
//e支部详情（莱芜）
var u_myChart12 = echarts.init(document.getElementById('w_maintt12'));
var u_option12 = {
    width:'757px',
    title:{
        text: '莱芜基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[1450,	2802,	2694,	1870,	593,	1090,	310,	107,	2853
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option12.series[0].itemStyle={
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
u_myChart12.setOption(u_option12);
//e支部详情（临沂）
var u_myChart13 = echarts.init(document.getElementById('w_maintt13'));
var u_option13 = {
    width:'757px',
    title:{
        text: '临沂基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[15394,	26576,	57971,	19072,	4979,	24565,	3657,	996,	40206
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option13.series[0].itemStyle={
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
u_myChart13.setOption(u_option13);
//e支部详情（德州）
var u_myChart14 = echarts.init(document.getElementById('w_maintt14'));
var u_option14 = {
    width:'757px',
    title:{
        text: '德州基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[2960,	12520,	9039,	2738,	1426,	9105,	2478,	871, 38059
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option14.series[0].itemStyle={
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
u_myChart14.setOption(u_option14);
//e支部详情（聊城）
var u_myChart15 = echarts.init(document.getElementById('w_maintt15'));
var u_option15 = {
    width:'757px',
    title:{
        text: '聊城基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[1591,	1763,	3178,	1726,	312,	1535,	419,	172,	3412
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option15.series[0].itemStyle={
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
u_myChart15.setOption(u_option15);
//e支部详情（滨州）
var u_myChart16 = echarts.init(document.getElementById('w_maintt16'));
var u_option16 = {
    width:'757px',
    title:{
        text: '滨州基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[2408,	5053,	10838,	4630,	4207,	11171,	3029,	923,	70436
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option16.series[0].itemStyle={
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
u_myChart16.setOption(u_option16);
//e支部详情（菏泽）
var u_myChart17 = echarts.init(document.getElementById('w_maintt17'));
var u_option17 = {
    width:'757px',
    title:{
        text: '菏泽基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[7145,	6907,	7085,	2851,	861,	3740,	1439,	386,	10651
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option17.series[0].itemStyle={
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
u_myChart17.setOption(u_option17);
//e支部详情（省直机关）
var u_myChart18 = echarts.init(document.getElementById('w_maintt18'));
var u_option18 = {
    width:'757px',
    title:{
        text: '省直机关工委基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[1179,	1868,	4278,	1800,	287,	1479,	484, 158,	4280
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option18.series[0].itemStyle={
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
u_myChart18.setOption(u_option18);
//e支部详情（教育）
var u_myChart19 = echarts.init(document.getElementById('w_maintt19'));
var u_option19 = {
    width:'757px',
    title:{
        text: '省委教育工委基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[124,	797,	2040,	671,	231,	979,	298,	97,	1158
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option19.series[0].itemStyle={
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
u_myChart19.setOption(u_option19);
//e支部详情（国资委）
var u_myChart20 = echarts.init(document.getElementById('w_maintt20'));
var u_option20 = {
    width:'757px',
    title:{
        text: '省国资委党委基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[1549,	2893,	4946,	2449,	288,	1256,	435,	122,6963
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option20.series[0].itemStyle={
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
u_myChart20.setOption(u_option20);
//e支部详情（胜利油田）
var u_myChart21 = echarts.init(document.getElementById('w_maintt21'));
var u_option21 = {
    width:'757px',
    title:{
        text: '胜利油田党委基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[500,	2058,	1411,	753,	130,	265,	151,	38,	658
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option21.series[0].itemStyle={
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
u_myChart21.setOption(u_option21);
//e支部详情（齐鲁石化）
var u_myChart22 = echarts.init(document.getElementById('w_maintt22'));
var u_option22 = {
    width:'757px',
    title:{
        text: '齐鲁石化党委基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[76,	61,	50,	29,	5,	7,	4,	0,	19
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option22.series[0].itemStyle={
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
function lpht(){
	var myChartph = echarts.init(document.getElementById('lpht'));
	lph_option = {
    // backgroundColor: "#333",
     title:{
        text: '近7天按省份的访问分布',
       
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
    color: ["#FD666D"],
    textStyle: {
        color: '#fff'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{a} <br/>{b} : {c}%"
    },
	    xAxis: [{
          type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
    }],
    yAxis: [{
        type: 'category',
        data: ['山东',
            '北京',
            '河北',
            '河南',
            '吉林',
            '新疆',
            '山西',
            '云南',
            '河北',
            '河南',
            '安徽',
            '江苏',
            '湖北',
        ].reverse(),
      
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "#063374",
            }
        }
    }],
//  xAxis: {
//      type: 'value',
//      "axisLine": {
//          "show": false
//      },
//      "axisTick": {
//          "show": false
//      },
//      "axisLabel": {
//          "show": false
//      },
//      "splitLine": {
//          "show": false
//      }
//  },
//  yAxis: {
//      "axisLabel": {
//          "interval": 0,
//          fontSize: 20,
//      },
//      type: 'category',
//      data: ['山东',
//          '北京',
//          '河北',
//          '河南',
//          '吉林',
//          '新疆',
//          '山西',
//          '云南',
//          '河北',
//          '河南',
//          '安徽',
//          '江苏',
//          '湖北',
//      ].reverse()
//  },
    series: [{
        name: '访问量',
        type: 'bar',
          barWidth: 7,
          itemStyle: {
                    normal: {
                        color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00b0ff'
                }, {
                    offset: 0.8,
                    color: '#7052f4'
                }], false)
                    }
                },
        barCategoryGap: '50%',
        data: [557, 388, 387, 384, 344, 297, 276, 212, 126, 62, 46, 45, 4, ].reverse(),

    }]
};
	myChartph.setOption(lph_option);
	
}
//lpht();
u_myChart22.setOption(u_option22);
//e支部详情（黄三角）
var u_myChart23 = echarts.init(document.getElementById('w_maintt23'));
var u_option23 = {
    width:'757px',
    title:{
        text: '黄三角党委基层党支部开展活动情况(单位:次)',
        top:'20px',
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
        height:'120px',
        top:'70px',
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
            data:[0,0,0,0,0,0,0,0,0,],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option23.series[0].itemStyle={
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
u_myChart23.setOption(u_option23);

//各应用系统在线党员人数
var myChart2 = echarts.init(document.getElementById('w_mains'));
var w_option2 = {
    width:'820px',
    title:{
        text: '党员各月访问分布(单位:人)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        top:"5%",
        left: '18px',
        // bottom: '80%',
    },
     grid: {
       
      left:'8%',
     
        
    },
    tooltip : {
        trigger: 'axis',
        // formatter: '{a0}: {c0}<br />{a1}: {c1}%',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data :  ['17/8','17/9','17/10','17/11','17/12','18/1','18/2','18/3','18/4','18/5','18/6','18/7',],
            axisLabel:{
               
               
              
                textStyle: {
                    color: 'rgba(255,255,255,0.7)',
                }
            }

        }
    ],
    yAxis : [
        {
            type : 'value',
           
            axisLabel:{
                color:'rgba(255,255,255,0.7)'
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
             splitLine: {
            lineStyle: {
               color: 'rgba(255,255,255,0.2)'
            }
        },
            
        }, 
    ],
    series : [
        {
            name:'浏览量(PV) ',
            type:'bar',
            stack: 'sum',
            data:[313861,
21766193,
12691322,
17878033,
44063873,
91610805,
85738607,
107140833,
106921751,
117498988,
109224577,
103187198,
],
            barWidth:10,
            barGap:20
        },
//      {
//   	name:'访客数(UV)',
//      type: 'line',
//      smooth: true,
////      showSymbol: false,
////      symbol: 'circle',
////      symbolSize: 6,
//      data:[78137,1833057,931650,1023064,4730416,9550925,6640066,12680072,13338725,15111125,13729984,11924808],
//       areaStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(140,192,81, 0.3)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(140,192,81, 0)'
//              }], false),
//              shadowColor: 'rgba(0, 0, 0, 0.1)',
//              shadowBlur: 10
//          }
//      },
//      itemStyle: {
//          normal: {
//              color: 'rgb(140,192,81)',
//     			 borderColor: 'rgba(140,192,81,0.27)',
//              borderWidth: 12
//          }
//      },
//  }
        
    ]
};
w_option2.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#4a89dc','#37bc98'];

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
myChart2.setOption(w_option2);

function makeChartl5() {
var chart = echarts.init(document.getElementById('lqs'));
option = {
   width:'820px',
   height:'170px',
   title: {
        text: '一周访问量趋势图 (单位:人)',
     	 textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color:'rgba(255,255,255,0.7)',
                fontWeight:'bolder',
                fontFamily:'黑体'
            },
            left: '2%',
            top:'2%',
       
    },
    tooltip: {
        trigger: 'axis'
    },
   
      grid: {
        left: '8%',
       
       
      
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //坐标轴两边留空白策略
        axisTick: {
            alignWithLabel: true //刻度线与标签对其
        },
        axisLine: {
            show: true,
            lineStyle: {
                 color: 'rgba(255,255,255,0.8)'
                  
            }
        },
        //  改变x轴字体颜色和大小
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.7)'
            }
        },
        data: ['7/17', '7/18', '7/19', '7/20', '7/21', '7/22','7/23']
    },
    yAxis: {
        type: 'value',
        scale: true, //脱离0的束缚
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.8)'
            }
        },
          splitLine: {  //分割线
                show: true,
                   color:"#fff",
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
        //  改变x轴颜色
        axisLine: {
            lineStyle: {
                color: '#ffffff'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        }
    },
    series: [{
        name: '浏览量',
        type: 'line',
        stacked: true,
        smooth: true, //是否平滑曲线显示
//      symbol: 'circle', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
//      symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ] 
//      showSymbol: true, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
        lineStyle: { //线条样式
            normal: {
                width: 1 //线宽。[ default: 2 ] 
            }
        },
        areaStyle: { //区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                    offset: 0, // 0% 处的颜色
                    color: 'rgba(104, 221, 109, 1)'
                }, {
                    offset: 0.8, // 80% 处的颜色
                    color: 'rgba(104, 221, 109, 0.2)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
            }
        },
        itemStyle: {
            normal: {
                color: '#68DD77',
                borderColor: 'rgba(104, 221, 109, 0.27)', //图形的描边颜色。支持的格式同 color
                borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ] 
             
            }
        },
        data:  [1495524,
1083559,
1213293,
1582035,
1521908,
1505758,
1517459,
].reverse(),
    }]
};
			chart.setOption(option);
}
makeChartl5();
function lzaixian(){
	var myChart = echarts.init(document.getElementById('f_sszx'));
	l3_option = {
	 width:'830px',
	  height:'170px',
    title: {
        text: '今日与昨日访问量对比趋势图 (单位:人)',
     	 textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color:'rgba(255,255,255,0.7)',
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
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    grid: {
        left: '8%',
        right: '5%',
       
        containLabel: false
    },
    legend: {
    	 icon: 'rect',
    	 top: 10,
//          itemGap:5,
//          itemWidth:5,
            textStyle: {
                color: '#fff',
                fontSize: '10'
            },
        data: ['今日','昨日']
    },
    xAxis: {
        type: 'category',
        data:  ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        boundaryGap: false,
        splitLine: {
            show: false,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color:'rgba(255,255,255,0.7)'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
               color: 'rgba(255,255,255,0.2)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color:'rgba(255,255,255,0.7)'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },

    series: [{
        name: '今日',
        type: 'line',
        smooth: true,
//      showSymbol: false,
//      symbol: 'circle',
//      symbolSize: 6,
        data:[60296,52645,170163,212373,209352,156869,27575,6507,2966,1381,460,652,946,2862].reverse(),
         areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(74,137,220, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(74,137,220, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(74,137,220)',
       			 borderColor: 'rgba(74,137,220,0.27)',
                borderWidth: 12
            }
        },
    }, {
        name: '昨日',
        type: 'line',
        smooth: true,
//      showSymbol: false,
//      symbol: 'circle',
//      symbolSize: 6,
        data:[7278,16676,25724,24285,26134,44538,130700,171982,176002,138528,47092,42487,134180,171457,170957
        ,130092,22915,6686,2806,544,466,338,976,2681].reverse(),
         areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(55,188,152, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(55,188,152, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(55,188,152)',
                 borderColor: 'rgba(55,188,152,0.27)',
                borderWidth: 12
            }
        },
    }]
};
	myChart.setOption(l3_option);
}
lzaixian()


//// zhixue
//var myChart5 = echarts.init(document.getElementById('w_main11'));
//var w_option5 = {
//
//  title:{
//      text: 'e支部活跃度',
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: '#fff',
//          fontWeight:'bolder',
//          fontFamily:'黑体'
//      },
//      top:"5%",
//      left: '18px',
//
//  },
//  tooltip : {
//      trigger: 'axis'
//  },
//  dataZoom: [{
//      show: false,
//  }, {
//      type: 'inside'
//  }],
//  calculable : true,
//  xAxis : [
//
//      {
//          type : 'category',
//          data :  ['南部山区','中国重汽','市规划局','济南卷烟厂','公安局', '历下区','天桥区','国资委','高新区','人资社保' ,'民政局','平阴县','体育局','城市更新局','市中区' ,'产业发展投资集团','经信委','槐荫区','市直机关','卫生和计划生育委员会' ,'章丘区','商河县','长清区','历城区','广播电台委员会' ,'税务局','教育局','济阳县','华电章丘发电有限公司','城市管理局','城市投资集团'],
//          axisLabel:{
//
//              fontSize: 12,
//              fontWeight: 100,
//              textStyle: {
//                  color: '#fff',
//
//              }
//          },
//          dataZoom : [{
//              show: false,
//          }, {
//              type: 'inside'
//          }],
//      },
//
//  ],
//  yAxis : [
//      {
//          type : 'value',
//          axisLabel:{
//              color:'#fff'
//          },
//          axisLine: {
//              lineStyle: {
//                  color: '#57617B'
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: '#57617B'
//              }
//          }
//      }
//
//  ],
//  series : [
//      {
//          name:'活跃数',
//          type:'bar',
//          data:[
//              3   ,
//              4346,
//              1   ,
//              1   ,
//              1252,
//              2297,
//              2036,
//              372 ,
//              18  ,
//              21  ,
//              84  ,
//              786 ,
//              40  ,
//              17  ,
//              1122,
//              79  ,
//              6   ,
//              1860,
//              194 ,
//              5   ,
//              1999,
//              2913,
//              26  ,
//              1753,
//              10  ,
//              697 ,
//              16  ,
//              3045,
//              1   ,
//              209 ,
//              2976,
//
//          ],
//          barWidth:10,
//          barGap:20
//      }
//  ]
//};
//w_option5.series[0].itemStyle={
//  normal: {
//      barBorderRadius:15,
//      color: function(params) {
//
//          var index = params.dataIndex;
//          var alternateNumber = 2;
//
//          var newColor="";
//          var colorList = ['#fbb03b','#29abe2'];
//
//          if(index < alternateNumber){
//
//              newColor = colorList[index];
//
//          }else{
//
//              var rowNumber=Math.floor(index/alternateNumber);
//
//              newColor = colorList[index-rowNumber*alternateNumber];
//          }
//          return newColor
//      }
//  }
//};
//myChart5.setOption(w_option5);

//
//var myChart8 = echarts.init(document.getElementById('w_mainers11'));
//var w_option8 = {
//  tooltip : {
//      trigger: 'item'
//  },
//  toolbox: {
//      show : true,
//      feature : {
//          mark : {show: true},
//          dataView : {show: false, readOnly: false},
//          magicType : {
//              show: true,
//              type: ['pie', 'funnel'],
//              option: {
//                  funnel: {
//                      x: '15%',
//                      width: '50%',
//                      funnelAlign: 'center',
//                      max: 1548
//                  }
//              }
//          },
//          restore : {show: false},
//          saveAsImage : {show: false}
//      }
//  },
//  calculable : true,
//  series : [
//      {
//          color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],
//          name:'学历',
//          type:'pie',
//          radius : ['40%', '55%'],
//          label : {
//              normal: {
//                  formatter: '{b}\n{d}%',
//                  textStyle: {
//                      color: '#29ABE2',
//                      fontWeight: 'bold',
//                      fontSize: 12,
//                      padding:20,
//                      lineHeight:'222',
//                  }
//              },
//          },
//          itemStyle : {
//              normal : {
//
//                  labelLine : {
//                      show : true,
//                      length:1,
//                      length2:7,
//
//                  }
//              }
//          },
//          data:[
//              {value:84868, name:'初中及以下',},
//              {value:56402, name:'高中'},
//              {value:77293, name:'专科'},
//              {value:648, name:'本科'},
//              {value:17200, name:'研究生及以上'},
//          ]
//      }
//  ]
//};
//
//myChart8.setOption(w_option8);
//页面访问排行榜
function fangwen(){
	var myChart8 = echarts.init(document.getElementById('f_siffwfb'));
//"党建和组织工作宣传网",
//"基层党组织建设网",
//"党员队伍建设网",
//"干部工作网",
//"第一书记",
var category = ['违规外联111', '拒绝服务111', '漏洞利用111', '随便吧啥111'];
var barData = [22657841,
4213116,
2522576,
1928647,
].reverse();
var lineData = [22000000, 22000000, 22000000, 22000000];
option = {
	width:'480px',
	 height:'215px',
   	 grid: {
        top: '3%',
        left:'-10%',
        containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: {
        data: category,
        show: false
    },
    series: [{
        name: '',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#1F4683'
            }
        },
        barWidth: 10,
        symbolRepeat: true,
        symbolSize: 10,
        data: lineData,
        barGap: '-100%',
        barCategoryGap: 0,
        label: {
            normal: {
                show: true,
                formatter: (series) => {
                    return barData[series.dataIndex]
                },
                position: 'insideTopRight',
                offset: [0, -20],
                color: '#fff',
                fontSize: 12
            }
        },
        z: -100,
            animationEasing: 'elasticOut',
             animationDelay: function (dataIndex, params) {
            return params.index * 30;
        }
    }, {
        name: '',
        type: 'pictorialBar',
        symbol: 'rect',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: '#6DE8FA'
            }
        },
        symbolRepeat: true,
        symbolSize: 10,
        data: barData,
//      label: {
//          normal: {
//              show: true,
//              formatter: '{b}',
//              position: [0, -20],
//              color: '#fff',
//              fontSize:12
//          }
//      },
            animationEasing: 'elasticOut',
             animationDelay: function (dataIndex, params) {
            return params.index * 30 * 1.1;
        }
    }],
    animation: true
};
	myChart8.setOption(option);
}

fangwen()