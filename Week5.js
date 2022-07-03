// 1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
// a.	Use at least one array.
// b.	Use at least two classes.
// c.	Your menu should have the options to create, view, and delete elements.


class Item {
    constructor(name,price){
        this.name = name
        this.price = price
    }
    describe(){
        return `${this.name} costs ${this.price}`;
    }
}

class Store {
    constructor(name){
        this.name = name
        this.items = []
    }

    addItem (item) {
        if (item instanceof Item){
            this.items.push(item);
        } else {
            throw new Error(`You can only add an item. Argument is not a item: ${item}`)
        }
    }

    describe(){
        return `${this.name} has ${this.items.length} items.`;
    }
}

class Menu {
    constructor() {
        this.stores = [];
        this.selectedStore = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1':
                    this.createStore();
                    break;
                case '2':
                    this.viewStore();
                    break;
                case '3':
                    this.displayStores();
                    break;
                case '4':
                    this.deleteStore();
                    break;
                default:
                selection = 0
            }
            selection = this.showMainMenuOptions();
        }
        alert('Shopping over.')
    }

    showMainMenuOptions(){
        return prompt (`
        0: Exit
        1: Create Store
        2: View Store
        3: Display All Stores
        4: Close Store
        `)
    }

    showItemMenuOptions(storeInfo){
        return prompt(`
        0: Back
        1: Create Item
        2: Delete Item
        ${storeInfo}
        `);
    }

    createStore(){
        let name = prompt('Enter Store Name.');
        this.stores.push(new Store(name));
              
    }

    viewStore(){
        let index = prompt ('Enter the index of the store you wish to view.');
        if (index > -1 && index < this.stores.length){
            this.selectedStore = this.stores[index];
            let description = 'Welcome to ' + this.selectedStore.name + '\n';

            for(let i = 0; i< this.selectedStore.items.length; i++){
                description += i +') ' + this.selectedStore.items[i].name + ' - ' + this.selectedStore.items[i].price + '\n';
            }
            let selection = this.showItemMenuOptions(description);
            switch (selection){
                case '1':
                    this.createItem();
                    break;
                case '2':
                    this.deleteItem();
             }
        }
    }

    displayStores (){
        let storesString = '';
        for (let i = 0; i < this.stores.length; i++){
            storesString += i + ': ' + this.stores[i].name + '\n';
        }
        alert(storesString);
    }

    deleteStore(){
        let index = prompt('Enter the number of the Store you want to close.');   
        if(index > -1 && index < this.stores.length){   
            this.stores.splice(index, 1);
        }
    }


    createItem() {
        let name = prompt('Enter name for new Item.');
        let price = prompt('Enter price for new Item');
        this.selectedStore.items.push(new Item(name, price));
    }

    deleteItem(){
        let index = prompt('Enter the index of the Item you wish to delete');
        if (index > -1 && index < this.selectedStore.items.length){
            this.selectedStore.items.splice(index, 1);
        }
    }


}


let menu = new Menu();
menu.start()