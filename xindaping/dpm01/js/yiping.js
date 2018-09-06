function Move(){
    this.inio();

}
Move.prototype={
    constructor: Move,
    inio:function(){
        this.left();
        this.content();
        this.right();
    },
    /**调用左边的**/
    left:function() {
        this.broadband();  //宽带占用情况
        this.flow();  //流量监测情况
        this.request();   //请求响应情况
    },
    /**调用中间的**/
    content:function(){
        //中间左面
        this.server();  //内存,宽带,cpu表盘
        this.serverUsage();
        //中间右面
        this.time();  //运行时间
        this.city();  /*** 世界地图*********/
        this.chinaR();  //饼图
        this.warning();  //区域攻击访问时段
    },
    /**调用右边的**/
    right:function(){
        this.chinaCity();  //中国地图
        this.cityAxis();  //top10
        this.cityLeft();  //安全威胁类型
        this.cityRight();   //安全保障在进行
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
                    color:"#fff"
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
                    color:"#fff"
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

    },  //流量监测情况
    request:function(){
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
                    color:"#fff"
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
    },   //请求响应情况
    /**  左边结束 ***/
    /**中间开始
     * 左面**/
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
        },10000);
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
    /**中间右面*/
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
    },  //安全运行时间
    city:function(){
        var f_nice= echarts.init(document.getElementById('f_nice'));
        //世界地图
        var geoCoordMap = {
            '济南': [117.1582, 36.8701],
            '美国':[-95.712891,37.09024],//
            // '英国':[-3.435973,55.378051],  //
            '德国':[10.451526,51.165691],//
            '俄罗斯':[105.318756,61.52401],//
            '法国':[2.213749,46.227638],//
            '巴西':[-51.92528,-14.235004],//
            '瑞典':[18.643501,60.12816100000001],//
            '塞舌尔群岛':[30.802498,26.820553],  //
            '哈萨克斯坦':[66.923684,48.019573],//
            '加拿大':[-106.346771,56.130366],//
            '波兰':[19.145136,51.919438],//
            '韩国':[127.766922,35.907757],//
        };
        var BJData = [
            [{
                name: '美国',
                value: 1010
            }, {
                name: '济南'
            }],
            // [{
            //     name: '英国',
            //     value: 3110
            // }, {
            //     name: '济南'
            // }],
            [{
                name: '德国',
                value: 1
            }, {
                name: '济南'
            }],
            [{
                name: '俄罗斯',
                value: 45
            }, {
                name: '济南'
            }],
            [{
                name: '巴西',
                value: 2
            }, {
                name: '济南'
            }],
            [{
                name: '法国',
                value: 2
            }, {
                name: '济南'
            }],
            [{
                name: '瑞典',
                value: 1
            }, {
                name: '济南'
            }],
            [{
                name: '塞舌尔群岛',
                value: 1
            }, {
                name: '济南'
            }],
            [{
                name: '哈萨克斯坦',
                value: 20
            }, {
                name: '济南'
            }],
            [{
                name: '加拿大',
                value: 2
            }, {
                name: '济南'
            }],
            [{
                name: '波兰',
                value: 1
            }, {
                name: '济南'
            }],
            [{
                name: '韩国',
                value: 6
            }, {
                name: '济南'
            }],
        ];
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                        value: dataItem[0].value
                    }, {
                        coord: toCoord,
                    }]);
                }
            }
            return res;
        };

        var color = ['#00ccff', '#e8e929','#f35833',"#ffff"];
        var series = [];
        [
            ['济南', BJData]
        ].forEach(function(item, i) {
            series.push({
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 4, //箭头指向速度，值越小速度越快
                        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 5, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            width: 1, //尾迹线条宽度
                            opacity: 0, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        }
                    },

                    data: convertData(item[1])
                },
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right', //显示位置
                            offset: [5, 0], //偏移设置
                            formatter: '{b}' //圆环显示文字
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    symbol: 'circle',
                    symbolSize: function(val) {
                        return 4 + val[2] / 1000; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            color: '#f00'
                        }
                    },
                    data: item[1].map(function(dataItem) {
                        return {
                            name: dataItem[0].name,
                            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                        };
                    }),
                },
                //被攻击点
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        period: 4,
                        brushType: 'stroke',
                        scale: 4
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            //offset:[5, 0],
                            color: '#00ffff',
                            formatter: '{b}',
                            textStyle: {
                                color: "#00ffff"
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    symbol: 'pin',
                    symbolSize: 30,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#9966cc'
                        }
                    },
                    data: [{
                        name: item[0],
                        value: geoCoordMap[item[0]].concat([100]),
                    }],
                }
            );
        });

        var option = {
            title: {
                text: '',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                padding: [20, 20, 20, 20]
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params, ticket, callback) {
                    //根据业务自己拓展要显示的内容
                    var res = "";
                    var name = params.name;
                    if(name){
                        var value = params.value[params.seriesIndex + 1];
                        if(name=="济南"){
                            res = "<span style='color:#fff;'>" + name + "</span>：攻击点";
                            return res;
                        }
                        res = "<span style='color:#fff;'>" + name + "</span><br/>攻击次数：" + value;
                        return res;
                    }

                }
            },
            visualMap: { //图例值控制
                min: 0,
                max: 40,
                bottom:"1%",
                right:"3%",
                calculable: true,
                itemWidth: 8,
                itemHeight: 80,
                color: ['#ff3333', 'orange', 'yellow'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'world',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true, //是否允许缩放
                layoutCenter: ['50%', '50%'], //地图位置
                layoutSize: "140%",
                itemStyle: {
                    normal: {
                        color: 'rgba(51, 69, 89, .5)', //地图背景色
                        borderColor: 'rgba(100,149,237,1)' //省市边界线
                    },
                    emphasis: {
                        color: 'rgba(37, 43, 61, .5)' //悬浮背景
                    }
                }
            },

            series: series
        };

        var counts = option.series[0].data.length; //获取所有闪动圆环数量
        var dataIndex = 0;
        f_nice.setOption(option);
    }, //世界地图
    chinaR:function(){
        var f_chinaR= echarts.init(document.getElementById('f_chinaR'));
        var data = {
            id: 'echartPie',
            value: [1, 2, 1010, 44,63],
            legend: ['非洲','南美洲','北美洲',"亚洲","欧洲"],

            // color: [
            //     '#8eb30a',
            //     '#09b7c0',
            //     '#d8990a',
            //     '#ce5d3c',],
            // color:[ 'rgb(181, 86, 86)','rgb(167, 65, 192)', 'rgb(100, 160, 237)','rgb(61, 185, 123)'],
            color: [
                '#a5b233',
                '#23afb1',
                '#e5bc12',
                '#e6795d',
                '#c347e6',
            ],

        }
        /**
         * 数据处理
         */
        var seriesData = [];
        data.value.forEach(function(item, index) {
            seriesData.push({
                value: item,
                name: data.legend[index]
            })
        })
        var option = {
            title: {
                text: '国外攻击情况',
                subtext:"2018年7月1日至今，\n遭受攻击1120次，全部拦截。",
                top:"4%",
                left:"1%",
                textStyle:{
                    fontSize: 18,
                    color: '#fff'
                },
                subtextStyle:{
                    fontSize: 14,
                    color: '#fff',
                    // lineHeight:30
                }
            },
            tooltip: {
                trigger: 'item',
                show: data.tooltipShow === false ? false : true,

                //   formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                bottom: "6%",
                left:"0",
                // icon: 'circle',
                // selectedMode: false,
                itemWidth: 16,
                itemHeight: 8,
                itemGap: 6,
                borderRadius: 6,
                data: data.legend,
                textStyle:{
                    color:"#fff"
                },
            },
            series: [{
                type: 'pie',
                // clickable:false,
                center:["50%","62%"],
                // selectedMode: 'single',//单点击设置
                hoverAnimation: data.hoverAnimation === false ? false : true,
                radius: ['40%', '60%'],
                color: data.color,
                label: {
                    normal: {
                        // formatter: '{d}%',
                        formatter: function(param) {
                            if (!param.percent) return ''
                            var f = Math.round(param.percent * 10) / 10;
                            var s = f.toString();
                            var rs = s.indexOf('.');
                            if (rs < 0) {
                                rs = s.length;
                                s += '.';
                            }
                            while (s.length <= rs + 1) {
                                s += '0';
                            }
                            return param.data.name+":"+s + '%';
                        },
                        textStyle: {
                            color: '#169cf5',
                            fontSize: 12
                        }
                    }
                },
                labelLine: {
                    show:true,
                    // normal: {
                    //     show: false
                    // }
                },
                data: seriesData
            }]
        };
        f_chinaR.setOption(option);
    },  //环图
    warning:function(){
        var f_warning= echarts.init(document.getElementById('f_warning'));
        var f_warning1= echarts.init(document.getElementById('f_warning1'));
        var f_warning2= echarts.init(document.getElementById('f_warning2'));
        var f_warning3= echarts.init(document.getElementById('f_warning3'));

        var clock=[],clock1=[],clock2=[],clock3=[];  //用来遍历周围的0-23，还有他的最大的值的范围
        for(var i=23;i>0;i--){
            clock.push({  //亚洲
                name: i,
                max: 5
            })
            clock1.push({  //北美洲
                name: i,
                max: 88
            })
            clock2.push({ //欧洲
                name: i,
                max: 5
            })
            clock3.push({   //南美洲
                name: i,
                max: 3
            })
        }
        //亚洲
        var option = {
            normal: {
                top: 200,
                left: 300,
                width: 500,
                height: 400,
                zIndex: 6,
                backgroundColor: ""
            },
            color: "rgba(243, 88, 51, 1)",
            title: {
                show: true,
                text: "区域攻击访问时段",
                left: "10%",
                top: "2%",
                textStyle: {
                    fontSize: 18,
                    color: "#fff",
                }
            },
            tooltip: {
                show: true,
                trigger: "item",
                formatter: function (params) {
                    var res="";
                    for(var i=0; i<24; i++){
                        res+="<span class='f_clock'>"+i+"点："+params.data[i]+"</span>";
                    }
                    return res;
                }
            },
            legend: {
                show: true,
                icon: "circle",
                left: "35%",
                top: "90%",
                orient: "horizontal",
                textStyle: {
                    fontSize: 14,
                    color: "#fff"
                },
                data: ["亚洲"]
            },
            radar: {
                center: ["53%", "53%"],
                radius: "60%",
                startAngle: 90,
                splitNumber: 4,
                shape: "circle",
                splitArea: {
                    areaStyle: {
                        color: ["transparent"]
                    }
                },
                axisLabel: {
                    show: false,
                    fontSize: 18,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"//
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"//
                    }
                },
                indicator:clock
            },
            series: [{
                name: "亚洲",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: "rgba(243, 88, 51, 0.4)"
                    }
                },
                itemStyle:{
                    color:'rgba(243, 88, 51, 1)',
                    borderColor:'rgba(243, 88, 51, 0.3)',
                    borderWidth:10,
                },
                lineStyle: {
                    normal: {
                        type: "dashed",
                        color: "rgba(243, 88, 51, 1)",
                        width: 2
                    }
                },
                data: [
                    [1, 2, 0, 0, 2, 3, 4, 3, 2, 0,
                        3, 0, 1, 2, 3, 2, 3,2,1, 2,
                        0,3,0,3]
                ]
            }]
        };
        //北美洲
        var option1 ={
            normal: {
                top: 200,
                left: 300,
                width: 500,
                height: 400,
                zIndex: 6,
                backgroundColor: ""
            },
            color: "rgba(98, 200, 127, 1)",
            title: {
                show: true,
                text: "",
                left: "40%",
                top: "1%",
                textStyle: {
                    fontSize: 18,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal"
                }
            },
            tooltip: {
                show: true,
                trigger: "item",
                formatter: function (params) {
                    var res="";
                    for(var i=0; i<24; i++){
                        res+="<span class='f_clock'>"+i+"点："+params.data[i]+"</span>";
                    }
                    return res;
                }
            },
            legend: {
                show: true,
                icon: "circle",
                left: "35%",
                top: "90%",
                orient: "vertical",
                textStyle: {
                    fontSize: 14,
                    color: "#fff"
                },
                data: ["北美洲"]
            },
            radar: {
                center: ["50%", "53%"],
                radius: "60%",
                startAngle: 90,
                splitNumber: 4,
                shape: "circle",
                splitArea: {
                    areaStyle: {
                        color: ["transparent"]
                    }
                },
                axisLabel: {
                    show: false,
                    fontSize: 18,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"//
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"//
                    }
                },
                indicator:clock1
            },
            series: [{
                name: "北美洲",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: "rgba(98, 200, 127, 0.4)"
                    }
                },
                itemStyle:{
                    color:'rgba(98, 200, 127, 1)',
                    borderColor:'rgba(98, 200, 127, 0.3)',
                    borderWidth:10,
                },
                lineStyle: {
                    normal: {
                        type: "dashed",
                        color: "rgba(98, 200, 127, 1)",
                        width: 2
                    }
                },
                data: [
                    [0, 0, 40, 0, 80, 30, 22, 82, 42, 42,
                        12, 22, 72, 32, 52, 41, 50, 65, 82,72,
                        80,6,10,0
                    ]
                ]
            }]
        };
        //欧洲
        var option2 = {
            normal: {
                top: 200,
                left: 300,
                width: 500,
                height: 400,
                zIndex: 6,
                backgroundColor: ""
            },
            color: "rgba(255, 204, 0, 1)",
            title: {
                show: true,
                text: "",
                left: "40%",
                top: "1%",
                textStyle: {
                    fontSize: 18,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal"
                }
            },
            tooltip: {
                show: true,
                trigger: "item",
                formatter: function (params) {
                    var res="";
                    for(var i=0; i<24; i++){
                        res+="<span class='f_clock'>"+i+"点："+params.data[i]+"</span>";
                    }
                    return res;
                }
            },
            legend: {
                show: true,
                icon: "circle",
                left: "35%",
                top: "90%",
                orient: "horizontal",
                textStyle: {
                    fontSize: 14,
                    color: "#fff"
                },
                data:["欧洲"]
            },
            radar: {
                center: ["50%", "53%"],
                radius: "60%",
                startAngle: 90,
                splitNumber: 4,
                shape: "circle",
                splitArea: {
                    areaStyle: {
                        color: ["transparent"]
                    }
                },
                axisLabel: {
                    show: false,
                    fontSize: 18,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"//
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"//
                    }
                },
                indicator: clock2
            },
            series: [{
                name: "欧洲",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: "rgba(255, 204, 0, 0.4)"
                    }
                },
                itemStyle:{
                    color:'rgba(255, 204, 0, 1)',
                    borderColor:'rgba(255, 204, 0, 0.3)',
                    borderWidth:10,
                },
                lineStyle: {
                    normal: {
                        type: "dashed",
                        color: "rgba(255, 204, 0, 1)",
                        width: 2
                    }
                },
                data: [
                    [2, 2, 3, 3, 4,  4, 2, 3, 2,4,
                        1, 1, 3, 2, 4,1, 4, 3, 4,3,
                        4,0,2,2]
                ]
            }]
        };
        //南美洲
        var option3 = {
            normal: {
                top: 200,
                left: 300,
                width: 500,
                height: 400,
                zIndex: 6,
                backgroundColor: ""
            },
            color: "rgba(0, 204, 255, 1)",
            title: {
                show: true,
                text: "",
                left: "40%",
                top: "1%",
                textStyle: {
                    fontSize: 18,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal"
                }
            },
            tooltip: {
                show: true,
                trigger: "item",
                formatter: function (params) {
                    var res="";
                    for(var i=0; i<24; i++){
                        res+="<span class='f_clock'>"+i+"点："+params.data[i]+"</span>";
                    }
                    return res;
                }
            },
            legend: {
                show: true,
                icon: "circle",
                left: "35%",
                top: "90%",
                orient: "horizontal",
                textStyle: {
                    fontSize: 14,
                    color: "#fff"
                },
                data: ["南美洲"]
            },
            radar: {
                center: ["50%", "53%"],
                radius: "60%",
                startAngle: 90,
                splitNumber: 4,
                shape: "circle",
                splitArea: {
                    areaStyle: {
                        color: ["transparent"]
                    }
                },
                axisLabel: {
                    show: false,
                    fontSize: 18,
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"//
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"//
                    }
                },
                indicator:clock3
            },
            series: [{
                name: "南美洲",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: "rgba(0, 204, 255, 0.4)"
                    }
                },
                itemStyle:{
                    color:'rgba(0, 204, 255, 1)',
                    borderColor:'rgba(0, 204, 255, 0.3)',
                    borderWidth:10,
                },
                lineStyle: {
                    normal: {
                        type: "dashed",
                        color: "rgba(0, 204, 255, 1)",
                        width: 2
                    }
                },
                data: [
                    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0,1,
                        0,0,0,0]
                ]
            }]
        };

        f_warning.setOption(option);
        f_warning1.setOption(option1);
        f_warning2.setOption(option2);
        f_warning3.setOption(option3);
    }, //4个雷达图（亚洲  大洋洲  南美洲 北美洲）
    /**中间结束*/
    /**右边开始*/
    chinaCity:function(){
        var f_city= echarts.init(document.getElementById('f_city'));
        //中国地图
        var geoCoordMap = {
            '安徽省': [117.17, 31.52],
            '北京市': [116.24, 39.55],
            '重庆市': [106.54, 29.59],
            '福建省': [119.18, 26.05],
            '甘肃省': [103.51, 36.04],
            '广东省': [113.14, 23.08],
            '广西': [108.19, 22.48],
            '贵州省': [106.42, 26.35],
            '海南省': [110.20, 20.02],
            '河北省': [114.30, 38.02],
            '河南省': [113.40, 34.46],
            '黑龙江省': [128.36, 45.44],
            '湖北省': [112.27, 30.15],
            '湖南省': [112.59, 28.12],
            '吉林省': [125.19, 43.54],
            '江苏省': [118.46, 32.03],
            '江西省': [115.55, 28.40],
            '辽宁省': [123.25, 41.48],
            '内蒙古': [108.41, 40.48],
            '宁夏': [106.16, 38.27],
            '青海省': [101.48, 36.38],
            '山东省': [118.00, 36.40],
            '山西省': [112.33, 37.54],
            '陕西省': [108.57, 34.17],
            '上海市': [121.29, 31.14],
            '海南': [108.77, 19.10],
            '四川省': [104.04, 30.40],
            '天津市': [117.12, 39.02],
            '西藏': [91.08, 29.39],
            '新疆': [87.36, 43.45],
            '云南省': [102.42, 25.04],
            '浙江省': [120.10, 30.16],
            '澳门': [115.07, 21.33],
            '台湾省': [121.21, 23.53],
            '济南': [117.1582, 36.8701],
        };


        // 出发地
        var fromdata = '济南';
// 目的地
        var BJData = [
            [
                {name:fromdata},
                {
                    name: '安徽省',
                    value: 163
                }
            ],
            [
                {name:fromdata},
                {
                    name: '北京市',
                    value: 2109
                }
            ],
            [
                {name:fromdata},
                {
                    name: '重庆市',
                    value: 12
                }
            ],
            [
                {name:fromdata},
                {
                    name: '福建省',
                    value: 313

                }
            ],
            [
                {name:fromdata},
                {
                    name: '甘肃省',
                    value: 95
                }
            ],
            [
                {name:fromdata},
                {
                    name: '广东省',
                    value: 1733
                }
            ],
            [
                {name:fromdata},
                {
                    name: '广西',
                    value: 58
                }
            ],
            [
                {name:fromdata},
                {
                    name: '贵州省',
                    value: 64
                }
            ],
            [
                {name:fromdata},
                {
                    name: '海南省',
                    value: 68
                }
            ],
            [
                {name:fromdata},
                {
                    name: '四川省',
                    value: 132
                }
            ],
            [
                {name:fromdata},
                {
                    name: '河北省',
                    value: 24
                }
            ],
            [
                {name:fromdata},
                {
                    name: '黑龙江省',
                    value: 12
                }
            ],
            [
                {name:fromdata},
                {
                    name: '湖北省',
                    value: 66
                }
            ],
            [
                {name:fromdata},
                {
                    name: '湖南省',
                    value: 3269
                }
            ],
            [
                {name:fromdata},
                {
                    name: '吉林省',
                    value: 178
                }
            ],
            [
                {name:fromdata},
                {
                    name: '江苏省',
                    value: 17214
                }
            ],
            [
                {name:fromdata},
                {
                    name: '江西省',
                    value: 27
                }
            ],
            [
                {name:fromdata},
                {
                    name: '辽宁省',
                    value: 2001
                }
            ],
            [
                {name:fromdata},
                {
                    name: '内蒙古',
                    value: 56
                }
            ],
            [
                {name:fromdata},
                {
                    name: '宁夏',
                    value: 89
                }
            ],
            [
                {name:fromdata},
                {
                    name: '青海省',
                    value: 48
                }
            ],
            [
                {name:fromdata},
                {
                    name: '山东省',
                    value: 26918
                }
            ],
            [
                {name:fromdata},
                {
                    name: '山西省',
                    value: 138
                }
            ],
            [
                {name:fromdata},
                {
                    name: '陕西省',
                    value: 34
                }
            ],
            [
                {name:fromdata},
                {
                    name: '上海市',
                    value: 691
                }
            ],
            [
                {name:fromdata},
                {
                    name: '海南',
                    value: 48
                }
            ],
            [
                {name:fromdata},
                {
                    name: '天津市',
                    value: 40
                }
            ],
            [
                {name:fromdata},
                {
                    name: '西藏',
                    value: 89
                }
            ],
            [
                {name:fromdata},
                {
                    name: '新疆',
                    value: 48
                }
            ],
            [
                {name:fromdata},
                {
                    name: '云南省',
                    value: 81
                }
            ],
            [
                {name:fromdata},
                {
                    name: '浙江省',
                    value: 2729
                }
            ],
            [
                {name:fromdata},
                {
                    name: '台湾省',
                    value: 2
                }
            ],
            [
                {name:fromdata},
                {
                    name: '济南',
                    value: "地点"
                }
            ],
        ];
        var convertData = function (data) {
            var res = [];
            for (var  i = 0; i < data.length; i++) {
                var dataItem = data[i];
                // console.log(dataItem)
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;

        };
        var convertDatas = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                // console.log(dataItem)
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[1].name,
                        toName: dataItem[0].name,
                        coords: [ toCoord,fromCoord]
                    });
                }
            }
            return res;

        };
        var planePath = 'arrow';
        var series = [];
        [[fromdata, BJData]].forEach(function (item, i) {
            series.push(
                {

                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.1,
                        color: '#23db1d',
                        symbol: planePath,
                        symbolSize: 8
                    },
                    lineStyle: {
                        normal: {
                            color: '#28c82c',
                            width: 1,
                            opacity: 0.4,
                            curveness: 0.2
                        }
                    },
                    data:  convertData(item[1])
                },
                {
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.1,
                        color: 'maroon',
                        symbol: planePath,
                        symbolSize: 8
                    },
                    lineStyle: {
                        normal: {
                            color: '#c8230f',
                            width: 1,
                            opacity: 0.4,
                            curveness: 0.2
                        }
                    },
                    data:  convertDatas(item[1])
                },
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        period: 4,
                        scale: 2.5,
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: 5,
                    itemStyle: {
                        normal: {
                            color: '#eff218',
                            borderColor: 'gold'
                        }
                    },

                    data:  item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),

                        };
                    })
                },
            );
        });

        var option = {
            title: {
                text: "安全态势图",
                left: '20%',
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                padding: [20, 20, 20, 20],
            },
            tooltip : {
                trigger: 'item',
                // enterable:true,
                formatter: function(params) {
                    if(params.data.name){
                        var normal = '';
                        normal = '<div class="toop-line title"><a>'+params.data.name+'<br/>攻击次数:'+params.data.value[2]+'</a><br/><a>拦截次数:'+params.data.value[2]+'</a></div>';
                        return normal;
                    }

                }
            },
            geo: {
                map: 'china',
                // zoom:1.5,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                silent: true,
                itemStyle: {
                    normal: {
                        areaColor: '#467898',
                        borderColor: '#000'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: series,

        };

        f_city.setOption(option);
    },  //中国地图
    cityAxis:function(){
        var f_cityAxis= echarts.init(document.getElementById('f_cityAxis'));
        var option = {
            title: {
                text: '攻击次数排行Top10',
                top:"8%",
                left:"4%",
                buttom:"3%",
                textStyle:{
                    color:"#fff"
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '4%',
                // right: '70%',
                bottom: '0',
                containLabel: true,
            },
            xAxis: [{show:false}],
            yAxis: {
                type: 'category',
                axisLine: {
                    show:false,
                    lineStyle: {
                        show:false,
                        color: '#d1d2d3'
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                },
                data: ['福建','上海','广东','辽宁','北京','浙江','湖南','河南','江苏','山东'] //数据反的最高的在最后
            },
            series: [
                {
                    name: '攻击次数',
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            },
                            barBorderRadius: 50,
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    type: 'bar',
                    barGap: '0%',
                    barCategoryGap: '60%',
                    data: [458,691,1733,2001,2109,2729,3269,7192,17214,26918]
                }
            ]
        };
        f_cityAxis.setOption(option);
    },   //top10
    cityLeft:function(){
        var f_an= echarts.init(document.getElementById('f_an'));
        var  option = {
            // color: [
            //     '#8eb30a',
            //     '#09b7c0',
            //     '#d8990a',
            //     '#ce5d3c',],

            // color:['rgb(165,178,51)','rgb(229,188,18)','rgb(35,175,177)','rgb(230,121，93)'],
            color: [
                '#a5b233',
                '#23afb1',
                '#e5bc12',
                '#e6795d',
            ],
            title: {
                text: '安全威胁级别',
                subtext: '',
                top:"3%",
                left:"5%",
                textStyle:{
                    color:"#fff"
                }
            },
            calculable: true,
            series: [
                //修改名字改这一块儿
                {
                    name:'安全威胁级别',
                    type:'funnel',
                    left: '0',
                    // top: "25%",
                    x2: 80,
                    bottom: 50,
                    width: '80%',
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'ascending',
                    gap: 5,
                    label: {
                        normal: {
                            show: true,
                            position: 'right'
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 40,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },

                    data: [
                        {value: 80, name: '低级风险'},   //数据不动，只是假的，负责就不是三角形了，改下面的数据
                        {value: 60, name: '中级风险'},
                        {value: 40, name: '高级风险'},
                        {value: 20, name: '紧急风险'},
                    ]
                },
                //修改数据改这一块儿
                {
                    name:'安全威胁级别',
                    type:'funnel',
                    top: "25%",
                    left:0,
                    //x2: 80,
                    bottom: 50,
                    width: '80%',
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'ascending',
                    gap: 3,
                    label: {
                        align:"center",
                        normal: {
                            position: 'center',
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontSize:"14"
                            }
                        },
                    },
                    labelLine: {
                        show:false
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    data: [
                        {value: 8,
                            itemStyle:{
                                color:"#fff",
                                opacity:"0"
                            },
                        },
                        {value: 2,
                            itemStyle:{
                                color:"#fff",
                                opacity:"0"
                            },
                        },
                        {value: 0,
                            itemStyle:{
                                color:"#fff",
                                opacity:"0"
                            },
                        },
                        {value: 0,
                            itemStyle:{
                                color:"#fff",
                                opacity:"0"
                            },
                        }
                    ]
                },
            ]
        };

        f_an.setOption(option);
    },  //漏斗图（安全威胁级别）
    cityRight:function(){
        $("#scrollDiv1").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
    }, //安全保障在进行
    /**右边结束*/
};
var move=new Move();
