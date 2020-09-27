// Define data set for all charts
let dataBaby = [1, 10, 5, 2, 20, 30, 45];
let moreDataBaby = [20, 30, 15, 12, 21, 30, 40];
myData = {
  labels: ["2013","2014","2015","2016","2017","2018"],
  datasets: [
  {
    label: "智能鄰舍",
    fill: false,
    borderColor: 'rgb(14, 157, 49)',
    backgroundColor: 'rgb(255,255,255)',
    data: dataBaby },
  {
    label: "市區平均價",
    fill: false,
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'rgb(255, 174, 46)',
    data: moreDataBaby },
    {
    label: "500公尺內",
    fill: true,
    borderColor: false,
    borderWidth: 0,
    backgroundColor: 'rgb(235,240,255)',
    data: [10,15,25,30,50,40]}
]},



// Default chart defined with type: 'line'
Chart.defaults.global.defaultFontFamily = "monospace";
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  borderWidth: 1,
  data: myData });


var ctx1 = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx1, {
    type: 'bubble',
    data: myData });