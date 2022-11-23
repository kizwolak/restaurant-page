import './style.css';
import Italy from './italyflag.png';

const content = document.querySelector('#content');

const form = () => {

    const italyFlag = new Image();
    italyFlag.src = Italy;

    const header = document.createElement('div');
    header.classList = 'header';
    content.appendChild(header);

    const main = document.createElement('div');

    const footer = document.createElement('div');
    footer.classList = 'footer';
    content.appendChild(footer);

}

form();
