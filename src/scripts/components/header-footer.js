class HeaderFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container text-center mt-4">
                            <p class="footer">&copy; 2020. Dibuat oleh Hidayat Chandra dengan cinta di Gorontalo.</p>
                        </div>`;
    }
}

customElements.define('header-footer',HeaderFooter);