// circle_chart 共用變數
var circle_chart = { width: 138, height: 138, type: "radialBar", zoom: {enabled: false}}
var circle_stroke = {lineCap: "round"}
var circle_hollow = { margin: 0, size: "60%" }
var circle_LableTW = {offsetY: 20, show: true, color: "#808080", fontSize: "13px"}
//

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
            return '8'
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
          offsetY:'-15',
          color: circle4_color,
          fontSize: "24px",
          show: true,
          formatter: function () {
            return '6%'
          }
        }
      }
    }
  },
  stroke: circle_stroke,
  labels: ["12月預測"]
};


var chart1 = new ApexCharts(document.querySelector("#circle-chart1"), circle1);
chart1.render();
var chart2 = new ApexCharts(document.querySelector("#circle-chart2"), circle2);
chart2.render();
var chart3 = new ApexCharts(document.querySelector("#circle-chart3"), circle3);
chart3.render();
var chart4 = new ApexCharts(document.querySelector("#circle-chart4"), circle4);
chart4.render();




//------- 估值概觀 ------------------------------------------------------------------------
// 最近12個月相似交易 (智能鄰舍)
var houseinfo_chart1 = {
  colors: ["#FF9C01", '#0050E6','#606060'],
  series: [
    {name: '物件開價', data: [62]}, 
    {name: '實價登錄', data: [, 65, 60, 70, 75, 87, 105, 91, 114, 94, 80]}, 
    {name: '估價', data: [, 35, 41, 36, 26, 45, 48, 52, 53, 41,70]}
  ],
  chart: { type: 'bar', height: 300 ,toolbar: {show: false}, 
    zoom: {
      enabled: false,
    }
  },
  plotOptions: { bar: { horizontal: false, columnWidth: '55%'},},
  dataLabels: {enabled: false},
  stroke: {show: true, width: 2, colors: ['transparent']},
  legend: {
    position: 'top',horizontalAlign: 'right',fontSize: "16px"
  },
  xaxis: {
    categories: ['物件', '1', '2', '3', '4', '5', '6', '7', '8','9','10'],
  },
  yaxis: {title: {text: '單價(萬)'}},
  fill: {opacity: 1},
  tooltip: {enabled: false}
};

var chart5 = new ApexCharts(document.querySelector("#houseinfo1_chart1"), houseinfo_chart1);
chart5.render();





// 最近12個月相似交易 ( 500公尺內 )
var houseinfo_chart2 = {
  colors: ["#FF9C01", '#0050E6','#606060'],
  series: [
    {name: '物件開價', data: [62]}, 
    {name: '實價登錄', data: [, 65, 60, 70, 75, 87, 105, 91, 114, 94, 80]}, 
    {name: '估價', data: [, 35, 41, 36, 26, 45, 48, 52, 53, 41,70]}
  ],
  chart: { type: 'bar', height: 300 ,toolbar: {show: false}, 
    zoom: {
      enabled: false,
    }
  },
  plotOptions: { bar: { horizontal: false, columnWidth: '55%'},},
  dataLabels: {enabled: false},
  stroke: {show: true, width: 2, colors: ['transparent']},
  legend: {
    position: 'top',horizontalAlign: 'right',fontSize: "16px"
  },
  xaxis: {
    categories: ['物件', '1', '2', '3', '4', '5', '6', '7', '8','9','10'],
  },
  yaxis: {title: {text: '單價(萬)'}},
  fill: {opacity: 1},
  tooltip: {
    y: {
      formatter: function (val) {
        return "單價" + val + " 萬"
      }
    }
  }
};

var chart6 = new ApexCharts(document.querySelector("#houseinfo1_chart2"), houseinfo_chart2);
chart6.render();




//------- 智能分析 ------------------------------------------------------------------------
// 最近12個月相似交易 ( 500公尺內 )
var houseinfo2_chart1 = {
  colors: ['#FF9C01','#808080'],
  series: [
    {
      data: [55]
    },
    {
      data: [45, 50, 50, 60]
    }
  ],
  
  chart: {
    id: 'vuechart-example',
    zoom: {
      enabled: false,
    },
    sparkline: {
        enabled: false,
    },
    height: 300 ,toolbar: {show: false},
  },
  markers: {
    size: 8,
    shape: "circle",    //circle or square
  },
  stroke: {
      curve: 'straight',  // smooth
      width: 2,
      dashArray: 2
  },
  xaxis: {
    categories: ['現在','1年後','2年後','3年後']
  },
  yaxis: {title: {text: '單價(萬)'}},
  design: {
    theme: {
      monochrome: {
        enabled: true,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65
      }
    }
  }
};

