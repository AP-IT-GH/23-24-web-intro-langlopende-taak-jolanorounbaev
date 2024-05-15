// Data gehaald uit dit site
// https://www.statista.com/chart/26210/operational-stock-of-industrial-robots/
const fetchData2 = async () => {

    const data = {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015','2016','2017','2018','2019','2020','2021','2022'],
        datasets: [{
            label: 'Wereldwijde operationele voorraad van industriële robots (in miljoenen)',
            data: [1.1, 1.25, 1.30, 1.45, 1.48, 1.53 , 1.63 , 2.2 ,2.4, 2.7, 3.1 , 3.48, 3.9],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };
    return data;
};

const renderChart2 = async () => {
    const ctx = document.getElementById('myChart2').getContext('2d');
    const data = await fetchData2();

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

document.addEventListener('DOMContentLoaded', renderChart2);
