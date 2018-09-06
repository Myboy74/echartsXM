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
        this.server();  //内存,宽带,cpu表盘
        this.cpu();
        this.application(); //服务器应用情况
    },
    /**调用中间的**/
    content:function(){
        //中间左面
        this.node();  //宽带占用情况
        this.vpn();  //流量监测情况
        this.dk();   //请求响应情况
        //中间右面
        // this.nice();  /*** 业务系统分布情况**** 先放图片*********/
        this.warning();  //业务系统运行情况
        this.eightSmall();  //8个
    },
    /**调用右边的**/
    right:function(){
        this.time();  //运行时间
        this.city();  //世界地图
        this.cityAxis();
        this.cityLeft();  //安全威胁类型
        this.cityRight();   //安全威胁级别
    },
    /*左边的开始
    * 服务器**/
    server:function(){
        var f_serverSum= echarts.init(document.getElementById('f_serverSum'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} %'
            },
            series : [
                {
                    name: '宽带',
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
                            fontStyle: 'italic',
                            color:"#fff",
                            offsetCenter: [0, '55%']
                        }
                    },
                    detail : {
                              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        formatter:'{value}%',

                    },
                    data:[{value: '40', name: '宽带'}]
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
                    name: 'CPU',
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
                    data:[{value: '0.5', name: 'CPU'}]
                },
            ]
        };
        setInterval(function (){
            option.series[0].data[0].value =  Math.floor(Math.random()*(80-20+1)+20);
            option.series[1].data[0].value =Math.floor(Math.random()*(80-20+1)+20);
            option.series[2].data[0].value = Math.floor(Math.random()*(80-20+1)+20);
            f_serverSum.setOption(option,true);
        },2000);

    }, //三个表盘
    cpu:function(){
        var f_cpu= echarts.init(document.getElementById('f_cpu'));
        var f_nc= echarts.init(document.getElementById('f_nc'));
        var f_cc= echarts.init(document.getElementById('f_cc'));
        var f_kd= echarts.init(document.getElementById('f_kd'));
        //cpu
        var option = {
            tooltip : {
                formatter: "{a} <br/>{c} {b}"
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         restore: {show: true},
            //         saveAsImage: {show: true}
            //     }
            // },
            series : [
                {
                    name: '速度',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '50%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    pointer:{
                        width:2
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 5,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 10,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    title : {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontSize: 8,
                            fontStyle: 'italic'
                        }
                    },
                    detail : {
                        textStyle: {// 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            // fontWeight: 'bolder'
                            fontSize:20,
                            color:"#fff",
                            padding:[80,0,0,0]
                        }
                    },
                    data:[
                        {
                            value: 40,
                            // name: 'km/h',
                        }]
                }
            ]
        };
         //内存
        var option1 = {

            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {
                        formatter:'{value}%',
                        padding:[50,0,0,0]
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            shadowBlur: 0,
                            color: [[0.3, '#6ced91'],[0.7, '#06a8fd'],[1, '#fe6b7d']]
                        }
                    },
                    data: [{value: 50, name: '完成率'}]
                }
            ]
        };

         //存储
        var option2 = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} %'
            },
            series: [
                {
                    name: '仪表盘',
                    type: 'gauge',
                    data: [{value: '29', name: '数据总量'}],
                    radius: '80%',
                    center: ['50%', '50%'],
                    min: 0,
                    max: 100,
                    splitNumber: 5,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 10,
                            color: [[0.2,  '#5d9cec'], [0.8,'#62c87f'], [1, '#f15755']]
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 13,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 18,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        color: '#fff',
                    },
                    detail: {
                        formatter:'{value}%',
                        fontSize: 24,
                        offsetCenter: [0, '85%']
                    },
                    title: {
                        fontSize: 12,
                        color: '#fff',
                        offsetCenter: [0, '55%']
                    },
                    pointer: {
                        width: 3            // 指针大小
                    }
                }
            ]
        };
         //宽带
        var option3 = {
            tooltip : {
                formatter: "{a} <br/>{c} {b}"
            },

            series : [
                {
                    name: '速度',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 220,
                    splitNumber: 11,
                    radius: '50%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 2
                        }
                    },
                    pointer:{
                        width:2
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 5,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 10,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel:{
                        color:"#fff"
                    },
                    title : {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontSize: 8,
                            fontStyle: 'italic'
                        }
                    },
                    detail : {
                        textStyle: {// 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            // fontWeight: 'bolder'
                            fontSize:20,
                            color:"#fffff",
                            padding:[80,0,0,0]
                        }
                    },
                    data:[{value: 40}]
                }
            ]
        };

        setInterval(function (){
            option.series[0].data[0].value =  Math.floor(Math.random()*(80-20+1)+20);
             option1.series[0].data[0].value =  Math.floor(Math.random()*(80-20+1)+20);
             option2.series[0].data[0].value = Math.floor(Math.random()*(80-20+1)+20);
             option3.series[0].data[0].value = (Math.random()*200).toFixed(2) - 0;
             f_cpu.setOption(option,true);
             f_nc.setOption(option1,true);
             f_cc.setOption(option2,true);
             f_kd.setOption(option3,true);
        },2000);

    },  //四个表盘
    application:function(){
        var f_application= echarts.init(document.getElementById('f_application'));
        var   option = {
            color:["#f15755","#62c87f"],
            title: {
                text: "服务器应用情况",
                subtext: "",
                left:"45%",
                top:"3%",
                textStyle: {
                    color: '#fff',
                    fontSize: '18'
                },
                subtextStyle: {
                    color: '#fbffff',
                    fontSize: '16',

                },
            },
            tooltip: {
                trigger: "axis",
                // formatter: '{a}: {c}<br/>{a1}: {c1}%',
                axisPointer: {
                    type: "shadow",
                    textStyle: {
                        color: "#fff"
                    }

                },
            },
            grid: {
                left: '5%',
                right: '4%',
                bottom: '6%',
                // padding:'0 0 10 0',
                containLabel: true,
                borderWidth: 0,
                textStyle: {
                    color: "#fff"
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 20,
                itemHeight: 10,
                itemGap: 13,
                data:["再用","空闲"],
                top:"6%",
                right: '4%',
                textStyle: {
                    fontSize: 12,
                    color: '#F1F1F3'
                }
            },
            calculable: true,
            xAxis: [{
                type: "category",
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        opacity:0.2
                    }
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                axisLabel: {
                    interval: 0,

                },
                data: ['e支部',   '党员教育', '干部学习', '内容发布', '发展党\n员纪实',
                    '党员和\n党组织\n信息',
                     '三务公开',
                    '组织关\n系转接',
                    '基层两\n委学历',
                    '在职党\n员到社\n区报到',
                    '灯塔书城']

            }],
            yAxis: [{
                type: "value",
                name: '单位（台） ',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        opacity:0.2
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    // formatter: '{value}/Mbps '

                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity:0.2
                    }
                },
                splitArea: {
                    show: false
                },

            }],

            series: [
                {
                    name: "再用",
                    type: "bar",
                    stack: "总量",
                    barMaxWidth: 35,
                    barGap: "10%",
                    itemStyle: {
                        normal: {
                            // color: "rgba(255,144,128,1)",
                            label: {
                                show: true,
                                textStyle: {
                                    color: "#fff"
                                },
                                position: "insideTop",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    data: [21,17,14,8,7,5,4,4,3,3,1]
                },

                {
                    name: "空闲",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            // color: "rgba(0,191,183,1)",
                            barBorderRadius: 0,
                            label: {
                                show: true,
                                position: "top",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    data: [21,17,14,8,7,5,4,4,3,3,1]
                },
            ]
        }
        f_application.setOption(option);
    },
    /**  左边结束 ***/
    /**中间开始
     * 左面**/
    node:function(){
        var f_jdq= echarts.init(document.getElementById('f_jdq'));
        var data = [];
        for (var i = 0; i < 1000; i++) {
            var value=Math.random()*(3000-i+1)+i;
            data.push({
                name:moment().add(i, 'days').format(),
                value:[moment().add(i, 'days').format(),Math.round(value)]
            });
        }
        var  option = {
            title : {
                text: '带宽占用情况',
                top:"10px",
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
                    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+":"+ params.value[1];
                    // return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            grid: {
                left: '7%',
                right: '6%',
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
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                height:8,
                bottom:"3%",
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
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
                        color: "#f07262"
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#f07a65'
                        }, {
                            offset: 0.7,
                            color: '#fff'
                        }])
                    }
                },
            }
            ]
        };
        f_jdq.setOption(option);
    },
    vpn:function(){
        var f_vpn= echarts.init(document.getElementById('f_vpn'));
        var data = []
        // var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            var value=Math.random()*(3000-i+1)+i;
            data.push({
                name:moment().add(i, 'days').format(),
                value:[moment().add(i, 'days').format(),Math.round(value)]
            });
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
                left: '4%',
                right: '6%',
                bottom: '6%',
                // padding:'0 0 10 0',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+":"+ params.value[1];
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
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                height:8,
                bottom:"3%",
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
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
        f_vpn.setOption(option);

    },
    dk:function(){
        var f_dk= echarts.init(document.getElementById('f_dk'));
        var data = []
        // var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            // value = value + Math.random() * 800 - 10;
            var value=Math.random()*(3000-i+1)+i;
            data.push({
                name:moment().add(i, 'days').format(),
                value:[moment().add(i, 'days').format(),Math.round(value)]
            });
        }
        console.log(data);
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
                left: '4%',
                right: '6%',
                bottom: '6%',
                // padding:'0 0 10 0',
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+":"+ params.value[1];
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
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                height:8,
                bottom:"3%",
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
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
        f_dk.setOption(option);
    },
    /**中间右面*/
    nice:function(){
        var f_nice= echarts.init(document.getElementById('f_nice'));
        // var option = {
        //     title: {
        //         text: '大数据',
        //         textStyle: {
        //             fontWeight: 'normal',
        //             fontSize: 18,
        //             color: '#fff',
        //             fontWeight:'bolder',
        //             fontFamily:'黑体'
        //         },
        //         left: '6%'
        //     },
        //     tooltip: {
        //         trigger: 'item',
        //         formatter: "{a} <br/>{b}: {c} ({d}%)"
        //     },
        //     legend: {
        //         orient: 'vertical',
        //         top:"6%",
        //         right: '20%',
        //         textStyle:{
        //             color:"#fff",
        //         },
        //         data:['星期一','星期二','12','555','联盟广告','视频广告','百度','谷歌','必应','其他']
        //     },
        //     series: [
        //         {
        //             name:'访问来源',
        //             type:'pie',
        //             selectedMode: 'single',
        //             radius: [0, '30%'],
        //             center: ['40%', '50%'],
        //
        //             label: {
        //                 normal: {
        //                     position: 'inner'
        //                 }
        //             },
        //             labelLine: {
        //                 normal: {
        //                     show: false
        //                 }
        //             },
        //             data:[
        //                 {value:335, name:'星期一', selected:true},
        //                 {value:679, name:'星期二'},
        //                 {value:1548, name:'12'}
        //             ]
        //         },
        //         {
        //             name:'访问来源',
        //             type:'pie',
        //             radius: ['40%', '55%'],
        //             center: ['40%', '50%'],
        //             label: {
        //                 normal: {
        //                     show:false,
        //                     formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        //                     backgroundColor: '#eee',
        //                     borderColor: '#aaa',
        //                     borderWidth: 1,
        //                     borderRadius: 4,
        //                     // shadowBlur:3,
        //                     // shadowOffsetX: 2,
        //                     // shadowOffsetY: 2,
        //                     // shadowColor: '#999',
        //                     // padding: [0, 7],
        //                     rich: {
        //                         a: {
        //                             color: '#999',
        //                             lineHeight: 22,
        //                             align: 'center'
        //                         },
        //                         // abg: {
        //                         //     backgroundColor: '#333',
        //                         //     width: '100%',
        //                         //     align: 'right',
        //                         //     height: 22,
        //                         //     borderRadius: [4, 4, 0, 0]
        //                         // },
        //                         hr: {
        //                             borderColor: '#aaa',
        //                             width: '100%',
        //                             borderWidth: 0.5,
        //                             height: 0
        //                         },
        //                         b: {
        //                             fontSize: 16,
        //                             lineHeight: 33
        //                         },
        //                         per: {
        //                             color: '#eee',
        //                             backgroundColor: '#334455',
        //                             padding: [2, 4],
        //                             borderRadius: 2
        //                         }
        //                     }
        //                 }
        //             },
        //             data:[
        //                 {value:335, name:'直达'},
        //                 {value:310, name:'星期二'},
        //                 {value:234, name:'555'},
        //                 {value:135, name:'视频广告'},
        //                 {value:1048, name:'百度'},
        //                 {value:251, name:'谷歌'},
        //                 {value:147, name:'必应'},
        //                 {value:102, name:'其他'}
        //             ]
        //         }
        //     ]
        // };
        var data = [
            {
            value: 3661,
            name: '<10w'
        }, {
            value: 5713,
            name: '10w-50w'
        }, {
            value: 9938,
            name: '50w-100w'
        }
        ];
        var option = {
            title: {
                text: '',
                subtext: '',
                top:"6%",
                left:"5%",
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16,
                    color:"#fff"
                }
            },
            tooltip: {
                show: false,
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)",

            },
            legend: {
                orient: 'horizontal',
                bottom:"3%",
                textStyle:{
                    color:"#fff"
                },
                data: ['<10w', '10w-50w', '50w-100w']
            },
            series: [{
                type: 'pie',
                selectedMode: 'single',
                radius: ['15%', '40%'],
                center: ['30%', '50%'],
                color: ['#86D560', '#AF89D6', '#59ADF3'],
                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{d}%',

                        textStyle: {
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 14
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            }]
        };
        f_nice.setOption(option);
    },
    warning:function(){
        var f_warning= echarts.init(document.getElementById('f_warning'));
        var option = {
            color:['#8fc31f','#00ccff','#f35833'],
            title:{
                text:"标题",
                top:"3%",
                left:"3%",
                textStyle:{
                    color:"#fff"
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                top:"3%",
                textStyle:{
                    color:"#fff"
                },
                data: ['绿区', '蓝区', '红区']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['e支部',   '党员教育', '干部学习', '内容发布', '发展党\n员纪实',
                    '党员和\n党组织\n信息',
                    '三务公开',
                    '组织关\n系转接',
                    '基层两\n委学历',
                    '在职党\n员到社\n区报到',
                    '灯塔书城'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        // color: "#063374",
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
                        color: "#fff",
                    }
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "#fff",
                        opacity:0.2
                    }
                }
            }],
            series: [{
                name: '绿区',
                type: 'line',
                showSymbol: false,
                // itemStyle:{
                //     normal:{color:'#01949B'},
                // },
                // markPoint : {
                //     data : [
                //         {type : 'max', name : '最大值'},
                //         {type : 'min', name : '最小值'}
                //     ]
                // },
                itemStyle: {
                    normal: {
                        color: "#8fc31f"
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5ee37d'
                        }, {
                            offset: 0.7,
                            color: '#dcffe0'
                        }])
                    }
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                },
                data: [2031, 1793, 3640, 2593, 4377,3201, 2275, 3289, 3356,2859,4244]
            },
                {
                    name: '蓝区',
                    type: 'line',
                    showSymbol: false,
                // itemStyle:{
                //     normal:{color:'#EBA954'},
                // },
                // markPoint : {
                //     data : [
                //         {type : 'max', name : '最大值'},
                //         {type : 'min', name : '最小值'}
                //     ]
                // },
                    itemStyle: {
                        normal: {
                            color: "#00ccff"
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#79faff'
                            }, {
                                offset: 0.7,
                                color: '#cdfffa'
                            }])
                        }
                    },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                },
                data: [1043, 1456, 1900, 1200, 2100,1870, 980, 1569, 1130, 1490,2300]
            },
                {
                name: '红区',
                type: 'line',
                showSymbol: false,
                // itemStyle:{
                //     normal:{color:'#C23531'},
                // },
                // markPoint : {
                //     data : [
                //         {type : 'max', name : '最大值'},
                //         {type : 'min', name : '最小值'}
                //     ]
                // },
                    itemStyle: {
                        normal: {
                            color: "#f01606"
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f07a65'
                            }, {
                                offset: 0.7,
                                color: '#ffb2b2'
                            }])
                        }
                    },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                },
                data: [787, 571, 999, 341, 231,812, 735, 231,322,712,1230]
            }]
        };


        f_warning.setOption(option);
    },
    eightSmall:function(){
        // var f_eight= echarts.init(document.getElementById('f_eight'));
        // var f_eight1= echarts.init(document.getElementById('f_eight1'));
        // var f_eight2= echarts.init(document.getElementById('f_eight2'));
        // var f_eight3= echarts.init(document.getElementById('f_eight3'));
        // var f_eight4= echarts.init(document.getElementById('f_eight4'));
        // var f_eight5= echarts.init(document.getElementById('f_eight5'));
        // var f_eight6= echarts.init(document.getElementById('f_eight6'));
        // var f_eight7= echarts.init(document.getElementById('f_eight7'));
        // var data = [53, 85, 60, 45, 53];
        // var xMax = 100;
        // var axisColor = '#fff';
        // var option = {
        //     backgroundColor: "#000000",
        //     tooltip: {
        //         show: true,
        //         formatter: "{b} <br> {c}件"
        //
        //     },
        //
        //     xAxis: [{
        //         axisTick: {
        //             show: false,
        //             // color:'#fff',
        //         },
        //         axisLine: {
        //             show: false,
        //         },
        //         axisLabel: {
        //             show: false
        //             //color:'#fff',
        //         },
        //         splitLine: {
        //             show: false,
        //             // color:'#fff',
        //         }
        //     }],
        //     yAxis: [{
        //         type: 'category',
        //         data: ['其他来源', '质检电话', '12345', '12315', '12301', ],
        //
        //         axisTick: {
        //             // color:'#fff',
        //             show: false,
        //         },
        //         axisLine: {
        //             //  color:'#fff',
        //             show: false,
        //         },
        //         axisLabel: {
        //             textStyle: {
        //                 color: '#fff',
        //             }
        //         }
        //
        //     }],
        //     series: [{
        //         name: ' ',
        //         type: 'bar',
        //         barWidth: 16,
        //         silent: true,
        //         itemStyle: {
        //             normal: {
        //                 color: '#0B2A54',
        //                 barBorderRadius: [0, 5, 5, 0],
        //
        //             }
        //
        //         },
        //         barGap: '-100%',
        //         barCategoryGap: '50%',
        //         data: data.map(function(d) {
        //             return xMax
        //         }),
        //     }, {
        //         name: ' ',
        //         type: 'bar',
        //         barWidth: 16,
        //         label: {
        //             normal: {
        //                 show: true,
        //                 position: 'top',
        //                 formatter: '{c}%',
        //             }
        //         },
        //         data: [{
        //             value: 53,
        //             itemStyle: {
        //                 normal: {
        //                     // barBorderRadius: [0, 10, 10, 0],
        //                     // color: {
        //                     //     type: 'bar',
        //                     //     colorStops: [{
        //                     //         offset: 0,
        //                     //         color: 'rgba(11,42,84,.1)' // 0% 处的颜色
        //                     //     }, {
        //                     //         offset: 1,
        //                     //         color: 'rgba(11,42,84,.6)'  // 100% 处的颜色
        //                     //     }],
        //                     //     globalCoord: false, // 缺省为 false
        //                     //
        //                     // }
        //                 }
        //             }
        //         }, {
        //             value: 53,
        //             itemStyle: {
        //                 // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
        //                 normal: {
        //                     // barBorderRadius: [0, 10, 10, 0],
        //                     color: {
        //                         // type: 'bar',
        //                         // colorStops: [{
        //                         //     offset: 0,
        //                         //     color: 'rgba(11,42,84,.6)' // 0% 处的颜色
        //                         // }, {
        //                         //     offset: 1,
        //                         //     color: '#b250ff' // 100% 处的颜色
        //                         // }],
        //                         // globalCoord: false, // 缺省为 false
        //
        //                     }
        //                 }
        //             }
        //         }, {
        //             value: 53,
        //             itemStyle: {
        //                 // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
        //                 normal: {
        //                     // barBorderRadius: [0, 10, 10, 0],
        //                     color: {
        //                         type: 'bar',
        //                         colorStops: [{
        //                             offset: 0,
        //                             color: 'rgba(11,42,84,.3)' // 0% 处的颜色
        //                         }, {
        //                             offset: 1,
        //                             color: '#4f9aff' // 100% 处的颜色
        //                         }],
        //                         globalCoord: false, // 缺省为 false
        //
        //                     }
        //                 }
        //             }
        //         }, {
        //             value: 53,
        //             itemStyle: {
        //                 // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
        //                 normal: {
        //                     // barBorderRadius: [0, 10, 10, 0],
        //                     color: {
        //                         type: 'bar',
        //                         colorStops: [{
        //                             offset: 0,
        //                             color: 'rgba(11,42,84,.3)' // 0% 处的颜色
        //                         }, {
        //                             offset: 1,
        //                             color: '#4bf3ff' // 100% 处的颜色
        //                         }],
        //                         globalCoord: false, // 缺省为 false
        //
        //                     }
        //                 }
        //
        //             }
        //         }, {
        //
        //             value: 53,
        //             itemStyle: {
        //                 // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
        //                 normal: {
        //                     // barBorderRadius: [0, 10, 10, 0],
        //                     color: {
        //                         type: 'bar',
        //                         colorStops: [{
        //                             offset: 0,
        //                             color: 'rgba(11,42,84,.3)' // 0% 处的颜色
        //                         }, {
        //                             offset: 1,
        //                             color: '#ffa800' // 100% 处的颜色
        //                         }],
        //                         globalCoord: false, // 缺省为 false
        //
        //                     }
        //                 }
        //             }
        //         }, ],
        //     }]
        // };

console.log($(".f_eight span").length);





        // f_eight.setOption(option);

        // f_eight1.setOption(option1);
        // f_eight2.setOption(option2);
        // f_eight3.setOption(option3);
        // f_eight4.setOption(option4);
        // f_eight5.setOption(option5);
        // f_eight6.setOption(option6);
        // f_eight7.setOption(option7);

    },
    /**中间结束*/
    /**右边开始*/
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
    },
    city:function(){
        var f_city= echarts.init(document.getElementById('f_city'));
        //中国地图

        // var geoCoordMap = {
        //     '长春': [125.8154, 44.2584],
        //     '长沙': [113.0823, 28.2568],
        //     '贵阳': [106.6992, 26.7682],
        //     '西安': [109.1162, 34.2004],
        //     '深圳': [114.5435, 22.5439],
        //     '济南': [117.1582, 36.8701],
        //     '海口': [110.3893, 19.8516],
        //     '沈阳': [123.1238, 42.1216],
        //     '武汉': [114.3896, 30.6628],
        //     '昆明': [102.9199, 25.4663],
        //     '杭州': [119.5313, 29.8773],
        //     '成都': [103.9526, 30.7617],
        //     '拉萨': [91.1865, 30.1465],
        //     '天津': [117.4219, 39.4189],
        //     '合肥': [117.29, 32.0581],
        //     '呼和浩特': [111.4124, 40.4901],
        //     '哈尔滨': [127.9688, 45.368],
        //     '北京': [116.4551, 40.2539],
        //     '南京': [118.8062, 31.9208],
        //     '南宁': [108.479, 23.1152],
        //     '南昌': [116.0046, 28.6633],
        //     '乌鲁木齐': [87.9236, 43.5883],
        //     '上海': [121.4648, 31.2891]
        // };
        // var data = [
        //     {
        //         name: '长春',
        //         value: 90
        //     }, {
        //         name: '长沙',
        //         value: 10
        //     }, {
        //         name: '贵阳',
        //         value: 20
        //     }, {
        //         name: '西安',
        //         value: 20
        //     }, {
        //         name: '深圳',
        //         value: 20
        //     }, {
        //         name: '济南',
        //         value: 50
        //     }, {
        //         name: '海口',
        //         value: 58
        //     }, {
        //         name: '沈阳',
        //         value: 64
        //     }, {
        //         name: '武汉',
        //         value: 68
        //     }, {
        //         name: '昆明',
        //         value: 45
        //     }, {
        //         name: '杭州',
        //         value: 68
        //     }, {
        //         name: '成都',
        //         value: 49
        //     }, {
        //         name: '拉萨',
        //         value: 66
        //     }, {
        //         name: '天津',
        //         value: 86
        //     }, {
        //         name: '合肥',
        //         value: 58
        //     }, {
        //         name: '呼和浩特',
        //         value: 59
        //     }, {
        //         name: '哈尔滨',
        //         value: 95
        //     }, {
        //         name: '北京',
        //         value: 68
        //     }, {
        //         name: '南京',
        //         value: 56
        //     }, {
        //         name: '南宁',
        //         value: 89
        //     }, {
        //         name: '南昌',
        //         value: 48
        //     }, {
        //         name: '乌鲁木齐',
        //         value: 49
        //     }, {
        //         name: '上海',
        //         value: 78
        //     }
        //     ];
        // function formtGCData(geoData, data, srcNam, dest) {
        //     var tGeoDt = [];
        //     if (dest) {
        //         for (var i = 0, len = data.length; i < len; i++) {
        //             if (srcNam != data[i].name) {
        //                 tGeoDt.push({
        //                     coords: [geoData[srcNam], geoData[data[i].name]]
        //                 });
        //             }
        //         }
        //     } else {
        //         for (var i = 0, len = data.length; i < len; i++) {
        //             if (srcNam != data[i].name) {
        //                 tGeoDt.push({
        //                     coords: [geoData[data[i].name], geoData[srcNam]]
        //                 });
        //             }
        //         }
        //     }
        //     return tGeoDt;
        // }
        // function formtVData(geoData, data, srcNam) {
        //     var tGeoDt = [];
        //     for (var i = 0, len = data.length; i < len; i++) {
        //         var tNam = data[i].name
        //         if (srcNam != tNam) {
        //             tGeoDt.push({
        //                 name: tNam,
        //                 value: geoData[tNam]
        //             });
        //         }
        //
        //     }
        //     tGeoDt.push({
        //         name: srcNam,
        //         value: geoData[srcNam],
        //         symbolSize: 8,
        //         itemStyle: {
        //             normal: {
        //                 color: 'red',
        //                 borderColor: '#000'
        //             }
        //         }
        //     });
        //     return tGeoDt;
        // }
        // var planePath = 'arrow';
        // var option = {
        //     // backgroundColor: '#404a59',
        //     title: {
        //         text: "安全事态图",
        //         subtext: "",
        //         right:"5%",
        //         top:"3%",
        //         textStyle: {
        //             color: '#fff',
        //             fontSize: '18'
        //         },
        //         subtextStyle: {
        //             color: '#fbffff',
        //             fontSize: '16',
        //
        //         },
        //     },
        //     tooltip: {
        //         trigger: 'item',
        //     },
        //     geo: {
        //         map: 'china',
        //         label: {
        //             emphasis: {
        //                 show: false
        //             }
        //         },
        //         roam: true,
        //         silent: true,
        //         itemStyle: {
        //             normal: {
        //                 areaColor: '#37376e',
        //                 borderColor: '#000'
        //             },
        //             emphasis: {
        //                 areaColor: '#2a333d'
        //             }
        //         }
        //     },
        //     series: [{
        //
        //         type: 'lines',
        //         zlevel: 2,
        //         effect: {
        //             show: true,
        //             period: 6,
        //             trailLength: 0.1,
        //             color: '#db9982',
        //             symbol: planePath,
        //             symbolSize: 8
        //         },
        //         lineStyle: {
        //             normal: {
        //                 color: '#a6c84c',
        //                 width: 1,
        //                 opacity: 0.4,
        //                 curveness: 0.2
        //             }
        //         },
        //         data: formtGCData(geoCoordMap, data, '济南', true)
        //     },
        //         {
        //
        //             type: 'lines',
        //             zlevel: 2,
        //             effect: {
        //                 show: true,
        //                 period: 6,
        //                 trailLength: 0.1,
        //                 color: 'maroon',
        //                 symbol: planePath,
        //                 symbolSize: 8
        //             },
        //             lineStyle: {
        //                 normal: {
        //                     color: '#a6c84c',
        //                     width: 1,
        //                     opacity: 0.4,
        //                     curveness: 0.2
        //                 }
        //             },
        //             data: formtGCData(geoCoordMap, data, '济南', false)
        //         },
        //         {
        //
        //             type: 'effectScatter',
        //             coordinateSystem: 'geo',
        //             zlevel: 2,
        //             rippleEffect: {
        //                 period: 4,
        //                 scale: 2.5,
        //                 brushType: 'stroke'
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'right',
        //                     formatter: '{b}'
        //                 }
        //             },
        //             symbolSize: 5,
        //             itemStyle: {
        //                 normal: {
        //                     color: '#0D6695',
        //                     borderColor: 'gold'
        //                 }
        //             },
        //
        //             data: formtVData(geoCoordMap, data, '济南')
        //         }
        //     ]
        // };

        //世界地图
        var geoCoordMap = {
            '济南': [117.1582, 36.8701],
            '尼日利亚': [-4.388361, 11.186148],
            '美国洛杉矶': [-118.24311, 34.052713],
            '香港邦泰': [114.195466, 22.282751],
            '美国芝加哥': [-87.801833, 41.870975],
            '加纳库马西': [-4.62829, 7.72415],
            '英国曼彻斯特': [-1.657222, 51.886863],
            '德国汉堡': [10.01959, 54.38474],
            '哈萨克斯坦阿拉木图': [45.326912, 41.101891],
            '俄罗斯伊尔库茨克': [89.116876, 67.757906],
            '巴西': [-48.678945, -10.493623],
            '埃及达米埃塔': [31.815593, 31.418032],
            '西班牙巴塞罗纳': [2.175129, 41.385064],
            '柬埔寨金边': [104.88659, 11.545469],
            '意大利米兰': [9.189948, 45.46623],
            '乌拉圭蒙得维的亚': [-56.162231, -34.901113],
            '莫桑比克马普托': [32.608571, -25.893473],
            '阿尔及利亚阿尔及尔': [3.054275, 36.753027],
            '阿联酋迪拜': [55.269441, 25.204514],
            '匈牙利布达佩斯': [17.108519, 48.179162],
            '澳大利亚悉尼': [150.993137, -33.675509],
            '美国加州': [-121.910642, 41.38028],
            '澳大利亚墨尔本': [144.999416, -37.781726],
            '墨西哥': [-99.094092, 19.365711],
            '加拿大温哥华': [-123.023921, 49.311753]
        };
        var BJData = [
            [{
                name: '尼日利亚',
                value: 9100
            }, {
                name: '济南'
            }],
            [{
                name: '美国洛杉矶',
                value: 2370
            }, {
                name: '济南'
            }],
            [{
                name: '香港邦泰',
                value: 3130
            }, {
                name: '济南'
            }],
            [{
                name: '美国芝加哥',
                value: 2350
            }, {
                name: '济南'
            }],
            [{
                name: '加纳库马西',
                value: 5120
            }, {
                name: '济南'
            }],
            [{
                name: '英国曼彻斯特',
                value: 3110
            }, {
                name: '济南'
            }],
            [{
                name: '德国汉堡',
                value: 6280
            }, {
                name: '济南'
            }],
            [{
                name: '哈萨克斯坦阿拉木图',
                value: 7255
            }, {
                name: '济南'
            }],
            [{
                name: '俄罗斯伊尔库茨克',
                value: 8125
            }, {
                name: '济南'
            }],
            [{
                name: '巴西',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '埃及达米埃塔',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '西班牙巴塞罗纳',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '柬埔寨金边',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '意大利米兰',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '乌拉圭蒙得维的亚',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '莫桑比克马普托',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '阿尔及利亚阿尔及尔',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '阿联酋迪拜',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '匈牙利布达佩斯',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '澳大利亚悉尼',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '美国加州',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '澳大利亚墨尔本',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '墨西哥',
                value: 3590
            }, {
                name: '济南'
            }],
            [{
                name: '加拿大温哥华',
                value: 3590
            }, {
                name: '济南'
            }
            ]
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
                text: '安全态事图',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                padding: [20, 20, 20, 20]
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(12, 204, 104, 0.92)',
                borderColor: '#FFFFCC',
                showDelay: 0,
                hideDelay: 0,
                enterable: true,
                transitionDuration: 0,
                extraCssText: 'z-index:100',
                formatter: function(params, ticket, callback) {
                    //根据业务自己拓展要显示的内容
                    var res = "";
                    var name = params.name;
                    var value = params.value[params.seriesIndex + 1];
                    res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                    return res;
                }
            },
            visualMap: { //图例值控制
                min: 0,
                max: 10000,
                bottom:"1%",
                right:"3%",
                calculable: true,
                itemWidth: 8,
                itemHeight: 80,
                color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
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
//让圆环的提示框自动触发轮播显示
        function autoHoverTip() {
            for (var i = 0; i < counts; i++) {
                (function(i) {
                    ts = setTimeout(function() {
                        f_city.dispatchAction({
                            type: 'showTip',
                            seriesIndex: 1,
                            dataIndex: i
                        });
                    }, 5000 * i);
                })(i);
            }
        }

        setTimeout(function() {
            autoHoverTip();
            tv = setInterval(autoHoverTip, counts * 1000);
        }, 500);

        f_city.setOption(option);
    },
    cityAxis:function(){
        var f_cityAxis= echarts.init(document.getElementById('f_cityAxis'));
        var data1 = [ 314284, 124444,34210,23923,  12455];
        var data1Max = Math.max.apply( Math, data1 );
        var data2 = [];
        for(var i = 0;i<data1.length;i++){
            data2.push(data1Max*1.2)
        }
       var option = {
            grid: {
                left: '3%',
                top: '5%',
                bottom: '3%',
                right: '30%',
                containLabel: true
            },
            legend: {
                show: false
            },

            xAxis: {
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },

                axisLabel: {
                    color: '#ffffff',
                    fontSize: 14,
                    // align:"left",
                },
                data: [
                    {
                        value:"巴西",
                        align:"right"
                    },
                    {
                        value:"墨西哥",
                        align:"right"
                    },
                    {
                        value:"俄罗斯",
                        align:"right"
                    },
                    {
                        value:"香港",
                        align:"right"
                    },{
                        value:"德国",
                        align:"right"
                    }

                ]

            },
            series: [{
                type: 'bar',
                barGap: '-80%',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 0,
                            [
                                {offset: 1, color: '#6eff47'},
                                {offset: 0.3, color: '#b7ffa6'},
                                {offset: 0, color: '#ffffff'},
                            ]
                        ),
                        barBorderRadius: 12
                    }
                },
                z: -5,
                data:data1
            }, {
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: '#004670',
                        borderColor: 'rgba(255,255,255,0.5)',
                        borderWidth: 2,
                        shadowColor: '#ffffff',
                        shadowBlur: 10,
                        barBorderRadius: 12
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        fontSize: 14,
                        color: '#fff',
                        // offset: [80,0],
                        formatter: function(params){
                            return data1[params.dataIndex]===0?'-':data1[params.dataIndex]
                            // return data1[params.dataIndex]===0?'-':data1[params.dataIndex]+"/平方米"
                        }
                    }
                },
                z: -12,
                data: data2
            }]
        };
        f_cityAxis.setOption(option);
    },
    cityLeft:function(){
        var f_anquan= echarts.init(document.getElementById('f_anquan'));
        var data = [
            {
                value: 95,
                name: '网络入侵'
            }, {
                value: 1,
                name: '主机入侵'
            }, {
                value: 4,
                name: '应用入侵'
            }
        ];
        var option ={
            title: {
                text: '安全威胁类型',
                subtext: '',
                top:"3%",
                left:"3%",
                textStyle:{
                    color:"#fff"
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} :  {d}%"
            },
            color:['#8fc31f','#f35833','#00ccff','#ffcc00'],
            legend: {
                show:false,
                orient: 'vertical',
                x: 'right',
                textStyle:{
                    color:"#fff"
                },
                data: ['网络入侵','主机入侵','应用入侵'],
                formatter:function(name){
                    var oa = option.series[0].data;
                    var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
                    for(var i = 0; i < option.series[0].data.length; i++){
                        if(name==oa[i].name){
                            return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
                        }
                    }
                }
            },
            series : [
                {
                    name: '安全威胁类型',
                    type: 'pie',
                    radius : '55%',
                    center: ['60%', '50%'],
                    data:data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    itemStyle: {
                        normal: {
                            label:{
                                show: true,
//	                            position:'inside',
                                formatter: '{b} :{d}%'
                            }
                        },
                        labelLine :{show:true}
                    }
                }
            ]
        };
        f_anquan.setOption(option);
    },
    cityRight:function(){
        var f_an= echarts.init(document.getElementById('f_an'));
        var  option = {
           color:['#8fc31f','#00ccff','#ffcc00','#f35833'],
            title: {
                text: '安全威胁级别',
                subtext: '实时监控',
                top:"3%",
                textStyle:{
                    color:"#fff"
                }
            },
            calculable: true,
            series: [
                {
                    name:'安全威胁级别',
                    type:'funnel',
                    left: '10%',
                    top: 40,
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
                            length: 60,
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
                        {value: 80, name: '低级',
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        },
                        {value: 60, name: '中级',
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        },
                        {value: 40, name: '高级',
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        },
                        {value: 20, name: '紧急',
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    name: '',
                    type: 'funnel',
                    gap: 5,
                    label: {
                        align:"center",
                        normal: {
                            position: 'center',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#fff',
                                fontSize:"14"
                            }
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth:0,
                            opacity: 0
                        }
                    },
                    data: [
                        {value: 80, name: '低级'},
                        {value: 60, name: '中级'},
                        {value: 40, name: '高级'},
                        {value: 20, name: '紧急'},
                        // {value: 100, name: '展现'}
                    ]
                }
            ]
        };

        f_an.setOption(option);
    }
    /**右边结束*/
};
var move=new Move();