// 買房單價表現走勢圖
var houseinfo2_chart2 = {
  colors: ['#FF0007','#2BA84A','#0050E6',"#FF9C01",'#606060'],
  series: [
    {name: '社區大樓', data: [30, 32, 36, 34, 40, 42, 45],type: 'line'},
    {name: '郵政區號', data: [50, 50, 53, 55, 60, 65, 62],type: 'line'}, 
    {name: '大安區', data: [40, 45, 45, 50, 55, 45,50],type: 'line'},
    {name: '物件開價', data: [null,null,null,null,null,null,60],type: 'line'},
    {name: '物件估價', data: [null,null,null,null,null,null,70],type: 'line'}
  ],
  chart: {
    sparkline: {
        enabled: false,
    },
    zoom: {
      enabled: false,
    },
    height: 300 ,toolbar: {show: false},
  },
  markers: {
    size: 8,
    shape: "circle",    //circle or square
  },
  stroke: {
      curve: 'straight',  // smooth
      width: [2,2,2,2,2,2,0]
  },
  xaxis: {categories: ['2018Q4','2019Q1','2019Q2','2019Q3','2019Q4','2020Q1','銷售中物件'],
  tickAmount: 1},
  yaxis: {title: {text: '單價(萬)'}, tickAmount: 1,}  
};

// 相似物件價格走勢
var houseinfo2_chart3 = {
  colors: ['#0050E6', '#0050E6', '#2BA84A','#2BA84A','#FF9C01','#606060','#FF9C01','#606060'],
  series: [
    {name: '', data: [50, 30, 20, 40, 20, 20, null]},
    {name: '', data: [60, 40, 30, 50, 30, 30, null]},
    {name: '', data: [70, 60, 50, 60, 50, 50, null]},
    {name: '', data: [80, 70, 60, 70, 60, 60, null]},
    {name: '', data: [null, null, null, null, null, null, 70]},
    {name: '', data: [null, null, null, null, null, null, 60]},
    {name: '', data: [70, 70, 70, 70, 70, 70, 70]},
    {name: '', data: [50, 52, 54, 56, 58, 59, 60]}
  ],
  chart: {
    sparkline: {
        enabled: false,
    },
    zoom: {
      enabled: false,
    },
    height: 300 ,toolbar: {show: false},
  },
  markers: {
    size: [8,8,8,8,8,8,null,null],
    shape: ["circle","circle","circle","circle","circle","circle",null,null],    //circle or square
  },
  stroke: {
      curve: 'straight',  // smooth
      width: [0,0,0,0,0,0,1,1],
      dashArray: [0,0,0,0,0,0,2,2]
  },
  xaxis: {categories: ['2018Q4','2019Q1','2019Q2','2019Q3','2019Q4','2020Q1','銷售中物件'],},
  yaxis: {title: {text: '單價(萬)'},max: 70}  
};

var chart7 = new ApexCharts(document.querySelector("#houseinfo2_chart1"), houseinfo2_chart1);
chart7.render();
var chart8 = new ApexCharts(document.querySelector("#houseinfo2_chart2_y1"), houseinfo2_chart2);
chart8.render();
var chart9 = new ApexCharts(document.querySelector("#similar_chart_y1"), houseinfo2_chart3);
chart9.render();

















//------- 彈跳視窗 - 資料 ------------------------------------------------------------------------
  
//------- 彈跳視窗 - 資料  左邊 ------------

var houseinfoData_chartA1 = {
  colors: ['#808080',"#FF9C01"],
  series: [
  {name: "市場貸款平均值",data: [0,10,20,30,40,50,60],type: 'line'},
  {name: "市場貸款負擔率",data: [12, 11, 14, 40, 42, 50,20],type: 'line'}],
  chart: {height: 180, toolbar: {show: false}, zoom: {
    enabled: false,
  }},
  stroke: {width: 3,curve: ['straight','smooth'],dashArray: [4, 0]},
  dataLabels: { enabled: false},
  xaxis: {categories: ['2014','2015','2016', '2017', '2018', '2019', '2020'],},
  yaxis: {title: {text: '單價(萬)'}}
};
var chart10 = new ApexCharts(document.querySelector("#houseinfoData-chartA1"), houseinfoData_chartA1);
chart10.render();


