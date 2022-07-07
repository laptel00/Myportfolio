import { Button } from 'react-bootstrap';
import Infos from './Infos.js';
import Projets from './Projets.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    function project() {
        var toShow = document.getElementsByClassName('mesProjets')[0]
        var toHide = document.getElementsByClassName('plusSurMoi')[0]
        toShow.classList.remove('d-none')
        toShow.classList.add('d-grid')
        toHide.classList.remove('d-grid')
        toHide.classList.add('d-none')
    }
    function info() {
        var toHide = document.getElementsByClassName('mesProjets')[0]
        var toShow = document.getElementsByClassName('plusSurMoi')[0]
        toShow.classList.remove('d-none')
        toShow.classList.add('d-grid')
        toHide.classList.remove('d-grid')
        toHide.classList.add('d-none')

    }

    return (
        <div class='container-fluid d-flex'>
               <Infos></Infos>
        </div>
        
    );
}

export default Header;