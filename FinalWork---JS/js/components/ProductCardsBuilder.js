import ProductCard from "./ProductCard.js";

export default class ProductCardBuilder {
  static _allData;
  _datas = [];

  constructor() {
    if (!ProductCardBuilder._allData) {
      console.error('Перед созданием экземпляра ProductCardBuilder необходимо вызвать ProductCardBuilder.loadAllData()');
    }
    this._datas = ProductCardBuilder._allData.slice();
  }

  applyFilters(filters, onlyAvailable) {
    this._datas = this._datas.filter(data => {
      const filtersCheck = ProductCardBuilder._checkFilter(data, filters);
      const availabilityCheck = !onlyAvailable || ProductCardBuilder._checkAvailable(data);
      return filtersCheck && availabilityCheck;
    });
    return this;
  }  

  applySort(sortType) {
    switch (sortType) {
      case 'price-min':
        this._datas = this._datas.sort((a, b) => a.price.new - b.price.new);
        break;
      case 'price-max':
        this._datas = this._datas.sort((a, b) => b.price.new - a.price.new);
        break;
      case 'rating-max':
        this._datas = this._datas.sort((a, b) => a.rating - b.rating);
        break;
    }
    return this;
  }

  getPage(page, pageSize) {
    const startIndex = page * pageSize;
    const endIndex = page * pageSize + pageSize;
    this._datas = this._datas.slice(startIndex, endIndex);
    return this;
  }

  buildCards() {
    return this._datas.map(data => new ProductCard(data));
  }

  count() {
    return this._datas.length;
  }

  static async loadAllData(callback) {
    if (!ProductCardBuilder._allData) {
      try {
        const response = await fetch('./data/data.json');
        ProductCardBuilder._allData = await response.json();
      }
      catch (error) {
        console.error(error);
      }
    }

    callback();
  }

  static _checkFilter(productData, filters) {
    return filters.size > 0
    ? [...filters].some(filter => productData.type.includes(filter))
    : true;
  }

  static _checkAvailable(productData) {
    const values = Object.values(productData.availability);
    return values.some(e => e > 0);
  }

}