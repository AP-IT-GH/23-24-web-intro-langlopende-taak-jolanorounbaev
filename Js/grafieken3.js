// Data gehaald uit dit site
// https://www.macrofab.com/blog/industrial-robotics-experiencing-steady-growth/

const fetchData3 = async () => {
    const data = {
        labels: ['2015','2016','2017','2018','2019','2021','2022','2023','2024'],
        datasets: [{
            label: 'Jaarlijkse installaties van industriële robots in ,000 units (254 = 254000 installaties)',
            data: [254, 304, 400, 422, 382, 384, 435, 453, 486, 518],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    };
    return data;
};

const renderChart3 = async () => {
    const ctx = document.getElementById('myChart3').getContext('2d');
    const data = await fetchData3();

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', renderChart3);

