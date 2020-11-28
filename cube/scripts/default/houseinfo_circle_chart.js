// circle_chart 共用變數
var circle_chart = {
	height: 140,
	plotOptions: {
		pie: {
		  size: 140
		}
	},
	type: "radialBar",
	zoom: {
		enabled: false
	}
}
var circle_stroke = {
  	lineCap: "round"
}
var circle_hollow = {
	margin: 0,
	size: "60%"
}
var circle_LableTW = {
	offsetY: 20,
	show: true,
	color: "#808080",
	fontSize: "13px"
}

var circle1_color = "#2BA84A"
var circle1 = {
	chart: circle_chart,
	series: [90],
	colors: [circle1_color],
	plotOptions: {
		radialBar: {
			hollow: circle_hollow,
			dataLabels: {
				showOn: "always",
				name: circle_LableTW,
				value: {
					offsetY: '-15',
					color: circle1_color,
					fontSize: "24px",
					show: true,
					formatter: function () {
						return '9'
					}
				}
			}
		}
	},
	stroke: circle_stroke,
	labels: ["準確指數"]
};

var circle2_color = "#FF9D0E"
var circle2 = {
	chart: circle_chart,
	series: [50],
	colors: [circle2_color],
	plotOptions: {
		radialBar: {
			hollow: circle_hollow,
			dataLabels: {
				showOn: "always",
				name: circle_LableTW,
				value: {
					offsetY: '-15',
					color: circle2_color,
					fontSize: "24px",
					show: true,
					formatter: function () {
						return '5'
					}
				}
			}
		}
	},
	stroke: circle_stroke,
	labels: ["中性市場"]
};

var circle3_color = "#0050E6"
var circle3 = {
	chart: circle_chart,
	series: [8],
	colors: [circle3_color],
	plotOptions: {
		radialBar: {
			hollow: circle_hollow,
			dataLabels: {
				showOn: "always",
				name: circle_LableTW,
				value: {
					offsetY: '-15',
					color: circle3_color,
					fontSize: "24px",
					show: true,
					formatter: function () {
						return '5'
					}
				}
			}
		}
	},
	stroke: circle_stroke,
	labels: ["相似件數"]
};

var circle4_color = "#FF0006"
var circle4 = {
	chart: circle_chart,
	series: [67],
	colors: [circle4_color],
	plotOptions: {
		radialBar: {
			hollow: circle_hollow,
			dataLabels: {
				showOn: "always",
				name: circle_LableTW,
				value: {
					offsetY: '-15',
					color: circle4_color,
					fontSize: "24px",
					show: true,
					formatter: function () {
						return '5'
					}
				}
			}
		}
	},
	stroke: circle_stroke,
	labels: ["12月預測"]
};


new ApexCharts(document.querySelector("#circle-chart1"), circle1).render();
new ApexCharts(document.querySelector("#circle-chart2"), circle2).render();
new ApexCharts(document.querySelector("#circle-chart3"), circle3).render();
new ApexCharts(document.querySelector("#circle-chart4"), circle4).render();