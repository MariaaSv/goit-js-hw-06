class Storage {
  constructor(items) {
    this._items = items;
  }

  getItems() {
    return this._items;
  }

  addItem(newItem) {
    this._items.push(newItem);
  }

  removeItem(itemToRemove) {
    this._items = this._items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems());

storage.addItem('Droid');
console.log(storage.getItems());

storage.removeItem('Prolonger');
console.log(storage.getItems());

storage.removeItem('Scaner');
console.log(storage.getItems());
