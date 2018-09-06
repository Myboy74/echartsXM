$(function () {
    $("#scrollDiv").Scroll({
        line: 1,
        speed: 500,
        timer: 3000,
        up: "but_up",
        down: "but_down"
    });
    $("#scrollDiv1").Scroll({
        line: 1,
        speed: 500,
        timer: 3000,
        up: "but_up",
        down: "but_down"
    });
    $("#scrollDiv2").Scroll({
        line: 1,
        speed: 500,
        timer: 3000,
        up: "but_up",
        down: "but_down"
    });

    $('.w_tipbar li').first().addClass('active_bar')
    $('.w_tipbar li').mouseover(function () {
        $(this).addClass('active_bar').siblings().removeClass('active_bar')
        var sum = $(this).index();
        $('.navbar').eq(sum).stop(true, true).slideDown().siblings('.navbar').hide()
    })
    $('.w_tipbar1 li').first().addClass('active_bar')
    $('.w_tipbar1 li').mouseover(function () {
        $(this).addClass('active_bar').siblings().removeClass('active_bar')
        var sum = $(this).index();
        $('.wangchaos').eq(sum).stop(true, true).show().siblings('.wangchaos').hide()
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
    $(".jinan_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".qd_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt2").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".zb_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt3").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".zz_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt4").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".dy_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt5").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".yt_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt6").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".wf_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt7").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jn_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt8").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".tn_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt9").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".wh_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt10").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".rz_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt11").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lw_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt12").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lx_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt13").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".dz_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt14").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lc_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt15").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".bz_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt16").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".hz_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt17").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jggw_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt18").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jwgw_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt19").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".gzw_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt20").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".slyt_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt21").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".qlsh_ezb").on("click", function () {
        $("#j_main").hide();
        $("#w_maintt22").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })

    $(".u_fanhui").on("click", function () {
        $(".ezb").show();
        $("#j_main").show();
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

    //关系转接切换
    $('.gx .qie li').first().addClass('qiecla');
    $('.gx .qie li').click(function () {

        $(this).addClass('qiecla').siblings().removeClass('qiecla')
        var sum = $(this).index();
        $('#f_lects').eq(sum).stop(true, true).slideDown().siblings('#f_lects').hide();
        if (sum == 0) {
            makeChart_jinan();
            $('.zong').show();
            $('.zong2').hide();
        } else if (sum == 1) {
            makeChart_jinan1();
            $('.zong').hide();
            $('.zong2').show();
        }
    });
    $('.gx2 .qie li').first().addClass('qiecla');
    $('.gx2 .qie li').click(function () {
        $(this).addClass('qiecla').siblings().removeClass('qiecla')
        var sum1 = $(this).index();
        $('#u_lects').eq(sum1).stop(true, true).slideDown().siblings('#u_lects').hide();
        if (sum1 == 0) {
            makeChart_qingdao();
            $('.zong').show();
            $('.zong2').hide();
        } else if (sum1 == 1) {
            makeChart_qingdao1();
            $('.zong').hide();
            $('.zong2').show();
        }
    });
    //点击 省委直属党（工）委转出转入情况 转换到 《济南党组织关系转接迁徙模拟图》
    $(".zong").hide();
    $(".zong2").hide();
    $(".f_jinan").on("click", function () {
        makeChart_jinan();
        $(".f_jinan").hide();
        $(".u_qingdao").hide();
        $(".gx").show();
        $("#lects").hide();
        $("#f_lects").show();
        $(".f_fanHui").show();
        $(".zong").show();
    })
    $(".f_fanHui").on("click", function () {
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
    $(".u_qingdao").on("click", function () {
        makeChart_qingdao();
        $("#lects").hide();
        $(".f_jinan").hide();
        $(".u_qingdao").hide();
        $(".gx2").show();
        $("#u_lects").show();
        $(".f_fanHui").show();
        $(".zong").show();
    })


});


/**性别年龄(年龄)**/
function sex2() {
    var chart = echarts.init(document.getElementById('lsex2'));
    option = {
        title: {},
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },

        series: [{
            type: 'pie',
            top: '-20',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color: ['#00aafa', '#fbb03b', '#8cc63f', '#ed1c24', '#ff00ff'],
            label: {
                position: 'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding: 20,
                        lineHeight: '222',
                    }
                },

            },
            labelLine: {

                normal: {
                    show: true,
                    length: 9,
                    length2: 17,
                }
            },
            data: [{
                    value: 25282,
                    name: '30岁及以下'
                },
                {
                    value: 40961,
                    name: '31-40岁'
                },
                {
                    value: 54933,
                    name: '41-50岁'
                },
                {
                    value: 45097,
                    name: '51-60岁'
                },
                {
                    value: 13540,
                    name: '61岁及以上'
                }
            ],

        }]
    };
    chart.setOption(option);
};
sex2();
/**性别年龄(性别)**/
function sexl() {
    var chart = echarts.init(document.getElementById('lsex1'));
    option = {
        title: {},
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },

        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color: ['#39b54a', '#00aafa'],

            label: {
                position: 'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding: 20,
                        lineHeight: '222',
                    }
                },

            },
            labelLine: {

                normal: {
                    show: true,
                    length: 9,
                    length2: 17,
                }
            },
            data: [{
                    value: 127541,
                    name: '男'
                },
                {
                    value: 52271,
                    name: '女'
                }
            ],

        }]
    };
    chart.setOption(option);
};
sexl();
/**性别年龄(学历)**/
function sex3() {
    var chart = echarts.init(document.getElementById('lsex3'));
    option = {
        title: {},
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },

        series: [{
            type: 'pie',
            top: '-20',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color: ['#00aafa', '#fbb03b', '#8cc63f', '#ed1c24', '#ff00ff'],

            label: {
                position: 'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding: 20,
                        lineHeight: '222',
                    }
                },

            },
            labelLine: {

                normal: {
                    show: true,
                    length: 9,
                    length2: 17,
                }
            },
            data: [{
                    value: 50042,
                    name: '初中及以下'
                },
                {
                    value: 41213,
                    name: '高中/中专'
                },
                {
                    value: 78290,
                    name: '专科/本科'
                },
                {
                    value: 10267,
                    name: '研究生及以上'
                }
            ],

        }]
    };
    chart.setOption(option);
};
sex3();
/**性别年龄(职业)**/
function sex4() {
    var chart = echarts.init(document.getElementById('lsex4'));
    option = {
        title: {
            // text: '党员职业分布图',
            //     textStyle: {
            //         fontWeight: 'normal',
            //         fontSize: 18,
            //         color: '#fff',
            //         fontWeight: 'bolder',
            //         fontFamily: '黑体',

            //     },
            //     top: '2%',
            //     left: '3%'
                // x:10,
                // y:10,
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '10%',
            top: '30%',
            containLabel: true
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
            top:"20%",
        },
        series: [{
            type: 'pie',
            top:"20%",
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color: ['#00aafa', '#fbb03b', '#8cc63f', '#ed1c24', '#ff00ff'],
            label: {
                position: 'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding: 20,
                        lineHeight: '222',
                    }
                },

            },
            labelLine: {

                normal: {
                    show: true,
                    length: 9,
                    length2: 17,
                }
            },
            data: [{
                    value: 25282,
                    name: '国家机关、党群组织、企业、事业单位人员'
                },
                {
                    value: 40961,
                    name: '专业技术人员'
                },
                {
                    value: 54933,
                    name: '办事人员和有关人员'
                },
                {
                    value: 45097,
                    name: '商业、服务业人员'
                },
                {
                    value: 13540,
                    name: '农、林、牧、渔、水利业生产人员'
                },
                {
                    value: 34933,
                    name: '生产、运输设备操作人员'
                }, {
                    value: 25097,
                    name: '军人'
                }, {
                    value: 17024,
                    name: '其他从业人员'
                }
            ],

        }]
    };
    chart.setOption(option);
}
sex4();


