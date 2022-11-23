import './style.css';
import Italy from './italyflag.png';

const form = () => {

    const italyFlag = new Image();
    italyFlag.src = Italy;

    const header = document.createElement('div');
    header.classList = 'header';
    document.body.appendChild(header);

    const main = document.createElement('div');

    const footer = document.createElement('div');
    footer.classList = 'footer';
    document.body.appendChild(footer);

}

form();
