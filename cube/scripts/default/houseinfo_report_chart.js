//------- 專家報告 視窗 ------------------------------------------------------------------------//

//------- 左邊區域  市場負擔能力  ------------ //

// 住宅價格指數 residential_price_index
var Residential_price_index = {
	colors: ['#808080', "#FF9C01"],
	series: [
		{
			name: "市場貸款平均值",
			data: [0, 10, 20, 30, 40, 50, 60],
			type: 'line'
		},
		{
			name: "市場貸款負擔率",
			data: [12, 11, 14, 40, 42, 50, 20],
			type: 'line'
		}
	],
	chart: {
		height: 180,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		}
	},
	stroke: {
		width: 3,
		curve: ['straight', 'smooth'],
		dashArray: [4, 0]
	},
	dataLabels: {
		enabled: false
	},
	xaxis: {
		categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
	},
	yaxis: {
		title: {
			text: '單價(萬)'
		}
	}
};
new ApexCharts(document.querySelector("#houseinfoData-chartA1"), Residential_price_index).render();


// 城市貸款負擔率  City Loan burden
var City_loan_burden = {
	colors: ['#808080', '#808080', '#808080', '#808080', "#FF9C01"],
	series: [
		{
			name: "",
			data: [60, 60, 60, 60, 60, 60, 60],
			type: 'line'
		},
		{
			name: "",
			data: [45, 45, 45, 45, 45, 45, 45],
			type: 'line'
		},
		{
			name: "",
			data: [30, 30, 30, 30, 30, 30, 30],
			type: 'line'
		},
		{
			name: "",
			data: [15, 15, 15, 15, 15, 15, 15],
			type: 'line'
		},
		{
			name: "市場貸款負擔率",
			data: [12, 11, 14, 40, 42, 50, 20],
			type: 'line'
		}
	],
	chart: {
		height: 180,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		}
	},
	stroke: {
		width: [1, 1, 1, 1, 3],
		curve: ['straight', 'straight', 'straight', 'straight', 'smooth'],
		dashArray: [4, 4, 4, 4, 0]
	},
	dataLabels: {
		enabled: false
	},
	xaxis: {
		categories: ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市']
	},
	yaxis: {
		title: {
			text: '單價(萬)'
		}
	}
};

new ApexCharts(document.querySelector("#houseinfoData-chartA2"), City_loan_burden).render();


// 房價所得比  House price income ratio
var House_price_income_ratio = {
	colors: ['#808080', '#808080', '#808080', '#808080', "#FF9C01"],
	series: [
		{
			name: "",
			data: [60, 60, 60, 60, 60, 60, 60],
			type: 'line'
		},
		{
			name: "",
			data: [45, 45, 45, 45, 45, 45, 45],
			type: 'line'
		},
		{
			name: "",
			data: [30, 30, 30, 30, 30, 30, 30],
			type: 'line'
		},
		{
			name: "",
			data: [15, 15, 15, 15, 15, 15, 15],
			type: 'line'
		},
		{
			name: "市場貸款負擔率",
			data: [12, 11, 14, 40, 42, 50, 20],
			type: 'line'
		}
	],
	chart: {
		height: 180,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		}
	},
	stroke: {
		width: [1, 1, 1, 1, 3],
		curve: ['straight', 'straight', 'straight', 'straight', 'smooth'],
		dashArray: [4, 4, 4, 4, 0]
	},
	dataLabels: {
		enabled: false
	},
	xaxis: {
		categories: ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市']
	},
	yaxis: {
		title: {
			text: '單價(萬)'
		}
	}
};

new ApexCharts(document.querySelector("#houseinfoData-chartA3"), House_price_income_ratio).render();



//------- 中間區域  郵政區域市場能力  ------------//

// 市場貸款負擔率  Market loan burden
var Market_loan_burden = {
	colors: ['#FF9C01', '#ABB7BD'],
	series: [
		{
			data: [50, 80, 10, 85, 100]
		},
		{
			data: [60, 21, 70, 80, 35]
		}
	],
	chart: {
		type: 'bar',
		height: 230,
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
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	xaxis: {
		categories: ['2016', '2017', '2018', '2019', '2020']
	},
	yaxis: {
		title: {
			text: '佔比率 (%)'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		enabled: false
	}
};

new ApexCharts(document.querySelector("#houseinfoData-chartB1"), Market_loan_burden).render();


// 停車位市場走勢 Parking market
var Parking_market = {
	series: [
		{
			data: [60, 80, 70, 85, 100]
		}
	],
	chart: {
		type: 'bar',
		height: 210,
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
	xaxis: {
		categories: ['2016', '2017', '2018', '2019', '2020']
	},
	colors: ['#ABB7BD', '#ABB7BD', '#ABB7BD', '#ABB7BD', "#FF9C01"],
	plotOptions: {
		bar: {
			distributed: true
		}
	},
	yaxis: {
		title: {
			text: '單價（萬）'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		enabled: false
	}
};

new ApexCharts(document.querySelector("#houseinfoData-chartB2"), Parking_market).render();



// 區域房屋比  Regional house
var Regional_house = {
	series: [
		{
			data: [60, 80, 70, 85, 100]
		}
	],
	chart: {
		type: 'bar',
		height: 210,
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
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	colors: ['#ABB7BD', '#ABB7BD', '#ABB7BD', '#ABB7BD', "#FF9C01"],
	plotOptions: {
		bar: {
			distributed: true
		}
	},
	xaxis: {
		categories: ['0-5年', '6-10年', '11-15年', '16-20年', '21-25年']
	},
	yaxis: {
		title: {
			text: '比例(%)'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		enabled: false
	}
};

new ApexCharts(document.querySelector("#houseinfoData-chartB3"), Regional_house).render();