var chart = echarts.init(document.getElementById('j_renewal'));
    var j_option1 = {
        width: '757px',
        title: {
            text: '党组织和党员更新比率',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight: 'bolder',
                fontFamily: '黑体'
            },
            top: "5%",
            left: '18px',
            // bottom: '80%',
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a0}: {c0}<br />{a1}: {c1}%',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委'],
            axisLabel: {
                interval: 0,
                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: '#fff',

                }
            }

        }],
        yAxis: [{
                type: 'value',
                axisLabel: {
                    color: '#fff'
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
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
                interval: 20,
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
                        color: '#fff'
                    },
                    formatter: '{value}%'
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }

        ],
        series: [{
                name: '更新数',
                type: 'bar',
                stack: 'sum',
                data: [14005, 9701, 3046, 4546, 7081, 5987, 7791,
                    7806, 6760, 5070, 6470, 7805, 4560, 1340, 1504, 4906,
                    4097, 1480, 777, 888, 111, 3, 97
                ],
                barWidth: 10,
                barGap: 20
            },
            {
                itemStyle: {
                    normal: {
                        color: '#ff00ff',
                    }
                },
                name: "更新率",
                type: 'line',
                yAxisIndex: 1,
                barWidth: 10,
                smooth: true,
                data: [25.01, 29.94, 74.06, 86.95, 49.57, 49.03,
                    47.13, 23.87, 49.98, 63.71, 37.66, 28.52, 64.67,
                    56.86, 15.84, 73.11, 37.41, 12.82, 16.97, 35.31,
                    7.97, 3.69, 0.00

                ],
            }
        ]
    };
    j_option1.series[0].itemStyle = {
        normal: {
            barBorderRadius: 15,
            color: function (params) {

                var index = params.dataIndex;
                var alternateNumber = 2;

                var newColor = "";
                var colorList = ['#9ad945', '#ff1e27'];

                if (index < alternateNumber) {

                    newColor = colorList[index];

                } else {

                    var rowNumber = Math.floor(index / alternateNumber);

                    newColor = colorList[index - rowNumber * alternateNumber];
                }
                return newColor
            }
        }
    };
    chart.setOption(j_option1);

// 党工委e支部和党员注册(省委直属党(工)委所属党支部开通e支部情况)
function makeChart11() {
    var chart = echarts.init(document.getElementById('lect'));
    option = {
        // backgroundColor: '#394056',
        title: {
            text: '省委直属党(工)委所属党支部开通e支部情况',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight: 'bolder',
                fontFamily: '黑体',

            },
            top: '2%',
            left: '3%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}:{c2}%',
            axisPointer: {
                // type: 'cross',
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        calculable: true,
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
                type: 'category',
                // boundaryGap: false,
                axisLine: {
                    show: 'false',
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                // axisLabel:{
                //     interval:0,//横轴信息全部显示
                //     color:'#fff'
                // },
                axisLabel: {
                    interval: 0,
                    fontSize: 12,
                    fontWeight: 100,
                    textStyle: {
                        color: '#fff',

                    }
                },
                data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
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

            }
        ],
        yAxis: [{

                type: 'value',
                min: 0,
                max: 40000,
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
                        color: '#fff'
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
                        color: '#fff'
                    },
                    formatter: '{value}%'
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }
        ],
        series: [{
                name: '开通量',
                type: 'bar',
                barWidth: 10,
                barGap: 20,
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
                data: [18765, 29238, 13488, 9299, 6257, 20594, 24566,
                    19260, 13678, 9787, 8542, 4006, 19899, 14846, 13548,
                    11598, 11813, 6968, 3615, 2483, 3164, 454, 121
                ],

            },
            {
                name: '未开通量',
                type: 'bar',
                barWidth: 10,
                barGap: 20,
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
                data: [1958, 1309, 282, 118, 122, 342, 567,
                    117, 209, 251, 168, 44, 923, 530, 765,
                    159, 32, 1204, 287, 148, 2031, 224, 12
                ]
            },
            {
                itemStyle: {
                    normal: {
                        color: 'gold',
                    }
                },
                // show:true,
                name: "开通率",
                type: 'line',
                yAxisIndex: 1,
                // stack: 'sum',
                // formatter:'{a2}:{c2}%',
                barWidth: 10,
                smooth: true,
                data: [90.72, 95.70, 97.83, 98.42, 98.33, 98.35, 97.78, 99.45,
                    98.49, 97.58, 98.12, 98.91, 95.79, 96.58, 94.60, 98.77,
                    99.78, 85.09, 92.46, 94.58, 60.74, 66.96, 90.98
                ],

            }
        ]
    };
    chart.setOption(option);
}
makeChart11();

// w_js 活跃度等基本情况(e支部活跃度)
var myChart = echarts.init(document.getElementById('j_main'));
var w_option = {
    width: '757px',
    title: {
        text: 'e支部活跃度',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        },
        top: "5%",
        left: '18px',
        // bottom: '80%',
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}<br />{a1}: {c1}%',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委'],
        axisLabel: {
            interval: 0,
            fontSize: 12,
            fontWeight: 100,
            textStyle: {
                color: '#fff',

            }
        }

    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
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
            interval: 20,
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
                    color: '#fff'
                },
                formatter: '{value}%'
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
            name: '活跃数',
            type: 'bar',
            stack: 'sum',
            data: [5182, 9146, 10198, 8188, 3162, 10267, 11845,
                4625, 6941, 6395, 3280, 1155, 13466, 8744, 2267, 8596,
                4431, 1048, 662, 929, 414, 25, 0
            ],
            barWidth: 10,
            barGap: 20
        },
        {
            itemStyle: {
                normal: {
                    color: '#9ad945',
                }
            },
            name: "活跃率",
            type: 'line',
            yAxisIndex: 1,
            barWidth: 10,
            smooth: true,
            data: [25.01, 29.94, 74.06, 86.95, 49.57, 49.03,
                47.13, 23.87, 49.98, 63.71, 37.66, 28.52, 64.67,
                56.86, 15.84, 73.11, 37.41, 12.82, 16.97, 35.31,
                7.97, 3.69, 0.00

            ],
        }
    ]
};
w_option.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
myChart.setOption(w_option);


