import '../scripts/components/navbar.js';
import '../scripts/components/header-content.js';
import '../scripts/components/header-footer.js';
import './components/corona-report.js';

const main = () => {
    const baseUrl = 'https://covid19.mathdro.id/api/countries/Indonesia/';

    const getData = () => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(results => {
                const coronaReportElement = document.querySelector('corona-report');
                coronaReportElement.coronaItem = results;
            })
            .catch(() => showMessage());
    };

    const showMessage = (message = 'Periksa koneksi internet...') =>{
        alert(message);
    };

    getData();
};

export default main;