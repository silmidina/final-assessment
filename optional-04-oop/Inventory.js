// optional-04-oop/Inventory.js

import Item from "./Item.js";

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof Item) {
      this.items.push(item);
    } else {
      throw new Error("Only instances of Item can be added.");
    }
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  listItems() {
    return this.items.map((item) => item.displayDetails()).join("\n");
  }
}

export default Inventory;
