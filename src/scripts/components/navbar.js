class Navbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<nav class="navbar justify-content-center p-3">
                            <a href="index.html" class="text-decoration-none">
                                <h1 class="text-light">wOVID-<span class="text-orange">19</span> </h1>
                            </a>
                        </nav>`;
    }
}

customElements.define('nav-bar',Navbar);