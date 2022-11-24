import './style.css';
import mouldyLogoMobile from './moldyLogoMobile.jpg';
import slime from './slime.png';
import home from './index.js';

export default function menu() {
        

    const content = document.querySelector('#content');

    const clear = () => {
        content.innerHTML = ''
    }

    const moldyLogo = new Image();
    moldyLogo.src = mouldyLogoMobile;

    const slimeImg = new Image();
    slimeImg.src = slime;
    const slimeImg2 = new Image();
    slimeImg2.src = slime;
    const slimeImg3 = new Image();
    slimeImg3.src = slime;

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

    btn1.addEventListener('click', () => {
        clear();
        home();
    });

    headerMenu.appendChild(tab1);
    headerMenu.appendChild(tab2);
    headerMenu.appendChild(tab3);
    tab1.appendChild(btn1);
    tab2.appendChild(btn2);
    tab3.appendChild(btn3);
    tab1.appendChild(slimeImg);
    tab2.appendChild(slimeImg2);
    tab3.appendChild(slimeImg3);


    header.appendChild(headerMenu);


    const main = document.createElement('div');
    main.classList = 'main';
    content.appendChild(main);

    const mainHeader = document.createElement('h2');
    mainHeader.textContent = 'Is pizza your favourite food?'
    main.appendChild(mainHeader);

    const mainDesc = document.createElement('p');
    mainDesc.textContent = 'Do you feel like it is impossible to mess it up? Have you enjoyed every pizza you have ever eaten? If so, we are here to completely change your point of view!'
    main.appendChild(mainDesc);

    const descHeader = document.createElement('h2');
    descHeader.textContent = 'Alfredo\'s Disgusting Pizza is dedicated to bringing you the worst pizza experience possible.'
    main.appendChild(descHeader);

    const contDesc = document.createElement('p');
    contDesc.textContent = 'Our chefs never wash their hands, our ingredients are always rotten and our pizzas are made a month in advance and they never see the inside of a freezer.'
    main.appendChild(contDesc);

    const descEnd = document.createElement('h2');
    descEnd.textContent = 'Come visit us today!';
    main.appendChild(descEnd);

    const footer = document.createElement('div');
    footer.classList = 'footer';
    content.appendChild(footer);

    const footerDesc = document.createElement('p');
    footerDesc.textContent = 'Alfredo\'s Disgusting Pizza, 2022, All Rights Reserved. All copies of our idea will be punished by 25 years of prison time or a 100 USD fine.'
    footer.appendChild(footerDesc);
};