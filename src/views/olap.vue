<template>
	<div>
		<Card>
			<div id="pieChart" style="width: 1000px;height:600px;"></div>
		</Card>
		<Card>
			<Form ref="queryReq" :model="barArrReq" :label-width="150" inline class="form">
                <FormItem label="Date Range：" prop="sqlScript" style="width: 700px">
                    <DatePicker type="date" v-model="barArrReq.startTime" placeholder="start date" style="width: 200px" /> ~
					<DatePicker type="date" v-model="barArrReq.endTime" placeholder="end date" style="width: 200px" />
				</FormItem>
        		<FormItem>
					<Button type="primary" icon="ios-search" @click="drawBarChartMethod()">Search</Button>
				</FormItem>
            </Form>
			<div id="barChart" style="width: 1000px;height:600px;"></div>
		</Card>
		<Card>
			<Form ref="queryReq" :model="multiBarArrReq" :label-width="150" inline class="form">
                <FormItem label="Date Range：" prop="sqlScript" style="width: 700px">
                    <DatePicker type="date" v-model="multiBarArrReq.startTime" placeholder="start date" style="width: 200px" /> ~
					<DatePicker type="date" v-model="multiBarArrReq.endTime" placeholder="end date" style="width: 200px" />
				</FormItem>
				<FormItem>
					<Button type="primary" icon="ios-search" @click="drawMultiBarMethod()">Search</Button>
				</FormItem>
            </Form>
			<div id="multiBar" style="width: 1000px;height:600px;"></div>
		</Card>
		<Card>
			<Form ref="queryReq" :model="lineArrReq" :label-width="150" inline class="form">
				<FormItem label="Date Range：" prop="sqlScript" style="width: 700px">
					<DatePicker type="date" v-model="lineArrReq.startTime" placeholder="start date" style="width: 200px" /> ~
					<DatePicker type="date" v-model="lineArrReq.endTime" placeholder="end date" style="width: 200px" />
				</FormItem>
				<FormItem>
					<Button type="primary" icon="ios-search" @click="drawLineChartMethod()">Search</Button>
				</FormItem>
      		</Form>
			<div id="lineChart" style="width: 1000px;height:600px;"></div>
		</Card>
    <Card>
      <Form ref="queryReq" :model="lineModel" :label-width="150" inline class="form">
        <FormItem label="Stock Name:">
          <Select v-model="lineModel.stockName" style="width:150px" clearable>
            <Option v-for="item in stockTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </FormItem>
        <FormItem label="Date Range：" prop="sqlScript" style="width: 500px">
            <DatePicker type="date" v-model="lineModel.startTime" placeholder="start date" style="width: 150px" /> ~
			<DatePicker type="date" v-model="lineModel.endTime" placeholder="end date" style="width: 150px" />
		</FormItem>
		<FormItem>
			<Button type="primary" icon="ios-search" @click="getStockAndProbability()">Search</Button>
		</FormItem>
      </Form>
      <div id="StockProbabilityLine" style="width: 1000px;height:600px;"></div>
    </Card>
    <Card>
      <Form ref="queryReq" :model="tradeDateAvgReq" :label-width="150" inline class="form">
        <FormItem label="Stock Name:">
          <Select v-model="tradeDateAvgReq.stockName" style="width:150px" clearable>
            <Option v-for="item in stockTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </FormItem>
        <FormItem label="Date Range：" prop="sqlScript" style="width: 500px">
          <DatePicker type="date" v-model="tradeDateAvgReq.startTime" placeholder="start date" style="width: 150px" /> ~
          <DatePicker type="date" v-model="tradeDateAvgReq.endTime" placeholder="end date" style="width: 150px" />
        </FormItem>
        <FormItem style="width: 100px">
          <Button type="primary" icon="ios-search" @click="getTradeDateAvgProbability()">Search</Button>
        </FormItem>
      </Form>
      <div id="tradeDateAvgProbabilityLine" style="width: 1000px;height:600px;"></div>
    </Card>
	</div>
</template>

<script>
import * as echarts from 'echarts'
import moment from 'moment'
import {
  getStockNameAndCommentQuantity, getDayCommentQuantity,
  getStockCommentQuantityByDay, getStockName,
  getStockAndProbability, getTradeDateAvgProbability
} from '@/api/analysis'

