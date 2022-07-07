import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Description';
import './Ressources/CV/startbootstrap-stylish-portfolio-gh-pages/css/CV.css';
import IRC from './Ressources/Modals/IRC';
import Morpion from './Ressources/Modals/Morpion';
import PHP from './Ressources/Modals/PHP';

function CV() {
    document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {
            var toHide = document.getElementsByClassName('travels')[0];
            var container = document.getElementsByClassName('travelContainer')[0];
        
            container.style.padding = '0';
            container.style.height = '10%';
        
                    toHide.style.display = 'none';
        }
    });
    function dispTravel() {
        var toHide = document.getElementsByClassName('travels')[0];
        var container = document.getElementsByClassName('travelContainer')[0];

        if (toHide.style.display == 'none') {
            container.style.paddingBottom = '7.5rem';

            container.style.height = 'auto';
            toHide.style.display = 'flex';

        } else {
            container.style.padding = '0';
            container.style.height = '10%';

            toHide.style.display = 'none';

        }
        console.log(toHide);
    }
    return (
        <body id="page-top">

        <a class="menu-toggle rounded" href="#"><i class="fas fa-bars"></i></a>
        <nav id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"><a href="#page-top">Start Bootstrap</a></li>
                <li class="sidebar-nav-item"><a href="#page-top">Home</a></li>
                <li class="sidebar-nav-item"><a href="#about">About</a></li>
                <li class="sidebar-nav-item"><a href="#services">Services</a></li>
                <li class="sidebar-nav-item"><a href="#portfolio">Portfolio</a></li>
                <li class="sidebar-nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <header class="masthead d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-center">
                <h1 class="mb-1">Lucas Aptel</h1>
                <h3 class="mb-5"><em>Dévellopeur Web Junior</em></h3>
                <a class="btn btn-primary btn-xl" href="#parcours">Find Out More</a>
            </div>
        </header>
        <div id='container-fluid'>
            
        <section class="callout" id="parcours">
            <div class="container-fluid">                      
                <div class="row text-center justify-content-center mb-5">
                    <div class="col-xl-6 col-lg-8">
                        <h2 class="font-weight-bold">Mon parcours</h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col">
                        <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                            <div class="timeline-step">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                    <div class="inner-circle"></div>
                                    <p class="h6 mt-3 mb-1">2009-2016</p>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Projets personnels</p>
                                    <hr></hr>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Découverte des bases de la programation en C</p>
                                    <br></br>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Contribution à la création d'un mode de jeu en Lua</p>
                                    <br></br>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Modération d'une grande communauté de plus de 600 utilisateurs</p>
                                    <br></br>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Traduction d'un jeu flash de l'Anglais au Français</p>
                                </div>
                            </div>
                            <div class="timeline-step">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                    <div class="inner-circle"></div>
                                    <p class="h6 mt-3 mb-1">2014-2015</p>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Terminale STI2D-Itec</p>
                                    <hr></hr>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Modelisation 3D</p>
                                    <br></br>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Suivis de projets au travers d'un cahier des charges</p>
                                    <br></br>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Introduction theorique à la programation</p>
                                </div>
                            </div>
                            <div class="timeline-step">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                    <div class="inner-circle"></div>
                                    <p class="h6 mt-3 mb-1">2018</p>
                                    <p class="h6 text-muted mb-0 mb-lg-0">BAC Littéraire</p>
                                    <hr></hr>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Scolarisé en Ouzbékistan dans une école française.</p>
                                    <br></br> 
                                    <p class="h6 text-muted mb-0 mb-lg-0">Examen passé à Moscou.</p>
                                    <br></br>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Option liitérature en langue étrangère (Anglais) </p>
                                </div>
                            </div>
                            <div class="timeline-step">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                    <div class="inner-circle"></div>
                                    <p class="h6 mt-3 mb-1">2019-2021</p>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Fac de lettres</p>
                                    <hr></hr>
                                    <p class="h6 text-muted mb-0 mb-lg-0">1 ans en Sociologie</p>
                                    <br></br> 
                                    <p class="h6 text-muted mb-0 mb-lg-0">1 ans en Musicologie</p>
                                </div>
                            </div>
                            <div class="timeline-step mb-0">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                                    <div class="inner-circle"></div>
                                    <p class="h6 mt-3 mb-1">2021-En cours</p>
                                    <p class="h6 text-muted mb-0 mb-lg-0">Web@cademie</p>
                                    <hr></hr>
                                    <p class="h6 text-muted mb-0 mb-lg-0">
                                            Travail sur des projets en groupe autonome et en solo
                                    </p>
                                    <br></br> 
                                    <p class="h6 text-muted mb-0 mb-lg-0">Bases en PHP, HTML, CSS, JS, MYSQL</p>
                                    <br></br> 
                                    <p class="h6 text-muted mb-0 mb-lg-0">Projets avec Laravel, React, React-native, Node, Symfony, Socket.io</p>

                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="btn btn-primary btn-xl" href="#parcours">Find Out More</a>

        </section>
        </div>
        

        <section class="content-section mainBack" id="portfolio">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading text-center">
                    <h2 class="mb-5">PROJETS</h2>
                </div>
                <div class="row gx-0">
                    
                    <div class="col-lg-6">
                            <Morpion></Morpion>
                    </div>
                    <div class="col-lg-6">
                            <PHP></PHP>
                    </div>
                    <div class="col-lg-6">
                            <IRC></IRC>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section bg-primary text-white travelContainer">
            <div class="container-fluid">
                <h2 style={{fontSize: '2em'}} onClick={dispTravel} class="mb-4">MES VOYAGES
                <p style={{fontSize: '0.3em'}}>Cliquez pour voir plus</p>
                </h2>
                <hr></hr>
                
                <div class='row travels'>
                    <div class='col-sm'>
                        <p>Vietnam</p>
                        <img src='https://lp-cms-production.imgix.net/features/2019/04/HalongBay-aa0f7e71a1db.jpg'  height={'80%'} width={'100%'}></img>
                    </div>
                    <div class='col-sm'>
                        <p>Cambodge</p>
                        <img src='https://itourisme.net/wp-content/uploads/2018/09/bangkok-to-angkor-wat.jpg'  height={'80%'} width={'100%'}></img>
                    </div>

                    <div class='col-sm'>
                        <p>Tunisie</p>
                        <img src='https://img.ev.mu/images/portfolio/villes/53657/1605x1070/392184.jpg'  height={'80%'} width={'100%'}></img>
                    </div>

                <hr></hr>

                    <div class='col-sm'>
                        <p>Ouzbekistan</p>
                        <img src='https://www.ou-et-quand.net/partir/images/illustration/samarkand-samarcande-.jpg' height={'80%'} width={'100%'}></img>
                    </div>
                    <div class='col-sm'>
                        <p>Géorgie</p>
                        <img src='https://static3.mclcm.net/iod/images/v2/69/citytheque/localite_101_6477/1200x630_100_300_000000x30x0.jpg'  height={'80%'} width={'100%'}></img>
                    </div>

                    <div class='col-sm'>
                        <p>Arménie</p>
                        <img src='https://travelarmenia.org/wp-content/uploads/2015/12/tatev.jpg'  height={'80%'} width={'100%'}></img>
                    </div>

                <hr></hr>
                    <div class='col-sm'>
                        <p>Royaume-Unis</p>
                        <img src='https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/500px_55425108_2.jpg?itok=FM16--08'  height={'80%'} width={'100%'}></img>
                    </div>
                    <div class='col-sm'>
                        <p>Lituanie</p>
                        <img src='https://www.voyagegroupepascher.fr/public/kcfinder/upload/1920x870/files/destination/pays-baltes/Pays-Baltes.jpg'  height={'80%'} width={'100%'}></img>
                    </div>

                    <div class='col-sm'>
                        <p>Pologne</p>
                        <img src='https://www.kuoni.fr/wp-content/uploads/2021/06/qvm18ez6rm9byhs.jpg'  height={'80%'} width={'100%'}></img>
                    </div>

                </div>
            </div>
        </section>

        <div class="map" id="contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.3544209038155!2d6.192552815941299!3d48.698706379272274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794983de2fbeb09%3A0x44581342a401b746!2s45%20Rue%20de%20Ch%C3%A2teau%20Salins%2C%2054000%20Nancy!5e0!3m2!1sfr!2sfr!4v1657185333948!5m2!1sfr!2sfr"></iframe>
            <br />
            <small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a></small>
        </div>

        

        <a class="scroll-to-top rounded" href="#page-top"><i class="fas fa-angle-up"></i></a>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

        <script src="js/scripts.js"></script>
    </body>
    );
}

export default CV;