// line chart
const lineAreaChart = document.getElementById('cashChart');
if (lineAreaChart) {
   const lineAreaChartVar = new Chart(lineAreaChart, {
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
               borderRadius: 8
            },
            {
               label: 'Pass Rate',
               data: [80, 70, 70, 80, 70],
               backgroundColor: '#9C8847',
               borderRadius: 8
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

// growthChart

const growthChart = document.getElementById('growthChart');
if (growthChart) {
   const growthChartVar = new Chart(growthChart, {
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
                  color: '#999',
                  font: { size: 14 }
               },
               grid: { display: false },
               border: { display: false }
            },
            x: {
               ticks: {
                  color: '#999',
                  font: { size: 14 },
                  maxRotation: 0,
                  autoSkip: false
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
