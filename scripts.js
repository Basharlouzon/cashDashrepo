document.addEventListener('DOMContentLoaded', function() {
    // Sales Summary Chart
    var ctx1 = document.getElementById('sales-summary-chart').getContext('2d');
    var salesSummaryChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sales Summary',
                data: [12000, 15000, 18000, 20000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Product Performance Chart
    var ctx2 = document.getElementById('product-performance-chart').getContext('2d');
    var productPerformanceChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
            datasets: [{
                label: 'Units Sold',
                data: [150, 130, 120, 100, 90],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Sales by Store Chart
    var ctx3 = document.getElementById('sales-by-store-chart').getContext('2d');
    var salesByStoreChart = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Store 1', 'Store 2', 'Store 3'],
            datasets: [{
                label: 'Sales by Store',
                data: [20000, 15000, 10000],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        }
    });

    // Hourly Sales Chart
    var ctx4 = document.getElementById('hourly-sales-chart').getContext('2d');
    var hourlySalesChart = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
            datasets: [{
                label: 'Hourly Sales',
                data: [3000, 4000, 3500, 5000, 4500, 3000, 2000, 1000, 500],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Sales and Profit Chart
    var ctx5 = document.getElementById('sales-profit-chart').getContext('2d');
    var salesProfitChart = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['Sales', 'Costs', 'Gross Margin'],
            datasets: [{
                label: 'Amount',
                data: [50000, 30000, 20000],
                backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Sales by Payment Method Chart
    var ctx6 = document.getElementById('sales-by-payment-chart').getContext('2d');
    var salesByPaymentChart = new Chart(ctx6, {
        type: 'doughnut',
        data: {
            labels: ['Cash', 'Credit Card', 'Other'],
            datasets: [{
                label: 'Payment Method',
                data: [20000, 25000, 5000],
                backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 206, 86, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        }
    });
});
