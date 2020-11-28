//------- 估值概觀 ------------------------------------------------------------------------

// 最近12個月相似交易 (智能鄰舍)
var chart_last_12months = {
	colors: ["#FF9C01", '#0050E6', '#606060'],
	series: [
		{
			name: '物件開價',
			data: [62]
		},
		{
			name: '實價登錄',
			data: [, 65, 60, 70, 75, 87, 105, 91, 114, 94, 80]
		},
		{
			name: '估價',
			data: [, 35, 41, 36, 26, 45, 48, 52, 53, 41, 70]
		}
	],
	chart: {
		type: 'bar',
		height: 300,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '55%'
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	legend: {
		position: 'top',
		horizontalAlign: 'right',
		fontSize: "16px"
	},
	xaxis: {
		categories: ['物件', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
	},
	yaxis: {
		title: {
			text: '單價(萬)'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		enabled: false
	}
};

new ApexCharts(document.querySelector("#houseinfo1_chart1"), chart_last_12months).render();


// 最近12個月相似交易 ( 500公尺內 )
var chart_500m_last_12months = {
	colors: ["#FF9C01", '#0050E6', '#606060'],
	series: [
		{
			name: '物件開價',
			data: [62]
		},
		{
			name: '實價登錄',
			data: [null, 65, 60, 70, 75, 87, 105, 91, 114, 94, 80]
		},
		{
			name: '估價',
			data: [null, 35, 41, 36, 26, 45, 48, 52, 53, 41, 70]
		}
	],
	chart: {
		type: 'bar',
		height: 300,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '55%'
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	legend: {
		position: 'top',
		horizontalAlign: 'right',
		fontSize: "16px"
	},
	xaxis: {
		categories: ['物件', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
	},
	yaxis: {
		title: {
			text: '單價(萬)'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return "單價" + val + " 萬"
			}
		}
	}
};

new ApexCharts(document.querySelector("#houseinfo1_chart2"), chart_500m_last_12months).render();