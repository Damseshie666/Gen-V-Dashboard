const salesCtx = document.getElementById('salesChart').getContext('2d');
const trafficCtx = document.getElementById('trafficChart').getContext('2d');
const engagementCtx = document.getElementById('engagementChart').getContext('2d');

const salesChart = new Chart(salesCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [30, 20, 50, 40, 60],
            backgroundColor: 'rgba(30, 136, 229, 0.2)',
            borderColor: 'rgba(30, 136, 229, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Overview'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const trafficChart = new Chart(trafficCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Traffic',
            data: [300, 500, 400, 600, 700],
            borderColor: 'rgba(30, 136, 229, 1)',
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Website Traffic'
            }
        }
    }
});

const engagementChart = new Chart(engagementCtx, {
    type: 'pie',
    data: {
        labels: ['Clicks', 'Impressions', 'Engagement'],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Engagement'
            }
        }
    }
});

function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    content.style.display = content.style.display === "block" ? "none" : "block";
}
