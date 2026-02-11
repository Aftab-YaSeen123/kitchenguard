function createCenterTextPlugin(text, fontSize = 24, color = '#535353') {
   return {
      id: 'centerText_' + Math.random(),
      beforeDatasetsDraw(chart) {
         const { width, height, ctx } = chart;
         const chartArea = chart.chartArea;
         ctx.save();

         ctx.font = `bold ${fontSize}px helveticaneue, sans-serif`;
         ctx.textBaseline = 'middle';
         ctx.textAlign = 'center';
         ctx.fillStyle = color;

         // Calculate center of chart area
         const xPos = (chartArea.left + chartArea.right) / 2;
         const yPos = (chartArea.top + chartArea.bottom) / 1.2;
         ctx.fillText(text, xPos, yPos);

         ctx.restore();
      }
   };
}

// line chart
const lineAreaChart = document.getElementById('cashChart');
if (lineAreaChart) {
   new Chart(lineAreaChart, {
      type: 'line',
      data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan'],
         datasets: [
            {
               label: 'VR Scenarios',
               data: [100, 95, 90, 85, 95, 80],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#06215C",
               backgroundColor: context => {
                  const bgColor = ['rgba(128, 0, 128, 0.1)', 'rgba(128, 0, 128, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               borderColor: '#800080',
               pointRadius: 3,
               pointHoverRadius: 6,
               pointHoverBorderWidth: 6,
               pointBackgroundColor: '#800080',
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#d9b6df',
               pointHoverBorderColor: '#fff'
            },
            {
               label: 'Quiz Modules',
               data: [15, 26, 18, 24, 28, 33],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#DA7742",
               backgroundColor: context => {
                  const bgColor = ['rgba(243, 165, 51, 0.1)', 'rgba(243, 165, 51, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointStyle: 'circle',
               borderColor: '#F3A533',
               pointRadius: 0.5,
               pointBackgroundColor: '#689522',
               pointRadius: 3,
               pointHoverRadius: 4,
               pointHoverBorderWidth: 4,
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#F3A533',
               pointHoverBorderColor: '#fff'
            },
            {
               label: 'Video Training',
               data: [50, 62, 55, 60, 65, 70],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#DA7742",
               backgroundColor: context => {
                  const bgColor = ['rgba(156, 136, 71, 0.1)', 'rgba(156, 136, 71, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointStyle: 'circle',
               borderColor: '#9C8847',
               pointRadius: 0.5,
               pointBackgroundColor: '#689522',
               pointRadius: 3,
               pointHoverRadius: 4,
               pointHoverBorderWidth: 4,
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#9C8847',
               pointHoverBorderColor: '#fff'
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false
            },

            datalabels: {
               anchor: 'end',
               align: 'end'
            }
         },
         scales: {
            y: {
               grid: {
                  color: 'transparent',
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               },
               beginAtZero: true
            },
            x: {
               grid: {
                  // color: "transparent",
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               }
            }
         }
      }
   });
}

// line chart 2
const franchisePerformance = document.getElementById('franchisePerformance');
if (franchisePerformance) {
   new Chart(franchisePerformance, {
      type: 'line',
      data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan'],
         datasets: [
            {
               label: 'VR Scenarios',
               data: [100, 95, 90, 85, 95, 80],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#06215C",
               backgroundColor: context => {
                  const bgColor = ['rgba(128, 0, 128, 0.1)', 'rgba(128, 0, 128, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               borderColor: '#800080',
               pointRadius: 3,
               pointHoverRadius: 6,
               pointHoverBorderWidth: 6,
               pointBackgroundColor: '#800080',
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#d9b6df',
               pointHoverBorderColor: '#fff'
            },
            {
               label: 'Quiz Modules',
               data: [15, 26, 18, 24, 28, 33],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#DA7742",
               backgroundColor: context => {
                  const bgColor = ['rgba(243, 165, 51, 0.1)', 'rgba(243, 165, 51, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointStyle: 'circle',
               borderColor: '#F3A533',
               pointRadius: 0.5,
               pointBackgroundColor: '#689522',
               pointRadius: 3,
               pointHoverRadius: 4,
               pointHoverBorderWidth: 4,
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#F3A533',
               pointHoverBorderColor: '#fff'
            },
            {
               label: 'Video Training',
               data: [50, 62, 55, 60, 65, 70],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#DA7742",
               backgroundColor: context => {
                  const bgColor = ['rgba(156, 136, 71, 0.1)', 'rgba(156, 136, 71, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointStyle: 'circle',
               borderColor: '#9C8847',
               pointRadius: 0.5,
               pointBackgroundColor: '#689522',
               pointRadius: 3,
               pointHoverRadius: 4,
               pointHoverBorderWidth: 4,
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#9C8847',
               pointHoverBorderColor: '#fff'
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false
            },

            datalabels: {
               anchor: 'end',
               align: 'end'
            }
         },
         scales: {
            y: {
               grid: {
                  color: 'transparent',
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               },
               beginAtZero: true
            },
            x: {
               grid: {
                  // color: "transparent",
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               }
            }
         }
      }
   });
}
// line chart 3
const contentEngagement = document.getElementById('contentEngagement');
if (contentEngagement) {
   new Chart(contentEngagement, {
      type: 'line',
      data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan'],
         datasets: [
            {
               label: 'VR Scenarios',
               data: [2000, 1900, 1820, 1750, 1900, 1650],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#06215C",
               backgroundColor: context => {
                  const bgColor = ['rgba(128, 0, 128, 0.1)', 'rgba(128, 0, 128, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               borderColor: '#800080',
               pointRadius: 3,
               pointHoverRadius: 6,
               pointHoverBorderWidth: 6,
               pointBackgroundColor: '#800080',
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#d9b6df',
               pointHoverBorderColor: '#fff'
            },
            {
               label: 'Quiz Modules',
               data: [1000, 1250, 1100, 1200, 1300, 1400],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#DA7742",
               backgroundColor: context => {
                  const bgColor = ['rgba(243, 165, 51, 0.1)', 'rgba(243, 165, 51, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointStyle: 'circle',
               borderColor: '#F3A533',
               pointRadius: 0.5,
               pointBackgroundColor: '#689522',
               pointRadius: 3,
               pointHoverRadius: 4,
               pointHoverBorderWidth: 4,
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#F3A533',
               pointHoverBorderColor: '#fff'
            },
            {
               label: 'Video Training',
               data: [300, 550, 400, 500, 600, 700],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#DA7742",
               backgroundColor: context => {
                  const bgColor = ['rgba(156, 136, 71, 0.1)', 'rgba(156, 136, 71, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointStyle: 'circle',
               borderColor: '#9C8847',
               pointRadius: 0.5,
               pointBackgroundColor: '#689522',
               pointRadius: 3,
               pointHoverRadius: 4,
               pointHoverBorderWidth: 4,
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#9C8847',
               pointHoverBorderColor: '#fff'
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false
            },

            datalabels: {
               anchor: 'end',
               align: 'end'
            }
         },
         scales: {
            y: {
               grid: {
                  color: 'transparent',
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               },
               beginAtZero: true
            },
            x: {
               grid: {
                  // color: "transparent",
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               }
            }
         }
      }
   });
}

// line chart 3    2 line
const trainingPath = document.getElementById('trainingPath');
if (trainingPath) {
   new Chart(trainingPath, {
      type: 'line',
      data: {
         labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
         datasets: [
            {
               label: 'VR Scenarios',
               data: [60, 90, 70, 90, 70, 100],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               backgroundColor: context => {
                  const bgColor = ['rgba(128, 0, 128, 0.1)', 'rgba(128, 0, 128, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               borderColor: '#800080',
               pointRadius: 3,
               pointHoverRadius: 6,
               pointHoverBorderWidth: 6,
               pointBackgroundColor: '#800080',
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#d9b6df',
               pointHoverBorderColor: '#fff'
            },

            {
               label: 'Video Training',
               data: [20, 40, 20, 40, 20, 40],
               tension: 0.5,
               fill: true,
               borderWidth: 1,

               backgroundColor: context => {
                  const bgColor = ['rgba(156, 136, 71, 0.1)', 'rgba(156, 136, 71, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointStyle: 'circle',
               borderColor: '#DA7742',
               pointRadius: 0.5,
               pointBackgroundColor: '#689522',
               pointRadius: 3,
               pointHoverRadius: 4,
               pointHoverBorderWidth: 4,
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#DA7742',
               pointHoverBorderColor: '#fff'
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false
            },

            datalabels: {
               anchor: 'end',
               align: 'end'
            }
         },
         scales: {
            y: {
               grid: {
                  color: 'transparent',
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               },
               beginAtZero: true
            },
            x: {
               grid: {
                  // color: "transparent",
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               }
            }
         }
      }
   });
}

// line chart 4   2 line
const performanceMetrics = document.getElementById('performanceMetrics');
if (performanceMetrics) {
   new Chart(performanceMetrics, {
      type: 'line',
      data: {
         labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4', 'Session 5'],
         datasets: [
            {
               label: 'VR Scenarios',
               data: [100, 70, 100, 65, 100, 65],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               backgroundColor: context => {
                  const bgColor = ['rgba(128, 0, 128, 0.1)', 'rgba(128, 0, 128, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               borderColor: '#800080',
               pointRadius: 3,
               pointHoverRadius: 6,
               pointHoverBorderWidth: 6,
               pointBackgroundColor: '#800080',
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#d9b6df',
               pointHoverBorderColor: '#fff'
            },

            {
               label: 'Video Training',
               data: [60, 20, 50, 20, 22, 65],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               backgroundColor: context => {
                  const bgColor = ['rgba(156, 136, 71, 0.1)', 'rgba(156, 136, 71, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointStyle: 'circle',
               borderColor: '#9C8847',
               pointRadius: 0.5,
               pointBackgroundColor: '#689522',
               pointRadius: 3,
               pointHoverRadius: 4,
               pointHoverBorderWidth: 4,
               pointBorderColor: 'transparent',
               pointHoverBackgroundColor: '#9C8847',
               pointHoverBorderColor: '#fff'
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false
            },

            datalabels: {
               anchor: 'end',
               align: 'end'
            }
         },
         scales: {
            y: {
               grid: {
                  color: 'transparent',
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               },
               beginAtZero: true
            },
            x: {
               grid: {
                  // color: "transparent",
                  borderColor: 'rgba(0, 35, 59, 0.1)'
               }
            }
         }
      }
   });
}

// doughnut chart
const moduleDistribution = document.getElementById('moduleDistribution');
if (moduleDistribution) {
   new Chart(moduleDistribution, {
      type: 'doughnut',
      data: {
         labels: ['Video Training: 42.3%', 'Quizzes: 35.7%', 'VR Training: 22.0%'],
         datasets: [
            {
               data: [33300, 66300, 40180],
               backgroundColor: ['#9C8847', '#F3A533', '#800080'],
               borderWidth: 0,
               cutout: '68%',
               borderRadius: 15,
               spacing: 10
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false,
               position: 'right',
               labels: {
                  usePointStyle: true,
                  font: { size: 14 }
               }
            },
            tooltip: {
               callbacks: {
                  label: function (context) {
                     let value = context.raw.toLocaleString();
                     return `${context.label}: $${value}`;
                  }
               }
            }
         }
      }
   });
}

// doughnut chart 2
const regionalDistribution = document.getElementById('regionalDistribution');
if (regionalDistribution) {
   new Chart(regionalDistribution, {
      type: 'doughnut',
      data: {
         labels: ['Video Training: 42.3%', 'Quizzes: 35.7%', 'VR Training: 22.0%'],
         datasets: [
            {
               data: [23300, 66300, 20180, 13300],
               backgroundColor: ['#9C8847', '#F3A533', '#800080', '#EB5F5E'],
               borderWidth: 0,
               cutout: '68%',
               borderRadius: 15,
               spacing: 10
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false,
               position: 'right',
               labels: {
                  usePointStyle: true,
                  font: { size: 14 }
               }
            },
            tooltip: {
               callbacks: {
                  label: function (context) {
                     let value = context.raw.toLocaleString();
                     return `${context.label}: $${value}`;
                  }
               }
            }
         }
      }
   });
}

// doughnut chart 3
const moduleCategory = document.getElementById('moduleCategory');
if (moduleCategory) {
   new Chart(moduleCategory, {
      type: 'doughnut',
      data: {
         labels: ['Video Training: 42.3%', 'Quizzes: 35.7%', 'VR Training: 22.0%'],
         datasets: [
            {
               data: [40.8, 30.6, 28.6, 15.8],
               backgroundColor: ['#133F5C', '#F3A533', '#800080', '#EB5F5E'],
               borderWidth: 0,
               cutout: '68%',
               borderRadius: 15,
               spacing: 10
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false,
               position: 'right',
               labels: {
                  usePointStyle: true,
                  font: { size: 14 }
               }
            },
            tooltip: {
               callbacks: {
                  label: function (context) {
                     let value = context.raw.toLocaleString();
                     return `${context.label}: $${value}`;
                  }
               }
            }
         }
      }
   });
}

// doughnut chart 4
const certificationCate = document.getElementById('certificationCate');
if (certificationCate) {
   new Chart(certificationCate, {
      type: 'doughnut',
      data: {
         labels: ['Video Training: 42.3%', 'Quizzes: 35.7%', 'VR Training: 22.0%'],
         datasets: [
            {
               data: [40.8, 30.6, 28.6, 15.8],
               backgroundColor: ['#133F5C', '#F3A533', '#800080', '#EB5F5E'],
               borderWidth: 0,
               cutout: '68%',
               borderRadius: 15,
               spacing: 10
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false,
               position: 'right',
               labels: {
                  usePointStyle: true,
                  font: { size: 14 }
               }
            },
            tooltip: {
               callbacks: {
                  label: function (context) {
                     let value = context.raw.toLocaleString();
                     return `${context.label}: $${value}`;
                  }
               }
            }
         }
      }
   });
}

// doughnut chart 5
const overallCompletion = document.getElementById('overallCompletion');
if (overallCompletion) {
   new Chart(overallCompletion, {
      type: 'doughnut',
      data: {
         datasets: [
            {
               data: [87, 13],
               backgroundColor: ['#93D033', '#EEFFE1'],
               borderWidth: 0,
               cutout: '70%'
            }
         ]
      },
      options: {
         rotation: 270,
         circumference: 180,
         plugins: {
            legend: { display: true },
            tooltip: { enabled: true }
         },
         aspectRatio: 2,
         responsive: true
      },
      plugins: [createCenterTextPlugin('87%', 38, '#4a4a4a')]
   });
}

// doughnut chart 6
const categoryProgress = document.getElementById('categoryProgress');
if (categoryProgress) {
   new Chart(categoryProgress, {
      type: 'doughnut',
      data: {
         labels: ['Food Safety', 'Equipment Safety', 'Hygiene Standards', 'Emergency Procedures', 'Team Communication'],
         datasets: [
            {
               data: [30, 15, 20, 20, 25],
               backgroundColor: ['#133F5C', '#9C8847', '#F3A533', '#800080', '#EB5F5E'],
               borderWidth: 0,
               cutout: '68%',
               borderRadius: 15,
               spacing: 10
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false,
               position: 'right',
               labels: {
                  usePointStyle: true,
                  font: { size: 14 }
               }
            },
            tooltip: {
               callbacks: {
                  label: function (context) {
                     let value = context.raw.toLocaleString();
                     return `${context.label}: $${value}`;
                  }
               }
            }
         }
      }
   });
}

// bar chart
const learnEffectiveness = document.getElementById('learnEffectiveness');
if (learnEffectiveness) {
   new Chart(learnEffectiveness, {
      type: 'bar',
      data: {
         labels: ['Basic Safety', 'Food Handling', 'Equipment', 'Emergency', 'Leadership'],
         datasets: [
            {
               label: 'Completion Rate',
               data: [90, 80, 80, 90, 80],
               backgroundColor: '#800080',
               borderRadius: 4,
               // barThickness: 25,
               categoryPercentage: 0.5,
               barPercentage: 0.9
            },
            {
               label: 'Pass Rate',
               data: [80, 70, 70, 80, 70],
               backgroundColor: '#9C8847',
               borderRadius: 4,
               // barThickness: 25,
               categoryPercentage: 0.5,
               barPercentage: 0.9
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false
            },

            datalabels: {
               anchor: 'end',
               align: 'end'
            }
         },
         scales: {
            y: {
               beginAtZero: true
            },

            x: {
               categoryPercentage: 0.8, // Default is 0.8 (80%)
               barPercentage: 0.6 // Default is 0.9 (90%)
            }
         }
      }
   });
}

// bar chart 2
const performanceComparison = document.getElementById('performanceComparison');
if (performanceComparison) {
   new Chart(performanceComparison, {
      type: 'bar',
      data: {
         labels: ['Completion Rate', 'Avg Score', 'Employee Count', 'VR Participation'],
         datasets: [
            {
               data: [100, 95, 62, 78],
               backgroundColor: '#800080',
               label: 'Series 1',
               borderRadius: 6,
               barPercentage: 0.8,
               categoryPercentage: 0.6
            },
            {
               backgroundColor: '#9C8847',
               label: 'Series 2',
               data: [93, 88, 58, 85],
               borderRadius: 6,
               barPercentage: 0.8,
               categoryPercentage: 0.6
            },
            {
               backgroundColor: '#133F5C',
               label: 'Series 2',
               data: [93, 88, 58, 85],
               borderRadius: 6,
               barPercentage: 0.8,
               categoryPercentage: 0.6
            }
         ]
      },
      options: {
         responsive: true,
         plugins: {
            legend: {
               display: false // Matches the clean look of image_26f9ad.png
            }
         },
         scales: {
            x: {
               grid: {
                  display: false // Removes vertical grid lines
               },
               ticks: {
                  color: '#666',
                  font: { size: 14 }
               }
            },
            y: {
               beginAtZero: true,
               max: 120, // Matches the scale in image_26f9ad.png
               ticks: {
                  stepSize: 20,
                  color: '#666'
               },
               grid: {
                  color: '#e2e8f0' // Subtle horizontal lines
               }
            }
         }
      }
   });
}

// bar chart 3
const completionRates = document.getElementById('completionRates');
if (completionRates) {
   const dataValues = [92, 80, 80, 85];
   const barColors = ['#13B9C9', '#DC6803', '#93D033', '#800080'];
   new Chart(completionRates, {
      type: 'bar',
      data: {
         labels: ['Videos', 'Quizzes', 'VR Training', 'Training Path'],
         datasets: [
            {
               data: dataValues,
               backgroundColor: barColors,
               borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0
               },
               borderSkipped: false,
               barThickness: function () {
                  return window.innerWidth <= 767 ? 40 : 110;
               }
            }
         ]
      },
      options: {
         responsive: true,
         plugins: {
            legend: {
               display: false
            },
            tooltip: {
               enabled: true
            }
         },
         scales: {
            y: {
               beginAtZero: true,
               max: 100,
               ticks: {
                  stepSize: 50,
                  color: '#535353'
               },
               grid: {
                  drawBorder: false,
                  color: '#f0f0f0'
               }
            },
            x: {
               grid: {
                  display: false
               },
               ticks: {
                  color: '#666'
               }
            }
         }
      }
   });
}

// bar chart 4
const quizPerformance = document.getElementById('quizPerformance');
if (quizPerformance) {
   new Chart(quizPerformance, {
      type: 'bar',
      data: {
         labels: ['Food Safety', 'Equipment Safety', 'Hygiene Standards', 'Emergency Procedures', 'Testmark', 'Problem Solving', 'Communication', 'Leadership'],
         datasets: [
            {
               data: [100, 78, 68, 65, 72, 78, 78, 78],
               backgroundColor: '#98d045',
               borderSkipped: false,
               barPercentage: 0.9,
               borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0
               },
               barThickness: function () {
                  return window.innerWidth <= 992 ? 20 : 100;
               }
            }
         ]
      },
      options: {
         plugins: {
            legend: { display: false }
         },
         scales: {
            y: {
               beginAtZero: true,
               max: 100,
               ticks: {
                  stepSize: 25,
                  color: '#535353'
               },
               grid: {
                  drawBorder: false,
                  color: '#eee'
               }
            },
            x: {
               grid: {
                  display: false // Hide vertical grid lines
               },
               ticks: {
                  callback: function (value, index) {
                     const label = this.getLabelForValue(value);
                     if (label.length > 10) {
                        return label.split(' ');
                     }
                     return label;
                  },
                  display: function (context) {
                     return context.chart.width > 768;
                  },
                  color: '#535353',
                  font: { size: 16 }
               }
            }
         }
      }
   });
}

// bar chart 5
const certificationProgress = document.getElementById('certificationProgress');
if (certificationProgress) {
   new Chart(certificationProgress, {
      type: 'bar',
      data: {
         labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
         datasets: [
            {
               data: [145, 110, 120, 95, 140, 155],
               backgroundColor: '#800080',
               borderSkipped: false,
               barThickness: 22,
               borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0
               }
            }
         ]
      },
      options: {
         plugins: {
            legend: { display: false }
         },
         scales: {
            y: {
               beginAtZero: true,
               max: 160,
               ticks: {
                  // callback: function (value) {
                  //    if ([0, 20, 40, 160].includes(value)) return value === 20 ? 2 : value === 40 ? 4 : value;
                  //    return null;
                  // },
                  stepSize: 20
               },
               grid: {
                  drawBorder: false,
                  color: '#e0e0e0'
               }
            },
            x: {
               grid: { display: false },
               ticks: { color: '#535353' }
            }
         }
      }
   });
}

// bar chart 6
const learningVelocity = document.getElementById('learningVelocity');
if (learningVelocity) {
   new Chart(learningVelocity, {
      type: 'bar',
      data: {
         labels: ['M', 'T', 'W', 'T', 'F', 'S', 'Today'],
         datasets: [
            {
               data: [45, 85, 35, 100, 85, 45, 35],

               backgroundColor: ['#f0fde0', '#98d045', '#f0fde0', '#98d045', '#98d045', '#f0fde0', '#f0fde0'],
               borderRadius: 8,
               borderSkipped: false,
               barThickness: function () {
                  return window.innerWidth <= 992 ? 15 : 60;
               }
            }
         ]
      },
      options: {
         plugins: {
            legend: { display: false }
         },
         scales: {
            y: {
               display: false,
               beginAtZero: true
            },
            x: {
               grid: { display: false },
               border: { display: false },
               ticks: {
                  color: '#535353',
                  font: {
                     size: 14,
                     weight: '500'
                  }
               }
            }
         },
         events: []
      }
   });
}

// bar chart 7
const completionForecast = document.getElementById('completionForecast');
if (completionForecast) {
   new Chart(completionForecast, {
      type: 'bar',
      data: {
         labels: ['Field Tech', 'Kitchen Cleaner', 'Supervisor'],
         datasets: [
            {
               label: 'Metric 1',
               data: [100, 95, 62],
               backgroundColor: '#800080',
               barPercentage: 0.8,
               categoryPercentage: function () {
                  return window.innerWidth <= 992 ? 0.5 : 0.3;
               },
               borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0
               }
            },
            {
               label: 'Metric 2',
               data: [92, 88, 58],
               backgroundColor: '#9C8847',
               barPercentage: 0.8,
               categoryPercentage: function () {
                  return window.innerWidth <= 992 ? 0.5 : 0.3;
               },
               borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0
               }
            },
            {
               label: 'Metric 3',
               data: [92, 88, 54],
               backgroundColor: '#133F5C',
               borderRadius: 5,
               barPercentage: 0.8,
               categoryPercentage: function () {
                  return window.innerWidth <= 992 ? 0.5 : 0.3;
               },
               borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0
               }
            }
         ]
      },
      options: {
         plugins: {
            legend: { display: false }
         },
         scales: {
            y: {
               beginAtZero: true,
               max: 120,
               ticks: {
                  stepSize: 20
               },
               grid: {
                  color: '#C0BEBE',
                  drawBorder: false
               }
            },
            x: {
               grid: {
                  display: false
               },
               font: {
                  size: 20
               },
               ticks: {
                  display: function (context) {
                     return context.chart.width > 768;
                  },
                  color: '#535353',
                  font: {
                     size: 16
                  }
               }
            }
         }
      }
   });
}

// bar chart 8
const weeklyCompletion = document.getElementById('weeklyCompletion');
if (weeklyCompletion) {
   new Chart(weeklyCompletion, {
      type: 'bar',
      data: {
         labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
         datasets: [
            {
               label: 'Completion Rate',
               data: [90, 80, 80, 90],
               backgroundColor: '#800080',
               borderRadius: 4,
               // barThickness: 25,
               categoryPercentage: 0.3,
               barPercentage: 0.8
            },
            {
               label: 'Pass Rate',
               data: [80, 70, 70, 80],
               backgroundColor: '#9C8847',
               borderRadius: 4,
               // barThickness: 25,
               categoryPercentage: 0.3,
               barPercentage: 0.8
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: {
               display: false
            },

            datalabels: {
               anchor: 'end',
               align: 'end'
            }
         },
         scales: {
            y: {
               beginAtZero: true
            },

            x: {
               categoryPercentage: 0.8, // Default is 0.8 (80%)
               barPercentage: 0.6 // Default is 0.9 (90%)
            }
         }
      }
   });
}

// bar chart 9
const vrSession = document.getElementById('vrSession');
if (vrSession) {
   new Chart(vrSession, {
      type: 'bar',
      data: {
         labels: ['Kitchen Layout', 'Knife Safety', 'Equipment Basics', 'Fire Safety', 'Food Handling', 'Food Handling'],
         datasets: [
            {
               data: [100, 78, 68, 65, 72, 78],
               backgroundColor: '#98d045',
               borderSkipped: false,
               barPercentage: 0.9,
               borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0
               },
               barThickness: function () {
                  return window.innerWidth <= 992 ? 20 : 100;
               }
            }
         ]
      },
      options: {
         plugins: {
            legend: { display: false }
         },
         scales: {
            y: {
               beginAtZero: true,
               max: 100,
               ticks: {
                  stepSize: 25,
                  color: '#535353'
               },
               grid: {
                  drawBorder: false,
                  color: '#eee'
               }
            },
            x: {
               grid: {
                  display: false // Hide vertical grid lines
               },
               ticks: {
                  callback: function (value, index) {
                     const label = this.getLabelForValue(value);
                     if (label.length > 20) {
                        return label.split(' ');
                     }
                     return label;
                  },
                  display: function (context) {
                     return context.chart.width > 768;
                  },
                  color: '#535353',
                  font: { size: 16 }
               }
            }
         }
      }
   });
}

//  line chart 1
const growthChart = document.getElementById('growthChart');
if (growthChart) {
   new Chart(growthChart, {
      type: 'line',
      data: {
         labels: ['', '', 'Week 1', '', 'Week 2', '', 'Week 3', '', 'Week 4', '', ''],
         datasets: [
            {
               label: 'VR Scenarios',
               data: [1500, 3200, 2300, 2450, 1800, 1600, 2850, 2700, 1900, 2000, 1300, 1400],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               // backgroundColor: "#06215C",
               backgroundColor: context => {
                  const bgColor = ['rgba(104, 149, 34, 0.6)', 'rgba(104, 149, 34, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointRadius: context => (context.dataIndex === 6 ? 10 : 0),
               pointBackgroundColor: '#7AA33E',
               pointBorderColor: '#fff',
               pointBorderWidth: 6,
               pointHoverRadius: 10,
               borderColor: '#7AA33E',
               borderWidth: 3,
               tension: 0.5
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
            legend: { display: false }
         },
         scales: {
            y: {
               min: 0,
               max: 4000,
               ticks: {
                  stepSize: 1000,
                  callback: value => (value === 0 ? '0' : value / 1000 + 'k'),
                  color: '#535353',
                  font: { size: 16 }
               },
               grid: { display: false },
               border: { display: false }
            },
            x: {
               ticks: {
                  color: '#535353',
                  font: { size: 16 },
                  maxRotation: 0,
                  autoSkip: false,
                  display: function (context) {
                     return context.chart.width > 768;
                  }
               },
               grid: {
                  drawOnChartArea: true,
                  color: '#ddd',
                  borderDash: [5, 5],
                  drawTicks: false
               },
               border: { display: false }
            }
         }
      }
   });
}

// line chart 2
const peerComparison = document.getElementById('peerComparison');
if (peerComparison) {
   new Chart(peerComparison, {
      type: 'line',
      data: {
         labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
         datasets: [
            {
               label: 'Activity',
               data: [1500, 3600, 2200, 1800, 3100, 2800, 1800, 1400],
               tension: 0.5,
               fill: true,
               borderWidth: 1,
               backgroundColor: context => {
                  const bgColor = ['rgba(104, 149, 34, 0.6)', 'rgba(104, 149, 34, 0)'];
                  if (!context.chart.chartArea) {
                     return;
                  }
                  const {
                     ctx,
                     data,
                     chartArea: { top, bottom }
                  } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  const colorTranches = 1 / (bgColor.length - 1);
                  // console.log(colorTranches);
                  for (let i = 0; i < bgColor.length; i++) {
                     gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                  }
                  return gradientBg;
               },
               pointRadius: [0, 0, 0, 0, 10, 0, 0],
               pointBackgroundColor: '#7AA33E',
               pointBorderColor: '#fff',
               pointBorderWidth: 6,
               pointHoverRadius: 10,
               borderColor: '#7AA33E',
               borderWidth: 3,
               tension: 0.5
            }
         ]
      },
      options: {
         plugins: {
            legend: { display: false }
         },
         scales: {
            y: {
               beginAtZero: true,
               max: 4000,
               ticks: {
                  stepSize: 1000,
                  callback: value => (value === 0 ? 0 : value / 1000 + 'k')
               },
               grid: {
                  display: false
               }
            },
            x: {
               grid: {
                  display: true,
                  color: '#C0BEBE',
                  borderDash: [5, 5],
                  drawTicks: false
               },
               ticks: {
                  display: function (context) {
                     return context.chart.width > 768;
                  },
                  padding: 20,
                  color: '#535353',
                  font: { size: 16 }
               }
            }
         }
      }
   });
}

// radar chart
const skillDevelopment = document.getElementById('skillDevelopment');
if (skillDevelopment) {
   new Chart(skillDevelopment, {
      type: 'radar',
      data: {
         labels: ['Food Safety', 'Equipment', 'Hygiene', 'Emergency', 'Teamwork', 'Communication'],
         datasets: [
            {
               data: [5, 4.5, 4.8, 4.2, 4.5, 4.6], // Values based on your image
               backgroundColor: 'rgba(152, 208, 69, 0.2)', // Light green fill
               borderColor: '#80B52B', // Solid green line
               borderWidth: 2,
               pointBackgroundColor: '#EEFFE1', // Green dots
               pointRadius: 4,
               lineTension: 0.1 // Keeps lines straight
            }
         ]
      },
      options: {
         plugins: {
            legend: { display: false }
         },
         scales: {
            r: {
               angleLines: {
                  display: true,
                  color: '#C0BEBE'
               },
               grid: {
                  color: '#C0BEBE'
               },
               suggestedMin: 0,
               suggestedMax: 5,
               ticks: {
                  stepSize: 2.5,
                  display: true, // Shows the 0, 2.5, 5 labels in center
                  backdropColor: 'transparent'
               },
               pointLabels: {
                  color: '#666',
                  font: {
                     size: 16
                  }
               }
            }
         }
      }
   });
}
