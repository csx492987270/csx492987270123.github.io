/*

*/
/**/
define(["jquery", "echarts", "text!tpls/echart.html"], function ($, echarts, echarteTpl) {
    return function () {
        $.ajax({
            url: 'https://www.apiopen.top/findStatistics?appKey=00d91e8e0cca2b76f515926a36db68f5',
            type: 'get',
            success: function (res) {
                if (res.code == '200') {
                    $(".t_body .panel-body").html(echarteTpl);
                    var myChart = echarts.init(document.getElementById('myechar'));/*获取id*/
                    var option = {/*配置options*/
                        title: {
                            text: '网站男女比例',
                            subtext: '仅供参考数据不够精准',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            // orient: 'vertical',
                            top: 30,
                            right: 30,
                            data: ['男', '女']
                        },
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    { value: 1999, name: '男' },
                                    { value: 310, name: '女' }
                                ],
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
                  console.log(option.series[0].data)
                  option.series[0].data[0].value = res.data[0].count;
                  option.series[0].data[1].value = res.data[3].count;
                    /*加载option*/
                    myChart.setOption(option);
                }

            }
        });
    }
});
