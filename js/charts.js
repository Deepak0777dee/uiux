/* ============================================
   CHARTS.JS — Online Education Platform
   Chart.js initializations for all dashboard pages
   ============================================ */

const CHART_COLORS = {
  primary: '#1a3c5e',
  primaryLight: '#2a5a8a',
  accent: '#2cb5a0',
  accentLight: '#5dd9c5',
  warm: '#e8a838',
  warmLight: '#f5c563',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  purple: '#8b5cf6',
  pink: '#ec4899',
  gray: '#64748b',
  orange: '#f97316'
};

const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { usePointStyle: true, padding: 16, font: { size: 11, family: "'Inter', sans-serif" } }
    }
  }
};

/* ---- Dashboard Page Charts ---- */
function initDashboardCharts() {
  const trendCtx = document.getElementById('trendChart');
  if (trendCtx) {
    new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'New Enrollments', data: [28, 35, 42, 55, 48, 62, 58, 72],
            borderColor: CHART_COLORS.warm, backgroundColor: 'rgba(232, 168, 56, 0.06)',
            tension: 0.4, fill: true, borderWidth: 2,
            pointRadius: 3, pointBackgroundColor: CHART_COLORS.warm
          },
          {
            label: 'Active Students', data: [120, 135, 148, 162, 175, 188, 195, 210],
            borderColor: CHART_COLORS.accent, backgroundColor: 'rgba(44, 181, 160, 0.06)',
            tension: 0.4, fill: true, borderWidth: 2,
            pointRadius: 3, pointBackgroundColor: CHART_COLORS.accent
          }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const typeCtx = document.getElementById('instrumentChart');
  if (typeCtx) {
    new Chart(typeCtx, {
      type: 'doughnut',
      data: {
        labels: ['Web Dev', 'Marketing', 'Design', 'Voice', 'Business', 'Flute', 'Theory'],
        datasets: [{
          data: [28, 18, 22, 15, 8, 5, 4],
          backgroundColor: [
            CHART_COLORS.warm, CHART_COLORS.accent, CHART_COLORS.info,
            CHART_COLORS.purple, CHART_COLORS.pink, CHART_COLORS.primary, CHART_COLORS.gray
          ],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }

  const revCtx = document.getElementById('revenueChart');
  if (revCtx) {
    new Chart(revCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Revenue (₹)',
          data: [85000, 92000, 98000, 115000, 108000, 125000, 118000, 142000],
          backgroundColor: CHART_COLORS.accent, borderRadius: 6, barThickness: 28
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => '₹' + (v/1000) + 'k', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const attCtx = document.getElementById('attendanceChart');
  if (attCtx) {
    new Chart(attCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Attendance %',
          data: [92, 88, 95, 90, 87, 78],
          borderColor: CHART_COLORS.info,
          backgroundColor: 'rgba(59, 130, 246, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.info
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { min: 60, max: 100, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + '%', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

/* ---- Reports/Analytics Page Charts ---- */
function initReportsCharts() {
  const monthlyCtx = document.getElementById('monthlyEnrollChart');
  if (monthlyCtx) {
    new Chart(monthlyCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          { label: 'New', data: [28, 35, 42, 55, 48, 62, 58, 72], backgroundColor: CHART_COLORS.warm, borderRadius: 4, barPercentage: 0.6 },
          { label: 'Graduated', data: [5, 8, 6, 12, 9, 15, 10, 14], backgroundColor: CHART_COLORS.accent, borderRadius: 4, barPercentage: 0.6 }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const gradeCtx = document.getElementById('gradeDistChart');
  if (gradeCtx) {
    new Chart(gradeCtx, {
      type: 'bar',
      data: {
        labels: ['Distinction', 'Merit', 'Pass', 'Needs Work', 'Incomplete'],
        datasets: [{
          label: 'Students', data: [42, 68, 85, 24, 8],
          backgroundColor: CHART_COLORS.primary, borderRadius: 4
        }]
      },
      options: {
        ...CHART_DEFAULTS, indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          y: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const retentionCtx = document.getElementById('retentionChart');
  if (retentionCtx) {
    new Chart(retentionCtx, {
      type: 'pie',
      data: {
        labels: ['Continuing', 'Paused', 'Graduated', 'Dropped'],
        datasets: [{
          data: [62, 12, 18, 8],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.warning, CHART_COLORS.accent, CHART_COLORS.danger],
          borderWidth: 0
        }]
      },
      options: { ...CHART_DEFAULTS }
    });
  }

  const revTrendCtx = document.getElementById('revenueTrendChart');
  if (revTrendCtx) {
    new Chart(revTrendCtx, {
      type: 'line',
      data: {
        labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026'],
        datasets: [{
          label: 'Revenue (₹K)',
          data: [250, 285, 310, 340, 380, 420, 455],
          borderColor: CHART_COLORS.success,
          backgroundColor: 'rgba(16, 185, 129, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.success
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => '₹' + v + 'K', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

/* ---- Payments Page Charts ---- */
function initPaymentCharts() {
  const payRevCtx = document.getElementById('payRevenueChart');
  if (payRevCtx) {
    new Chart(payRevCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Collections (₹)',
          data: [85000, 92000, 98000, 115000, 108000, 125000, 118000, 142000],
          borderColor: CHART_COLORS.success,
          backgroundColor: 'rgba(16, 185, 129, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 3, pointBackgroundColor: CHART_COLORS.success
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => '₹' + (v/1000) + 'k', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const invoiceCtx = document.getElementById('invoiceStatusChart');
  if (invoiceCtx) {
    new Chart(invoiceCtx, {
      type: 'doughnut',
      data: {
        labels: ['Paid', 'Pending', 'Overdue', 'Draft'],
        datasets: [{
          data: [65, 18, 8, 9],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.warning, CHART_COLORS.danger, CHART_COLORS.gray],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }
}

/* ---- Attendance Page Charts ---- */
function initAttendanceCharts() {
  const weeklyCtx = document.getElementById('weeklyAttChart');
  if (weeklyCtx) {
    new Chart(weeklyCtx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          { label: 'Present', data: [42, 38, 45, 40, 35, 28], backgroundColor: CHART_COLORS.success, borderRadius: 4 },
          { label: 'Absent', data: [5, 8, 3, 6, 10, 8], backgroundColor: CHART_COLORS.danger, borderRadius: 4 }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, stacked: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const rateCtx = document.getElementById('attRateChart');
  if (rateCtx) {
    new Chart(rateCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [{
          label: 'Attendance Rate %',
          data: [88, 91, 85, 93, 89, 92, 87, 94],
          borderColor: CHART_COLORS.accent,
          backgroundColor: 'rgba(44, 181, 160, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.accent
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { min: 70, max: 100, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + '%', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

/* ---- Exams Page Charts ---- */
function initExamCharts() {
  const gradeCtx = document.getElementById('examGradeChart');
  if (gradeCtx) {
    new Chart(gradeCtx, {
      type: 'bar',
      data: {
        labels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'],
        datasets: [{
          label: 'Students', data: [22, 28, 35, 18, 15, 12, 8, 4],
          backgroundColor: CHART_COLORS.warm, borderRadius: 6, barThickness: 28
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const passCtx = document.getElementById('passRateChart');
  if (passCtx) {
    new Chart(passCtx, {
      type: 'doughnut',
      data: {
        labels: ['Distinction', 'Merit', 'Pass', 'Fail'],
        datasets: [{
          data: [30, 35, 28, 7],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.accent, CHART_COLORS.warning, CHART_COLORS.danger],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }
}

/* ---- Enrollments Page Charts ---- */
function initEnrollmentCharts() {
  const pipeCtx = document.getElementById('enrollPipeChart');
  if (pipeCtx) {
    new Chart(pipeCtx, {
      type: 'bar',
      data: {
        labels: ['Inquiry', 'Trial Booked', 'Trial Done', 'Enrolled', 'Active'],
        datasets: [{
          label: 'Students', data: [45, 32, 28, 22, 18],
          backgroundColor: [CHART_COLORS.gray, CHART_COLORS.info, CHART_COLORS.warning, CHART_COLORS.accent, CHART_COLORS.success],
          borderRadius: 4
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const trendCtx = document.getElementById('enrollTrendChart');
  if (trendCtx) {
    new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Enrollments',
          data: [12, 18, 22, 28, 24, 32, 28, 35],
          borderColor: CHART_COLORS.warm,
          backgroundColor: 'rgba(232, 168, 56, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.warm
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}
