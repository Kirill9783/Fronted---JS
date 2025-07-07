import MainMenu from "./components/MainMenu.js";
import Location from "./components/Location.js";
import Catalog from "./components/Catalog.js";
import Basket from "./components/Basket.js";
import Faq from "./components/Faq.js";
import DayProducts from "./components/DayProducts.js";
import QuestionsForm from "./components/QuestionsForm.js";

export default class Main {
  static _instance;
  _basket;

  constructor() {
    new MainMenu();
    new Location();
    new Catalog();
    this._basket = new Basket();
    new Faq();
    new DayProducts();
    new QuestionsForm();
  }

  static get instance() {
    return Main._instance ??= new Main();
  }

  get basket() {
    return this._basket;
  }
  
}

window.addEventListener('DOMContentLoaded', () => Main.instance);