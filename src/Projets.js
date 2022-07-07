import Morpion from './Ressources/Modals/Morpion.js';
// import BSQ from './BSQ.js';
import PHP from './Ressources/Modals/PHP.js';
import IRC from './Ressources/Modals/IRC.js';
function Projets() {
    return (
        <div class='projecter'>
            {/* <BSQ></BSQ> */}
            <PHP></PHP>
            <IRC></IRC>
            <Morpion></Morpion>
        </div>
    );
}

export default Projets;