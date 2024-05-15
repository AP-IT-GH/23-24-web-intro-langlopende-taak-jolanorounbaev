// Data gehaald uit dit site
// https://www.statista.com/chart/30505/share-of-respondents-in-selected-countries-who-use-have-used-investment-robo-advisors-own-smart-appliances/


const fetchData1 = async () => {
    const data = {
        labels: ['China (voor)', 'China (na)', 'Verenigde staten (voor)', 'Verenigde staten (na)', 'Groot brittanië (voor)', 'Groot brittanië (na)','Duitsland (voor)','Duitsland (na)','Zuid-korea (voor)', 'Zuid-korea (na)'],
        datasets: [{
            label: 'Eigendom van slimme apparaten (voor en na 12 maanden) waarden in percentages.',
            data: [42, 55, 24, 31, 21, 25, 19, 26, 18, 31],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
    return data;
};

const renderChart1 = async () => {
    const ctx = document.getElementById('myChart1').getContext('2d');
    const data = await fetchData1();

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

document.addEventListener('DOMContentLoaded', renderChart1);