var houseinfoData_chartA2 = {
  colors: ['#808080','#808080','#808080','#808080',"#FF9C01"],
  series: [
  {name: "",data: [60,60,60,60,60,60,60],type: 'line'},
  {name: "",data: [45,45,45,45,45,45,45],type: 'line'},
  {name: "",data: [30,30,30,30,30,30,30],type: 'line'},
  {name: "",data: [15,15,15,15,15,15,15],type: 'line'},
  {name: "市場貸款負擔率",data: [12, 11, 14, 40, 42, 50,20],type: 'line'}],
  chart: {height: 180, toolbar: {show: false}, zoom: {
    enabled: false,
  }},
  stroke: {width: [1,1,1,1,3],curve: ['straight','straight','straight','straight','smooth'],dashArray: [4, 4,4,4,0]},
  dataLabels: { enabled: false},
  xaxis: {categories: ['台北市','新北市','桃園市','台中市', '台南市', '高雄市']},
  yaxis: {title: {text: '單價(萬)'}}
};
var chart11 = new ApexCharts(document.querySelector("#houseinfoData-chartA2"), houseinfoData_chartA2);
chart11.render();


var houseinfoData_chartA3 = {
  colors: ['#808080','#808080','#808080','#808080',"#FF9C01"],
  series: [
  {name: "",data: [60,60,60,60,60,60,60],type: 'line'},
  {name: "",data: [45,45,45,45,45,45,45],type: 'line'},
  {name: "",data: [30,30,30,30,30,30,30],type: 'line'},
  {name: "",data: [15,15,15,15,15,15,15],type: 'line'},
  {name: "市場貸款負擔率",data: [12, 11, 14, 40, 42, 50,20],type: 'line'}],
  chart: {height: 180, toolbar: {show: false}, zoom: {
    enabled: false,
  }},
  stroke: {width: [1,1,1,1,3],curve: ['straight','straight','straight','straight','smooth'],dashArray: [4, 4,4,4,0]},
  dataLabels: { enabled: false},
  xaxis: {categories: ['台北市','新北市','桃園市','台中市', '台南市', '高雄市']},
  yaxis: {title: {text: '單價(萬)'}}
};
var chart12 = new ApexCharts(document.querySelector("#houseinfoData-chartA3"), houseinfoData_chartA3);
chart12.render();


//------- 彈跳視窗 - 資料  中間 ------------
var houseinfoData_chartB1 = {
  colors: ['#FF9C01','#ABB7BD'],
  series: [
    {data: [50,80,10,85,100]},
    {data: [60,21,70,80,35]}
  ],
  chart: { type: 'bar', height: 230,toolbar: {show: false},
  zoom: {
    enabled: false,
  }
  },
  plotOptions: { bar: { horizontal: false, columnWidth: '55%'}
  },
  dataLabels: {enabled: false},
  stroke: {show: true, width: 2, colors: ['transparent']},
  xaxis: {
    categories: ['2016','2017','2018','2019','2020'],
  },
  yaxis: {title: {text: '佔比率 (%)'}},
  fill: {opacity: 1},
  tooltip:{enabled: false}
};

var chart13 = new ApexCharts(document.querySelector("#houseinfoData-chartB1"), houseinfoData_chartB1);
chart13.render();


var houseinfoData_chartB2 = {
  series: [
    {data: [60,80,70,85,100]},
  ],
  chart: {
    type: 'bar', height: 210 ,toolbar: {show: false},
  zoom: {
    enabled: false,
  }
  },
  plotOptions: { bar: { horizontal: false, columnWidth: '55%'},},
  dataLabels: {enabled: false},
  stroke: {show: true, width: 2, colors: ['transparent']},
  xaxis: {
    categories: ['2016','2017','2018','2019','2020'],
  },
  colors: ['#ABB7BD','#ABB7BD','#ABB7BD','#ABB7BD',"#FF9C01"],
  plotOptions: {
      bar: {
          distributed: true
      }
  },
  yaxis: {title: {text: '單價（萬）'}},
  fill: {opacity: 1},
  tooltip:{enabled: false}
};

var chart14 = new ApexCharts(document.querySelector("#houseinfoData-chartB2"), houseinfoData_chartB2);
chart14.render();


var houseinfoData_chartB3 = {
  series: [
    {data: [60,80,70,85,100]},
  ],
  chart: { type: 'bar', height: 210 ,toolbar: {show: false},
  zoom: {
    enabled: false,
  }},
  plotOptions: { bar: { horizontal: false, columnWidth: '55%'},},
  dataLabels: {enabled: false},
  stroke: {show: true, width: 2, colors: ['transparent']},
  colors: ['#ABB7BD','#ABB7BD','#ABB7BD','#ABB7BD',"#FF9C01"],
  plotOptions: {
      bar: {
          distributed: true
      }
  },
  xaxis: {
    categories: ['0-5年','6-10年','11-15年','16-20年','21-25年'],
  },
  yaxis: {title: {text: '比例(%)'}},
  fill: {opacity: 1},
  tooltip:{enabled: false}
};

var chart15 = new ApexCharts(document.querySelector("#houseinfoData-chartB3"), houseinfoData_chartB3);
chart15.render();