// e支部活跃度详情
//e支部详情（济南基层党支部开展活动情况(单位:次)）
var u_myChart1 = echarts.init(document.getElementById('w_maintt'));
var u_option = {
    width: '757px',
    title: {
        text: '济南基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [6704, 9679, 9553, 7699, 1449, 4742, 1474, 357, 18592],
        barWidth: 10,
        barGap: 20
    }]
};
u_option.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart1.setOption(u_option);

//e支部详情（青岛基层党支部开展活动情况(单位:次)）
var u_myChart2 = echarts.init(document.getElementById('w_maintt2'));
var u_option2 = {
    width: '757px',
    title: {
        text: '青岛基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [7751, 11417, 17667, 12972, 4455, 8747, 23919, 1577, 25143],
        barWidth: 10,
        barGap: 20
    }]
};
u_option2.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart2.setOption(u_option2);

//e支部详情（淄博）
var u_myChart3 = echarts.init(document.getElementById('w_maintt3'));
var u_option3 = {
    width: '757px',
    title: {
        text: '淄博基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [11578, 14675, 24969, 11820, 3018, 13089, 3009, 481, 56671],
        barWidth: 10,
        barGap: 20
    }]
};
u_option3.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart3.setOption(u_option3);

//e支部详情（枣庄）
var u_myChart4 = echarts.init(document.getElementById('w_maintt4'));
var u_option4 = {
    width: '757px',
    title: {
        text: '枣庄基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [6770, 15048, 27252, 12292, 4043, 20701, 2908, 440, 54429],
        barWidth: 10,
        barGap: 20
    }]
};
u_option4.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart4.setOption(u_option4);
//e支部详情（东营）
var u_myChart5 = echarts.init(document.getElementById('w_maintt5'));
var u_option5 = {
    width: '757px',
    title: {
        text: '东营基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [1874, 3697, 9261, 3867, 1799, 6887, 1275, 654, 17719],
        barWidth: 10,
        barGap: 20
    }]
};
u_option5.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart5.setOption(u_option5);
//e支部详情（烟台）
var u_myChart6 = echarts.init(document.getElementById('w_maintt6'));
var u_option6 = {
    width: '757px',
    title: {
        text: '烟台基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [41244, 44069, 68868, 22534, 2632, 10576, 4113, 1472, 63383],
        barWidth: 10,
        barGap: 20
    }]
};
u_option6.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart6.setOption(u_option6);
//e支部详情（潍坊）
var u_myChart7 = echarts.init(document.getElementById('w_maintt7'));
var u_option7 = {
    width: '757px',
    title: {
        text: '潍坊基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [10542, 22034, 40948, 17556, 5026, 17617, 2567, 936, 30326],
        barWidth: 10,
        barGap: 20
    }]
};
u_option7.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart7.setOption(u_option7);
//e支部详情（济宁）
var u_myChart8 = echarts.init(document.getElementById('w_maintt8'));
var u_option8 = {
    width: '757px',
    title: {
        text: '济宁基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [2647, 5701, 9534, 4348, 1289, 4164, 1205, 234, 15762],
        barWidth: 10,
        barGap: 20
    }]
};
u_option8.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart8.setOption(u_option8);
//e支部详情（泰安）
var u_myChart9 = echarts.init(document.getElementById('w_maintt9'));
var u_option9 = {
    width: '757px',
    title: {
        text: '泰安基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [9254, 10906, 14710, 5817, 2216, 7156, 1769, 514, 20494],
        barWidth: 10,
        barGap: 20
    }]
};
u_option9.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart9.setOption(u_option9);
//e支部详情（威海）
var u_myChart10 = echarts.init(document.getElementById('w_maintt10'));
var u_option10 = {
    width: '757px',
    title: {
        text: '威海基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [7877, 19564, 20842, 19762, 1170, 6485, 2314, 244, 39871],
        barWidth: 10,
        barGap: 20
    }]
};
u_option10.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart10.setOption(u_option10);
//e支部详情（日照）
var u_myChart11 = echarts.init(document.getElementById('w_maintt11'));
var u_option11 = {
    width: '757px',
    title: {
        text: '日照基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [1852, 2537, 5469, 2789, 1202, 4123, 799, 359, 10760],
        barWidth: 10,
        barGap: 20
    }]
};
u_option11.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart11.setOption(u_option11);
//e支部详情（莱芜）
var u_myChart12 = echarts.init(document.getElementById('w_maintt12'));
var u_option12 = {
    width: '757px',
    title: {
        text: '莱芜基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [1450, 2802, 2694, 1870, 593, 1090, 310, 107, 2853],
        barWidth: 10,
        barGap: 20
    }]
};
u_option12.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart12.setOption(u_option12);
//e支部详情（临沂）
var u_myChart13 = echarts.init(document.getElementById('w_maintt13'));
var u_option13 = {
    width: '757px',
    title: {
        text: '临沂基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [15394, 26576, 57971, 19072, 4979, 24565, 3657, 996, 40206],
        barWidth: 10,
        barGap: 20
    }]
};
u_option13.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart13.setOption(u_option13);
//e支部详情（德州）
var u_myChart14 = echarts.init(document.getElementById('w_maintt14'));
var u_option14 = {
    width: '757px',
    title: {
        text: '德州基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [2960, 12520, 9039, 2738, 1426, 9105, 2478, 871, 38059],
        barWidth: 10,
        barGap: 20
    }]
};
u_option14.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart14.setOption(u_option14);
//e支部详情（聊城）
var u_myChart15 = echarts.init(document.getElementById('w_maintt15'));
var u_option15 = {
    width: '757px',
    title: {
        text: '聊城基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [1591, 1763, 3178, 1726, 312, 1535, 419, 172, 3412],
        barWidth: 10,
        barGap: 20
    }]
};
u_option15.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart15.setOption(u_option15);
//e支部详情（滨州）
var u_myChart16 = echarts.init(document.getElementById('w_maintt16'));
var u_option16 = {
    width: '757px',
    title: {
        text: '滨州基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [2408, 5053, 10838, 4630, 4207, 11171, 3029, 923, 70436],
        barWidth: 10,
        barGap: 20
    }]
};
u_option16.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart16.setOption(u_option16);
//e支部详情（菏泽）
var u_myChart17 = echarts.init(document.getElementById('w_maintt17'));
var u_option17 = {
    width: '757px',
    title: {
        text: '菏泽基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [7145, 6907, 7085, 2851, 861, 3740, 1439, 386, 10651],
        barWidth: 10,
        barGap: 20
    }]
};
u_option17.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart17.setOption(u_option17);
//e支部详情（省直机关）
var u_myChart18 = echarts.init(document.getElementById('w_maintt18'));
var u_option18 = {
    width: '757px',
    title: {
        text: '省直机关工委基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [1179, 1868, 4278, 1800, 287, 1479, 484, 158, 4280],
        barWidth: 10,
        barGap: 20
    }]
};
u_option18.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart18.setOption(u_option18);
//e支部详情（教育）
var u_myChart19 = echarts.init(document.getElementById('w_maintt19'));
var u_option19 = {
    width: '757px',
    title: {
        text: '省委教育工委基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [124, 797, 2040, 671, 231, 979, 298, 97, 1158],
        barWidth: 10,
        barGap: 20
    }]
};
u_option19.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart19.setOption(u_option19);
//e支部详情（国资委）
var u_myChart20 = echarts.init(document.getElementById('w_maintt20'));
var u_option20 = {
    width: '757px',
    title: {
        text: '省国资委党委基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [1549, 2893, 4946, 2449, 288, 1256, 435, 122, 6963],
        barWidth: 10,
        barGap: 20
    }]
};
u_option20.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart20.setOption(u_option20);
//e支部详情（胜利油田）
var u_myChart21 = echarts.init(document.getElementById('w_maintt21'));
var u_option21 = {
    width: '757px',
    title: {
        text: '胜利油田党委基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [500, 2058, 1411, 753, 130, 265, 151, 38, 658],
        barWidth: 10,
        barGap: 20
    }]
};
u_option21.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart21.setOption(u_option21);
//e支部详情（齐鲁石化）
var u_myChart22 = echarts.init(document.getElementById('w_maintt22'));
var u_option22 = {
    width: '757px',
    title: {
        text: '齐鲁石化党委基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [76, 61, 50, 29, 5, 7, 4, 0, 19],
        barWidth: 10,
        barGap: 20
    }]
};
u_option22.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart22.setOption(u_option22);
//e支部详情（黄三角）
var u_myChart23 = echarts.init(document.getElementById('w_maintt23'));
var u_option23 = {
    width: '757px',
    title: {
        text: '黄三角党委基层党支部开展活动情况(单位:次)',
        top: '20px',
        left: "30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bolder',
            fontFamily: '黑体'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        height: '120px',
        top: '70px',
        left: '90px',
        right: '50px',
        bottom: '80px'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#57617B', //左边线的颜色
            },
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B', //左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series: [{
        name: '组织生活数量',
        type: 'bar',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, ],
        barWidth: 10,
        barGap: 20
    }]
};
u_option23.series[0].itemStyle = {
    normal: {
        barBorderRadius: 15,
        color: function (params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor = "";
            var colorList = ['#fbb03b', '#29abe2'];

            if (index < alternateNumber) {

                newColor = colorList[index];

            } else {

                var rowNumber = Math.floor(index / alternateNumber);

                newColor = colorList[index - rowNumber * alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart23.setOption(u_option23);


/*山东省转出总量统计*/
function makeChart13() {
    var chart = echarts.init(document.getElementById('lyuan'));
    var data = [{
        value: 7120,
        name: '转往省内其他市'
    }, {
        value: 2571,
        name: '转往省委直属其他党组织'
    }, {
        value: 11727,
        name: '转往市内其他县（市、区）'
    }, {
        value: 11312,
        name: '转往市委直属其他党组织'
    }, {
        value: 46401,
        name: '转往县（市、区）内其他乡镇（街道）'
    }, {
        value: 4583,
        name: '转往县（市、区）委直属其他党组织'
    }, {
        value: 525762,
        name: '转往本系统内其他党组织'
    }, {
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
    }, {
        value: 0,
        name: '转往国（境）外'

    }];

    option = {
        title: {
            text: '全省组织关系转接转出情况',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight: 'bolder',
                fontFamily: '黑体'
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
            data: ['转往省内其他市', '转往省委直属其他党组织', '转往市内其他县（市、区）', '转往市委直属其他党组织', '转往县（市、区）内其他乡镇（街道）', '转往县（市、区）委直属其他党组织', '转往本系统内其他党组织', '转往乡镇（街道）直属其他党组织', '转往外省（区、市）', '转往军队', '转往武警部队', '转往国（境）外'],
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 7, //legend 间距
            itemBorderRadius: 8,
            orient: 'vertical',
            top: '25px',
            left: '5px',
            textStyle: {
                color: "#fff"
            }
        },
        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            center: ['70%', '50%'],
            color: ['#00ABFB', '#FBB13A', '#8DC53E', '#ED2024', '#FD02FA', '#C1262C', '#682C8E', '#29508B', '#2B75B8', '#7FA0DF', '#6AEEED', '#b783b5'],

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
                    length: 1,
                    length2: 7,
                }
            },
            data: data
        }]
    };
    chart.setOption(option);
}
makeChart13()
/*山东省接收转入总量统计*/
function makeChart14() {
    var chart = echarts.init(document.getElementById('lyu'));
    var data = [{
            value: 7120,
            name: '接收省内其他市'
        }, {
            value: 2571,
            name: '接收省委直属其他党组织'
        }, {
            value: 11727,
            name: '接收市内其他县（市、区）'
        }, {
            value: 11312,
            name: '接收市委直属其他党组织'
        }, {
            value: 46401,
            name: '接收县（市、区）内其他乡镇（街道）'
        }, {
            value: 4583,
            name: '接收县（市、区）委直属其他党组织'
        }

        , {
            value: 525762,
            name: '接收本系统内其他党组织'
        }, {
            value: 6506,
            name: '接收乡镇（街道）直属其他党组织'
        }, {
            value: 5261,
            name: '接收外省（区、市）'
        }, {
            value: 5532,
            name: '接收军队'
        }, {
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
                fontWeight: 'bolder',
                fontFamily: '黑体'
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
            data: ['接收省内其他市', '接收省委直属其他党组织', '接收市内其他县（市、区）', '接收市委直属其他党组织', '接收县（市、区）内其他乡镇（街道）', '接收县（市、区）委直属其他党组织', '接收本系统内其他党组织', '接收乡镇（街道）直属其他党组织', '接收外省（区、市）', '接收军队', '接收武警部队', '接收国（境）外'],
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 7, //legend 间距
            itemBorderRadius: 8,
            orient: 'vertical',
            top: '25px',
            left: '5px',
            textStyle: {
                color: "#fff"
            }
        },
        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            center: ['70%', '50%'],
            color: ['#00ABFB', '#FBB13A', '#8DC53E', '#ED2024', '#FD02FA', '#C1262C', '#682C8E', '#29508B', '#2B75B8', '#7FA0DF', '#6AEEED', '#b783b5'],

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
                    length: 1,
                    length2: 7,
                }
            },
            data: data
        }]
    };
    chart.setOption(option);
}
makeChart14()

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
                fontWeight: 'bolder',
                fontFamily: '黑体'
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
                    color: '#57617B'
                }
            },
            axisLabel: {
                interval: 0, //横轴信息全部显示
                color: '#fff'
            },
            data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
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
                data: [27705, 92118, 41286, 32373, 8656, 35639,
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
            }
        ]
    };
    chart.resize();
    chart.setOption(option);
}
makeChart12();

