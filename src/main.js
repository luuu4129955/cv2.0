import * as echarts from "echarts";

let myChart = echarts.init(document.getElementById('echarts'));

let option = {
  radar: {
    indicator: [
      { name: '静态页面', max: 100 },
      { name: '编程基础', max: 100 },
      { name: 'Vue', max: 100 },
      { name: 'React', max: 100 },
      { name: '项目开发', max: 100 },
      { name: '沟通能力', max: 100 }
    ]
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [100, 90, 80, 75, 80, 75],
          name: 'Allocated Budget'
        }
      ]
    }
  ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);