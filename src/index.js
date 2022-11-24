import './style.css';
import moldyLogoMobile from './moldyLogoMobile.jpg';
const content = document.querySelector('#content');

const form = () => {

    const moldyLogo = new Image();
    moldyLogo.src = moldyLogoMobile;

    const header = document.createElement('div');
    header.classList = 'header';
    content.appendChild(header);

    const header1 = document.createElement('div');
    header.appendChild(moldyLogo);

    const main = document.createElement('div');
    main.classList = 'main';
    content.appendChild(main);

    const footer = document.createElement('div');
    footer.classList = 'footer';
    content.appendChild(footer);

}

form();