/*点击跳转到《济南党组织关系转接迁徙模拟图》*/
function makeChart_jinan() { //转入
    var chart = echarts.init(document.getElementById('f_lects'));
    var data2 = [791, 25643, 66, 96, 24, 17, 63, 41,
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
                fontWeight: 'bolder',
                fontFamily: '黑体',

            },
            top: '2%',
            left: '3%'
        },
        tooltip: {
            // show: true,
            // trigger: 'item',
            formatter: function (params) { //悬浮提示框显示的内容
                if (params.data.isnode) {
                    return params.data.name + ":" + params.data.value;
                } else {
                    return params.data.source + "--" + params.data.target;
                }
            }
        },
        // backgroundColor:"#000000", //画布背景颜色
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'force',
            // draggable:'false',  //可以拖拽圆球
            // focusNodeAdjacency:'false',   //over上去其他节点变透明
            symbol: 'circle', //设置节点的形状
            force: {
                edgeLength: [20, 800] // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
            },
            // symbolSize: 50,  //决定圆的大小
            roam: false, //设置是否可拖拽图形
            label: {
                normal: {
                    show: true,
                    formatter: function (data) {
                        return data.name;
                    },
                    rich: {
                        gray: {
                            fontSize: 10,
                            color: 'white',
                        },
                        green: {
                            fontSize: 12,
                            color: '#519FFC',
                        }
                    },
                    color: '#ffffff',
                },
            },
            focusNodeAdjacency: true,
            // edgeSymbol: ['arrow', 'line'],
            // edgeSymbolSize: [10, 4],
            edgeLabel: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 30
                    },
                }
            },
            data: [{
                    name: '青岛',
                    x: 360,
                    y: 100,
                    value: data2[2],
                    isnode: true, //这是一个开关 用来判断是否显示  ---45行tooltip显示
                    symbolSize: 60, //决定圆的大小
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '淄博',
                    x: 700,
                    y: 219,
                    value: data2[3],
                    isnode: true,
                    symbolSize: 65,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '济南',

                    x: 500,
                    y: 200,
                    value: data2[1],
                    isnode: true,
                    fixed: true, //固定
                    label: {
                        fontSize: '14',
                    },
                    effectType: 'ripple',
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
                                    offset: 0,
                                    color: 'rgba(81,159,252,1)' // 0% 处的颜色
                                }, {
                                    offset: 0.7,
                                    color: 'rgba(81,159,252,1)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(81,159,252,0.5)'
                                }, {
                                    offset: 0.9,
                                    color: 'rgba(81,159,252,0.4)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(81,159,252,0.15)'
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
                    value: data2[4],
                    isnode: true,
                    symbolSize: 34,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '东营',
                    x: 450,
                    y: 300,
                    value: data2[5],
                    isnode: true,
                    symbolSize: 27,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '烟台',
                    x: 250,
                    y: 300,
                    value: data2[6],
                    isnode: true,
                    symbolSize: 58,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '潍坊',
                    x: 250,
                    y: 300,
                    value: data2[7],
                    isnode: true,
                    symbolSize: 41,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '济宁',
                    x: 250,
                    y: 300,
                    value: data2[8],
                    isnode: true,
                    symbolSize: 46,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '泰安',
                    x: 250,
                    y: 300,
                    value: data2[9],
                    isnode: true,
                    symbolSize: 70,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '威海',
                    x: 250,
                    y: 300,
                    value: data2[10],
                    isnode: true,
                    symbolSize: 27,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            // borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '日照',
                    x: 300,
                    y: 300,
                    value: data2[11],
                    isnode: true,
                    symbolSize: 21,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            // borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '莱芜',
                    x: 300,
                    y: 300,
                    value: data2[12],
                    isnode: true,
                    symbolSize: 13,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '临沂',
                    x: 300,
                    y: 300,
                    value: data2[13],
                    isnode: true,
                    symbolSize: 48,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '德州',
                    x: 300,
                    y: 300,
                    value: data2[14],
                    isnode: true,
                    symbolSize: 50,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '聊城',
                    x: 300,
                    y: 300,
                    value: data2[15],
                    isnode: true,
                    symbolSize: 46,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '滨州',
                    x: 300,
                    y: 300,
                    value: data2[16],
                    isnode: true,
                    symbolSize: 26,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '菏泽',
                    x: 300,
                    y: 300,
                    value: data2[17],
                    isnode: true,
                    symbolSize: 27,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '省直\n机关\n工委',
                    x: 300,
                    y: 300,
                    value: data2[18],
                    isnode: true,
                    symbolSize: 75,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '省委\n教育\n工委',
                    x: 300,
                    y: 300,
                    value: data2[19],
                    isnode: true,
                    symbolSize: 68,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '省国\n资委\n党委',
                    x: 300,
                    y: 300,
                    value: data2[20],
                    isnode: true,
                    symbolSize: 70,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '胜利\n油田\n党委',
                    x: 300,
                    y: 300,
                    value: data2[21],
                    isnode: true,
                    symbolSize: 12,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '齐鲁\n石化\n党委',
                    x: 300,
                    y: 300,
                    value: data2[22],
                    isnode: true,
                    symbolSize: 11,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '黄三\n角党\n工委',
                    x: 300,
                    y: 300,
                    value: data2[23],
                    isnode: true,
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '省外',
                    x: 300,
                    y: 300,
                    value: data2[0],
                    isnode: true,
                    symbolSize: 85,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }
            ],
            links: [{
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
                }, {
                    source: '济南',
                    target: '省委\n教育\n工委'
                }, {
                    source: '济南',
                    target: '省国\n资委\n党委'
                }, {
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
            animation: true,
            markArea: {
                animation: false,
            },
            markPoint: {
                symbol: 'arrow',
            },
            markLine: {
                symbol: 'arrow',
                precision: 5
            },
            itemStyle: {
                color: '#1b486d',
            },
            lineStyle: {
                normal: {
                    type: 'dashed',

                    width: 1,
                    curveness: 0,
                    color: '#519FFC',

                }
            },
            force: {
                repulsion: [300, 300],
                // edgeLength: [10, 200],
                // layoutAnimation:false,
                //initLayout:'circle',
                gravity: 0.1
            }
        }]
    };
    chart.setOption(option);
}
makeChart_jinan();

