import "./style.css";
import mouldyLogoMobile from "./moldyLogoMobile.jpg";
import slime from "./slime.png";
import menu from "./menu.js";
import home from "./index.js";
import horaceJpg from "./Horace.jpg";
import child from "./child.jpg";
import lady from "./lady.jpg";

export default function contact() {
  const content = document.querySelector("#content");

  const clear = () => {
    content.innerHTML = "";
  };

  const moldyLogo = new Image();
  moldyLogo.src = mouldyLogoMobile;

  const slimeImg = new Image();
  slimeImg.src = slime;
  const slimeImg2 = new Image();
  slimeImg2.src = slime;
  const slimeImg3 = new Image();
  slimeImg3.src = slime;

  const header = document.createElement("div");
  header.classList = "header";
  content.appendChild(header);

  const headerImg = document.createElement("div");
  headerImg.classList = "headerImg";
  headerImg.appendChild(moldyLogo);
  header.appendChild(headerImg);

  const headerMenu = document.createElement("div");
  headerMenu.classList = "headerMenu";
  const tab1 = document.createElement("div");
  const tab2 = document.createElement("div");
  const tab3 = document.createElement("div");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  tab1.classList = "headerBtn";
  tab2.classList = "headerBtn";
  tab3.classList = "headerBtn";
  btn1.textContent = "Home";
  btn2.textContent = "Menu";
  btn3.textContent = "Contact";

  btn1.addEventListener("click", () => {
    clear();
    home();
  });

  btn2.addEventListener("click", () => {
    clear();
    menu();
  });

  btn3.addEventListener("click", () => {
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

  const main = document.createElement("div");
  main.classList = "main";
  content.appendChild(main);

  const mainHeader = document.createElement("h2");
  mainHeader.textContent = "Get in touch now!";
  main.appendChild(mainHeader);

  const horace = document.createElement("div");
  horace.classList = "meal";
  main.appendChild(horace);

  const horaceImg = new Image();
  horaceImg.src = horaceJpg;
  horace.appendChild(horaceImg);

  const horaceDesc = document.createElement("p");
  horaceDesc.textContent =
    'Horace Moice is the owner and head chef. He pours all of his hate and aversion to life and humanity itself into every dish. This is what he has to say: "I have been stuck here for over 15 years. I don\'t even know why I named this place "Alfredo\'s". I will probably die of a heart attack while making the worst food on this planet. My dream is to expire before turning 40."';
  horace.appendChild(horaceDesc);

  const horaceNumber = document.createElement("p");
  horaceNumber.textContent = "Tel: 12345678910";
  horace.appendChild(horaceNumber);

  const horaceEmail = document.createElement("p");
  horaceEmail.textContent = "E-mail: lordhate@yahoo.mil";
  horace.appendChild(horaceEmail);

  const childWorker = document.createElement("div");
  childWorker.classList = "meal";
  main.appendChild(childWorker);

  const childWorkerImg = new Image();
  childWorkerImg.src = child;
  childWorker.appendChild(childWorkerImg);

  const childWorkerDesc = document.createElement("p");
  childWorkerDesc.textContent =
    'Due to state labour laws, we find employing adults to be too expensive. Therefore, we have hired the young Timmy Butter IV, age 12, to be our delivery driver. As he says, "Working at such a young age is a privilege. While it is hard to fit going to school into my schedule while working 8 hours a day, this job is SO rewarding. I love my life!"';
  childWorker.appendChild(childWorkerDesc);

  const childWorkerNumber = document.createElement("p");
  childWorkerNumber.textContent = "Tel: 666666666";
  childWorker.appendChild(childWorkerNumber);

  const anna = document.createElement("div");
  anna.classList = "meal";
  main.appendChild(anna);

  const annaImg = new Image();
  annaImg.src = lady;
  anna.appendChild(annaImg);

  const annaDesc = document.createElement("p");
  annaDesc.textContent =
    "Anna Manna Banna Ranna is another one of our employees. She is our spiritual adviser and guide through the world beyond. Also offers acupuncture services.";
  anna.appendChild(annaDesc);

  const annaNumber = document.createElement("p");
  annaNumber.textContent = "Tel: 4208000569";
  anna.appendChild(annaNumber);

  const footer = document.createElement("div");
  footer.classList = "footer";
  content.appendChild(footer);

  const footerDesc = document.createElement("p");
  footerDesc.textContent =
    "Alfredo's Disgusting Pizza, 2022, All Rights Reserved. All copies of our idea will be punished by 25 years of prison time or a 100 USD fine.";
  footer.appendChild(footerDesc);
}
