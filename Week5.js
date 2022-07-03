// 1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
// a.	Use at least one array.
// b.	Use at least two classes.
// c.	Your menu should have the options to create, view, and delete elements.


// class Player {
//     constructor(name ,position){
//         this.name = name;
//         this.position = position;
//     }

//     describe(){
//         return `${this.name} plays ${this.position}`;
//     }
// }

// class Team {
//     constructor(name){
//         this.name = name;
//         this.player = [];
//     }

//     addPLayer(player) {
//         if (player instanceof Player){
//             this.players.push(player);
//         } else {
//             throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`)
//         }
//     }

//     describe(){
//         return `${this.name} has ${this.player.length} players.`;
//     }
// }

//  class Menu {
//     constructor(){
//         this.teams = [];
//         this.selectedTeam = null; 
//     }
//     start(){
//         let selection = this.showMainMenuOptions();
//         while (selection != 0){
//             switch (selection){
//                 case '1':
//                     this.createTeam();
//                     break;
//                 case '2':
//                     this.viewTeam();
//                     break;
//                 case '3':
//                     this.deleteTeam();
//                     break;
//                 case '4':
//                     this.displayTeams();
//                     break;
//                 default:
//                     selection = 0;
//             }
//             selection = this.showMainMenuOptions();
//         }
//         alert('Goodbye!');
//     }
//     showMainMenuOptions(){
//         return prompt(`
//         0) exit
//         1) create new team
//         2) view team
//         3) delete team
//         4) display teams
//         `);
//     }

//     showTeamMenuOptions(teamInfo){
//         return prompt(`
//         0) back
//         1) create player
//         2) delete player
//         --------------------
//         `)
//     }

    
//     displayTeams(){
//         let teamString = '';
//         for (let i = 0; i < this.teams.length; i++){
//             teamString += i + ') ' + this.teams[i].name + '\n';
//         }
//         alert(teamString);
//     }
//     createTeam(){
//         let name = prompt('Enter name for new team:');
//         this.teams.push(new Team(name))
//     }

//     viewTeam() {
//         let index = prompt('Enter the index of the team you wish to view:');
//         if (index > -1 && index < this.teams.length){
//             this.selectedTeam = this.teams[index];
//             let description = 'Team Name:' + this.selectedTeam.name + '\n';

//             for(let i = 0; i< this.selectedTeam.players.length; i++){
//                 descript += i +') ' + this.selectedTeam.players[i].name + ' - ' + this.selectedTeam.players[i].position + '\n';
//             }
//             let selection = this.showTeamMenuOptions(description);
//             switch (selection){
//                 case '1':
//                     this.createPlayer();
//                     break;
//                 case '2':
//                     this.deletePlayer();
//             }
//         }
//     }

//     createPlayer() {
//         let name = prompt('Enter name for new player:');
//         let position = prompt('Enter position for new player:');
//         this.selectedTeam.player.push(new Player(name, position));
//     }

//     deletePlayer(){
//         let index = prompt('Enter the index of the player you wish to delete');
//         if (index > -1 && index < this.selectedTeam.players.length){
//             this.selectedTeam.players.splice(index, 1);
//         }
//     }
// }



let newStore = '';
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
        this.item = []
    }

    addItem (item) {
        if (item instanceof Item){
            this.items.push(item);
        } else {
            throw new Error(`You can only add an item. Argument is not a item: ${item}`)
        }
    }

    describe(){
        return `${this.name} has ${this.item.length} items.`;
    }
}

class Menu {
    constructor() {
        this.stores = ["hello","what"]
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
        3: Close Store
        4: Display All Stores
        `)
    }

    showItemMenuOptions(storeInfo){
        return prompt(`
        0: Back
        1: Create Item
        2: Delete Item
        `)
    }

    createStore(){
        // let name = prompt('Enter Store Name.');
        // newStore = new Store(name);
        // console.log(this.stores.push(newStore));
        // return this.stores.push(newStore);
        console.log("hi");
    }

    viewStore(){
        let index = prompt ('Enter the name of the store you wish to view.');
        if (index > -1 && index < this.stores.length){
            this.selectedStore = this.stores[i];
            let description = 'Welcome to ' + this.selectedStore.name + '\n'

            for(let i = 0; i< this.selectedStore.item.length; i++){
                descript += i +') ' + this.selectedStore.items[i].name + ' - ' + this.selectedStore.items[i].price + '\n';
            }
            let selection = this.showTeamMenuOptions(description);
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
            storesString += i + ': ' + this.stores[i].name + '\n'
        }
        alert(storesString);
    }
    createItem() {
        let name = prompt('Enter name for new Item.');
        let price = prompt('Enter price for new Item');
        this.selectedStore.item.push(new Item(name, price));
    }

    deleteItem(){
        let index = prompt('Enter the Item you wish to delete');
        if (index > -1 && index < this.selectedStore.items.length){
            this.selectedStore.items.splice(index, 1);
        }
    }


}



let menu = new Menu();
menu.start()