function makeChart_jinan1() { //转出
    var chart = echarts.init(document.getElementById('f_lects'));
    var data2 = [261, 25643, 50, 24, 8, 7, 34, 37,
        34, 31, 15, 11, 19, 38, 24, 30, 20,
        22, 249, 53, 232, 1, 0, 0
    ];
    option = {
        tooltip: {
            // show: true,
            // trigger: 'item',
            formatter: function (params) { //悬浮提示框显示的内容
                if (params.data.isnode) {
                    return params.data.name + ":" + params.data.value;
                } else {
                    return params.data.source + "--" + params.data.target;
                }
            }
        },
        // backgroundColor:"#000000", //画布背景颜色
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'force',
            // draggable:'false',  //可以拖拽圆球
            // focusNodeAdjacency:'false',   //over上去其他节点变透明
            symbol: 'circle', //设置节点的形状
            force: {
                edgeLength: [20, 1000] // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
            },
            // symbolSize: 50,  //决定圆的大小
            roam: false, //设置是否可拖拽图形
            label: {
                normal: {
                    show: true,
                    formatter: function (data) {
                        return data.name;
                    },
                    rich: {
                        gray: {
                            fontSize: 10,
                            color: 'white',
                        },
                        green: {
                            fontSize: 12,
                            color: '#EA4245',
                        },
                        gold: {
                            fontSize: 10,
                            color: '#FFFFFF',
                            opacity: 0.6,
                        }
                    },
                    // position:['-50%','-50%'],//改变内容的位置
                    color: '#ffffff',
                },
            },
            focusNodeAdjacency: true,
            // edgeSymbol: ['line', 'arrow'],
            // edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 30
                    },
                }
            },
            data: [{
                    name: '青岛',
                    x: 360,
                    y: 100,
                    value: data2[2],
                    isnode: true,
                    symbolSize: 50, //决定圆的大小

                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                            shadowBlur: 20,
                        }
                    }
                }, {
                    name: '淄博',
                    x: 700,
                    y: 219,
                    value: data2[3],
                    isnode: true,
                    symbolSize: 28,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '济南',
                    x: 740,
                    y: 350,
                    value: data2[1],
                    isnode: true,
                    fixed: true, //固定
                    label: {
                        fontSize: '14',
                    },
                    effectType: 'ripple',
                    symbolSize: 130,
                    showEffectOn: 'render',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(234,66,69,1)' // 0% 处的颜色
                                }, {
                                    offset: 0.7,
                                    color: 'rgba(234,66,69,1)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(234,66,69,0.5)'
                                }, {
                                    offset: 0.9,
                                    color: 'rgba(234,66,69,0.4)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(234,66,69,0.15)'
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
                    value: data2[4],
                    isnode: true,
                    symbolSize: 18,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '东营',
                    x: 450,
                    y: 300,
                    value: data2[5],
                    isnode: true,
                    symbolSize: 17,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '烟台',
                    x: 250,
                    y: 300,
                    value: data2[6],
                    isnode: true,
                    symbolSize: 34,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '潍坊',
                    x: 250,
                    y: 300,
                    value: data2[7],
                    isnode: true,
                    symbolSize: 37,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '济宁',
                    x: 250,
                    y: 300,
                    value: data2[8],
                    isnode: true,
                    symbolSize: 34,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '泰安',
                    x: 200,
                    y: 300,
                    value: data2[9],
                    isnode: true,
                    symbolSize: 31,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '威海',
                    x: 250,
                    y: 300,
                    value: data2[10],
                    isnode: true,
                    symbolSize: 25,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '日照',
                    x: 300,
                    y: 300,
                    value: data2[11],
                    isnode: true,
                    symbolSize: 21,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '莱芜',
                    x: 300,
                    y: 300,
                    value: data2[12],
                    isnode: true,
                    symbolSize: 28,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '临沂',
                    x: 300,
                    y: 300,
                    value: data2[13],
                    isnode: true,
                    symbolSize: 38,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '德州',
                    x: 300,
                    y: 300,
                    value: data2[14],
                    isnode: true,
                    symbolSize: 28,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '聊城',
                    x: 300,
                    y: 300,
                    value: data2[15],
                    isnode: true,
                    symbolSize: 30,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '滨州',
                    x: 300,
                    y: 300,
                    value: data2[16],
                    isnode: true,
                    symbolSize: 30,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '菏泽',
                    x: 300,
                    y: 300,
                    value: data2[17],
                    isnode: true,
                    symbolSize: 32,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省直\n机关\n工委',
                    x: 300,
                    y: 50,
                    value: data2[18],
                    isnode: true,
                    symbolSize: 65,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省委\n教育\n工委',
                    x: 300,
                    y: 60,
                    value: data2[19],
                    isnode: true,
                    symbolSize: 53,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            // borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省国\n资委\n党委',
                    x: 200,
                    y: 300,
                    value: data2[20],
                    isnode: true,
                    symbolSize: 60,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            // borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '胜利\n油田\n党委',
                    x: 350,
                    y: 350,
                    label: {
                        position: ['110%', '-10%']
                    },
                    value: data2[21],
                    isnode: true,
                    symbolSize: 11,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '齐鲁\n石化\n党委',
                    x: 300,
                    y: 300,
                    value: data2[22],
                    isnode: true,
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '黄三\n角党\n工委',
                    x: 300,
                    y: 300,
                    value: data2[23],
                    isnode: true,
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '省外',
                    x: 200,
                    y: 80,
                    value: data2[0],
                    isnode: true,
                    symbolSize: 80,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                },
            ],
            links: [{
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
                }, {
                    source: '济南',
                    target: '省委\n教育\n工委'
                }, {
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
            animation: true,
            markArea: {
                animation: false,
            },
            markPoint: {
                symbol: 'arrow',
            },
            markLine: {
                symbol: 'arrow',
                precision: 5
            },
            itemStyle: {
                color: '#8f4848',
                // color:'#1b486d',
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 1,
                    curveness: 0,
                    color: '#EA4245',
                }
            },
            force: {
                repulsion: [300, 100],
                // edgeLength: [10, 200],
                // layoutAnimation:false,
                //initLayout:'circle',
                gravity: 0.1
            }
        }]
    };
    chart.resize();
    chart.setOption(option);
}

