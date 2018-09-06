$(function () {
    $("#scrollDiv").Scroll({line:5,speed:3500,timer:7000,up:"but_up",down:"but_down"});
    $("#scrollDiv1").Scroll({line:5,speed:3500,timer:7000,up:"but_up",down:"but_down"});
    $("#scrollDiv2").Scroll({line:5,speed:3500,timer:7000,up:"but_up",down:"but_down"});

    $('.w_tipbar li').first().addClass('active_bar')
    // $('#nmsd .navbar').first().removeClass('w_hide');
    $('.w_tipbar li').mouseover(function(){

        $(this).addClass('active_bar').siblings().removeClass('active_bar')
        var sum=$(this).index();
        if(sum=='0'){
            $('.j_hover').show();


        }else{
            $('.j_hover').hide();
        }
        
        $('#nmsd .navbar').eq(sum).stop(true,true).slideDown().siblings('.navbar').hide()
    })
    $('.w_tipbar1 li').first().addClass('active_bar')
    $('.w_tipbar1 li').mouseover(function(){
        $(this).addClass('active_bar').siblings().removeClass('active_bar')
        var sum = $(this).index();
        $('.wangchao').eq(sum).stop(true, true).show().siblings('.wangchao').hide()
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
//function sex2() {
//  var chart = echarts.init(document.getElementById('lsex2'));
//  var j_sex2=[];
//  var sum2=0;
//  var summ=[];
//  var qq = ["582451", "1068117", "1331202", "1264913", "1928362"];
//  for(var i=0;i<qq.length;i++){
//      sum2+=parseInt(qq[i]);
//  }
//  
//  $.ajax({
//      type:"GET",
//      url:'./json/j_age.json',
//      dataType:'json',
//      async:true,
//      success:function (data) {
//          for(i=0;i<data.data.length;i++){
//              j_sex2.push({
//                  value: data.value[i],
//                  name: data.data[i]
//              });
//              sum2+=parseInt(data.value[i]);
//          }
//          option = {
//              tooltip: {
//                  trigger: 'axis',
//                  position:'right',
//                  show:false,
//              },
//              legend: {
//                  right:'0',
//                  data: ['年龄分布图'],
//                  textStyle: {
//                      color: 'rgba(255,255,255,0.8)',
//                  },
//              },
//              radar: [
//                  {
//                      shape: 'circle',
//                      indicator: [
//                          { text: '30岁以下', max: 2000000 },
//                          { text: '31岁-40岁', max: 2000000 },
//                          { text: '41岁-50岁', max: 2000000 },
//                          { text: '51岁-60岁', max: 2000000 },
//                          { text: '61岁及以上', max: 2000000 }
//                      ],
//                      name: {
//                          textStyle: {
//                              color: 'rgba(255,255,255,0.8)',
//                              fontSize: 12
//                          }
//                      },
//                      splitArea: {
//                          areaStyle: {
//                              color: ['rgba(81,159,252,1)', 'rgba(81,159,252,0.8)', 'rgba(81,159,252,0.6)', 'rgba(81,159,252,0.4)', 'rgba(81,159,252,0.2)'],
//                              shadowColor: 'rgba(0, 100, 0, 0.3)'
//                          }
//                      },
//                      splitLine: {
//
//                          lineStyle: {
//                              color: '#4f8bbe',
//                              opacity: 0.5
//                          }
//                      },
//                      center: ['55%', '40%'],
//                      radius: 80
//                  },
//              ],
//              series: [
//
//                  {
//                      label: {
//
//                      },
//                      type: 'radar',
//                      tooltip: {
//                          trigger: 'item',
//                          show: false,
//                      },
//                      itemStyle: {
//                          normal: {
//                              // areaStyle: { type: 'default' },
//                              color: '#29ABE2',
//                          }
//                      },
//                      lineStyle: {
//                          width: 0.5,
//                      },
//                      data: [{
//                          value: [2000000, 2000000, 2000000, 2000000, 2000000],
//                          name: ''
//                      }]
//                  },
//                  {
//
//                      type: 'radar',
//                      tooltip: {
//                          show: false,
//                          trigger: 'item'
//                      },
//                      itemStyle: {
//                          normal: {
//                              // areaStyle: { type: 'default' },
//                              color: '#29ABE2',
//                          }
//                      },
//                      lineStyle: {
//                          width: 0.5,
//                      },
//                      data: [{
//                          value: [1500000, 1500000, 1500000, 1500000, 1500000],
//                          name: ''
//                      }]
//                  },
//                  {
//
//                      type: 'radar',
//                      tooltip: {
//                          show: false,
//                          // trigger: 'item'
//                      },
//                      itemStyle: {
//                          normal: {
//                              // areaStyle: { type: 'default' },
//                              color: '#29ABE2',
//                          }
//                      },
//                      lineStyle: {
//                          width: 0.5,
//                      },
//                      data: [{
//                          value: [1000000, 1000000, 1000000, 1000000, 1000000],
//                          name: ''
//                      }]
//                  },
//                  {
//
//                      type: 'radar',
//                      tooltip: {
//                          trigger: 'item'
//                      },
//                      itemStyle: {
//                          normal: {
//                              areaStyle: {
//                                  type: 'default'
//                              },
//                              color: '#e9573f',
//                          }
//                      },
//                      data: [{
//                          value: ["582451", "1068117", "1331202", "1264913", "1928362"],
//                          name: '年龄分布图'
//                      }]
//                  },
//
//              ]
//          };
//
//          chart.setOption(option);
//      }
//  });
//
//};
//sex2();
/**性别年龄(性别)**/
//function sexl() {
//  var chart = echarts.init(document.getElementById('lsex1'));
//  var j_sex1=[];
//  $.ajax({
//      type:"GET",
//      url:'./json/j_sex.json',
//      dataType:'json',
//      async:true,
//      success:function (data) {
//          for(var i=0;i<data.data.length;i++){
//              j_sex1.push({
//                  value: data.value[i],
//                  name: data.data[i],
//              })
//          }
//          console.log(j_sex1);
//          option = {
//              title: {},
//              backgroundColor: 'rgba(255,255,255,0)',
//              tooltip: {
//                  trigger: 'item',
//              },
//
//              series: [{
//                  type: 'pie',
//                  selectedMode: 'single',
//                  radius: ['40%', '58%'],
//                  color: ['#37bc9b', '#3bafda'],
//                  center : ['60%', '40%'],
//                  label: {
//                      position: 'bottom',
//
//                      normal: {
//                          formatter: '{b}\n{d}%',
//                          textStyle: {
//                              color: 'rgba(255,255,255,0.8)',
//                              fontWeight: 'bold',
//                              fontSize: 14,
//                              padding: 20,
//                              lineHeight: '222',
//                          }
//                      },
//
//                  },
//                  labelLine: {
//
//                      normal: {
//                          show: true,
//                          length: 9,
//                          length2: 17,
//                      }
//                  },
//                  data:j_sex1
//
//              }]
//          };
//          chart.setOption(option);
//      }
//  });
//
//};
//sexl();
/**性别年龄(学历)**/
//function sex3() {
//  var chart = echarts.init(document.getElementById('lsex3'));
//  var j_sex3=[];
//  var sum=0;
//  $.ajax({
//      type:"GET",
//      url:'./json/j_edu.json',
//      dataType:'json',
//      async:true,
//      success:function (data) {
//          for(var i=0;i<data.data.length;i++){
//              j_sex3.push({
//                  value:data.value[i],
//                  name:data.data[i]
//              })
//              sum+=parseInt(data.value[i]);
//          }
//          console.log(sum);
//          function roundDatas(num) {
//              var datas = [];
//              for (var i = 0; i < num; i++) {
//                  datas.push({
//                      name: 'circle' + i
//                  });
//              }
//              return datas;
//          }
//
//          option = {
//              tooltip: {
//                  trigger: 'item',
//                  // formatter: "{a} <br/>{b}: {c} ({d}%)"
//              },
//              color: ['#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc'],
//              legend: { //图例组件，颜色和名字
//                  left: '55',
//                  top: '25',
//                  orient: 'vertical',
//                  itemGap: 12, //图例每项之间的间隔
//                  itemWidth: 10,
//                  itemHeight: 10,
//                  icon: 'rect',
//                  data: ['研究生教育', '本专科教育', '中等职业学校', '普通高中', '初中', '小学', '其他'],
//                  textStyle: {
//                      color: 'rgba(255,255,255,0.8)',
//                      fontStyle: 'normal',
//                      fontFamily: '微软雅黑',
//                      fontSize: 12,
//                  }
//              },
//              series: [{
//                  name: '',
//                  type: 'pie',
//                  tooltip:{
//                      formatter: ' {b0}:{c} ({d}%)',
//                  },
//                  clockwise: false, //饼图的扇区是否是顺时针排布
//                  minAngle: 10, //最小的扇区角度（0 ~ 360）
//                  center: ['70%', '50%'], //饼图的中心（圆心）坐标
//                  radius: [54, 96], //饼图的半径
//                  avoidLabelOverlap: true, ////是否启用防止标签重叠
//                  itemStyle: { //图形样式
//                      normal: {
//                          borderColor: '#1e2239',
//                          borderWidth: 1.5,
//                      },
//                  },
//                  label: { //标签的位置
//                      normal: {
//                          show: false,
//                          // position: 'center', //标签的位置
//                          // formatter: "{d}%",
//                          textStyle: {
//                              color: '#fff',
//                          }
//                      },
//                      emphasis: {
//                          // show: true,
//                          textStyle: {
//                              fontWeight: 'bold'
//                          }
//                      }
//                  },
//                  data: j_sex3
//              }, {
//                  name: '',
//                  type: 'pie',
//                  clockwise: false,
//                  silent: true,
//                  minAngle: 10, //最小的扇区角度（0 ~ 360）
//                  center: ['70%', '50%'], //饼图的中心（圆心）坐标
//                  radius: [0, 49], //饼图的半径
//                  itemStyle: { //图形样式
//                      normal: {
//                          borderColor: '#1e2239',
//                          borderWidth: 1.5,
//                          opacity: 0.21,
//                      }
//                  },
//                  label: { //标签的位置
//                      normal: {
//                          show: false,
//                      }
//                  },
//                  data: j_sex3
//              }]
//          };
//          chart.setOption(option);
//      }
//  })
//
//};
//sex3();
/**性别年龄(职业)**/
// function sex4() {
//     var chart = echarts.init(document.getElementById('lsex4'));
//     var j_sex4=[];
//     $.ajax({
//         type:"GET",
//         url:'./json/j_work.json',
//         dataType:'json',
//         async:true,
//         success:function (data) {
//             for(var i=0;i<data.data.length;i++){
//                 j_sex4.push({
//                     value:data.value[i],
//                     name:data.data[i]
//                 })
//             }
//             option = {
//                 title: {
//                     // text: '党员职业分布图',
//                     //     textStyle: {
//                     //         fontWeight: 'normal',
//                     //         fontSize: 18,
//                     //         color: '#fff',
//                     //         fontWeight: 'bolder',
//                     //         fontFamily: '黑体',
//                     //
//                     //     },
//                     //     top: '2%',
//                     //     left: '3%',
//                     //     bottom:'50%',
//                     //     x:10,
//                     //     y:10,
//                 },
//                 grid: {
//                     // left: '3%',
//                     // right: '3%',
//                     // bottom: '10%',
//                     top: '30%',
//                     // containLabel: true
//                 },
//                 backgroundColor: 'rgba(255,255,255,0)',
//                 tooltip: {
//                     trigger: 'item',
//                     // top:"20%",
//                 },
//                 series: [{
//
//                     type: 'pie',
//                     // top:"20%",
//                     selectedMode: 'single',
//                     radius: ['40%', '58%'],
//                     color: ['#00aafa', '#fbb03b', '#8cc63f', '#ed1c24', '#ff00ff'],
//                     itemStyle: {  //itemStyle有正常显示：normal，有鼠标hover的高亮显示：emphasis
//                         emphasis: {  //normal显示阴影,与shadow有关的都是阴影的设置
//                             shadowBlur: 10,  //阴影大小
//                             shadowOffsetX: 0,  //阴影水平方向上的偏移
//                             shadowColor: 'rgba(0, 0, 0, 0.5)'  //阴影颜色
//                         }
//                     },
//                     label: {
//                         position: 'bottom',
//
//                         normal: {
//                             formatter: '{b}\n{d}%',
//                             textStyle: {
//                                 color: '#29ABE2',
//                                 fontWeight: 'bold',
//                                 fontSize: 14,
//                                 padding: 20,
//                                 lineHeight: '222',
//                             }
//                         },
//
//                     },
//                     // labelLine: {
//                     //
//                     //     normal: {
//                     //         show: true,
//                     //         length: 5,
//                     //         length2: 0,
//                     //     }
//                     // },
//                     data: j_sex4,
//
//                 }]
//             };
//             chart.setOption(option);
//         }
//     })
//
// }
// sex4();
function w_vpxxn() {
    var d1 = [422, 3744, 4318, 2188, 1660, 5187, 4382, 3122, 1315, 794, 246, 297, 5773, 1129, 327, 785, 1077, 180, 3, 268, 1, 35, 29]
;
    var d2 = [101, 725, 1145, 335, 357, 877, 1266, 943, 224, 219, 79, 137, 1319, 463, 75, 102, 260, 89, 1, 78, 0, 7, 13]
;
    var d3=[];
    for(var i=0;i<d1.length;i++){
        d3.push(foo(d2[i] / d1[i]));
    };
   
//  console.log(d3);
    var chart = echarts.init(document.getElementById('j_vpn'));
    var data = ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委'];
    wx_option = {
        // backgroundColor: "#344b58",
        "title": {
//          "text": "省委直属党(工)委所属党组织信息发布情况(单位:篇)",
//			"text": "平台开通以来内容发布情况",
            x: "4%",
            y:'4%',
            textStyle: {
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16'
            },
            // subtextStyle: {
            //     color: '#90979c',
            //     fontSize: '16',
            //
            // },
        },
        legend:{
                 data: ['覆盖数','覆盖率'], 
                 right:'10%',
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a0}: {c0}',
        },
        "grid": {
            "borderWidth": 0,
            // "top": 110,
            // "bottom": 95,
            textStyle: {
                color: "#fff"
            }
        },
        "calculable": true,
        "xAxis": [
            {
                type: 'category',
                axisLabel: {
                    interval: 0, //横轴信息全部显示
                    color: 'rgba(255,255,255,0.7)',
                },
                data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
            }],
        "yAxis": [
            {
                type: 'value',
                min: 0,
                max: 35000,
                interval: 7000,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.7)',
                    },
                    formatter: '{value}'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
            },
               {
                   type: 'value',
                   min: 0,
                   max: 100,
                   interval: 20,
//                 axisTick: {
//                     show: false
//                 },
                   axisLine: {
                       lineStyle: {
                           color: 'rgba(255,255,255,0.1)'
                       }
                   },
                   axisLabel: {
                       margin: 10,
                       textStyle: {
                           fontSize: 14,
                           color: 'rgba(255,255,255,0.7)',
                       },
                       formatter: '{value}%'
                   },
                   splitLine: {
                       lineStyle: {
                           color: 'rgba(255,255,255,0.1)'
                       }
                   },
                
                      stack: 'sum',
               }
        ],
        "series": [
            {
                "name": "覆盖数",
                "type": "bar",
                "stack": "总量",
                smooth: true,
                barWidth:10,
                barGap:20,
                stack: 'sum',
                itemStyle:{
                    normal: {
                       color: new echarts.graphic.LinearGradient(
                           0, 0, 0, 1, [{
                                   offset: 0,
                                   color: 'rgba(75,137,220,1)'
                              },                              
                               {
                                   offset: 1,
                                   color: 'rgba(75,137,220,0.4)'
                               }
                           ]
                       ),
                       barBorderRadius:15,
                    }
                },
                "data": [422, 3744, 4318, 2188, 1660, 5187, 4382, 3122, 1315, 794, 246, 297, 5773, 1129, 327, 785, 1077, 180, 3, 268, 0, 35, 29]									
            },{
            	name:'覆盖率',
            	type:'line',
            	stack: 'sum',
            	yAxisIndex:1,
            	data:[20,30,40,50,60]
            }
        ]
    }
//  chart.resize();
    $.get('json/虚拟专网覆盖情况.json',function(res){
//  	console.log(res.online);
    	wx_option.series[0].data=res.value;
    	wx_option.series[1].data=res.online;
    	chart.setOption(wx_option);
    })
    
    chart.setOption(wx_option);
}
w_vpn();

function w_vpn(){
	var chart = echarts.init(document.getElementById('j_vpn'));
	var wcc_option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}<br />{a1}: {c1}%',
        // axisPointer: {type: 'cross'}
    },
    toolbox: {
       
    },
    legend: {
        data:['覆盖数','覆盖率'],
        right:'10%',
        textStyle: {
                color: 'rgba(255,255,255,0.8)',
            },
    },
    xAxis: [
        {
            type: 'category',
             axisLabel: {
                    interval: 0, //横轴信息全部显示
                    color: 'rgba(255,255,255,0.7)',
                },
            data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '覆盖数',
            min: 0,
            max: 35000,
            interval: 7000,
            axisLabel: {
                formatter: '{value}'
            },
             axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.7)',
                    },
                    formatter: '{value}'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
        },
        {
            type: 'value',
            name: '覆盖率',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            },
             axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.7)',
                    },
                    formatter: '{value}%'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
        }
    ],
    series: [
        {
            name:'覆盖数',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            barWidth:10,
   			itemStyle:{
                    normal: {
                       color: new echarts.graphic.LinearGradient(
                           0, 0, 0, 1, [{
                                   offset: 0,
                                   color: 'rgba(75,137,220,1)'
                              },                              
                               {
                                   offset: 1,
                                   color: 'rgba(75,137,220,0.4)'
                               }
                           ]
                       ),
                       
                       barBorderRadius:15,
                    }
                },
        },
        {
            name:'覆盖率',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
             itemStyle: {
                normal: {
                    color: '#9ad945',
                    borderColor: 'rgba(154,217,69,0.27)',
                        borderWidth: 12
                }
            },
        }
    ]
};
    $.get('json/虚拟专网覆盖情况.json',function(res){
//  	console.log(res.online);
    	wcc_option.series[0].data=res.value;
    	wcc_option.series[1].data=res.online;
    	chart.setOption(wcc_option);
    })