export default {
  name: 'oltp-page',
  data() {
    return {
      data: [],
      bar: {
        xdata: [],
        dataArr: []
      },
      barArrReq: {
        startTime: '2015-01-01',
        endTime: '2015-03-31'
      },
      multiBarArrReq: {
      startTime: '2015-01-01',
          endTime: '2015-01-15'
      },
      lineArrReq: {
      startTime: '2015-01-01',
          endTime: '2015-01-20'
      },
      barArr: {
        dateArr: [],
        applArr: [],
        amznArr: [],
        googArr: [],
        msftArr: [],
      tslaArr: [],
      stockTypeList: []
      },
      lineChartArr: {
          dateArr: [],
          applArr: [],
          amznArr: [],
          googArr: [],
          msftArr: [],
          tslaArr: [],
          stockTypeList: []
      },
      interval: null,
      stockTypeList: [],
      lineArr: [],
      numberList: [],
      lineModel: {
        stockName: 'AMZN',
        startTime: '2015-01-01',
        endTime: '2015-01-05'
      },
      tradeDateAvgReq: {
        stockName: 'AMZN',
        startTime: '2015-01-01',
        endTime: '2015-01-15'
      },
      tradeDateAvgResult: {
        lineArr: [],
        dateList: []
      }
    }
  },
  methods: {
    drawPieChart() {
      // 基于准备好的dom，初始化echarts实例
      const pieChart = echarts.init(document.getElementById('pieChart'))
      const option = {
        legend: {
          show: false,
          top: 'bottom'
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },

        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            showEmptyCircle: false,
            label: {
              rotate: 0,
              show: true,
              overflow: 'truncate',
              position: 'outer',
              alignTo: 'none',
              edgeDistance: '25%',
              bleedMargin: 10,
              formatter: '{b},{c}'
            },
            data: this.data
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      pieChart.setOption(option)
    },
    drawBarChart() {
      const barChart = echarts.init(document.getElementById('barChart'))
      const { xdata } = this.bar
      const { dataArr } = this.bar

      const option = {
        backgroundColor: '#354061',
        title: {
          text: 'Daily comment volume statistics',
          x: '2%',
          y: '4%',
          textStyle: {
            color: '#fff',
            fontSize: '22'
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: '#E8E093',
              shadowColor: '#1E6262',
              shadowBlur: 30,
              shadowOffsetX: 10,
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#E8E093',
            }
          },
          show: true,
          formatter(params) {
            return `日期: ${params[0].name}<br>` + `评论量: ${params[0].data} 条`
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '10%',
          top: '14%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xdata,
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '##DFDFDF',
              fontSize: 14
            },
            // rotate: '45',
          },
          axisLine: {
            show: false
          },
        },

        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#DFDFDF',
              fontSize: 14
            },
            formatter: '{value}',
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
            }
          },
        },
        series: [{
          name: '1',
          type: 'bar',
          barWidth: '60%',
          markLine: {
            silent: true,
            symblo: 'none',
            label: {
              position: 'end',
            },
            // data: [{
            // 	name: '目标值',
            // 	yAxis: 250,
            // 	lineStyle: {
            // 		color: '#E8E093',
            // 	},
            // 	label: {
            // 		position: 'end',
            // 		formatter: '{b}\n {c}'
            // 	}
            // }]
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(78,197,163,1)'
              }, {
                offset: 1,
                color: 'rgba(89,170,147,0.1)'
              }]),
              barBorderRadius: 20,
            },
          },
          data: dataArr
        },]
      }
      barChart.setOption(option)
    },
    drawLineChart() {
      const lineChart = echarts.init(document.getElementById('lineChart'))
      const colorList = [
        //   new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
        //                  offset: 0,
        //                  color: '#5470c6'
        //              },
        //  {
        //      offset: 1,
        //      color: '#8554cf'
        //  }]),
        new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
          offset: 0,
          color: '#73c0de'
        }, {
          offset: 1,
          color: '#26c9fe'
        }]), new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
          offset: 0,
          color: '#fac858'
        }, {
          offset: 1,
          color: '#fff55a'
        }]), new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
          offset: 0,
          color: '#ee6666'
        }, {
          offset: 1,
          color: '#eebc66'
        }]), new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
          offset: 0,
          color: '#91cc75'
        }, {
          offset: 1,
          color: '#70edb6'
        }]),]

      const option = {
        backgroundColor: '#fff',
        title: {
          text: '利润收支曲线',
          textStyle: {
            fontSize: 12,
            fontWeight: 400,
          },
          left: 'center',
          top: '5%',
          show: false,
        },
        legend: {
          x: 'center',
          y: 'top',
          show: true,
          top: '5%',
          right: '5%',
          itemWidth: 6,
          itemGap: 20,
          textStyle: {
            color: '#556677',
          },
          data: this.lineChartArr.stockTypeList,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            label: {
              show: true,
              backgroundColor: '#fff',
              color: '#556677',
              borderColor: 'rgba(0,0,0,0)',
              shadowColor: 'rgba(0,0,0,0)',
              shadowOffsetY: 0,
            },
            lineStyle: {
              width: 0,
            },
          },
          backgroundColor: '#fff',
          textStyle: {
            color: '#5c6c7c',
          },
          padding: [10, 10],
          extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
        },
        grid: {
          top: '15%',
          y2: 88,
        },
        // dataZoom: [
        //     {
        //         type: 'inside',
        //         start: 0,
        //         end: 100,
        //     },
        //     {
        //         start: 0,
        //         end: 100,
        //     },
        // ],
        xAxis: [
          {
            type: 'category',
            data: this.lineChartArr.dateArr,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisTick: {
              show: true,
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#556677',
              },
              // 默认x轴字体大小
              fontSize: 12,
              // margin:文字到x轴的距离
              margin: 15,
              rotate: 40
            },
            axisPointer: {
              label: {
                // padding: [11, 5, 7],
                padding: [0, 0, 10, 0],
                /*
								除了padding[0]建议必须是0之外，其他三项可随意设置

								和CSSpadding相同，[上，右，下，左]

								如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同

								padding[2]的10:

								10 = 文字距下边线的距离 + 下边线的宽度

								如：UI图中文字距下边线距离为7 下边线宽度为2

								则padding: [0, 0, 9, 0]

											*/
                // 这里的margin和axisLabel的margin要一致!
                margin: 15,
                // 移入时的字体大小
                fontSize: 12,
                backgroundColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#fff', // 0% 处的颜色
                    },
                    {
                      // offset: 0.9,
                      offset: 0.86,
                      /*
							0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

													*/
                      color: '#fff', // 0% 处的颜色
                    },
                    {
                      offset: 0.86,
                      color: '#33c0cd', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#33c0cd', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: 'value',
            // name: '件',
            // nameTextStyle: {
            //     color: '#9effff',

            // },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#556677',
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            name: 'AAPL',
            type: 'line',
            data: this.lineChartArr.applArr,
            symbolSize: 1,
            symbol: 'circle',
            // smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 2,
              // color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              //     {
              //         offset: 0,
              //         color: '#9effff',
              //     },
              //     {
              //         offset: 1,
              //         color: '#9E87FF',
              //     },
              // ]),
              shadowColor: 'rgba(158,135,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 15,
            },
            itemStyle: {
              normal: {
                color: colorList[0],
                borderColor: colorList[0],
              },
            },

          },
          {
            name: 'TSLA',
            type: 'line',
            data: this.lineChartArr.tslaArr,
            symbolSize: 1,
            symbol: 'circle',
            // smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 2,
              // color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
              //     {
              //         offset: 0,
              //         color: '#73DD39',
              //     },
              //     {
              //         offset: 1,
              //         color: '#73DDFF',
              //     },
              // ]),
              shadowColor: 'rgba(115,221,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 15,
            },
            itemStyle: {
              normal: {
                color: colorList[1],
                borderColor: colorList[1],
              },
            },

          },
          {
            name: 'GOOG',
            type: 'line',
            data: this.lineChartArr.googArr,
            symbolSize: 1,
            yAxisIndex: 0,
            symbol: 'circle',
            // smooth: true,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 2,
              // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              //     {
              //         offset: 0,
              //         color: '#fe9a',
              //     },
              //     {
              //         offset: 1,
              //         color: '#fe9a8b',
              //     },
              // ]),
              shadowColor: 'rgba(254,154,139, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 15,
            },
            itemStyle: {
              normal: {
                color: colorList[2],
                borderColor: colorList[2],
              },
            },

          },
          {
            name: 'AMZN',
            type: 'line',
            data: this.lineChartArr.amznArr,
            symbolSize: 1,
            yAxisIndex: 0,
            symbol: 'circle',
            // smooth: true,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 2,
              shadowColor: 'rgba(254,154,139, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 15,
            },
            itemStyle: {
              normal: {
                color: colorList[3],
                borderColor: colorList[3],
              },
            },

          },
          {
            name: 'MSFT',
            type: 'line',
            data: this.lineChartArr.msftArr,
            symbolSize: 1,
            yAxisIndex: 0,
            symbol: 'circle',
            // smooth: true,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 2,
              shadowColor: 'rgba(254,154,139, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 15,
            },
            itemStyle: {
              normal: {
                color: colorList[4],
                borderColor: colorList[4],
              },
            },

          },
        ],
      }

      lineChart.setOption(option)
    },
    drawMultiBar() {
      const multiBar = echarts.init(document.getElementById('multiBar'))
      const option = {
        backgroundColor: '#323a5e',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top: '16%',
          containLabel: true
        },
        legend: {
          data: this.barArr.stockTypeList,
          right: 10,
          top: 12,
          textStyle: {
            color: '#fff'
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: this.barArr.dateArr,
          axisLine: {
            lineStyle: {
              color: 'white'

            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },

        yAxis: {
          type: 'value',
          max: '1200',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
        dataZoom: [{
          show: true,
          height: 12,
          xAxisIndex: [
            0
          ],
          bottom: '8%',
          start: 10,
          end: 90,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#d3dee5',

          },
          textStyle: { color: '#fff' },
          borderColor: '#90979c'
        }, {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: [
          {
            name: 'AAPL',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#8bd46e'
                }, {
                  offset: 1,
                  color: '#09bcb7'
                }]),
                barBorderRadius: 11,
              }

            },
            data: this.barArr.applArr
          },
          {
            name: 'TSLA',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#248ff7'
                }, {
                  offset: 1,
                  color: '#6851f1'
                }]),
                barBorderRadius: 11,
              }
            },
            data: this.barArr.tslaArr
          },
          {
            name: 'GOOG',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#ff9a9e'
                }, {
                  offset: 1,
                  color: '#fad0c4'
                }]),
                barBorderRadius: 11,
              }
            },
            data: this.barArr.googArr
          },
          {
            name: 'AMZN',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#CE9FFC'
                }, {
                  offset: 1,
                  color: '#7367F0'
                }]),
                barBorderRadius: 11,
              }
            },
            data: this.barArr.amznArr
          },
          {
            name: 'MSFT',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FEB692'
                }, {
                  offset: 1,
                  color: '#EA5455'
                }]),
                barBorderRadius: 11,
              }
            },
            data: this.barArr.msftArr
          }
        ]
      }
      multiBar.setOption(option)

      const app = {
        currentIndex: -1,
      }
      this.interval = setInterval(() => {
        const dataLen = option.series[0].data.length

        // 取消之前高亮的图形
        multiBar.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        })
        app.currentIndex = (app.currentIndex + 1) % dataLen
        // console.log(app.currentIndex);
        // 高亮当前图形
        multiBar.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        })
        // 显示 tooltip
        multiBar.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        })
      }, 1000)
    },
    StockProbabilityLine() {
      const StockProbabilityLine = echarts.init(document.getElementById('StockProbabilityLine'))
      const option = {
        backgroundColor: '#18283d',
        grid: {
          top: 10,
          right: 60,
          left: 60,
          bottom: 50
        },
        dataZoom: [{
          bottom: 0,
          type: 'slider',
          height: '16px',
          show: true,
          zoomLock: true,
          start: 60,
          end: 100,
          backgroundColor: 'rgba(24,42,64)',
          borderColor: 'rgba(0,0,0,0)',
          // handleIcon: 'image:///asset-hub/images/1.png',
          handleStyle: {
            borderWidth: 0,
          },
          textStyle: {
            color: 'rgba(0,0,0,0)',
            height: '10px'
          },
          fillerColor: 'rgba(119,212,245,0.4)',
          dataBackground: {
            // 填充阴影
            areaStyle: {
              color: 'rgba(0,0,0,0)'
            },
            // 填充线条
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: 'rgba(119,212,245,0.1)'
            },
          },
          formatter(params, ticket, callback) {
            let htmlStr = ''
            for (let i = 0; i < params.length; i++) {
              const param = params[i]
              const xName = param.name // x轴的名称
              const { seriesName } = param // 图例名称
              const { value } = param // y轴值
              const { color } = param // 图例颜色
              if (i === 0) {
                htmlStr += `评论序号：${xName}<br/>` // x轴的名称
              }
              htmlStr += '<div>'

              // 具体显示的数据【字段名称：seriesName，值：value】
              // 这里判断一下name，如果是我们需要特殊处理的，就处理
              // 正常显示的数据，走默认
              if (value !== 0) {
                htmlStr += `<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${color};"></span>`
                // htmlStr += seriesName + '：' + value + '℃';
                htmlStr += `${seriesName}：${value}`
              }
              htmlStr += '</div>'
            }
            return htmlStr
          }
        },
        xAxis: {
          type: 'category',
          data: this.numberList,
          axisTick: {
            alignWithLabel: true
          },

          splitLine: {
            show: false,

          },
          axisLabel: {
            // fontWeight:10,
            // interval:2,
            fontsize: 2,
            align: 'center',
            color: 'rgba(200,231,242,1)'
          }
        },
        yAxis: [{
          type: 'value',
          scale: true,
          maxInterval: 0.1,
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(119,212,245,0.2)'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            fontWeight: 10,
            fontsize: 5,
            color: 'rgba(200,231,242,0.6)',
            // formatter: '{value}℃'
            formatter: '{value}'
          },
          max: 1.1,
          min: -0.1

        }],
        series: [
          {
            name: '评分',
            type: 'line',
            // stack: '℃',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: 'rgba(245,166,35,1)'
              }
            },
            data: this.lineArr,

            markLine: {
              symbol: 'none',
              silent: true,

              data: [{
                name: 'Grading',
                yAxis: 0.5,
                lineStyle: {
                  color: 'rgba(119,212,245,1)'
                },

                label: {
                  position: 'end',
                  formatter: '{b}\n {c}'
                }

              }]
            },

          }]
      }
      StockProbabilityLine.setOption(option)
    },
    drawTradeDateAvgProbability() {
      const tradeDateAvgProbability = echarts.init(document.getElementById('tradeDateAvgProbabilityLine'))

      const option = {
        backgroundColor: '#18283d',
        grid: {
          top: 10,
          right: 60,
          left: 60,
          bottom: 50
        },
        dataZoom: [{
          bottom: 0,
          type: 'slider',
          height: '16px',
          show: true,
          zoomLock: true,
          start: 60,
          end: 100,
          backgroundColor: 'rgba(24,42,64)',
          borderColor: 'rgba(0,0,0,0)',
          // handleIcon: 'image:///asset-hub/images/1.png',
          handleStyle: {
            borderWidth: 0,
          },
          textStyle: {
            color: 'rgba(0,0,0,0)',
            height: '10px'
          },
          fillerColor: 'rgba(119,212,245,0.4)',
          dataBackground: {
            // 填充阴影
            areaStyle: {
              color: 'rgba(0,0,0,0)'
            },
            // 填充线条
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: 'rgba(119,212,245,0.1)'
            },
          },
          formatter(params, ticket, callback) {
            let htmlStr = ''
            // htmlStr += "Stock Name：" + this.tradeDateAvgReq.stockName + '<br/>';
            for (let i = 0; i < params.length; i++) {
              const param = params[i]
              const xName = param.name // x轴的名称
              const { seriesName } = param // 图例名称
              const { value } = param // y轴值
              const { color } = param // 图例颜色
              if (i === 0) {
                htmlStr += `日期：${xName}<br/>` // x轴的名称
              }
              htmlStr += '<div>'

              // 具体显示的数据【字段名称：seriesName，值：value】
              // 这里判断一下name，如果是我们需要特殊处理的，就处理
              // 正常显示的数据，走默认
              if (value !== 0) {
                htmlStr += `<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${color};"></span>`
                // htmlStr += seriesName + '：' + value + '℃';
                htmlStr += `${seriesName}：${value}`
              }
              htmlStr += '</div>'
            }
            return htmlStr
          }
        },
        xAxis: {
          type: 'category',
          data: this.tradeDateAvgResult.dateList,
          axisTick: {
            alignWithLabel: true
          },

          splitLine: {
            show: false,

          },
          axisLabel: {
            // fontWeight:10,
            // interval:2,
            fontsize: 2,
            align: 'center',
            color: 'rgba(200,231,242,1)'
          }
        },
        yAxis: [{
          type: 'value',
          scale: true,
          maxInterval: 0.1,
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(119,212,245,0.2)'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            fontWeight: 10,
            fontsize: 5,
            color: 'rgba(200,231,242,0.6)',
            // formatter: '{value}℃'
            formatter: '{value}'
          },
          max: 0.7,
          min: 0.1

        }],
        series: [
          {
            name: '评分均值',
            type: 'line',
            // stack: '℃',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: 'rgba(245,166,35,1)'
              }
            },
            data: this.tradeDateAvgResult.lineArr,

            markLine: {
              symbol: 'none',
              silent: true,

              data: [{
                name: 'Grading',
                yAxis: 0.5,
                lineStyle: {
                  color: 'rgba(119,212,245,1)'
                },

                label: {
                  position: 'end',
                  formatter: '{b}\n {c}'
                }

              }]
            },

          }]
      }
      tradeDateAvgProbability.setOption(option)
    },
    drawPieChartMethod() {
      getStockNameAndCommentQuantity().then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          const obj = new Object()
          obj.name = res.data.data[i].name
          obj.value = res.data.data[i].value
          this.data.push(obj)
        }
        console.log(`data = ${JSON.stringify(this.data)}`)
        this.drawPieChart()
      })
      // getDayCommentQuantity().then((res) => {
      //   for (let i = 0; i < res.data.data.length; i++) {
      //     const obj = new Object()
      //     obj.name = res.data.data[i].trade_date
      //     obj.value = res.data.data[i].count
      //     this.data.push(obj)
      //   }
      //   this.drawPieChart()
      // })
    },
    drawBarChartMethod() {
	  this.bar.xdata = []
	  this.bar.dataArr = []
	  const params = {
        startTime: moment(this.barArrReq.startTime).format('YYYY-MM-DD'),
        endTime: moment(this.barArrReq.endTime).format('YYYY-MM-DD')
      }
      getDayCommentQuantity(params).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          const date = moment(res.data.data[i].trade_date).format('YYYY-MM-DD')
          const { count } = res.data.data[i]
          this.bar.xdata.push(date)
          this.bar.dataArr.push(count)
        }
        this.drawBarChart()
      })
    },
    drawMultiBarMethod() {
      const params = {
        startTime: moment(this.multiBarArrReq.startTime).format('YYYY-MM-DD'),
        endTime: moment(this.multiBarArrReq.endTime).format('YYYY-MM-DD')
      }
      this.barArr = {
        dateArr: [],
        applArr: [],
        amznArr: [],
        googArr: [],
        msftArr: [],
		tslaArr: [],
		stockTypeList: []
	  }
      // 清除定时器
      clearInterval(this.interval)
      getStockCommentQuantityByDay(params).then((res) => {
        res.data.data.AAPL.forEach((element) => {
          this.barArr.dateArr.push(element.tradeDate)
          this.barArr.applArr.push(element.count)
          this.barArr.stockTypeList.push('AAPL')
        })
        res.data.data.TSLA.forEach((element) => {
          this.barArr.tslaArr.push(element.count)
          this.barArr.stockTypeList.push('TSLA')
        })
        res.data.data.GOOG.forEach((element) => {
          this.barArr.googArr.push(element.count)
          this.barArr.stockTypeList.push('GOOG')
        })
        res.data.data.AMZN.forEach((element) => {
          this.barArr.amznArr.push(element.count)
          this.barArr.stockTypeList.push('AMZN')
        })
        res.data.data.MSFT.forEach((element) => {
          this.barArr.msftArr.push(element.count)
          this.barArr.stockTypeList.push('MSFT')
        })
        this.drawMultiBar()
      })
	},
	drawLineChartMethod() {
	  const params = {
        startTime: moment(this.lineArrReq.startTime).format('YYYY-MM-DD'),
        endTime: moment(this.lineArrReq.endTime).format('YYYY-MM-DD')
      }
      this.lineChartArr = {
        dateArr: [],
        applArr: [],
        amznArr: [],
        googArr: [],
        msftArr: [],
		tslaArr: [],
		stockTypeList: []
      }
	  getStockCommentQuantityByDay(params).then((res) => {
		res.data.data.AAPL.forEach((element) => {
          this.lineChartArr.dateArr.push(element.tradeDate)
          this.lineChartArr.applArr.push(element.count)
          this.lineChartArr.stockTypeList.push('AAPL')
        })
        res.data.data.TSLA.forEach((element) => {
          this.lineChartArr.tslaArr.push(element.count)
          this.lineChartArr.stockTypeList.push('TSLA')
        })
        res.data.data.GOOG.forEach((element) => {
          this.lineChartArr.googArr.push(element.count)
          this.lineChartArr.stockTypeList.push('GOOG')
        })
        res.data.data.AMZN.forEach((element) => {
          this.lineChartArr.amznArr.push(element.count)
          this.lineChartArr.stockTypeList.push('AMZN')
        })
        res.data.data.MSFT.forEach((element) => {
          this.lineChartArr.msftArr.push(element.count)
          this.lineChartArr.stockTypeList.push('MSFT')
		})
		// console.log('lineChartArr data = ' + JSON.stringify(this.lineChartArr))
        this.drawLineChart()
	  })
	},
    getStockName() {
      this.stockTypeList = []
      getStockName().then((res) => {
		  console.log('stock type list: ' + res)
        res.data.data.forEach((element) => {
          const obj = new Object()
          obj.value = element
          obj.label = element
          this.stockTypeList.push(obj)
        })
        console.log("this.stockTypeList = " + JSON.stringify(this.stockTypeList))
      })
    },
    getStockAndProbability() {
      this.lineArr = []
      this.numberList = []
      const params = {
        startTime: moment(this.lineModel.startTime).format('YYYY-MM-DD'),
        endTime: moment(this.lineModel.endTime).format('YYYY-MM-DD'),
        stockName: this.lineModel.stockName
      }
      getStockAndProbability(params).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          this.lineArr.push(res.data.data[i].probability)
          this.numberList.push(i)
        }
        // res.data.data.forEach((element) => {
        //   this.lineArr.push(element.probability)
        // })
        this.StockProbabilityLine()
      })
    },
    getTradeDateAvgProbability() {
      this.tradeDateAvgResult = {
        lineArr: [],
        dateList: []
      }
      const params = {
        startTime: moment(this.tradeDateAvgReq.startTime).format('YYYY-MM-DD'),
        endTime: moment(this.tradeDateAvgReq.endTime).format('YYYY-MM-DD'),
        stockName: this.tradeDateAvgReq.stockName
      }
      getTradeDateAvgProbability(params).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          this.tradeDateAvgResult.lineArr.push(res.data.data[i].avgProbability)
          this.tradeDateAvgResult.dateList.push(res.data.data[i].tradeDate)
        }
        this.drawTradeDateAvgProbability()
      })
    }
  },
  mounted() {
    // this.stockTypeList = []
    this.drawPieChartMethod()
    this.drawBarChartMethod()
	  this.drawMultiBarMethod()
	  this.drawLineChartMethod()
    this.getStockName()
    this.getStockAndProbability()
    this.StockProbabilityLine()
    this.getTradeDateAvgProbability()
  }
}
</script>

<style>
</style>