/*点击跳转到《青岛党组织关系转接迁徙模拟图》*/
function makeChart_qingdao() { //转入
    var chart = echarts.init(document.getElementById('u_lects'));
    var data2 = [1278, 50, 89872, 60, 22, 16,
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
                fontWeight: 'bolder',
                fontFamily: '黑体',
            },
            top: '2%',
            left: '3%'
        },
        tooltip: {
            // show: true,
            // trigger: 'item',
            formatter: function (params) { //悬浮提示框显示的内容
                if (params.data.isnode) {
                    return params.data.name + ":" + params.data.value;
                } else {
                    return params.data.source + "--" + params.data.target;
                }
            }
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'force',
            // draggable:'false',  //可以拖拽圆球
            // focusNodeAdjacency:'false',   //over上去其他节点变透明
            symbol: 'circle', //设置节点的形状
            force: {
                edgeLength: [20, 800] // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
            },
            // symbolSize: 50,  //决定圆的大小
            roam: false, //设置是否可拖拽图形
            label: {
                normal: {
                    show: true,
                    formatter: function (data) {
                        return data.name;
                    },
                    rich: {
                        gray: {
                            fontSize: 10,
                            color: 'white',
                        },
                        green: {
                            fontSize: 12,
                            color: '#519FFC',
                        }
                    },
                    color: '#ffffff',
                },
            },
            focusNodeAdjacency: true,
            // edgeSymbol: ['arrow', 'line'],
            // edgeSymbolSize: [10, 4],
            edgeLabel: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 30
                    },
                }
            },
            data: [{
                    name: '青岛',
                    x: 500,
                    y: 200,
                    value: data2[2],
                    isnode: true,
                    fixed: true, //固定
                    label: {
                        fontSize: '14',
                    },
                    effectType: 'ripple',
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
                                    offset: 0,
                                    color: 'rgba(81,159,252,1)' // 0% 处的颜色
                                }, {
                                    offset: 0.7,
                                    color: 'rgba(81,159,252,1)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(81,159,252,0.5)'
                                }, {
                                    offset: 0.9,
                                    color: 'rgba(81,159,252,0.4)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(81,159,252,0.15)'
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
                    value: data2[3],
                    isnode: true,
                    symbolSize: 52,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '济南',
                    x: 360,
                    y: 100,
                    value: data2[1],
                    isnode: true,
                    symbolSize: 50, //决定圆的大小
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '枣庄',
                    x: 550,
                    y: 300,
                    value: data2[4],
                    isnode: true,
                    symbolSize: 22,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '东营',
                    x: 450,
                    y: 300,
                    value: data2[5],
                    isnode: true,
                    symbolSize: 16,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '烟台',
                    x: 250,
                    y: 300,
                    value: data2[6],
                    isnode: true,
                    symbolSize: 65,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '潍坊',
                    x: 250,
                    y: 300,
                    value: data2[7],
                    isnode: true,
                    symbolSize: 60,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '济宁',
                    x: 250,
                    y: 300,
                    value: data2[8],
                    isnode: true,
                    symbolSize: 45,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '泰安',
                    x: 250,
                    y: 300,
                    value: data2[9],
                    isnode: true,
                    symbolSize: 55,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '威海',
                    x: 250,
                    y: 300,
                    value: data2[10],
                    isnode: true,
                    symbolSize: 40,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            // borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '日照',
                    x: 300,
                    y: 300,
                    value: data2[11],
                    isnode: true,
                    symbolSize: 41,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            // borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '莱芜',
                    x: 300,
                    y: 300,
                    value: data2[12],
                    isnode: true,
                    symbolSize: 21,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '临沂',
                    x: 300,
                    y: 300,
                    value: data2[13],
                    isnode: true,
                    symbolSize: 46,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '德州',
                    x: 300,
                    y: 300,
                    value: data2[14],
                    isnode: true,
                    symbolSize: 15,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '聊城',
                    x: 300,
                    y: 300,
                    value: data2[15],
                    isnode: true,
                    symbolSize: 29,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '滨州',
                    x: 300,
                    y: 300,
                    value: data2[16],
                    isnode: true,
                    symbolSize: 24,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '菏泽',
                    x: 300,
                    y: 300,
                    value: data2[17],
                    isnode: true,
                    symbolSize: 29,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省直\n机关\n工委',
                    x: 300,
                    y: 300,
                    value: data2[18],
                    isnode: true,
                    symbolSize: 59,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省委\n教育\n工委',
                    x: 300,
                    y: 300,
                    value: data2[19],
                    isnode: true,
                    symbolSize: 57,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省国\n资委\n党委',
                    x: 300,
                    y: 300,
                    value: data2[20],
                    isnode: true,
                    symbolSize: 38,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '胜利\n油田\n党委',
                    x: 300,
                    y: 300,
                    value: data2[21],
                    isnode: true,
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '齐鲁\n石化\n党委',
                    x: 300,
                    y: 300,
                    value: data2[22],
                    isnode: true,
                    symbolSize: 11,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '黄三\n角党\n工委',
                    x: 300,
                    y: 300,
                    value: data2[23],
                    isnode: true,
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '省外',
                    x: 300,
                    y: 300,
                    value: data2[0],
                    isnode: true,
                    symbolSize: 90,
                    itemStyle: {
                        normal: {
                            borderColor: '#519FFC',
                            borderType: 'solid',
                        }
                    }
                },
            ],
            links: [{
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
                }, {
                    source: '青岛',
                    target: '省委\n教育\n工委'
                }, {
                    source: '青岛',
                    target: '省国\n资委\n党委'
                }, {
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
            animation: true,
            markArea: {
                animation: false,
            },
            markPoint: {
                symbol: 'arrow',
            },
            markLine: {
                symbol: 'arrow',
                precision: 5
            },
            itemStyle: {
                color: '#1b486d',
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 1,
                    curveness: 0,
                    color: '#519FFC',

                }
            },
            force: {
                repulsion: [300, 230],
                // edgeLength: [10, 200],
                // layoutAnimation:false,
                //initLayout:'circle',
                gravity: 0.1
            }
        }]
    };
    chart.resize();
    chart.setOption(option);
}
// makeChart_qingdao();
function makeChart_qingdao1() { //转出
    var chart = echarts.init(document.getElementById('u_lects'));
    var data2 = [664, 66, 89872, 38, 17, 15,
        78, 114, 36, 26, 37, 36, 12, 75, 23,
        24, 36, 54, 73, 27, 30, 2, 3, 0
    ];
    option = {
        title: {
            text: '青岛党组织关系转接迁徙模拟图',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight: 'bolder',
                fontFamily: '黑体',

            },
            top: '2%',
            left: '3%'
        },
        tooltip: {
            // show: true,
            // trigger: 'item',
            formatter: function (params) { //悬浮提示框显示的内容
                if (params.data.isnode) {
                    return params.data.name + ":" + params.data.value;
                } else {
                    return params.data.source + "--" + params.data.target;
                }
            }
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'force',
            // draggable:'false',  //可以拖拽圆球
            // focusNodeAdjacency:'false',   //over上去其他节点变透明
            symbol: 'circle', //设置节点的形状
            force: {
                edgeLength: [20, 800] // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
            },
            // symbolSize: 50,  //决定圆的大小
            roam: false, //设置是否可拖拽图形
            label: {
                normal: {
                    show: true,
                    formatter: function (data) {
                        return data.name;
                    },
                    rich: {
                        gray: {
                            fontSize: 10,
                            color: 'white',
                        },
                        green: {
                            fontSize: 12,
                            color: '#EA4245',
                        },
                    },
                    color: '#ffffff',
                },
            },
            focusNodeAdjacency: true,
            // edgeSymbol: ['line', 'arrow'],
            // edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 30
                    },
                }
            },
            data: [{
                    name: '青岛',
                    x: 735,
                    y: 200,
                    value: data2[2],
                    isnode: true,
                    fixed: true, //固定
                    // itemStyle: {
                    //     normal: {
                    //         borderColor: '#EA4245',
                    //         borderWidth: 1,
                    //         borderType:'solid',
                    //         shadowBlur: 20,
                    //     }
                    // },
                    label: {
                        fontSize: '14',
                    },
                    effectType: 'ripple',
                    symbolSize: 130,
                    showEffectOn: 'render',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(234,66,69,1)' // 0% 处的颜色
                                }, {
                                    offset: 0.7,
                                    color: 'rgba(234,66,69,1)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(234,66,69,0.5)'
                                }, {
                                    offset: 0.9,
                                    color: 'rgba(234,66,69,0.4)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(234,66,69,0.15)'
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
                    value: data2[3],
                    isnode: true,
                    symbolSize: 48,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '济南',
                    x: 360,
                    y: 100,
                    value: data2[1],
                    isnode: true,
                    symbolSize: 60,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '枣庄',
                    x: 550,
                    y: 300,
                    value: data2[4],
                    isnode: true,
                    symbolSize: 27,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '东营',
                    x: 450,
                    y: 300,
                    value: data2[5],
                    isnode: true,
                    symbolSize: 25,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '烟台',
                    x: 250,
                    y: 300,
                    value: data2[6],
                    isnode: true,
                    symbolSize: 65,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '潍坊',
                    x: 250,
                    y: 300,
                    value: data2[7],
                    isnode: true,
                    symbolSize: 70,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '济宁',
                    x: 250,
                    y: 300,
                    value: data2[8],
                    isnode: true,
                    symbolSize: 46,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '泰安',
                    x: 200,
                    y: 300,
                    value: data2[9],
                    isnode: true,
                    symbolSize: 36,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '威海',
                    x: 250,
                    y: 300,
                    value: data2[10],
                    isnode: true,
                    symbolSize: 47,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '日照',
                    x: 300,
                    y: 300,
                    value: data2[11],
                    isnode: true,
                    symbolSize: 46,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '莱芜',
                    x: 300,
                    y: 300,
                    value: data2[12],
                    isnode: true,
                    symbolSize: 22,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '临沂',
                    x: 300,
                    y: 300,
                    value: data2[13],
                    isnode: true,
                    symbolSize: 63,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '德州',
                    x: 300,
                    y: 300,
                    value: data2[14],
                    isnode: true,
                    symbolSize: 33,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '聊城',
                    x: 300,
                    y: 300,
                    value: data2[15],
                    isnode: true,
                    symbolSize: 34,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '滨州',
                    x: 300,
                    y: 300,
                    value: data2[16],
                    isnode: true,
                    symbolSize: 46,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '菏泽',
                    x: 300,
                    y: 300,
                    value: data2[17],
                    isnode: true,
                    symbolSize: 54,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省直\n机关\n工委',
                    x: 300,
                    y: 50,
                    value: data2[18],
                    isnode: true,
                    symbolSize: 62,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省委\n教育\n工委',
                    x: 300,
                    y: 60,
                    value: data2[19],
                    isnode: true,
                    symbolSize: 37,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            // borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                }, {
                    name: '省国\n资委\n党委',
                    x: 200,
                    y: 300,
                    value: data2[20],
                    isnode: true,
                    symbolSize: 40,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            // borderWidth: 1,
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '胜利\n油田\n党委',
                    x: 350,
                    y: 350,
                    label: {
                        position: ['110%', '-10%']
                    },
                    value: data2[21],
                    isnode: true,
                    symbolSize: 12,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '齐鲁\n石化\n党委',
                    x: 300,
                    y: 300,
                    label: {
                        position: ['110%', '-10%']
                    },
                    value: data2[22],
                    isnode: true,
                    symbolSize: 13,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '黄三\n角党\n工委',
                    x: 200,
                    y: 100,
                    value: data2[23],
                    isnode: true,
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                },
                {
                    name: '省外',
                    x: 200,
                    y: 100,
                    value: data2[0],
                    isnode: true,
                    symbolSize: 90,
                    itemStyle: {
                        normal: {
                            borderColor: '#EA4245',
                            borderType: 'solid',
                        }
                    }
                },
            ],
            links: [{
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
                }, {
                    source: '青岛',
                    target: '省委\n教育\n工委'
                }, {
                    source: '青岛',
                    target: '省国\n资委\n党委'
                }, {
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
            animation: true,
            markArea: {
                animation: false,
            },
            markPoint: {
                symbol: 'arrow',
            },
            markLine: {
                symbol: 'arrow',
                precision: 5
            },
            itemStyle: {
                color: '#8f4848',
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    width: 1,
                    curveness: 0,
                    color: '#EA4245',
                }
            },
            force: {
                repulsion: [400, 300],
                // edgeLength: [10, 200],
                // layoutAnimation:false,
                //initLayout:'circle',
                gravity: 0.1
            }
        }]
    };
    chart.resize();
    chart.setOption(option);
}