chart.setOption(wcc_option);

}

function chart_content() {
    var d1 = [422, 3744, 4318, 2188, 1660, 5187, 4382, 3122, 1315, 794, 246, 297, 5773, 1129, 327, 785, 1077, 180, 3, 268, 1, 35, 29]
;
    var d2 = [101, 725, 1145, 335, 357, 877, 1266, 943, 224, 219, 79, 137, 1319, 463, 75, 102, 260, 89, 1, 78, 0, 7, 13]
;
    var d3=[];
    for(var i=0;i<d1.length;i++){
        d3.push(foo(d2[i] / d1[i]));
    };
   
//  console.log(d3);
    var chart = echarts.init(document.getElementById('j_content'));
    var data = ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委'];
    option = {
        // backgroundColor: "#344b58",
        "title": {
//          "text": "省委直属党(工)委所属党组织信息发布情况(单位:篇)",
//			"text": "平台开通以来内容发布情况",
            x: "4%",
            y:'4%',
            textStyle: {
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16'
            },
            // subtextStyle: {
            //     color: '#90979c',
            //     fontSize: '16',
            //
            // },
        },
        legend:{
            top:'5%',
            right:'10%',
            textStyle:{
                color: "rgba(255,255,255,0.8)"
            },
            orient: 'horizontal',
                y: 'top',
                 data: ['发布数'],
                
                
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a0}: {c0}',
        },
        "grid": {
            "borderWidth": 0,
            // "top": 110,
            // "bottom": 95,
            textStyle: {
                color: "#fff"
            }
        },
        "calculable": true,
        "xAxis": [
            {
                type: 'category',
                // boundaryGap: false,
                // axisLine: {
                //     lineStyle: {
                //         color: '#57617B'
                //     }
                // },
                axisLabel: {
                    interval: 0, //横轴信息全部显示
                    color: 'rgba(255,255,255,0.7)',
                },
                data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
            }],
        "yAxis": [
            {
                type: 'value',
                min: 0,
                interval:1300,
                max: 6500,
                axisTick: {
                    show: false
                },
                // axisLine: {
                //     lineStyle: {
                //         color: 'rgba(255,255,255,0.1)'
                //     }
                // },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.7)',
                    },
                    // formatter: '{value}%'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                // stack: 'sum',
            },
            // {
            //     type: 'value',
            //     min: 0,
            //     max: 100,
            //     axisTick: {
            //         show: false
            //     },
            //     axisLine: {
            //         lineStyle: {
            //             color: 'rgba(255,255,255,0.1)'
            //         }
            //     },
            //     axisLabel: {
            //         margin: 10,
            //         textStyle: {
            //             fontSize: 14,
            //             color: 'rgba(255,255,255,0.7)',
            //         },
            //         formatter: '{value}%'
            //     },
            //     splitLine: {
            //         lineStyle: {
            //             color: 'rgba(255,255,255,0.1)'
            //         }
            //     },
                
            //     // stack: 'sum',
            // }
        ],
        "series": [
            {
                "name": "发布数",
                "type": "bar",
                "stack": "总量",
                smooth: true,
                barWidth:10,
                barGap:20,
                stack: 'sum',
                // "itemStyle": {
                //     "normal": {
                //         "color": "rgba(255,144,128,1)",
                //         "label": {
                //             "show": true,
                //             "textStyle": {
                //                 "color": "#fff"
                //             },
                //             // "position": "insideTop",
                //             formatter: function (p) {
                //                 return p.value > 0 ? (p.value) : '';
                //             }
                //         }
                //     }55,188,155
                // },
                itemStyle:{
                    normal: {
                       color: new echarts.graphic.LinearGradient(
                           0, 0, 0, 1, [{
                                   offset: 0,
                                   color: 'rgba(55,188,155,1)'
                               },
                               
                               {
                                   offset: 1,
                                   color: 'rgba(55,188,155,0.4)'
                               }
                           ]
                       ),
                       barBorderRadius:15,
                    }
                },
                "data": [422, 3744, 4318, 2188, 1660, 5187, 4382, 3122, 1315, 794, 246, 297, 5773, 1129, 327, 785, 1077, 180, 3, 268, 0, 35, 29]									

            },

         
        ]
    }
    chart.resize();
    chart.setOption(option);
}
chart_content();

function j_NEWS(){
    var myChart2 = echarts.init(document.getElementById('j_news'));
var j_option2 = {
    title : {
//      text: '信息来源情况',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        left: '18px',
        top:"5%",

    },
    tooltip : {
        trigger: 'item'
    },
    grid:{
        left: '3%',
        containLabel: true
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],

            },
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : false,
    series : [
        {
            color: ['#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#d770ad', '#7FA0DF', '#6AEEED', '#b783b5'],
            // color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],
            name:'新闻类',
            type:'pie',
            // center:["60%","60%"],
            radius : ['30%', '40%'],
            label : {
                normal: {
                    formatter: '{b}\n{c}({d}%)',
                    textStyle: {
//                      color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        // padding:20,
                        lineHeight:'222',
                    }
                },
            },
            labelLine: {

                normal: {
                    show: true,
                    length:8,
                    length2:1,
                }
            },
            data:[
                {value: 1225, name:'人民网',},
                {value:4462, name:'人民日报'},
                {value:4804, name:'新华网'},
                {value:1708, name:'新华社'},
                {value: 1650, name:'共产党员网',},
                {value:356, name:'大众网'},
                {value:3330, name:'大众日报'},
                {value:1635, name:'新锐大众'},
                // {value:1919717, name:'61岁及以上'},
            ]

        }
    ]
};
myChart2.setOption(j_option2);
}
function j_WORKS(){
    var myChart3 = echarts.init(document.getElementById('j_works'));
    var j_option3 = {
        tooltip : {
            trigger: 'item'
        },
        toolbox: {
            show : true,
    
        },
        calculable : true,
        series : [
            {
                color: ['#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#d770ad', '#7FA0DF', '#6AEEED', '#b783b5'],
                name:'工作类',
                type:'pie',
                center:['55%','50%'],
                radius : ['30%', '40%'],
                label : {
                    normal: {
                        formatter: '{b}\n{c}({d}%)',
                        textStyle: {
//                          color: '#29ABE2',
                            fontWeight: 'bold',
                            fontSize: 14,
//                          padding:20,
                            lineHeight:'222',
                        }
                    },
                },
                itemStyle : {
                    normal : {
                        label : {
                            show : true
                        },
                        labelLine : {
                            length:6,
                            length2:5,
                            show : true,
                        }
                    }
                },
                data:[
                    {value:22368, name:'最新动态'},
                    {value:9834, name:'经验做法'},
                    {value:3728, name:'先进典型'},
                    {value:1351,name:'其他'},
                ]
            }
        ]
    };
    myChart3.setOption(j_option3);
}
function j_RADS(){
    var myChart4 = echarts.init(document.getElementById('j_rads'));
    var j_option4 = {
        tooltip : {
            trigger: 'item'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: false, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '15%',
                            width: '40%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                },
                restore : {show: false},
                saveAsImage : {show: false}
            }
        },
        calculable : true,
        series : [
            {
                color: ['#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#d770ad', '#7FA0DF', '#6AEEED', '#b783b5'],
                name:'视频课件',
                type:'pie',
                radius : ['30%', '40%'],
                label : {
                    normal: {
                        formatter: '{b}:{c}\n{d}%',
                        textStyle: {
//                          color: '#29ABE2',
                            fontWeight: 'bold',
                            fontSize: 12,
                            // padding:10,
                            lineHeight:'222',
                        }
                    },
                },
                itemStyle : {
                    normal : {
    
                        labelLine : {
                            show : true,
                            length:5,
                            length2:7,
    
                        }
                    }
                },
                data:[
                    {value:492, name:'典型经验',},
                    {value:2518, name:'党员风采'},
                    {value:681, name:'政策法规'},
                    {value:461, name:'十九大精神'},
                    {value:921, name:'政治理论',},
                    {value:1213, name:'党的历史'},
                    {value:680, name:'支书讲坛'},
                    {value:389, name:'支部建设'},
                    {value:765, name:'文化素养'},
                ]

            }
        ]
    };
    myChart4.setOption(j_option4);
}
j_NEWS();
j_WORKS();
j_RADS();


// app 下载趋势图
function makeChartVPN() {
	var chart = echarts.init(document.getElementById('j_vpn'));
	var w_xoption = {
		color: ['#59a9fa'],
		grid: {
			left: '5%',
			right: '5%',
			bottom: '6%',
			top: '15%',
			containLabel: true
		},
//		legend: {
//              top: '8%',
//              right:"4ff%",
//              textStyle: {
//                 color: 'rgba(255,255,255,0.8)',
//              },
//              orient: 'horizontal',
//              y: 'top',
//              data: ['安装量'],
//
//
//          },
		tooltip: {
			trigger: 'axis'
		},

		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.4)'
				}
			},
			data:['3/7','3/8','3/9','3/10', '3/11', '3/12','3/13']
		},
		yAxis: {
			axisLine: {
				show: true,
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,0.4)'
				}
			},
			splitLine: { //网格线
				show: true,
				lineStyle: {
					color: ['rgba(255,255,255,0.4)'],
					type: 'solid'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.4)'
				}
			}
		},
		series: [{
			name: 'App安装量',
			type: 'line',
			smooth: true,
			symbolSize: 12,
			data: ['9915', '10333', '4526', '3147', '7602', '10371', '10904'],
			label: {
				normal: {
					show: false,
					position: 'top' //值显示
				}
			}
		}, ]
	};

	$.get('json/管理员每月vpn开通统计.json',function(res){
//		console.log(res.data);
		w_xoption.xAxis.data=res.data;
		w_xoption.series[0].data=res.value;
		chart.setOption(w_xoption);
	})
}
//makeChartVPN();

