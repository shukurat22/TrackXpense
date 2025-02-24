

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../pie chart/landing page/style.css>
         <header id="main-section"> 
        <!----logo -------->
       <div class="mobile-display">
            <div class="nav-header">
                <div class="logo">
                    <img src="Image/LOGO.png" />
                </div>
                <div class="desktop-display">
                    <div>
                        <nav>
                          <ul class="links">
                            <li><a href="#index.html">Home</a></li>
                            <li><a href="../Dashboard/Index.html">Dashboard</a></li>
                            <li><a href="#about-us">About</a></li>
                            <li><a href="#download-contact">Contact</a></li>
                          </ul>
                        </nav>
                      </div>
                </div>
                <div id="navToggle">
                    <div class="bar b-one"></div>
                    <div class="bar b-two"></div>
                    <div class="bar b-three"></div>
                </div>
            </div> 
            <div class="mobile-menu">
                <ul class="nav-items">
                    <li class="nav-list"><a class="nav-link" href="#index.html">Home</a></li>
                    <li class="nav-list"><a class="nav-link" href="../Dashboard/Index.html">Dashboard</a></li>
                    <li class="nav-list"><a class="nav-link" href="#about-us">About</a></li>
                    <li class="nav-list"><a class="nav-link" href="#download-contact">Contact</a></li>
                    <li class="nav-list"><a href="#" class="nav-link">
                            <i class="fa-solid fa-user"></i>
                        </a></li>
                    <li class="nav-list"><a href="#" class="nav-link">
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </a>
                    </li>
                </ul>
            </div>
        </div>

        
    </header>
`
    }
}

customElements.define('header-component', Header);

