import illustration from '../../image/illustration.svg';

class HeaderContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container mt-5 mt-md-2">
                            <div class="row align-items-center">
                                <div class="col-12 col-lg-8 text-xs-center text-center text-lg-left">
                                    <div class="header-caption px-4 py-1">
                                        188+ negara telah terinfeksi
                                    </div>
                                    <h1 class="text-white header-text pt-2">WASPADA <span class="text-orange">CORONA</span></h1>
                                    <p class="header-subtext text-gray mt-3 mb-5 text-justify">
                                        Infeksi virus Corona disebut COVID-19 (Corona Virus Disease 2019) dan pertama kali ditemukan di kota Wuhan, China pada akhir Desember 2019.
                                    </p>
                                    <a href="https://id.wikipedia.org/wiki/Pandemi_COVID-19" target="_blank" class="mt-2 text-decoration-none btn-corona-detail d-inline-block">
                                        <h2 class="text-orange">Tentang Covid-19</h2>
                                    </a>
                                </div>
                                <div class="col-12 col-lg-4 position-relative illustration text-center">
                                    <img src="${illustration}" class="img-illustration">
                                </div>
                            </div>
                        </div>`;
    }
}

customElements.define('header-content',HeaderContent);