// app 下载趋势图
function makeChartWeiXin() {
	var chart = echarts.init(document.getElementById('j_weixin'));
	var w_xoption = {
		color: ['#59a9fa'],
		grid: {
			left: '5%',
			right: '5%',
			bottom: '6%',
			top: '15%',
			containLabel: true
		},
//		legend: {
//              top: '8%',
//              right:"4ff%",
//              textStyle: {
//                 color: 'rgba(255,255,255,0.8)',
//              },
//              orient: 'horizontal',
//              y: 'top',
//              data: ['安装量'],
//
//
//          },
		tooltip: {
			trigger: 'axis'
		},

		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.1)'
				}
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,0.4)'
                }
            },
			data:['3/7','3/8','3/9','3/10', '3/11', '3/12','3/13']
		},
		yAxis: {
			axisLine: {
				show: true,
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,0.4)'
				}
			},
			splitLine: { //网格线
				show: true,
				lineStyle: {
					color: ['rgba(255,255,255,0.1)'],
					type: 'solid'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.1)'
				}
			}
		},
		series: [{
			name: '微信公众号关注',
			type: 'line',
			smooth: true,
			symbolSize: 12,
			data: ['9915', '10333', '4526', '3147', '7602', '10371', '10904'],
			label: {
				normal: {
					show: false,
					position: 'top' //值显示
				}
			}
		}, ]
	};

	$.get('json/微信公众号关注统计.json',function(res){
//		console.log(res.data);
		w_xoption.xAxis.data=res.data;
		w_xoption.series[0].data=res.value;
		chart.setOption(w_xoption);
	})
}
makeChartWeiXin();


// app 下载趋势图
function makeChart10() {
	var chart = echarts.init(document.getElementById('j_app'));
	var w_xoption = {
		color: ['#59a9fa'],
		grid: {
			left: '5%',
			right: '5%',
			bottom: '6%',
			top: '15%',
			containLabel: true
		},
//		legend: {
//              top: '8%',
//              right:"4ff%",
//              textStyle: {
//                 color: 'rgba(255,255,255,0.8)',
//              },
//              orient: 'horizontal',
//              y: 'top',
//              data: ['安装量'],
//
//
//          },
		tooltip: {
			trigger: 'axis'
		},

		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.1)'
				}
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,0.4)'
                }
            },
			data:['3/7','3/8','3/9','3/10', '3/11', '3/12','3/13']
		},
		yAxis: {
			axisLine: {
				show: true,
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,0.4)'
				}
			},
			splitLine: { //网格线
				show: true,
				lineStyle: {
					color: ['rgba(255,255,255,0.1)'],
					type: 'solid'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.1)'
				}
			}
		},
		series: [{
			name: '手机客户端安装',
			type: 'line',
			smooth: true,
			symbolSize: 12,
			data: ['9915', '10333', '4526', '3147', '7602', '10371', '10904'],
			label: {
				normal: {
					show: false,
					position: 'top' //值显示
				}
			}
		}, ]
	};

	$.get('js/app安装统计.json',function(res){
//		console.log(res.data);
		w_xoption.xAxis.data=res.data.reverse();
		w_xoption.series[0].data=res.value;
		chart.setOption(w_xoption);
	})
}
makeChart10();



