import './style.css';
import moldyLogoMobile from './moldyLogoMobile.jpg';
const content = document.querySelector('#content');

const form = () => {

    const moldyLogo = new Image();
    moldyLogo.src = moldyLogoMobile;

    const header = document.createElement('div');
    header.classList = 'header';
    content.appendChild(header);

    const headerImg = document.createElement('div');
    headerImg.classList = 'headerImg'
    headerImg.appendChild(moldyLogo);
    header.appendChild(headerImg);

    const headerMenu = document.createElement('div');
    headerMenu.classList = 'headerMenu'
    const tab1 = document.createElement('button');
    const tab2 = document.createElement('button');
    const tab3 = document.createElement('button');
    tab1.classList = 'headerBtn';
    tab2.classList = 'headerBtn';
    tab3.classList = 'headerBtn';
    tab1.textContent = 'Home';
    tab2.textContent = 'Menu';
    tab3.textContent = 'Contact';

    headerMenu.appendChild(tab1);
    headerMenu.appendChild(tab2);
    headerMenu.appendChild(tab3);


    header.appendChild(headerMenu);


    const main = document.createElement('div');
    main.classList = 'main';
    content.appendChild(main);

    const mainDesc = document.createElement('p');
    mainDesc.textContent = 'Is pizza your favourite food? Do you feel like it is impossible to mess it up? Have you enjoyed every pizza you have ever eaten? If so, we are here to completely change your point of view! Alfredo\'s Disgusting Pizza is dedicated to bringing you the worst pizza experience possible. Our chefs never wash their hands, our ingredients are always rotten and our pizzas are made a month in advance and they never see the inside of a freezer. Please come visit us!'
    main.appendChild(mainDesc);

    const footer = document.createElement('div');
    footer.classList = 'footer';
    content.appendChild(footer);

}

form();
