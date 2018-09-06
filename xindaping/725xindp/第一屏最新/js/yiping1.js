function Move(){
    this.inio();

}
Move.prototype={
    constructor: Move,
    inio:function(){
        this.left();
    },
    /**调用左边的**/
    left:function() {
        this.server();  //内存,宽带,cpu表盘
        this.time();  //运行时间
        this.serverUsage();
        this.broadband();  //宽带占用情况
        this.flow();  //流量监测情况
        this.request();   //请求响应情况
    },

    /*左边的开始**/
    broadband:function(){
        var f_broadband= echarts.init(document.getElementById('f_broadband'));
        var date=new Date();
        var data = [];
        for(var i=0; i<1000;i++){
            date=new Date(date-300*1000);
            var m=date.getHours();
            var value=0;
            if(m<=8){
                value=Math.floor(Math.random()*150+1);
            }else if(8<m && m<=12){
                value=Math.floor(Math.random()*380.4+1);
            }else if(12<m && m<=14){
                value=Math.floor(Math.random()*280+1);
            }else if(14<m && m<18){
                value=Math.floor(Math.random()*380+1);
            }else if(18<m && m<21){
                value=Math.floor(Math.random()*280+1);
            }else{
                value=Math.floor(Math.random()*100+1);
            }
            data.push({
                name:date,
                value:[date,Math.round(value)]
            })
        }


        var  option = {
            title : {
                text: '带宽占用情况',
                top:"5%",
                left:"45%",
                textStyle:{
                	 fontWeight: 'normal',
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bolder',
            fontFamily: '黑体'
                }
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    var h=date.getHours(); //获取当前小时数(0-23)
                    var m= date.getMinutes(); //获取当前分钟数(0-59)
                    var s=date.getSeconds();
                    return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+
                        "\n"+(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s)+"\n带宽:"+ params.value[1];
                    // return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '6%',
                // padding:'0 0 10 0',
                containLabel: true,
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        color: '#eeeeee'
                    }
                }
            },
            yAxis : [
                {
                    max:500,
                    type : 'value',
                    name:"域名带宽（Mbps）",
                    nameTextStyle:{
                        color:"#fff"
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#3a4b61'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 14,
                            color: '#eeeeee'
                        }
                    }
                }
            ],
            dataZoom: [
                {
                    type: 'inside',
                    start: 90,
                    end: 100
                }, {
                    start: 90,
                    end: 100,
                    height:8,
                    bottom:"3%",
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    textStyle:{
                        color:"#fff"
                    },
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
            series: [
                {
                    data: data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: "#468bfe"
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3ebeff'
                            }, {
                                offset: 0.2,
                                color: '#6a87ff'
                            }])
                        }
                    },
                }
            ]
        };
        f_broadband.setOption(option);
        f_broadband.resize();
    },  //带宽占用情况
    flow:function(){
        var f_flow= echarts.init(document.getElementById('f_flow'));
        var date=new Date();
        var data = [];
        for(var i=0; i<1000;i++){
            date=new Date(date-300*1000);
            var m=date.getHours();
            var value=0;
            if(m<=8){
                value=Math.floor(Math.random()*2+1);
            }else if(8<m && m<=12){
                value=Math.floor(Math.random()*13.4+1);
            }else if(12<m && m<=14){
                value=Math.floor(Math.random()*5.4+1);
            }else if(14<m && m<18){
                value=Math.floor(Math.random()*13.4+1);
            }else if(18<m && m<21){
                value=Math.floor(Math.random()*10.4+1);
            }else{
                value=Math.floor(Math.random()*3+1);
            }
            data.push({
                name:date,
                value:[date,Math.round(value)]
            })
        }
        var option = {
            color:"#01ccc7",
            title: {
                text: '流量监测情况',
                left:"45%",
                top:"5%",
                textStyle:{
                    fontWeight: 'normal',
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bolder',
            fontFamily: '黑体'
                }
            },
            grid: {
                left: '5%',
                right: '4%',
                bottom: '6%',
                // padding:'0 0 10 0',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    var h=date.getHours(); //获取当前小时数(0-23)
                    var m= date.getMinutes(); //获取当前分钟数(0-59)
                    var s=date.getSeconds();
                    return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+
                        "\n"+(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s)+"\n带宽:"+ params.value[1];
                    // return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        color: '#eeeeee'
                    }
                }
            },
            yAxis : [
                {
                    type : 'value',
                    name:"单位(GB)",
                    nameTextStyle:{
                        color:"#fff"
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#3a4b61'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 14,
                            color: '#eeeeee'
                        }
                    }
                }
            ],
            dataZoom: [
                {
                    type: 'inside',
                    start: 90,
                    end: 100
                }, {
                    start: 90,
                    end: 100,
                    height:8,
                    bottom:"3%",
                    // handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    textStyle:{
                        color:"#fff"
                    },
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
            series: [{
                name: '流量监测情况',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data:data,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: '#25ccc8'
                        }, {
                            offset: 0.1,
                            color: '#f6fffc'
                        }])
                    }
                },
            }]
        };
        f_flow.setOption(option);
        f_flow.resize();

    },  //流量监测情况
    request:function (){
        var f_request= echarts.init(document.getElementById('f_request'));
        var date=new Date();
        var data = [];
        for(var i=0; i<1000;i++){
            date=new Date(date-300*1000);
            var m=date.getHours();
            var value=0;
            if(m<=8){
                value=Math.floor(Math.random()*200+1);
            }else if(8<m && m<=12){
                value=Math.random()*(2350-i+1)+i;
            }else if(12<m && m<=14){
                value=Math.floor(Math.random()*1000+1);
            }else if(14<m && m<=18){
                value=Math.random()*(2350-i+1)+i;
            }else if(18<m && m<=21){
                value=Math.floor(Math.random()*1000+1);
            }else{
                value=Math.floor(Math.random()*100+1);
            }
            data.push({
                name:date,
                value:[date,Math.round(value)]
            })
        }
        var option = {
            color:"#62c87f",
            title: {
                text: '请求响应情况',
                left:"45%",
                top:"5%",
                textStyle:{
                    fontWeight: 'normal',
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bolder',
            fontFamily: '黑体'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '6%',
                // padding:'0 0 10 0',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    var h=date.getHours(); //获取当前小时数(0-23)
                    var m= date.getMinutes(); //获取当前分钟数(0-59)
                    var s=date.getSeconds();
                    return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+
                        "\n"+(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s)+"\n带宽:"+ params.value[1];
                    // return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        color: '#eeeeee'
                    }
                }
            },
            yAxis : [
                {
                    type : 'value',
                    name:"请求数",
                    nameTextStyle:{
                        color:"#fff"
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#3a4b61'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 14,
                            color: '#eeeeee'
                        }
                    }
                }
            ],
            dataZoom: [{
                type: 'inside',
                start: 90,
                end: 100
            }, {
                start: 90,
                end: 100,
                height:8,
                bottom:"3%",
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                textStyle:{
                    color:"#fff"
                },
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data:data
            }]
        };
        f_request.setOption(option);
        f_request.resize();
    },  //请求响应情况
    server:function(){
        var f_serverSum= echarts.init(document.getElementById('f_serverSum'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} %'
            },
            series : [
                {
                    name: 'CPU',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    center: ['50%', '55%'],
                    radius: '85%',
                    pointer:{
                        width:5
                    },
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 10,
                            color: [[0.2,  '#5d9cec'], [0.8,'#62c87f'], [1, '#f15755']]
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 15,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    title : {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            // fontStyle: 'italic',
                            color:"#fff",
                            offsetCenter: [0, '55%']
                        }
                    },
                    detail : {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        formatter:'{value}%',

                    },
                    data:[{value: '40', name: 'CPU'}]
                },
                {
                    name: '内存',
                    type: 'gauge',
                    center: ['22%', '55%'],    // 默认全局居中
                    radius: '70%',
                    min:0,
                    max:100,
                    endAngle:45,
                    splitNumber:10,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5,
                            color: [[0.2,  '#5d9cec'], [0.8,'#62c87f'], [1, '#f15755']]
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length:10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length:15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width:3
                    },
                    title: {
                        offsetCenter: [0, '-30%'], // x, y，单位px
                        color:"#fff"
                    },
                    detail: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        show: true,
                        fontSize:18,
                        formatter:'{value}%',
                    },
                    data:[{value:'1.5' , name: '内存'}]
                },
                {
                    name: '带宽',
                    type: 'gauge',
                    center: ['78%', '55%'],    // 默认全局居中
                    radius: '65%',
                    min: 0,
                    max: 100,
                    startAngle: 135,
                    // endAngle: 85,
                    splitNumber: 5,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5,
                            color: [[0.2,  '#5d9cec'], [0.8,'#62c87f'], [1, '#f15755']]
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        formatter:function(v){
                            switch (v + '') {
                                case '0' : return 'E';
                                case '1' : return 'CPU';
                                case '2' : return 'F';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width:3
                    },
                    title : {
                        show: true,
                        color:"#fff"
                    },
                    detail : {
                        show: true,
                        fontSize:18,
                        formatter:'{value}%',
                    },
                    data:[{value: '0.5', name: '带宽'}]
                },
            ]
        };
        setInterval(function (){
            option.series[0].data[0].value =  Math.floor(Math.random()*(41-31+1)+31);
            option.series[1].data[0].value =Math.floor(Math.random()*(48-40+1)+40);
            option.series[2].data[0].value = Math.floor(Math.random()*(38-30+1)+30);
            f_serverSum.setOption(option,true);
        },5000);
        setTimeout(function(){
            option.series[0].data[0].value =  35;
            option.series[1].data[0].value =43;
            option.series[2].data[0].value =36;
            f_serverSum.setOption(option,true);
        },1000)

    }, //三个表盘
    serverUsage:function(){
        $(".f_blocks").on("mouseover",function(){
            $(".f_fuwu img").eq(1).css("display","block").siblings("img").css("display","none");
        })
        $(".f_blo").on("mouseover",function(){
            $(".f_fuwu img").eq(2).css("display","block").siblings("img").css("display","none");
        })
        $(".f_blocks").on("mouseout",function(){
            $(".f_fuwu img").eq(0).css("display","block");
        })
        $(".f_blo").on("mouseout",function(){
            $(".f_fuwu img").eq(0).css("display","block");
        })


    },  //图片切换
    time:function(){
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
    }  //安全运行时间
    /**  左边结束 ***/

};
var move=new Move();

$('.w_tipbar li').mouseover(function(){
    $(this).addClass('f_li').siblings().removeClass('f_li');
    var sum=$(this).index();
    $('.scrollbox .wangchaos').eq(sum).stop(true,true).show().siblings('.wangchaos').hide()
})
