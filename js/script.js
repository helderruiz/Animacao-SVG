import { cards } from './cards.js'
import { Icones } from './icones.js'
import { Footer } from './Footer.js'

window.onload = () => {
    const animacards = new cards()
    document.addEventListener('scroll', animacards.scrollCards.bind(animacards))

    const icones = new Icones();
    icones.animaIcones();

    const footer = new Footer();
    footer.efeitoOnda();
}