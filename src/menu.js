import './style.css';
import mouldyLogoMobile from './moldyLogoMobile.jpg';
import slime from './slime.png';
import home from './index.js';
import contact from './contact.js';
import mouldyBread from './mouldyBread.jpg';
import macAndCheeseSrc from './TommyWind.jpg';
import bug from './bugPizza.jpeg';
import rat from './ratPizza.jpg';
import mouldy from './mouldyPizza.jpg';
import poop from './poopDessert.jpg';
import egg from './virginEgg.jpg';

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

    btn2.addEventListener('click', () => {
        clear();
        menu();
    });

    btn3.addEventListener('click', () => {
        clear();
        contact();
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

    const medical = document.createElement('h1');
    medical.textContent = 'WE OFFER IMMEDIATE MEDICAL ATTENTION!';
    main.appendChild(medical);

    const menu = document.createElement('h2');
    menu.textContent = 'Menu';
    main.appendChild(menu);

    const starters = document.createElement('h3')
    starters.textContent = 'Starters';
    main.appendChild(starters);

    const bread = document.createElement('div');
    bread.classList = 'meal';
    main.appendChild(bread);
    
    const mouldyBreadImg = new Image();
    mouldyBreadImg.src = mouldyBread;
    bread.appendChild(mouldyBreadImg);

    const breadDesc = document.createElement('p')
    breadDesc.textContent = 'Our mouldy bread, 1 month old. Bowl of water to soften the bread provided for only 0.99 cents.';
    bread.appendChild(breadDesc);

    const macAndCheese = document.createElement('div');
    macAndCheese.classList = 'meal';
    main.appendChild(macAndCheese);
    
    const macAndCheeseImg = new Image();
    macAndCheeseImg.src = macAndCheeseSrc;
    macAndCheese.appendChild(macAndCheeseImg);

    const macDesc = document.createElement('p')
    macDesc.textContent = 'Gatorade Mac and Cheese. Guaranteed to make you sick!';
    macAndCheese.appendChild(macDesc);

    const mains = document.createElement('h3')
    mains.textContent = 'Main courses';
    main.appendChild(mains);

    const bugPizza = document.createElement('div');
    bugPizza.classList = 'meal';
    main.appendChild(bugPizza);
    
    const bugPizzaImg = new Image();
    bugPizzaImg.src = bug;
    bugPizza.appendChild(bugPizzaImg);

    const bugPizzaDesc = document.createElement('p')
    bugPizzaDesc.textContent = 'Pizza made with locally sourced bugs. We work with ethical sewers in order to serve you the most nutritious meal possible.';
    bugPizza.appendChild(bugPizzaDesc);

    const ratPizza = document.createElement('div');
    ratPizza.classList = 'meal';
    main.appendChild(ratPizza);
    
    const ratPizzaImg = new Image();
    ratPizzaImg.src = rat;
    ratPizza.appendChild(ratPizzaImg);

    const ratPizzaDesc = document.createElement('p')
    ratPizzaDesc.textContent = 'THE FIGHTER. Fight with our rat for your meal. Careful, it was never vaccinated against rabies!';
    ratPizza.appendChild(ratPizzaDesc);

    const mouldyPizza = document.createElement('div');
    mouldyPizza.classList = 'meal';
    main.appendChild(mouldyPizza);
    
    const mouldyPizzaImg = new Image();
    mouldyPizzaImg.src = mouldy;
    mouldyPizza.appendChild(mouldyPizzaImg);

    const mouldyPizzaDesc = document.createElement('p')
    mouldyPizzaDesc.textContent = 'Our specialty. The carefully conducted aging process of the cheese ensures an experience like never before!';
    mouldyPizza.appendChild(mouldyPizzaDesc);

    const desserts = document.createElement('h3')
    desserts.textContent = 'Desserts';
    main.appendChild(desserts);

    const poopDessert = document.createElement('div');
    poopDessert.classList = 'meal';
    main.appendChild(poopDessert);
    
    const poopDessertImg = new Image();
    poopDessertImg.src = poop;
    poopDessert.appendChild(poopDessertImg);

    const poopDessertDesc = document.createElement('p')
    poopDessertDesc.textContent = 'A poop dessert inspired by a stay at Charleroi Airport. Due to the large amount of ingredients we use, your serving may not contain chocolate.';
    poopDessert.appendChild(poopDessertDesc);

    const eggDessert = document.createElement('div');
    eggDessert.classList = 'meal';
    main.appendChild(eggDessert);
    
    const eggDessertImg = new Image();
    eggDessertImg.src = egg;
    eggDessert.appendChild(eggDessertImg);

    const eggDessertDesc = document.createElement('p')
    eggDessertDesc.textContent = 'Virgin boy eggs made with urine of sick boys. A Chinese delicacy with a local twist!';
    eggDessert.appendChild(eggDessertDesc);

    const orderNow = document.createElement('h3')
    orderNow.textContent = 'ORDER NOW!!!';
    main.appendChild(orderNow);

    const footer = document.createElement('div');
    footer.classList = 'footer';
    content.appendChild(footer);

    const footerDesc = document.createElement('p');
    footerDesc.textContent = 'Alfredo\'s Disgusting Pizza, 2022, All Rights Reserved. All copies of our idea will be punished by 25 years of prison time or a 100 USD fine.';
    footer.appendChild(footerDesc);
};