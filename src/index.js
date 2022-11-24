import './style.css';
import moldyLogoMobile from './moldyLogoMobile.jpg';
import slime from './slime.png';
const content = document.querySelector('#content');

const moldyLogo = new Image();
moldyLogo.src = moldyLogoMobile;

const slimeImg = new Image();
slimeImg.src = slime;

const form = () => {

    const header = document.createElement('div');
    header.classList = 'header';
    content.appendChild(header);

    const headerImg = document.createElement('div');
    headerImg.classList = 'headerImg'
    headerImg.appendChild(moldyLogo);
    header.appendChild(headerImg);

    const headerMenu = document.createElement('div');
    headerMenu.classList = 'headerMenu'
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    tab1.classList = 'headerBtn';
    tab2.classList = 'headerBtn';
    tab3.classList = 'headerBtn';
    btn1.textContent = 'Home';
    btn2.textContent = 'Menu';
    btn3.textContent = 'Contact';

    headerMenu.appendChild(tab1);
    headerMenu.appendChild(tab2);
    headerMenu.appendChild(tab3);
    tab1.appendChild(btn1);
    tab2.appendChild(btn2);
    tab3.appendChild(btn3);
    tab1.appendChild(slimeImg);
    tab2.appendChild(slimeImg);
    tab3.appendChild(slimeImg);
    



    header.appendChild(headerMenu);


    const main = document.createElement('div');
    main.classList = 'main';
    content.appendChild(main);

    const mainHeader = document.createElement('h2');
    mainHeader.textContent = 'Is pizza your favourite food?'
    main.appendChild(mainHeader);

    const mainDesc = document.createElement('p');
    mainDesc.textContent = 'Do you feel like it is impossible to mess it up? Have you enjoyed every pizza you have ever eaten? If so, we are here to completely change your point of view! Alfredo\'s Disgusting Pizza is dedicated to bringing you the worst pizza experience possible. Our chefs never wash their hands, our ingredients are always rotten and our pizzas are made a month in advance and they never see the inside of a freezer. Please come visit us!'
    main.appendChild(mainDesc);

    const footer = document.createElement('div');
    footer.classList = 'footer';
    content.appendChild(footer);

}

form();
