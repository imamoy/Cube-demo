//------- 智能分析 ------------------------------------------------------------------------
// 房價走勢預估圖 - 商辦  Office_price_trend
var Office_price_trend = {
	chart: {
		height: 350,
		type: "line",
		stacked: false,
		toolbar: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	colors: ['#808080','#255aee','#FF9C01'],
	series: [
		{
			name: "物件估價",
			data: [45, 50, 50, 60]
		},
		{
			name: "租金預估",
			data: [1300, 1500, 1800, 2400]
		},
		{
			name: "物件開價",
			data: [55]
		}
	],
	markers: {
		size: 8,
		shape: "circle", //circle or square
	},
	stroke: {
		curve: 'straight', // smooth
		width: [2,2,0],
		dashArray: [2,2,0]
	},
	xaxis: {
		categories: ['現在', '1年後', '2年後', '3年後']
	},
	yaxis: [
		{
			axisTicks: {
				show: true
			},
			labels: {
				style: {
					colors: "#808080"
				}
			},
			title: {
				text: '單價(萬)',
				style: {
					color: "#808080"
				}
			}
		},
		{
			opposite: true,
			axisTicks: {
				show: true
			},
			labels: {
				style: {
					colors: "#255aee"
				}
			},
			title: {
				text: '單價(元)',
				style: {
					color: "#255aee"
				}
			}
		}
	],
	tooltip: {
		shared: false,
		intersect: true,
		x: {
			show: false
		}
	},
	legend: {
		horizontalAlign: "left",
		offsetX: 40
	}
};


// 買房單價表現走勢圖  Buy_House_unit_price
var Buy_house_unit_price = {
	colors: ['#FF0007', '#2BA84A', '#0050E6', "#FF9C01", '#606060'],
	series: [
		{
			name: '社區大樓',
			data: [30, 32, 36, 34, 40, 42, 45],
			type: 'line'
		},
		{
			name: '郵政區號',
			data: [50, 50, 53, 55, 60, 65, 62],
			type: 'line'
		},
		{
			name: '大安區',
			data: [40, 45, 45, 50, 55, 45, 50],
			type: 'line'
		},
		{
			name: '物件開價',
			data: [null, null, null, null, null, null, 60],
			type: 'line'
		},
		{
			name: '物件估價',
			data: [null, null, null, null, null, null, 70],
			type: 'line'
		}
	],
	chart: {
		sparkline: {
			enabled: false
		},
		zoom: {
			enabled: false
		},
		height: 300,
		toolbar: {
			show: false
		},
	},
	markers: {
		size: 8,
		shape: "circle" //circle or square
	},
	stroke: {
		curve: 'straight', // smooth
		width: [2, 2, 2, 2, 2, 2, 0]
	},
	xaxis: {
		categories: ['2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1', '銷售中物件'],
		tickAmount: 1
	},
	yaxis: {
		title: {
			text: '單價(萬)'
		},
		tickAmount: 1
	}
};


// 相似物件價格走勢  Price_trend_of_similar
var Price_trend_of_similar = {
	colors: ['#0050E6', '#0050E6', '#2BA84A', '#2BA84A', '#FF9C01', '#606060', '#FF9C01', '#606060'],
	series: [
		{
			data: [50, 30, 20, 40, 20, 20, null]
		},
		{
			data: [60, 40, 30, 50, 30, 30, null]
		},
		{
			data: [70, 60, 50, 60, 50, 50, null]
		},
		{
			data: [80, 70, 60, 70, 60, 60, null]
		},
		{
			data: [null, null, null, null, null, null, 70]
		},
		{
			data: [null, null, null, null, null, null, 60]
		},
		{
			data: [70, 70, 70, 70, 70, 70, 70]
		},
		{
			data: [50, 52, 54, 56, 58, 59, 60]
		}
	],
	chart: {
		sparkline: {
			enabled: false
		},
		zoom: {
			enabled: false
		},
		height: 300,
		toolbar: {
			show: false
		},
	},
	markers: {
		size: [8, 8, 8, 8, 8, 8, null, null],
		shape: ["circle", "circle", "circle", "circle", "circle", "circle", null, null], //circle or square
	},
	stroke: {
		curve: 'straight', // smooth
		width: [0, 0, 0, 0, 0, 0, 1, 1],
		dashArray: [0, 0, 0, 0, 0, 0, 2, 2]
	},
	xaxis: {
		categories: ['2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1', '銷售中物件']
	},
	yaxis: {
		title: {
			text: '單價(萬)'
		},
		max: 70
	}
};

new ApexCharts(document.querySelector("#houseinfo2_chart1"), House_price_trend ).render();
new ApexCharts(document.querySelector("#houseinfo2_chart2_y1"), Buy_house_unit_price ).render();
new ApexCharts(document.querySelector("#similar_chart_y1"), Price_trend_of_similar ).render();
new ApexCharts(document.querySelector("#houseinfo2_office_chart"), Office_price_trend ).render();