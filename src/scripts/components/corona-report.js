import css from 'bootstrap/dist/css/bootstrap.min.css';
import customCss from '../../style/style.css';

class CoronaReportItem extends HTMLElement{

    set coronaItem(item){
        this._coronaItem = item;
        this.render();
    }

    render(){
        console.log(css);
        const dateUpdated = new Date(this._coronaItem.lastUpdate);
        const monthNames = ['Januari','Februari','Maret','Aprl','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
        this.innerHTML = '';
        this.innerHTML = `
                                    <style>
                                        ${css}
                                        ${customCss}
                                    </style>
                                    <div class="container mt-5">
                                        <div class="row flex-column-reverse flex-lg-row">
                                            <div class="col-lg-8">
                                                <div class="row text-white align-items-center">
                                                    <div class="col-12 col-lg-4">
                                                        <div class="card text-center bg-dead">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._coronaItem.deaths.value}</h4>
                                                            <p class="card-text">Meninggal</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-lg-4 my-3 my-lg-0">
                                                        <div class="card text-center bg-confirmed">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._coronaItem.confirmed.value}</h4>
                                                            <p class="card-text">Dirawat</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-lg-4">
                                                        <div class="card text-center bg-recovered">
                                                            <div class="card-body">
                                                            <h4 class="card-title">${this._coronaItem.recovered.value}</h4>
                                                            <p class="card-text">Sembuh</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 text-white report text-center text-lg-left mt-3 my-lg-0 mb-4">
                                                <h3>Live Report</h3>
                                                <p class="text-white">
                                                    Jumlah pasien yang terinfeksi covid-19 di negara Indonesia. Update data terakhir ${dateUpdated.getDate()} ${monthNames[dateUpdated.getMonth()]} ${dateUpdated.getFullYear()}.
                                                </p>
                                            </div>
                                        </div>
                                    </div>`;
    }
}

customElements.define('corona-report',CoronaReportItem);