// 总数
function w_all(){
var myChart = echarts.init(document.getElementById('w_allz'));
	optionxx = {
  series: [
    {
      type: 'gauge',
      radius: '80%',
      center: ['50%', '50%'],
      axisLine: {
        show: true,
        lineStyle: {
          width:25,
          color: [
            [
              1, new echarts.graphic.LinearGradient(
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
    name: "管理人员总数",
    value: 295986
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
	optionxx = {
  series: [
    {
      type: 'gauge',
      radius: '80%',
      center: ['50%', '50%'],
      axisLine: {
        show: true,
        lineStyle: {
          width:25,
          color: [
            [
              1, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#99da69'
            },
              {
                offset: 1,
                color: '#01babc'
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
    name: "各级组工干部",
    value: 20181
    }]
  }
  ]
};
myChart.setOption(optionxx)

}

w_bilv()
function w_bilv(){

var myChart = echarts.init(document.getElementById('w_bilv'));
	optionxx = {
  series: [
    {
      type: 'gauge',
      radius: '80%',
      center: ['50%', '50%'],
      axisLine: {
        show: true,
        lineStyle: {
          width:25,
          color: [
            [
              1, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#ec87bf'
            },
              {
                offset: 1,
                color: '#967bdc'
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
    name: "其他管理人员",
    value: 275805
    }]
  }
  ]
};
myChart.setOption(optionxx)

}

var w_charter = echarts.init(document.getElementById('lfbu'));

function makeChartl1(id) {
    var w_optionx = {
        title: {
            text: '管理人员分布 (单位:人)',
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
            axisPointer: {
                type: 'shadow'
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
                boundaryGap: true,//坐标轴两边留白
                axisLabel: { //坐标轴刻度标签的相关设置。
                    interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    margin:15,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisTick:{//坐标轴刻度相关设置。
                    show: false,
                },
                axisLine:{//坐标轴轴线相关设置
                    lineStyle:{
                        color:'#fff',
                        opacity:0.2
                    }
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                },
                data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
             }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
                axisLabel: {
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                axisLabel: {
                    margin: 10,
                    color: 'rgba(255,255,255,0.7)',
                    textStyle: {
                        fontSize: 14
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity:0.06
                    }
                }

            }
        ],
        series : [
            {
                name:'各级组工干部',
                type:'bar',
                data:[4.9, 7.3, 9.2, 5.6, 7.7, 5.6, 4.2, 3.6, 6, 6.4],
                barWidth: 10,
                barGap:0,//柱间距离
                label: {//图形上的文本标签
                    normal: {
                        // show: true,
                        position: 'top',
                        textStyle: {
                            color: '#a8aab0',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {//图形样式
                    normal: {
                        barBorderRadius: [5, 5, 0, 0],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                        },{
                            offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                        },{
                            offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                        },{
                            offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                        }, {
                            offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                        }], false),
                    },
                },
            },
            {
                name:'其他管理人员',
                type:'bar',
                data:[2.9, 5, 4.4, 2.7, 5.7, 4.6, 1.2, 2.7, 4.8, 6.0],
                barWidth: 10,
                barGap:0.2,//柱间距离
                label: {//图形上的文本标签
                    normal: {
                        // show: true,
                        position: 'top',
                        textStyle: {
                            color: '#a8aab0',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {//图形样式
                    normal: {
                        barBorderRadius: [5, 5, 0, 0],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                        },{
                            offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                        },{
                            offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                        }, {
                            offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                        }], false),
                    },
                },
            }
        ]
    };

    $.getJSON('json/管理员各级组工干部管理人员.json',function(res){

//      w_option.xAxis[0].data=res.data;
        w_optionx.series[0].data=res.value;
        w_charter.setOption(w_optionx);

    });
    $.getJSON('json/其他管理人员.json',function(res){

            w_optionx.series[1].data=res.value;
      
            w_charter.setOption(w_optionx);
    });
w_charter.setOption(w_optionx);

}
makeChartl1(1);
//
//  w_chart.on('click',function(z){
//  	var w_z=sessionStorage.getItem('w_z')
//  	if(z.name=='济南'&&w_z==1){
//		    $.getJSON('bigScreen/全省23个党工委人数济南.json',function(res){
//		  		w_optionx.xAxis[0].data=res.data;
//		  		w_optionx.dataZoom=[{
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
//		    	w_optionx.series[0].data=res.value;
////		    	w_optionx.series[1].data=res.online;
//		    	w_chart.setOption(w_optionx);
//		    })
//
//  		$('.w_fanhui').show();
//  		w_chart.setOption(w_optionx);
//  	}else if(z.name=='青岛'&&w_z==1){
//			$.getJSON('bigScreen/全省23个党工委人数青岛.json',function(res){
//
//		  		w_optionx.xAxis[0].data=res.data;
//		  		w_optionx.dataZoom=[{
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
//		    	w_optionx.series[0].data=res.value;
////		    	w_optionx.series[1].data=res.online;
//		    	w_chart.setOption(w_optionx);
//		    })
//  		$('.w_fanhui').show();
//  		w_chart.setOption(w_optionx);
//  	}
//  })
//  $('.w_fanhui').click(function(){
//
//  	$.getJSON('js/w_js/renshu.json',function(res){
//
//              w_optionx.xAxis[0].data=['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直机关工委','省委教育工委','省国资委党委','胜利油田党委','齐鲁石化党委','黄三角党工委']
//		    	w_optionx.series[0].data=res.value;
////		    	w_optionx.series[1].data=res.online;
//		    	w_optionx.dataZoom=[{
//		    		'show':false,
//		    		"start": 0,
//      			"end": 100,
//		    	}];
//		    	w_chart.setOption(w_optionx);
//		    })    		
//  	w_chart.setOption(w_optionx);
//  	$('.w_fanhui').hide()
//  })
//
//

// 党组织分类
//function orgcate() {
//  var chart = echarts.init(document.getElementById('orgCate'));
//var data = [{
//  name: '党委',
//  value: '14031'
//}, {
//  name: '党总支部',
//  value: '20698'
//}, {
//  name: '党支部',
//  value: '291452'
//}, {
//  name: '联合党支部',
//  value: '5956'
//}, 
//// {
////     name: '临时基层党组织',
////     value: '1'
//// },
////  {
////     name: '临时党委 ',
////     value: '3'
//// }, {
////     name: '临时党总支部',
////     value: '5'
//// }, {
////     name: '临时党支部',
////     value: '1'
//// }
//];
//var xData = ['党委', '党\n总支部', '党支部', '联合\n党支部'];
//// var xData = [],
// var yData = [];
//// var min = 50; // 最小值的定义
//data.map(function (a, b) {
//  // xData.push(a.name);
//  if (a.value === 0) {
//      yData.push(a.value + min);
//  } else {
//      yData.push(a.value);
//  }
//  // yData.push((Math.random(0,1) * 100).toFixed(0));
//});
//option = {
//  color: ['#3398DB'],
//  tooltip: {
//      trigger: 'axis',
//      axisPointer: {
//          type: 'line',
//          lineStyle: {
//              opacity: 0
//          }
//      },
//      formatter: function (prams) {
//          return "组织数：" + prams[0].data
//      }
//  },
//  legend: {
//      data: ['直接访问', '背景'],
//      show: false
//  },
//  grid: {
//      left: '7%',
//      // right: '0%',
//      // bottom: '5%',
//      top: '5%',
//      // height: '85%',
//      containLabel: true,
//      z: 22
//  },
//  xAxis: [{
//      type: 'category',
//      // gridIndex: 0,
//      data: xData,
//      axisLabel: {
//          interval: 0,
//          fontSize: 12,
//          fontWeight: 100,
//          textStyle: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          
//      },
//      // axisLabel: {
//      //     show: true,
//      //     color: 'rgb(170,170,170)',
//      //     fontSize: 14,
//      //     interval: 0,
//      // }
//  }],
//  yAxis: [{
//          type: 'value',
//          gridIndex: 0,
//          splitLine: {
//              show: false
//          },
//          axisTick: {
//              show: false
//          },
//          min: 0,
//          max: 300000,
//          axisLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.2)',
//              }
//          },
//          axisLabel: {
//              color: 'rgb(170,170,170)',
//              // formatter: '{value} %'
//          }
//      },
//      // {
//      //     type: 'value',
//      //     gridIndex: 0,
//      //     min: 1,
//      //     max: 100,
//      //     splitNumber: 12,
//      //     splitLine: {
//      //         show: false
//      //     },
//      //     axisLine: {
//      //         show: false
//      //     },
//      //     axisTick: {
//      //         show: false
//      //     },
//      //     axisLabel: {
//      //         show: false
//      //     },
//
//
//          // splitArea: {
//          //     show: true,
//          //     areaStyle: {
//          //         color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
//          //     }
//          // }
//      // }
//  ],
//  series: [{
//          name: '组织数',
//          type: 'bar',
//          barWidth: '30%',
//          xAxisIndex: 0,
//          yAxisIndex: 0,
//          itemStyle: {
//              normal: {
//                  barBorderRadius: [30, 30, 0, 0],
//                  color: new echarts.graphic.LinearGradient(
//                      0, 0, 0, 1, [{
//                              offset: 0,
//                              color: 'rgba(59,175,218,1)'
//                          },
//                         
//                          {
//                              offset: 1,
//                              color: 'rgba(59,175,218,0.4)'
//                          }
//                      ]
//                  )
//              }
//          },
//          data: yData,
//          zlevel: 11
//
//      },
//      // {
//      //     name: '背景',
//      //     type: 'bar',
//      //     barWidth: '50%',
//      //     xAxisIndex: 0,
//      //     yAxisIndex: 1,
//      //     barGap: '-135%',
//      //     data: [100, 100, 100, 100, 100, 100, 100],
//      //     itemStyle: {
//      //         normal: {
//      //             color: 'rgba(255,255,255,0.1)'
//      //         }
//      //     },
//      //     zlevel: 9
//      // },
//
//  ]
//};
//
//  chart.setOption(option);
//}
//orgcate()

function foo(num){//百分函数
    if(!/\d+\.?\d+/.test(num)){
        // alert("必须为数字");
    }
    var result = (num * 100).toString(),
        index = result.indexOf(".");
    if(index == -1 || result.substr(index+1).length <= 4){
        return result;
    }
    return result.substr(0, index + 3);
}

//var chart = echarts.init(document.getElementById('j_renewal'));
var j_ren=[];
var j_ren1=[];
var j_data = [0.0050,
        0.0062,
        0.0030,
        0.0035,
        0.0056,
        0.0092,
        0.0037,
        0.0035,
        0.0024,
        0.0046,
        0.0026,
        0.0110,
        0.0097,
        0.0092,
        0.0078,
        0.0023,
        0.0047,
        0.0036,
        0.0276,
        0.0046,
        0.0074,
        0.0049,
        0.0040,
        0.0000,
];
$.ajax({
    type:"GET",
    url:'./json/j_renewal.json',
    dataType:'json',
    async:true,
    success:function (data) {

        j_data.forEach( function (item) {
            j_ren.push(foo(item));
        });
        data.data.forEach( function (item) {
            j_ren1.push(item);
        });
        var j_option1 = {
            width:'805px',
            title:{
                text: '省委直属党（工）委所属党组织和党员基本信息维护更新情况',
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
            legend: {
                top: '8%',
                right:"4ff%",
                textStyle: {
                   color: 'rgba(255,255,255,0.8)',
                },
                orient: 'horizontal',
                y: 'top',
                data: ['维护率'],


            },
            tooltip : {
                trigger: 'axis',
                formatter: "{a0}: {c0}%",
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data :  ['济南','青岛','淄博' ,'枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委',],//'黄三\n角党\n工委'
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
                    type: 'value',
                    min: 0,
                    // interval: 20,
                    max: 10,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                           color: 'rgba(255,255,255,0.2)',
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.7)',
                        },
                        formatter: '{value}%'
                    },
                    splitLine: {
                        lineStyle: {
                           color: 'rgba(255,255,255,0.2)',
                        }
                    }
                }

            ],
            series : [
                {
                    name:'维护率',
                    type:'line',
                    smooth:true,
                    stack: '总量',
                    data:j_ren,
                    barWidth:10,
                    barGap:20,
                    itemStyle:{
                        normal: {
                            color: '#f6bb42',
                            borderColor: 'rgba(246,187,66,0.27)',
                                borderWidth: 12
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(246,187,66, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(246,187,66, 0.07)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                }
            ]
        };
        // j_option1.series[0].itemStyle = {
        //     normal: {
        //         barBorderRadius: 15,
        //         color: function (params) {
        //
        //             var index = params.dataIndex;
        //             var alternateNumber = 2;
        //
        //             var newColor = "";
        //             var colorList = ['#9ad945', '#29abe2'];
        //
        //             if (index < alternateNumber) {
        //
        //                 newColor = colorList[index];
        //
        //             } else {
        //
        //                 var rowNumber = Math.floor(index / alternateNumber);
        //
        //                 newColor = colorList[index - rowNumber * alternateNumber];
        //             }
        //             return newColor
        //         }
        //     }
        // };
        chart.setOption(j_option1);
    }
})


// 党工委e支部和党员注册(省委直属党(工)委所属党支部开通e支部情况)
//<<<<<<< HEAD
//function makeChart11() {
//  var chart = echarts.init(document.getElementById('lect'));
//  option = {
//      // backgroundColor: '#394056',
//      title: {
////          text: '省委直属党(工)委所属党支部开通e支部情况',
//          textStyle: {
//              fontWeight: 'normal',
//              fontSize: 18,
//              color: 'rgba(255,255,255,0.7)',
//              fontWeight: 'bolder',
//              fontFamily: '黑体',
//
//          },
//          top: '2%',
//          left: '3%'
//      },
//      legend: {
//          top: '8%',
//          right:'9%',
//          textStyle: {
//             color: 'rgba(255,255,255,0.8)',
//          },
//          orient: 'horizontal',
//          y: 'top',
//          data: ['开通量', '未开通量','开通率'],
//
//
//      },
//      tooltip: {
//          trigger: 'axis',
//          formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}:{c2}%',
//          axisPointer: {
//              // type: 'cross',
//              lineStyle: {
//                  color: '#57617B'
//              }
//          }
//      },
//      calculable: true,
//      grid: {
//          top: '15%',
//          left: '3%',
//          right: '4%',
//          bottom: '3%',
//          containLabel: true
//      },
//      xAxis: [{
//              type: 'category',
//              // boundaryGap: false,
//              // axisLine: {
//              //     show: 'false',
//              //     lineStyle: {
//              //         color: '#57617B'
//              //     }
//              // },
//              // axisLabel:{
//              //     interval:0,//横轴信息全部显示
//              //     color:'#fff'
//              // },
//              axisLabel: {
//                  interval: 0,
//                  fontSize: 12,
//                  fontWeight: 100,
//                  textStyle: {
//                      color: 'rgba(255,255,255,0.7)',
//
//                  }
//              },
//              data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
//          },
//          {
//              // axisPointer: {
//              //     show: false
//              // },
//              // axisLine: {
//              //     lineStyle: {
//              //         color: '#57617B'
//              //     }
//              // },
//              // axisTick: {
//              //     show: false
//              // },
//
//              position: 'bottom',
//              offset: 20,
//
//          }
//      ],
//      yAxis: [{
//
//              type: 'value',
//              min: 0,
//              max: 40000,
//              // axisTick: {
//              //     show: false
//              // },
//              axisLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              },
//              axisLabel: {
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color: 'rgba(255,255,255,0.7)',
//                  }
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              }
//          },
//          {
//
//              type: 'value',
//              min: 0,
//              interval: 25,
//              max: 100,
//              axisTick: {
//                  show: false
//              },
//              axisLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              },
//              axisLabel: {
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color: 'rgba(255,255,255,0.7)',
//                  },
//                  formatter: '{value}%'
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              }
//          }
//      ],
//      series: [
//          {
//              name: '开通量',
//              type: 'bar',
//              barWidth: 10,
//              barGap: 20,
//              stack: 'sum',
//              smooth: true,
//              // symbol: 'triangle',
//              symbolSize: 5,
//              showSymbol: true,
//              lineStyle: {
//                  normal: {
//                      width: 1
//                  }
//              },
//              // areaStyle: {
//              //     normal: {
//              //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//              //             offset: 0,
//              //             color: 'rgba(234,166,58, 0.4)'
//              //         }, {
//              //             offset: 1,
//              //             color: 'rgba(234,166,58, 0.1)'
//              //         }], false),
//              //         shadowColor: 'rgba(0, 0, 0, 0.1)',
//              //         shadowBlur: 10
//              //     }
//              // },74,137,220
//              itemStyle: {
//                  normal: {
//                      color: new echarts.graphic.LinearGradient(
//                          0, 0, 0, 1, [{
//                                  offset: 0,
//                                  color: 'rgba(74,137,220,1)'
//                              },
//
//                              {
//                                  offset: 1,
//                                  color: 'rgba(74,137,220,0.4)'
//                              }
//                          ]
//                      ),
//                      // barBorderRadius: 15,//圆角
//                  }
//              },
//              data: [18760,
//                      29243,
//                      13560,
//                      9292,
//                      6256,
//                      20575,
//                      24599,
//                      19266,
//                      13728,
//                      9790,
//                      8540,
//                      4035,
//                      19999,
//                      14923,
//                      13547,
//                      11679,
//                      11821,
//                      6978,
//                      3616,
//                      2486,
//                      3159,
//                      452,
//                      121,
//
//              ],
//
//          },
//          {
//              name: '未开通量',
//              type: 'bar',
//              barWidth: 10,
//              barGap: 20,
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
//              // areaStyle: {
//              //     normal: {
//              //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//              //             offset: 0,
//              //             color: 'rgba(234,166,58, 0.4)'
//              //         }, {
//              //             offset: 1,
//              //             color: 'rgba(234,166,58, 0.1)'
//              //         }], false),
//              //         shadowColor: 'rgba(0, 0, 0, 0.1)',
//              //         shadowBlur: 10
//              //     }
//              // },
//              itemStyle: {
//                  normal: {
//                      // color: '#37bc9b',
//                      color: new echarts.graphic.LinearGradient(
//                          0, 0, 0, 1, [{
//                                  offset: 0,
//                                  color: 'rgba(55,188,155,1)'
//                              },
//
//                              {
//                                  offset: 1,
//                                  color: 'rgba(55,188,155,0.4)'
//                              }
//                          ]
//                      ),
//                  }
//              },
//              data: [5051,
//                      4851,
//                      2175,
//                      1551,
//                      949,
//                      2489,
//                      3703,
//                      2686,
//                      2158,
//                      1329,
//                      1378,
//                      496,
//                      4177,
//                      2831,
//                      2302,
//                      1447,
//                      962,
//                      2398,
//                      826,
//                      646,
//                      2825,
//                      313,
//                      32,
//
//              ]
//          },
//          {
//              itemStyle: {
//                  normal: {
//                      color: '#f6bb42',
//                      borderColor: 'rgba(246,187,66,0.27)',
//                          borderWidth: 12
//                  }
//              },
//              // show:true,
//              name: "开通率",
//              type: 'line',
//              yAxisIndex: 1,
//              // stack: 'sum',
//              // formatter:'{a2}:{c2}%',
//              barWidth: 10,
//              smooth: true,
//              data: [78.79 ,
//                      85.77 ,
//                      86.18, 
//                      85.70, 
//                      86.83, 
//                      89.21, 
//                      86.92, 
//                      87.76, 
//                      86.42, 
//                      88.05, 
//                      86.11, 
//                      89.05, 
//                      82.72, 
//                      84.05, 
//                      85.48, 
//                      88.98, 
//                      92.47, 
//                      74.42, 
//                      81.40, 
//                      79.37, 
//                      52.79, 
//                      59.08, 
//                      79.08,
//
//              ],
//
//          }
//      ]
//  };
//  chart.setOption(option);
//}
//makeChart11();
//
//// w_js 活跃度等基本情况(e支部活跃度)
//var myChart = echarts.init(document.getElementById('j_main'));
//var w_option = {
//  width: '757px',
//  title: {
////      text: 'E支部使用情况(全省使用e支部占比：98%)',
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      },
//      top: "5%",
//      left: '18px',
//      // bottom: '80%',
//  },
//  legend: {
//      top: '12%',
//      right:'9%',
//      textStyle: {
//          color: 'rgba(255,255,255,0.8)',
//      },
//  },
//  tooltip: {
//      trigger: 'axis',
//		formatter: '{a0}: {c0}%',
//      axisPointer: {
//          lineStyle: {
//              color: '#57617B'
//          }
//      }
//  },
//  calculable: true,
//  xAxis: [{
//      type: 'category',
//      data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委'],
//      axisLabel: {
//          interval: 0,
//          fontSize: 12,
//          fontWeight: 100,
//          textStyle: {
//             color: 'rgba(255,255,255,0.7)',
//          }
//      }
//
//  }],
//  yAxis: [
//
//{
//                  type: 'value',
//                  min: 0,
//                  // interval: 20,
//                  max: 100,
//                  axisTick: {
//                      show: false
//                  },
//                  axisLine: {
//                      lineStyle: {
//                         color: 'rgba(255,255,255,0.2)',
//                      }
//                  },
//                  axisLabel: {
//                      margin: 10,
//                      textStyle: {
//                          fontSize: 14,
//                          color: 'rgba(255,255,255,0.7)',
//                      },
//                      formatter: '{value}%'
//                  },
//                  splitLine: {
//                      lineStyle: {
//                         color: 'rgba(255,255,255,0.2)',
//                      }
//                  }
//              }
//
//  ],
//  series: [
//{
//                  name:'占比(E支部使用数/E支部开通数)',
//                  type:'line',
//                  smooth:true,
//                  stack: '总量',
//                  data:[23.11,
//                  27.00,
//                  67.35,
//                  76.57,
//                  45.23,
//                  45.30,
//                  42.65,
//                  24.48,
//                  50.16,
//                  58.13,
//                  35.21,
//                  32.62,
//                  58.05,
//                  50.86,
//                  14.90,
//                  66.01,
//                  36.44,
//                  12.04,
//                  15.74,
//                  31.16,
//                  7.25,
//                  3.27,
//                  0.00,
//          		],
//                  barWidth:10,
//                  barGap:20,
//                  itemStyle:{
//                      normal: {
//                          color: '#f6bb42',
//                          borderColor: 'rgba(246,187,66,0.27)',
//                              borderWidth: 12
//                      }
//                  },
//                  areaStyle: {
//                      normal: {
//                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                              offset: 0,
//                              color: 'rgba(246,187,66, 0.3)'
//                          }, {
//                              offset: 0.8,
//                              color: 'rgba(246,187,66, 0.07)'
//                          }], false),
//                          shadowColor: 'rgba(0, 0, 0, 0.1)',
//                          shadowBlur: 10
//                      }
//                  },
//              }
//  ]
//};
//=======
//function makeChart11() {
//  var chart = echarts.init(document.getElementById('lect'));
//  option = {
//      // backgroundColor: '#394056',
//      title: {
////          text: '省委直属党(工)委所属党支部开通e支部情况',
//          textStyle: {
//              fontWeight: 'normal',
//              fontSize: 18,
//              color: 'rgba(255,255,255,0.7)',
//              fontWeight: 'bolder',
//              fontFamily: '黑体',
//
//          },
//          top: '2%',
//          left: '3%'
//      },
//      legend: {
//          top: '8%',
//          right:'9%',
//          textStyle: {
//             color: 'rgba(255,255,255,0.8)',
//          },
//          orient: 'horizontal',
//          y: 'top',
//          data: ['开通量', '未开通量','开通率'],
//
//
//      },
//      tooltip: {
//          trigger: 'axis',
//          formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}:{c2}%',
//          axisPointer: {
//              // type: 'cross',
//              lineStyle: {
//                  color: '#57617B'
//              }
//          }
//      },
//      calculable: true,
//      grid: {
//          top: '15%',
//          left: '3%',
//          right: '4%',
//          bottom: '3%',
//          containLabel: true
//      },
//      xAxis: [{
//              type: 'category',
//              // boundaryGap: false,
//              // axisLine: {
//              //     show: 'false',
//              //     lineStyle: {
//              //         color: '#57617B'
//              //     }
//              // },
//              // axisLabel:{
//              //     interval:0,//横轴信息全部显示
//              //     color:'#fff'
//              // },
//              axisLabel: {
//                  interval: 0,
//                  fontSize: 12,
//                  fontWeight: 100,
//                  textStyle: {
//                      color: 'rgba(255,255,255,0.7)',
//
//                  }
//              },
//              data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
//          },
//          {
//              // axisPointer: {
//              //     show: false
//              // },
//              // axisLine: {
//              //     lineStyle: {
//              //         color: '#57617B'
//              //     }
//              // },
//              // axisTick: {
//              //     show: false
//              // },
//
//              position: 'bottom',
//              offset: 20,
//
//          }
//      ],
//      yAxis: [{
//
//              type: 'value',
//              min: 0,
//              max: 40000,
//              // axisTick: {
//              //     show: false
//              // },
//              axisLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              },
//              axisLabel: {
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color: 'rgba(255,255,255,0.7)',
//                  }
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              }
//          },
//          {
//
//              type: 'value',
//              min: 0,
//              interval: 25,
//              max: 100,
//              axisTick: {
//                  show: false
//              },
//              axisLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              },
//              axisLabel: {
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color: 'rgba(255,255,255,0.7)',
//                  },
//                  formatter: '{value}%'
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              }
//          }
//      ],
//      series: [
//          {
//              name: '开通量',
//              type: 'bar',
//              barWidth: 10,
//              barGap: 20,
//              stack: 'sum',
//              smooth: true,
//              // symbol: 'triangle',
//              symbolSize: 5,
//              showSymbol: true,
//              lineStyle: {
//                  normal: {
//                      width: 1
//                  }
//              },
//              // areaStyle: {
//              //     normal: {
//              //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//              //             offset: 0,
//              //             color: 'rgba(234,166,58, 0.4)'
//              //         }, {
//              //             offset: 1,
//              //             color: 'rgba(234,166,58, 0.1)'
//              //         }], false),
//              //         shadowColor: 'rgba(0, 0, 0, 0.1)',
//              //         shadowBlur: 10
//              //     }
//              // },74,137,220
//              itemStyle: {
//                  normal: {
//                      color: new echarts.graphic.LinearGradient(
//                          0, 0, 0, 1, [{
//                                  offset: 0,
//                                  color: 'rgba(74,137,220,1)'
//                              },
//
//                              {
//                                  offset: 1,
//                                  color: 'rgba(74,137,220,0.4)'
//                              }
//                          ]
//                      ),
//                      // barBorderRadius: 15,//圆角
//                  }
//              },
//              data: [18760,
//                      29243,
//                      13560,
//                      9292,
//                      6256,
//                      20575,
//                      24599,
//                      19266,
//                      13728,
//                      9790,
//                      8540,
//                      4035,
//                      19999,
//                      14923,
//                      13547,
//                      11679,
//                      11821,
//                      6978,
//                      3616,
//                      2486,
//                      3159,
//                      452,
//                      121,
//
//              ],
//
//          },
//          {
//              name: '未开通量',
//              type: 'bar',
//              barWidth: 10,
//              barGap: 20,
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
//              // areaStyle: {
//              //     normal: {
//              //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//              //             offset: 0,
//              //             color: 'rgba(234,166,58, 0.4)'
//              //         }, {
//              //             offset: 1,
//              //             color: 'rgba(234,166,58, 0.1)'
//              //         }], false),
//              //         shadowColor: 'rgba(0, 0, 0, 0.1)',
//              //         shadowBlur: 10
//              //     }
//              // },
//              itemStyle: {
//                  normal: {
//                      // color: '#37bc9b',
//                      color: new echarts.graphic.LinearGradient(
//                          0, 0, 0, 1, [{
//                                  offset: 0,
//                                  color: 'rgba(55,188,155,1)'
//                              },
//
//                              {
//                                  offset: 1,
//                                  color: 'rgba(55,188,155,0.4)'
//                              }
//                          ]
//                      ),
//                  }
//              },
//              data: [5051,
//                      4851,
//                      2175,
//                      1551,
//                      949,
//                      2489,
//                      3703,
//                      2686,
//                      2158,
//                      1329,
//                      1378,
//                      496,
//                      4177,
//                      2831,
//                      2302,
//                      1447,
//                      962,
//                      2398,
//                      826,
//                      646,
//                      2825,
//                      313,
//                      32,
//
//              ]
//          },
//          {
//              itemStyle: {
//                  normal: {
//                      color: '#f6bb42',
//                      borderColor: 'rgba(246,187,66,0.27)',
//                          borderWidth: 12
//                  }
//              },
//              // show:true,
//              name: "开通率",
//              type: 'line',
//              yAxisIndex: 1,
//              // stack: 'sum',
//              // formatter:'{a2}:{c2}%',
//              barWidth: 10,
//              smooth: true,
//              data: [78.79 ,
//                      85.77 ,
//                      86.18, 
//                      85.70, 
//                      86.83, 
//                      89.21, 
//                      86.92, 
//                      87.76, 
//                      86.42, 
//                      88.05, 
//                      86.11, 
//                      89.05, 
//                      82.72, 
//                      84.05, 
//                      85.48, 
//                      88.98, 
//                      92.47, 
//                      74.42, 
//                      81.40, 
//                      79.37, 
//                      52.79, 
//                      59.08, 
//                      79.08,
//
//              ],
//
//          }
//      ]
//  };
//  chart.setOption(option);
//}
////makeChart11();
//>>>>>>> 46a5cd4da8fac4827029848064a9202c8d545063

// w_js 活跃度等基本情况(e支部活跃度)
//var myChart = echarts.init(document.getElementById('j_main'));
//var w_option = {
//  width: '757px',
//  title: {
////      text: 'E支部使用情况(全省使用e支部占比：98%)',
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      },
//      top: "5%",
//      left: '18px',
//      // bottom: '80%',
//  },
//  legend: {
//      top: '12%',
//      right:'9%',
//      textStyle: {
//          color: 'rgba(255,255,255,0.8)',
//      },
////      orient: 'horizontal',
////      y: 'top',
////      data: ['活跃数', '活跃率'],
//
//
//  },
//  tooltip: {
//      trigger: 'axis',
////      formatter: '{a0}: {c0}<br />{a1}: {c1}%',
//		formatter: '{a0}: {c0}%',
//      axisPointer: {
//          lineStyle: {
//              color: '#57617B'
//          }
//      }
//  },
//  calculable: true,
//  xAxis: [{
//      type: 'category',
//      data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委'],
//      axisLabel: {
//          interval: 0,
//          fontSize: 12,
//          fontWeight: 100,
//          textStyle: {
//             color: 'rgba(255,255,255,0.7)',
//          }
//      }
//
//  }],
//  yAxis: [
////  {
////          type: 'value',
////          axisLabel: {
////             color: 'rgba(255,255,255,0.7)',
////          },
////          axisLine: {
////              lineStyle: {
////                  color: 'rgba(255,255,255,0.1)',
////              }
////          },
////          splitLine: {
////              lineStyle: {
////                  color: 'rgba(255,255,255,0.1)',
////              }
////          }
////      },
////      {
////          type: 'value',
////          min: 0,
////          interval: 20,
////          max: 100,
////          axisTick: {
////              show: true
////          },
////          axisLine: {
////              lineStyle: {
////                  color: 'rgba(255,255,255,0.1)',
////              }
////          },
////          axisLabel: {
////              margin: 10,
////              textStyle: {
////                  fontSize: 14,
////                  color: 'rgba(255,255,255,0.7)',
////              },
////              formatter: '{value}%'
////          },
////          splitLine: {
////              lineStyle: {
////                  color: 'rgba(255,255,255,0.1)',
////              }
////          }
////      }
//{
//                  type: 'value',
//                  min: 0,
//                  // interval: 20,
//                  max: 100,
//                  axisTick: {
//                      show: false
//                  },
//                  axisLine: {
//                      lineStyle: {
//                         color: 'rgba(255,255,255,0.2)',
//                      }
//                  },
//                  axisLabel: {
//                      margin: 10,
//                      textStyle: {
//                          fontSize: 14,
//                          color: 'rgba(255,255,255,0.7)',
//                      },
//                      formatter: '{value}%'
//                  },
//                  splitLine: {
//                      lineStyle: {
//                         color: 'rgba(255,255,255,0.2)',
//                      }
//                  }
//              }
//
//  ],
//  series: [
////  {
////          name: '活跃数',
////          type: 'bar',
////          stack: 'sum',
////          data: [5503,
////                  9204,
////                  10598,
////                  8303,
////                  3259,
////                  10447,
////                  12070,
////                  5373,
////                  7968,
////                  6464,
////                  3492,
////                  1478,
////                  14034,
////                  9029,
////                  2361,
////                  8664,
////                  4658,
////                  1129,
////                  699,
////                  976,
////                  434,
////                  25,
////                  0,
////
////          ],
////          barWidth: 10,
////          // barCateGoryGap:20,
////          barGap: "500%",
////          itemStyle: {
////              normal: {
////                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
////                      offset: 0,
////                      color: 'rgba(75,137,220,1)'
////                  }, {
////                      offset: 0.8,
////                      color: 'rgba(75,137,220,0.5)'
////                  }], false),
////                  barBorderRadius: 15,
////              }
////          },
////      },
////      {
////          itemStyle: {
////              normal: {
////                  color: '#9ad945',
////                  borderColor: 'rgba(154,217,69,0.27)',
////                      borderWidth: 12
////              }
////          },
////          name: "使用率",
////          type: 'line',
////          yAxisIndex: 1,
////          barWidth: 10,
////          smooth: true,
////          data: [23.11,
////                  27.00,
////                  67.35,
////                  76.57,
////                  45.23,
////                  45.30,
////                  42.65,
////                  24.48,
////                  50.16,
////                  58.13,
////                  35.21,
////                  32.62,
////                  58.05,
////                  50.86,
////                  14.90,
////                  66.01,
////                  36.44,
////                  12.04,
////                  15.74,
////                  31.16,
////                  7.25,
////                  3.27,
////                  0.00,
////
////
////          ],
////      }
//
//{
//                  name:'占比(E支部使用数/E支部开通数)',
//                  type:'line',
//                  smooth:true,
//                  stack: '总量',
//                  data:[23.11,
//                  27.00,
//                  67.35,
//                  76.57,
//                  45.23,
//                  45.30,
//                  42.65,
//                  24.48,
//                  50.16,
//                  58.13,
//                  35.21,
//                  32.62,
//                  58.05,
//                  50.86,
//                  14.90,
//                  66.01,
//                  36.44,
//                  12.04,
//                  15.74,
//                  31.16,
//                  7.25,
//                  3.27,
//                  0.00,
//          		],
//                  barWidth:10,
//                  barGap:20,
//                  itemStyle:{
//                      normal: {
//                          color: '#f6bb42',
//                          borderColor: 'rgba(246,187,66,0.27)',
//                              borderWidth: 12
//                      }
//                  },
//                  areaStyle: {
//                      normal: {
//                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                              offset: 0,
//                              color: 'rgba(246,187,66, 0.3)'
//                          }, {
//                              offset: 0.8,
//                              color: 'rgba(246,187,66, 0.07)'
//                          }], false),
//                          shadowColor: 'rgba(0, 0, 0, 0.1)',
//                          shadowBlur: 10
//                      }
//                  },
//              }
//  ]
//};
//
//myChart.setOption(w_option);


// e支部活跃度详情
//e支部详情（济南基层党支部开展活动情况(单位:次)）
//var u_myChart1 = echarts.init(document.getElementById('w_maintt'));
//var u_option = {
//  width: '757px',
//  title: {
//      text: '济南基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//  xAxis: [{
//          type: 'category',
//          data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//          },
//          // axisLabel:{
//              
//          // },
//      }],
//      yAxis: [{
//              type: 'value',
//              axisLabel: {
//                  color: 'rgba(255,255,255,0.7)',
//              },
//              axisLine: {
//                  lineStyle: {
//                      width: 1,
//                      color: 'rgba(255,255,255,0.1)', //左边线的颜色
//                  }
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)',
//                  }
//              }
//          }
//
//      ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      data: [11540,11672 ,8140, 8973, 1725, 6181, 90, 1783,22348,46,253,96,],
//      barWidth: 10,
//      barGap: 20,
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//  }]
//};

// u_option.series[0].itemStyle = {
//     normal: {
//         barBorderRadius: 15,
//         color: function (params) {

//             var index = params.dataIndex;
//             var alternateNumber = 2;

//             var newColor = "";
//             var colorList = ['#fbb03b', '#29abe2'];

//             if (index < alternateNumber) {

//                 newColor = colorList[index];

//             } else {

//                 var rowNumber = Math.floor(index / alternateNumber);

//                 newColor = colorList[index - rowNumber * alternateNumber];
//             }
//             return newColor
//         }
//     }
// };
//u_myChart1.setOption(u_option);

//e支部详情（青岛基层党支部开展活动情况(单位:次)）
//var u_myChart2 = echarts.init(document.getElementById('w_maintt2'));
//var u_option2 = {
//  width: '757px',
//  title: {
//      text: '青岛基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//  xAxis: [{
//          type: 'category',
//          data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//          },
//      }],
//      yAxis: [{
//              type: 'value',
//              axisLabel: {
//                  color: 'rgba(255,255,255,0.7)',
//              },
//              axisLine: {
//                  lineStyle: {
//                      width: 1,
//                      color: 'rgba(255,255,255,0.1)', //左边线的颜色
//                  }
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)',
//                  }
//              }
//          }
//
//      ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      data: [20394 ,13314, 8791 ,15072 ,4599 ,9139, 81, 3755, 28812 ,11 ,11, 27,
//],
//      barWidth: 10,
//      barGap: 20, 
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//  }]
//};
//
//u_myChart2.setOption(u_option2);

//e支部详情（淄博）
//var u_myChart3 = echarts.init(document.getElementById('w_maintt3'));
//var u_option3 = {
//  width: '757px',
//  title: {
//      text: '淄博基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
// xAxis: [{
//         type: 'category',
//         data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//         axisLabel: {
//             color: 'rgba(255,255,255,0.7)',
//             interval: '0',
//         },
//     }],
//     yAxis: [{
//             type: 'value',
//             axisLabel: {
//                 color: 'rgba(255,255,255,0.7)',
//             },
//             axisLine: {
//                 lineStyle: {
//                     width: 1,
//                     color: 'rgba(255,255,255,0.1)', //左边线的颜色
//                 }
//             },
//             splitLine: {
//                 lineStyle: {
//                     color: 'rgba(255,255,255,0.1)',
//                 }
//             }
//         }
//
//     ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [32302, 19433, 15015 ,16095 ,3681 ,15174 ,399 ,4156 ,69602 ,81 ,69 ,197,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart3.setOption(u_option3);
//
////e支部详情（枣庄）
//var u_myChart4 = echarts.init(document.getElementById('w_maintt4'));
//var u_option4 = {
//  width: '757px',
//  title: {
//      text: '枣庄基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//  xAxis: [{
//          type: 'category',
//          data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//                  interval: '0',
//          },
//      }],
//      yAxis: [{
//              type: 'value',
//              axisLabel: {
//                  color: 'rgba(255,255,255,0.7)',
//              },
//              axisLine: {
//                  lineStyle: {
//                      width: 1,
//                      color: 'rgba(255,255,255,0.1)', //左边线的颜色
//                  }
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)',
//                  }
//              }
//          }
//
//      ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [31735 ,18505 ,7993, 15166, 4358, 21886, 160 ,3220, 67426 ,38 ,27, 60,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart4.setOption(u_option4);
////e支部详情（东营）
//var u_myChart5 = echarts.init(document.getElementById('w_maintt5'));
//var u_option5 = {
//  width: '757px',
//  title: {
//      text: '东营基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [11045, 4370, 2234 ,4658 ,2153, 7636 ,122 ,2102 ,20536 ,51 ,60 ,71
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart5.setOption(u_option5);
////e支部详情（烟台）
//var u_myChart6 = echarts.init(document.getElementById('w_maintt6'));
//var u_option6 = {
//  width: '757px',
//  title: {
//      text: '烟台基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [79428 ,51258, 50868, 27386, 2962 ,12873 ,781 ,5169 ,73132, 49 ,80, 118,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart6.setOption(u_option6);
////e支部详情（潍坊）
//var u_myChart7 = echarts.init(document.getElementById('w_maintt7'));
//var u_option7 = {
//  width: '757px',
//  title: {
//      text: '潍坊基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [47122 ,25479 ,11872, 20058, 5609, 18928, 117 ,3438 ,38610, 53 ,111 ,136,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart7.setOption(u_option7);
////e支部详情（济宁）
//var u_myChart8 = echarts.init(document.getElementById('w_maintt8'));
//var u_option8 = {
//  width: '757px',
//  title: {
//      text: '济宁基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [11948, 7239, 3064, 5667, 1505 ,5060 ,195, 1522, 19905, 78, 84, 154,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart8.setOption(u_option8);
////e支部详情（泰安）
//var u_myChart9 = echarts.init(document.getElementById('w_maintt9'));
//var u_option9 = {
//  width: '757px',
//  title: {
//      text: '泰安基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [23102 ,18568, 14200 ,9679 ,3488, 9458, 666, 2871, 32607, 85, 61, 194,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart9.setOption(u_option9);
////e支部详情（威海）
//var u_myChart10 = echarts.init(document.getElementById('w_maintt10'));
//var u_option10 = {
//  width: '757px',
//  title: {
//      text: '威海基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [25925 ,26144, 9994, 24334 ,1430, 8286, 211, 2877, 50568, 7, 4, 25,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart10.setOption(u_option10);
////e支部详情（日照）
//var u_myChart11 = echarts.init(document.getElementById('w_maintt11'));
//var u_option11 = {
//  width: '757px',
//  title: {
//      text: '日照基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [6674, 3132, 2249, 3430, 1423, 4834, 100, 1043, 13670, 26 ,17, 70,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart11.setOption(u_option11);
////e支部详情（莱芜）
//var u_myChart12 = echarts.init(document.getElementById('w_maintt12'));
//var u_option12 = {
//  width: '757px',
//  title: {
//      text: '莱芜基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [4307 ,4488, 2337, 2802, 913, 1648, 124, 582, 4764, 52, 48, 96,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart12.setOption(u_option12);
////e支部详情（临沂）
//var u_myChart13 = echarts.init(document.getElementById('w_maintt13'));
//var u_option13 = {
//  width: '757px',
//  title: {
//      text: '临沂基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [74643, 35965, 20213, 25286, 6392, 28612, 350, 5280, 60460, 149, 210, 260,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart13.setOption(u_option13);
////e支部详情（德州）
//var u_myChart14 = echarts.init(document.getElementById('w_maintt14'));
//var u_option14 = {
//  width: '757px',
//  title: {
//      text: '德州基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
// xAxis: [{
//       type: 'category',
//       data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//       axisLabel: {
//           color: 'rgba(255,255,255,0.7)',
//               interval: '0',
//       },
//   }],
//   yAxis: [{
//           type: 'value',
//           axisLabel: {
//               color: 'rgba(255,255,255,0.7)',
//           },
//           axisLine: {
//               lineStyle: {
//                   width: 1,
//                   color: 'rgba(255,255,255,0.1)', //左边线的颜色
//               }
//           },
//           splitLine: {
//               lineStyle: {
//                   color: 'rgba(255,255,255,0.1)',
//               }
//           }
//       }
//
//   ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [11456, 15859, 3387, 3677, 1548, 10138, 130, 2832, 47850, 113, 97, 134,
//],
//      barWidth: 10,
//      barGap: 20,
//
//  }]
//};
//
//u_myChart14.setOption(u_option14);
////e支部详情（聊城）
//var u_myChart15 = echarts.init(document.getElementById('w_maintt15'));
//var u_option15 = {
//  width: '757px',
//  title: {
//      text: '聊城基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [3585 ,2063, 1822, 1926, 336, 1635, 39, 497, 4334, 20, 9, 18,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart15.setOption(u_option15);
////e支部详情（滨州）
//var u_myChart16 = echarts.init(document.getElementById('w_maintt16'));
//var u_option16 = {
//  width: '757px',
//  title: {
//      text: '滨州基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [13165 ,6642, 3157, 6155, 4556, 11880, 89 ,3197, 79360, 9, 2, 16,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart16.setOption(u_option16);
////e支部详情（菏泽）
//var u_myChart17 = echarts.init(document.getElementById('w_maintt17'));
//var u_option17 = {
//  width: '757px',
//  title: {
//      text: '菏泽基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
// xAxis: [{
//       type: 'category',
//       data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//       axisLabel: {
//           color: 'rgba(255,255,255,0.7)',
//               interval: '0',
//       },
//   }],
//   yAxis: [{
//           type: 'value',
//           axisLabel: {
//               color: 'rgba(255,255,255,0.7)',
//           },
//           axisLine: {
//               lineStyle: {
//                   width: 1,
//                   color: 'rgba(255,255,255,0.1)', //左边线的颜色
//               }
//           },
//           splitLine: {
//               lineStyle: {
//                   color: 'rgba(255,255,255,0.1)',
//               }
//           }
//       }
//
//   ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [9346, 9799, 11185, 4503 ,1028 ,4784, 124 ,1640 ,14959, 7, 7 ,17,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart17.setOption(u_option17);
////e支部详情（省直机关）
//var u_myChart18 = echarts.init(document.getElementById('w_maintt18'));
//var u_option18 = {
//  width: '757px',
//  title: {
//      text: '省直机关工委基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [5146, 2266, 1470 ,2253 ,334 ,1751 ,24, 590, 5565 ,4 ,3 ,10,
//      ],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart18.setOption(u_option18);
////e支部详情（教育）
//var u_myChart19 = echarts.init(document.getElementById('w_maintt19'));
//var u_option19 = {
//  width: '757px',
//  title: {
//      text: '省委教育工委基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [2785, 1006, 160, 779, 268, 1080, 90, 354, 1671, 3, 1, 3,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart19.setOption(u_option19);
////e支部详情（国资委）
//var u_myChart20 = echarts.init(document.getElementById('w_maintt20'));
//var u_option20 = {
//  width: '757px',
//  title: {
//      text: '省国资委党委基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [5771, 3411 ,1758, 2895 ,327 ,1605, 50, 555, 8341, 4, 2, 6,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart20.setOption(u_option20);
////e支部详情（胜利油田）
//var u_myChart21 = echarts.init(document.getElementById('w_maintt21'));
//var u_option21 = {
//  width: '757px',
//  title: {
//      text: '胜利油田党委基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [1642, 2368, 541, 908, 132, 286, 0, 198, 826, 0, 0, 0,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart21.setOption(u_option21);
////e支部详情（齐鲁石化）
//var u_myChart22 = echarts.init(document.getElementById('w_maintt22'));
//var u_option22 = {
//  width: '757px',
//  title: {
//      text: '齐鲁石化党委基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//         color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      itemStyle: {
//          normal: {
//              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                  offset: 0,
//                  color: 'rgba(93,156,236,1)'
//              }, {
//                  offset: 0.8,
//                  color: 'rgba(93,156,236,0.5)'
//              }], false),
//              barBorderRadius: 15,
//          }
//      },
//      data: [54 ,67 ,85, 32, 6, 8 ,0, 4, 19, 0, 0, 0,
//],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart22.setOption(u_option22);
////e支部详情（黄三角）
//var u_myChart23 = echarts.init(document.getElementById('w_maintt23'));
//var u_option23 = {
//  width: '757px',
//  title: {
//      text: '黄三角党委基层党支部开展活动情况(单位:次)',
//      top: '20px',
//      left: "30px",
//      textStyle: {
//          fontWeight: 'normal',
//          fontSize: 18,
//          color: 'rgba(255,255,255,0.7)',
//          fontWeight: 'bolder',
//          fontFamily: '黑体'
//      }
//  },
//  tooltip: {
//      trigger: 'axis'
//  },
//  grid: {
//      height: '120px',
//      top: '70px',
//      left: '90px',
//      right: '50px',
//      bottom: '80px'
//  },
//  toolbox: {
//      show: true,
//      feature: {
//          mark: {
//              show: true
//          },
//          dataView: {
//              show: false,
//              readOnly: false
//          },
//          magicType: {
//              show: false,
//              type: ['line', 'bar']
//          },
//          restore: {
//              show: false
//          },
//          saveAsImage: {
//              show: false
//          }
//      }
//  },
//  calculable: true,
//xAxis: [{
//      type: 'category',
//      data: ['党\n小组会 ', '支部\n委员会', '支部\n党员大会', '党课', '民主\n生活会 ', '组织\n生活会', '民主\n评议党员', '评选\n优秀党员 ', '主题\n党日','服务发展','服务党员','服务群众'],
//      axisLabel: {
//          color: 'rgba(255,255,255,0.7)',
//              interval: '0',
//      },
//  }],
//  yAxis: [{
//          type: 'value',
//          axisLabel: {
//              color: 'rgba(255,255,255,0.7)',
//          },
//          axisLine: {
//              lineStyle: {
//                  width: 1,
//                  color: 'rgba(255,255,255,0.1)', //左边线的颜色
//              }
//          },
//          splitLine: {
//              lineStyle: {
//                  color: 'rgba(255,255,255,0.1)',
//              }
//          }
//      }
//
//  ],
//  series: [{
//      name: '组织生活数量',
//      type: 'bar',
//      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//      barWidth: 10,
//      barGap: 20
//  }]
//};
//
//u_myChart23.setOption(u_option23);


/*山东省转出总量统计*/
function makeChart13() {
    var chart = echarts.init(document.getElementById('lyuan'));
    var data = [{
        value: 10699,
        name: '转往省内其他市'
    }, {
        value: 2844,
        name: '转往省委直属其他党组织'
    }, {
        value: 13480,
        name: '转往市内其他县（市、区）'
    }, {
        value: 12310,
        name: '转往市委直属其他党组织'
    }, {
        value: 7006,
        name: '转往县（市、区）内其他乡镇（街道）'
    }, {
        value: 4760,
        name: '转往县（市、区）委直属其他党组织'
    }, {
        value: 547157,
        name: '转往本系统内其他党组织'
    }, {
        value: 49230,
        name: '转往乡镇（街道）直属其他党组织'
    }, {
        value: 4107,
        name: '转往外省（区、市）'
    }, {
        value: 29,
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
                color: 'rgba(255,255,255,0.7)',
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
                color: 'rgba(255,255,255,0.8)',
            }
        },
        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            center: ['70%', '50%'],
            color: ['#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#d770ad', '#7FA0DF', '#6AEEED', '#b783b5'],

            label: {
                normal: {
                    formatter: '{d}%',
                    textStyle: {
                        color: 'rgba(255,255,255,0.8)',
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
makeChart13();
/*山东省接收转入总量统计*/
function makeChart14() {
    var chart = echarts.init(document.getElementById('lyu'));
    var data = [{
            value: 10699,
            name: '接收省内其他市'
        }, {
            value: 2844,
            name: '接收省委直属其他党组织'
        }, {
            value: 13480,
            name: '接收市内其他县（市、区）'
        }, {
            value: 12310,
            name: '接收市委直属其他党组织'
        }, {
            value: 49230,
            name: '接收县（市、区）内其他乡镇（街道）'
        }, {
            value: 4760,
            name: '接收县（市、区）委直属其他党组织'
        }

        , {
            value: 547156,
            name: '接收本系统内其他党组织'
        }, {
            value: 7006,
            name: '接收乡镇（街道）直属其他党组织'
        }, {
            value: 8350,
            name: '接收外省（区、市）'
        }, {
            value: 6131,
            name: '接收军队'
        }, {
            value: 1442,
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
                color: 'rgba(255,255,255,0.7)',
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
                color: 'rgba(255,255,255,0.8)',
            }
        },
        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            center: ['70%', '50%'],
            color: ['#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#d770ad', '#7FA0DF', '#6AEEED', '#b783b5'],
            label: {
                normal: {
                    formatter: '{d}%',

                    textStyle: {
                        color: 'rgba(255,255,255,0.8)',
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
    var sum1=0;
    var sum2=0;
    $.ajax({
        type:"GET",
        url:'./json/sd_into.json',
        dataType:'json',
        // data:{},
        async:true,
        success:function (data) {
            var sd_into=data.values;
            $.ajax({
                type:"GET",
                url:'./json/sd_out.json',
                dataType:'json',
                async:true,
                success:function(data){
                    var sd_out=data.values;
                    data.values.forEach(function (x) {
                        sum1+=parseInt(x)
                    })
                    console.log(sum1);
                    option = {
                        // backgroundColor: '#394056',
                        title: {
                            text: '省委直属党(工)委转出转入情况',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 18,
                                color: 'rgba(255,255,255,0.7)',
                                fontWeight: 'bolder',
                                fontFamily: '黑体'
                            },
                            left: '30px'
                        },
                                legend: {
                                    top: '5%',
                                    right:'5%',
                                    textStyle: {
                                        color: 'rgba(255,255,255,0.8)',
                                    },
                                    orient: 'horizontal',
                                    y: 'top',
                                    data: ['转入', '转出'],


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
                            // axisLine: {
                            //     lineStyle: {
                            //         color: '#57617B'
                            //     }
                            // },
                            axisLabel: {
                                interval: 0, //横轴信息全部显示
                                color: 'rgba(255,255,255,0.7)',
                            },
                            data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
                        }, {
                            axisPointer: {
                                show: false
                            },
                            // axisLine: {
                            //     lineStyle: {
                            //         color: '#57617B'
                            //     }
                            // },
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
                                    color: 'rgba(255,255,255,0.1)'
                                }
                            },
                            axisLabel: {
                                margin: 10,
                                color: 'rgba(255,255,255,0.7)',
                                textStyle: {
                                    fontSize: 14
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(255,255,255,0.1)'
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
                                        color: 'rgba(36,145,192, 0.3)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(36,145,192, 0.07)'
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
                            data: sd_into,
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
                                            color: 'rgba(242,168,49, 0.3)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(242,168,49, 0.07)'
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

                                data: sd_out,
                            }
                        ]
                    };
                    chart.resize();
                    chart.setOption(option);
                }
            });

        }
    })
    
}
makeChart12();

/*点击跳转到《济南党组织关系转接迁徙模拟图》*/
function makeChart_jinan() { //转入
    var chart = echarts.init(document.getElementById('f_lects'));
    // var data2 = [791, 25643, 66, 96, 24, 17, 63, 41,
    //     46, 77, 17, 21, 11, 48, 57, 46, 26, 27, 249,
    //     118, 216, 3, 2, 0
    // ];
    var jn_into=0;
    var data2=[];
    $.ajax({
        type:"GET",
        url:'./json/jn_into.json',
        dataType:'json',
        async:true,
        success:function (data) {
            // console.log(data);
            data2=data.values;
            for (let index = 0; index < data2.length; index++) {
                jn_into+=parseInt(data2[index]);
                
            }
            console.log(jn_into);
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
                        value: data2[1],
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
                            value: data2[2],
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
                            value: data2[0],
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
                            value: data2[3],
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
                            value: data2[4],
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
                            value: data2[5],
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
                            value: data2[6],
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
                            value: data2[7],
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
                            value: data2[8],
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
                            value: data2[9],
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
                            value: data2[10],
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
                            value: data2[11],
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
                            value: data2[12],
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
                            value: data2[13],
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
                            value: data2[14],
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
                            value: data2[15],
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
                            value: data2[16],
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
                            value: data2[17],
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
                            value: data2[18],
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
                            value: data2[19],
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
                            value: data2[20],
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
                            value: data2[21],
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
                            value: data2[22],
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
                            value: data2[23],
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
                        repulsion: [300, 390],
                        // edgeLength: [10, 200],
                        // layoutAnimation:false,
                        //initLayout:'circle',
                        gravity: 0.1
                    }
                }]
            };
            chart.setOption(option);
        }
    });

}
makeChart_jinan();

function makeChart_jinan1() { //转出
    var chart = echarts.init(document.getElementById('f_lects'));
    // var data2 = [261, 25643, 50, 24, 8, 7, 34, 37,
    //     34, 31, 15, 11, 19, 38, 24, 30, 20,
    //     22, 249, 53, 232, 1, 0, 0
    // ];
    var data2=[];
    var jn_out=0;
    $.ajax({
        type: "GET",
            url: './json/jn_out.json',
            dataType: 'json',
            async: true,
            success:function (data) {
                data2=data.values;
                for (let index = 0; index < data2.length; index++) {
                    jn_out += parseInt(data2[index]);

                }
                console.log(jn_out);
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
                                 value: data2[1],
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
                                 value: data2[2],
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
                                 value: data2[0],
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
                                 value: data2[3],
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
                                 value: data2[4],
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
                                 value: data2[5],
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
                                 value: data2[6],
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
                                 value: data2[7],
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
                                 value: data2[8],
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
                                 value: data2[9],
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
                                 value: data2[10],
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
                                 value: data2[11],
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
                                 value: data2[12],
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
                                 value: data2[13],
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
                                 value: data2[14],
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
                                 name: '菏泽',
                                 x: 300,
                                 y: 300,
                                 value: data2[16],
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
                                 value: data2[17],
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
                                 value: data2[18],
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
                                 value: data2[19],
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
                                 value: data2[20],
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
                                 value: data2[21],
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
                                 name: '省外',
                                 x: 200,
                                 y: 80,
                                 value: data2[23],
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
    })
   
}

/*点击跳转到《青岛党组织关系转接迁徙模拟图》*/
function makeChart_qingdao() { //转入
    var chart = echarts.init(document.getElementById('u_lects'));
    // var data2 = [1278, 50, 89872, 60, 22, 16,
    //     148, 96, 45, 67, 40, 41, 21, 46, 15,
    //     29, 24, 29, 93, 77, 38, 10, 1, 0
    // ];
    var data2=[];
    var qd_into=0;
    $.ajax({
        type:"GET",
        url:'./json/qd_into.json',
        dataType:'json',
        async:true,
        success:function (data) {
            data2=data.values;
            for (let index = 0; index < data2.length; index++) {
                qd_into += parseInt(data2[index]);

            }
            console.log(qd_into)
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
            }, {
                name: '淄博',
                x: 700,
                y: 219,
                value: data2[2],
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
                value: data2[0],
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
                value: data2[3],
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
                value: data2[4],
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
                value: data2[5],
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
                value: data2[6],
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
                value: data2[7],
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
                value: data2[8],
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
                value: data2[9],
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
                value: data2[10],
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
                value: data2[11],
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
                value: data2[12],
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
                value: data2[13],
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
                value: data2[14],
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
                value: data2[15],
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
                value: data2[16],
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
                value: data2[17],
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
                value: data2[18],
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
                value: data2[19],
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
                value: data2[20],
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
                value: data2[21],
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
                value: data2[22],
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
                value: data2[23],
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
            repulsion: [300, 330],
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
    })
    
}
// makeChart_qingdao();
function makeChart_qingdao1() { //转出
    var chart = echarts.init(document.getElementById('u_lects'));
    // var data2 = [664, 66, 89872, 38, 17, 15,
    //     78, 114, 36, 26, 37, 36, 12, 75, 23,
    //     24, 36, 54, 73, 27, 30, 2, 3, 0
    // ];
    var data2=[];
    var qd_out=0;
    $.ajax({
        type:"GET",
        url:'./json/qd_out.json',
        dataType:'json',
        async:true,
        success:function (data) {
            data2=data.values
            for (let index = 0; index < data2.length; index++) {
                qd_out += parseInt(data2[index]);
            }
            console.log(qd_out);
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
                            value: data2[1],
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
                            value: data2[2],
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
                            value: data2[0],
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
                            value: data2[3],
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
                            value: data2[4],
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
                            value: data2[5],
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
                            value: data2[6],
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
                            value: data2[7],
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
                            value: data2[8],
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
                            value: data2[9],
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
                            value: data2[10],
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
                            value: data2[11],
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
                            value: data2[12],
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
                            value: data2[13],
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
                            value: data2[14],
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
                            value: data2[15],
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
                            value: data2[16],
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
                            value: data2[17],
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
                            value: data2[18],
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
                            value: data2[19],
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
                            value: data2[20],
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
                            value: data2[21],
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
                            name: '省外',
                            x: 200,
                            y: 100,
                            value: data2[23],
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
    })
    
}

//17个地市稿子提交情况
//function chart_content() {
//  var d1 = [422, 3744, 4318, 2188, 1660, 5187, 4382, 3122, 1315, 794, 246, 297, 5773, 1129, 327, 785, 1077, 180, 3, 268, 1, 35, 29]
//;
//  var d2 = [101, 725, 1145, 335, 357, 877, 1266, 943, 224, 219, 79, 137, 1319, 463, 75, 102, 260, 89, 1, 78, 0, 7, 13]
//;
//  var d3=[];
//  for(var i=0;i<d1.length;i++){
//      d3.push(foo(d2[i] / d1[i]));
//  };
// 
//  console.log(d3);
//  var chart = echarts.init(document.getElementById('j_content'));
//  var data = ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委'];
//  option = {
//      // backgroundColor: "#344b58",
//      "title": {
//          "text": "省委直属党(工)委所属党组织信息发布情况(单位:篇)",
//          x: "4%",
//          // y:'%',
//          textStyle: {
//              color: 'rgba(255,255,255,0.7)',
//              fontSize: '18'
//          },
//          // subtextStyle: {
//          //     color: '#90979c',
//          //     fontSize: '16',
//          //
//          // },
//      },
//      legend:{
//          top:'5%',
//          right:'10%',
//          textStyle:{
//              color: "rgba(255,255,255,0.8)"
//          },
//          orient: 'horizontal',
//              y: 'top',
//               data: ['提交数', '通过率'],
//              
//              
//      },
//      tooltip: {
//          trigger: 'axis',
//          formatter: '{a0}: {c0}<br />{a1}: {c1}%',
//      },
//      "grid": {
//          "borderWidth": 0,
//          // "top": 110,
//          // "bottom": 95,
//          textStyle: {
//              color: "#fff"
//          }
//      },
//      "calculable": true,
//      "xAxis": [
//          {
//              type: 'category',
//              // boundaryGap: false,
//              // axisLine: {
//              //     lineStyle: {
//              //         color: '#57617B'
//              //     }
//              // },
//              axisLabel: {
//                  interval: 0, //横轴信息全部显示
//                  color: 'rgba(255,255,255,0.7)',
//              },
//              data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽', '省直\n机关\n工委', '省委\n教育\n工委', '省国\n资委\n党委', '胜利\n油田\n党委', '齐鲁\n石化\n党委', '黄三\n角党\n工委']
//          },{
//               position: 'bottom',
//                   offset: 20,
//          }],
//      "yAxis": [
//          {
//              type: 'value',
//              min: 0,
//              interval:1300,
//              max: 6500,
//              axisTick: {
//                  show: false
//              },
//              // axisLine: {
//              //     lineStyle: {
//              //         color: 'rgba(255,255,255,0.1)'
//              //     }
//              // },
//              axisLabel: {
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color: 'rgba(255,255,255,0.7)',
//                  },
//                  // formatter: '{value}%'
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              },
//              // stack: 'sum',
//          },
//          {
//              type: 'value',
//              min: 0,
//              max: 100,
//              axisTick: {
//                  show: false
//              },
//              axisLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              },
//              axisLabel: {
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color: 'rgba(255,255,255,0.7)',
//                  },
//                  formatter: '{value}%'
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)'
//                  }
//              },
//              
//              // stack: 'sum',
//          }
//      ],
//      "series": [
//          {
//              "name": "提交数",
//              "type": "bar",
//              "stack": "总量",
//              smooth: true,
//              barWidth:10,
//              barGap:20,
//              stack: 'sum',
//              // "itemStyle": {
//              //     "normal": {
//              //         "color": "rgba(255,144,128,1)",
//              //         "label": {
//              //             "show": true,
//              //             "textStyle": {
//              //                 "color": "#fff"
//              //             },
//              //             // "position": "insideTop",
//              //             formatter: function (p) {
//              //                 return p.value > 0 ? (p.value) : '';
//              //             }
//              //         }
//              //     }55,188,155
//              // },
//              itemStyle:{
//                  normal: {
//                     color: new echarts.graphic.LinearGradient(
//                         0, 0, 0, 1, [{
//                                 offset: 0,
//                                 color: 'rgba(55,188,155,1)'
//                             },
//                             
//                             {
//                                 offset: 1,
//                                 color: 'rgba(55,188,155,0.4)'
//                             }
//                         ]
//                     ),
//                     barBorderRadius:15,
//                  }
//              },
//              "data": [422, 3744, 4318, 2188, 1660, 5187, 4382, 3122, 1315, 794, 246, 297, 5773, 1129, 327, 785, 1077, 180, 3, 268, 0, 35, 29]									
//
//          },
//
//          {
//              "name": "通过率",
//              "type": "line",
//              "stack": "总量",
//              
//              smooth: true,
//              yAxisIndex: 1,
//              // "itemStyle": {
//              //     "normal": {
//              //         "color": "rgba(0,191,183,1)",
//              //         "barBorderRadius": 0,
//              //         "label": {
//              //             "show": true,
//              //             // "position": "top",
//              //             formatter: function (p) {
//              //                 return p.value > 0 ? (p.value) : '';
//              //             }
//              //         }
//              //     }59,175,218
//              // },
//              itemStyle: {
//                  normal: {
//                      color: 'rgb(59,175,218)',
//                      borderColor: 'rgba(59,175,218,0.27)',
//                      borderWidth: 12
//
//                  }
//              },
//
//              
//              "data": d3,
//          }
//      ]
//  }
//  chart.resize();
//  chart.setOption(option);
//}
//chart_content();

//省委直属党(工)委所属党员注册分布情况
//function j_Res() {
//  var aa1 = ["14031", "20698", "291452", "5956"];
//  var aa2 = ["146526", "165877", "80423", "53465", "38255", "110768", "197414", "89523", "69360", "41808", "41968", "19234", "180102", "68640", "99301", "57935", "92945", "31776", "17804", "11747", "13668", "1973", "313"];
//  var aa3=[];var aa4=0;
//  for (var index = 0; index < aa1.length; index++) {
//      aa4+=parseInt(aa1[index]);
//      
//  }
//  console.log(aa4);
//  var chart = echarts.init(document.getElementById('j_res'));
//  option = {
//      // backgroundColor: '#394056',
//      title: {
//          text: '省委直属党(工)委所属党员注册分布情况(单位:人)',
//          textStyle: {
//              fontWeight: 'normal',
//              fontSize: 18,
//              color: 'rgba(255,255,255,0.7)',
//              fontWeight:'bolder',
//              fontFamily:'黑体'
//          },
//          left: '2%',
//          top:'6%',
//      },
//      legend: {
//          top: '10%',
//          right:'9%',
//          textStyle: {
//              color: 'rgba(255,255,255,0.8)',
//          },
//          orient: 'horizontal',
//          y: 'top',
//          data: ['注册量','未注册量', '注册率'],
//
//
//      },
//      tooltip: {
//          trigger: 'axis',
//          formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}:{c2}%',
//          axisPointer: {
//              lineStyle: {
//                  color: '#57617B'
//              }
//          }
//      },
//      grid: {
//          top:'25%',
//          left: '3%',
//          right: '4%',
//          bottom: '3%',
//          containLabel: true
//      },
//      xAxis: [{
//          type: 'category',
//          // boundaryGap: false,
//          // axisLine: {
//          //     lineStyle: {
//          //         color: '#57617B'
//          //     }
//          // },
//          // axisLabel:{
//          //     interval:0,//横轴信息全部显示
//          //     color:'#fff'
//          // },
//          axisLabel:{
//              interval: 0,
//              fontSize: 12,
//              fontWeight: 100,
//              textStyle: {
//                  color: 'rgba(255,255,255,0.7)',
//
//              }
//          },
//          data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
//      }, {
//          // axisPointer: {
//          //     show: false
//          // },
//          // axisLine: {
//          //     lineStyle: {
//          //         color: '#57617B'
//          //     }
//          // },
//          // axisTick: {
//          //     show: false
//          // },
//
//          position: 'bottom',
//          offset: 20,
//
//      }],
//      yAxis: [
//          {
//              type: 'value',
//              min: 0,
//              // interval:170000,
//              max: 900000,
//              axisTick: {
//                  show: false
//              },
//              axisLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)',
//                  }
//              },
//              axisLabel: {
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color: 'rgba(255,255,255,0.7)',
//                  }
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)',
//                  }
//              }
//          },
//          {
//              type: 'value',
//              min: 0,
//              max: 100,
//              interval:25,
//              axisTick: {
//                  show: false
//              },
//              axisLine: {
//                  lineStyle: {
//                     color: 'rgba(255,255,255,0.1)',
//                  }
//              },
//              axisLabel: {
//                  formatter:'{value}%',
//                  margin: 10,
//                  textStyle: {
//                      fontSize: 14,
//                      color: 'rgba(255,255,255,0.7)',
//                  }
//              },
//              splitLine: {
//                  lineStyle: {
//                      color: 'rgba(255,255,255,0.1)',
//                  }
//              }
//          }
//      ],
//      series: [
//          {
//              name: '注册量',
//              type: 'bar',
//              smooth: true,
//              barWidth:10,
//              stack: 'sum',
//              // symbol: 'triangle',
//              symbolSize: 5,
//              showSymbol: true,
//              lineStyle: {
//                  normal: {
//                      width: 1
//                  }
//              },
//              barGap:20,
//              // areaStyle: {
//              //     normal: {
//              //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//              //             offset: 0,
//              //             color: 'rgba(36,145,192, 0.4)'
//              //         }, {
//              //             offset: 1,
//              //             color: 'rgba(36,145,192, 0.1)'
//              //         }], false),
//              //         shadowColor: 'rgba(0, 0, 0, 0.1)',
//              //         shadowBlur: 10
//              //     }74,137,220
//              // },
//              itemStyle: {
//                  normal: {
//                      color: new echarts.graphic.LinearGradient(
//                          0, 0, 0, 1, [{
//                                  offset: 0,
//                                  color: 'rgba(74,137,220,1)'
//                              },
//
//                              {
//                                  offset: 1,
//                                  color: 'rgba(74,137,220,0.4)'
//                              }
//                          ]
//                      ),
//                      // borderColor: 'rgba(36,145,192,0.27)',
//                      // borderWidth: 12
//
//                  }
//              },
//              data: ["439579", "663510", "321694", "213863", "114766", "553840", "592243", "447619", "346803", "209044", "209842", "96170", "540306", "274562", "297905", "231742", "371782", "95330", "53412", "35241", "54674", "9865", "1253"]
//          },
//          {
//              name: '未注册量',
//              type: 'bar',
//              smooth: true,
//              barWidth:10,
//              stack: 'sum',
//              // symbol: 'triangle',
//              symbolSize: 5,
//              showSymbol: true,
//              lineStyle: {
//                  normal: {
//                      width: 1
//                  }
//              },
//
//              // areaStyle: {
//              //     normal: {
//              //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//              //             offset: 0,
//              //             color: 'rgba(36,145,192, 0.4)'
//              //         }, {
//              //             offset: 1,
//              //             color: 'rgba(36,145,192, 0.1)'
//              //         }], false),
//              //         shadowColor: 'rgba(0, 0, 0, 0.1)',
//              //         shadowBlur: 10
//              //     }150,122,220
//              // },
//              itemStyle: {
//                  normal: {
//                      color: new echarts.graphic.LinearGradient(
//                          0, 0, 0, 1, [{
//                                  offset: 0,
//                                  color: 'rgba(150,122,220,1)'
//                              },
//
//                              {
//                                  offset: 1,
//                                  color: 'rgba(150,122,220,0.4)'
//                              }
//                          ]
//                      ),
//                      // borderColor: 'rgba(36,145,192,0.27)',
//                      // borderWidth: 12
//
//                  }
//              },
//              data: ["24858", "41208", "8857", "7005", "2358", "8445", "4720", "31599", "29479", "12027", "10492", "1599", "34467", "17359", "14467", "3474", "2369", "37507", "10720", "2763", "57280", "9386", "1795"]
//          },
//          {
//              itemStyle: {
//                  normal: {
//                      color: '#8cc152',
//
//
//                  }
//              },
//              // show:true,
//              name:"注册率",
//              type:'line',
//              yAxisIndex: 1,
//              // stack: 'sum',
//              formatter:'{b3}:{c3}'+'%',barWidth:10,
//              smooth: true,
//              itemStyle: {
//                  normal: {
//                      color: 'rgb(59,175,218)',
//                      borderColor: 'rgba(36,145,192,0.27)',
//                      borderWidth: 12
//
//                  }
//              },
//              data: [94.65 ,
//                  94.15 ,
//                  97.32 ,
//                  96.83 ,
//                  97.99 ,
//                  98.50 ,
//                  99.21 ,
//                  93.41 ,
//                  92.17 ,
//                  94.56 ,
//                  95.24 ,
//                  98.36 ,
//                  94.00 ,
//                  94.05 ,
//                  95.37 ,
//                  98.52 ,
//                  99.37 ,
//                  71.76 ,
//                  83.28 ,
//                  92.73 ,
//                  48.84 ,
//                  51.24 ,
//                  41.11 ,
//              ],
//          }
//      ]
//
//  };
//  chart.setOption(option);
//}
//j_Res();

//发布情况温度计
//function j_NOC() {
//  var chart = echarts.init(document.getElementById('j_noc'));
//  var myColor = ['#8cc152', '#37bc9b', 'f6bb42', '#e9573f', '#da4453'];
//  option = {
//      grid: {
//          top: '5%',
//          containLabel: true
//      },
//      xAxis: [{
//          show: false,
//      }],
//      yAxis: [{
//          axisTick: 'none',
//          axisLine: 'none',
//          offset: '27',
//          axisLabel: {
//              textStyle: {
//                  color: 'rgba(255,255,255,0.7)',
//                      fontSize: '12',
//              }
//          },
//          data: ['5', '4', '3', '2', '1']
//      }, {
//          axisTick: 'none',
//          axisLine: 'none',
//          axisLabel: {
//              textStyle: {
//                  color: 'rgba(255,255,255,0.7)',
//                  fontSize: '12',
//              }
//          },
//          data: ['第一书记管理服务网', '干部工作网', '党员队伍建设网', '基层党组织建设网', '党建和组织工作宣传网']
//      }, {
//          name: '单位：件',
//          nameGap: '50',
//          // nameTextStyle: {
//          //     color: 'rgba(255,255,255,0.7)',
//          //     fontSize: '8',
//          // },
//          axisLine: {
//              lineStyle: {
//                  color: 'rgba(0,0,0,0)'
//              }
//          },
//          data: [],
//      }],
//      series: [{
//          name: '条',
//          type: 'bar',
//          yAxisIndex: 0,
//          // [,,,,]
//          data: [337, 701, 759, 1984, 2083],
//          label: {
//              normal: {
//                  show: true,
//                  position: 'right',
//                  // formatter:function(param){
//                  //   return param.value + '%';
//                  // },
//                  textStyle: {
//                      color: 'rgba(255,255,255,0.7)',
//                      fontSize: '12',
//                  }
//              }
//          },
//          barWidth: 5,
//          itemStyle: {
//              normal: {
//                  color: function (params) {
//                      var num = myColor.length;
//                      return myColor[params.dataIndex % num]
//                  },
//              }
//          },
//          z: 2
//      }, {
//          name: '白框',
//          type: 'bar',
//          yAxisIndex: 1,
//          barGap: '-100%',
//          data: [3000, 3000, 3000, 3000, 3000],
//          barWidth: 10,
//          itemStyle: {
//              normal: {
//                  color: '#0e2147',
//                  barBorderRadius: 5,
//              }
//          },
//          z: 1
//      }, {
//          name: '外框',
//          type: 'bar',
//          yAxisIndex: 2,
//          barGap: '900%',
//          data: [3000, 3000, 3000, 3000, 3000],
//          barWidth: 12,
//          itemStyle: {
//              normal: {
//                  color: function (params) {
//                      var num = myColor.length;
//                      return myColor[params.dataIndex % num]
//                  },
//                  barBorderRadius: 5,
//              }
//          },
//          z: 0
//      },
//      {
//          name: '外圆',
//          type: 'scatter',
//          hoverAnimation: false,
//          data: [0, 0, 0, 0, 0],
//          yAxisIndex: 2,
//          symbolSize: 20,
//          itemStyle: {
//              normal: {
//                  color: function (params) {
//                      var num = myColor.length;
//                      return myColor[params.dataIndex % num]
//                  },
//                  opacity: 1,
//              }
//          },
//          z: 2
//      }]
//  };
//  chart.setOption(option);
//}
//j_NOC();
//top10;
//function j_TOP() {
//  var chart = echarts.init(document.getElementById('j_top'));
//  var option = {
//      // color: ['#ebe20c', '#148edf','#39b54a'],
//      title: {
//          show: true,
//          text: '',
//          x: 'center',
//          y: 'center',
//          textStyle: {
//              color: '#34c4ff',
//              fontStyle: 'normal',
//              fontWeight: 'normal',
//              fontFamily: 'sans-serif',
//              fontSize: 18
//          }
//      },
//      tooltip: {
//          trigger: 'item',
//          formatter: "{a} <br/>{b}:{c}人"
//      },
//      series: [{
//              name: '人员类型',
//              type: 'pie',
//              hoverAnimation: false,
//              legendHoverLink: false,
//              radius: ['38%', '45%'],
//              color: ['#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#d770ad'],
//              label: {
//                  normal: {
//                      position: 'inner'
//                  }
//              },
//              labelLine: {
//                  normal: {
//                      show: false
//                  },
//
//              },
//              tooltip: {
//                  show: false,
//
//
//              },
//
//              data: [{
//                      value: 100,
//                      name: ''
//                  },
//                  {
//                      value: 100,
//                      name: ''
//                  },
//                  {
//                      value: 100,
//                      name: ''
//                  },
//                  {
//                      value: 100,
//                      name: ''
//                  },
//                  {
//                      value: 100,
//                      name: ''
//                  },
//                  {
//                      value: 100,
//                      name: ''
//                  },
//                  {
//                      value: 100,
//                      name: ''
//                  },
//                  {
//                      value: 100,
//                      name: ''
//                  },
//                  {
//                      value: 100,
//                      name: ''
//                  }
//              ]
//          },
//          {
//            
//              type: 'pie',
//              radius: ['43%', '55%'],
//              color: ['#00FFFF', '#44EAB1', '#7BDD43', '#148edf', '#00d386', '#FF7C44', '#FA3E5F', '#6635EF', '#FFAFDA'],
//              labelLine: {
//                  normal: {
//                      show: true,
//                      length: 20,
//                      length2: 20,
//                      lineStyle: {
//                          width: 2
//                      }
//                  }
//              },
//              label: {
//                  normal: {
//                      formatter: '{b}:{c|{c}}\n{hr|}\n占比:{d|{d}%}',
//                      rich: {
//                          b: {
//                              fontSize: 14,
//                              color: '#12EABE',
//                              align: 'left',
//                              padding: 2
//                          },
//                          hr: {
//                              borderColor: '#12EABE',
//                              width: '100%',
//                              borderWidth: 2,
//                              height: 0
//                          },
//                          d: {
//                              fontSize: 14,
//                              color: '#fff',
//                              align: 'left',
//                              padding: 2
//                          },
//                          c: {
//                              fontSize: 14,
//                              color: '#fff',
//                              align: 'left',
//                              padding: 2
//                          }
//                      }
//                  }
//              },
//              data: [
//                  {
//                      value: 467196,
//                      name: '微信'
//                  }, {
//                      value: 217141,
//                      name: 'WEB'
//                  },
//                  {
//                      value: 2166660,
//                      name: 'APP'
//                  },
//                  
//              ]
//          }
//      ]
//  };
//  chart.setOption(option);
//}
//j_TOP();