//17个地市稿子提交情况
function chart_content() {
    var chart = echarts.init(document.getElementById('j_content'));
    var data = ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'];
    option = {
        // backgroundColor: "#344b58",
        "title": {
            "text": "全省地级市发布情况",
            x: "4%",

            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow",
                textStyle: {
                    color: "#fff"
                }

            },
            formatter: '{a0}: {c0}%<br />{a1}: {c1}%',
        },
        "grid": {
            "borderWidth": 0,
            "top": 110,
            "bottom": 95,
            textStyle: {
                color: "#fff"
            }
        },
        "legend": {
            x: '4%',
            top: '11%',
            textStyle: {
                color: '#90979c',
            },
            "data": ['女', '男', '平均']
        },


        "calculable": true,
        "xAxis": [{
            "type": "category",
            "axisLine": {
                lineStyle: {
                    color: '#90979c'
                }
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,
            },
            "data": data,
        }],
        "yAxis": [{
            "type": "value",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#90979c'
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,

            },
            "splitArea": {
                "show": false
            },

        }],
        "series": [{
                "name": "提交率",
                "type": "line",
                // "stack": "总量",
                smooth: true,
                "barMaxWidth": 35,
                "barGap": "10%",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(255,144,128,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            // "position": "insideTop",
                            formatter: function (p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": [
                    '71.2',
                    '76.4',
                    '76.4',
                    '70.56',
                   '90.4',
                    '99.9',
                    '80.5',
                    '87.4',
                    '40.5',
                    '80.4',
                    '90.9',
                    '85.5',
                    '91.5',
                    '93.5',
                    '93.6',
                     '60.4',
                     '60.7',
                ],
            },

            {
                "name": "通过率",
                "type": "line",
                // "stack": "总量",
                smooth: true,
                "itemStyle": {
                    "normal": {
                        "color": "rgba(0,191,183,1)",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            // "position": "top",
                            formatter: function (p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": [
                    '80.5',
                    '70.5',
                    '40.6',
                    '30.6',
                    '88.6',
                    '77.9',
                    '89.8',
                    '70.8',
                    '99.9',
                    '90.8',
                    '90.8',
                    '99.8',
                    '60.6',
                    '99.1',
                    '99.4',
                    '88.4',
                    '71.2',
                ]
            }
            // , {
            //     "name": "总数",
            //     "type": "line",
            //     "stack": "总量",
            //     symbolSize: 10,
            //     symbol: 'circle',
            //     "itemStyle": {
            //         "normal": {
            //             "color": "rgba(252,230,48,1)",
            //             "barBorderRadius": 0,
            //             "label": {
            //                 "show": true,
            //                 "position": "top",
            //                 formatter: function (p) {
            //                     return p.value > 0 ? (p.value) : '';
            //                 }
            //             }
            //         }
            //     },
            //     "data": [
            //         1036,
            //         3693,
            //         2962,
            //         3810,
            //         2519,
            //         1915,
            //         1748,
            //         4675,
            //         6209,
            //         4323,
            //         2865,
            //         4298
            //     ]
            // },
        ]
    }
    chart.resize();
    chart.setOption(option);
}
chart_content();