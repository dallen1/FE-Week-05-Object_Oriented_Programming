//creates band class
class Band {
    constructor(name){
        this.name = name;
    }
}


//create menu class
class Menu {
    constructor() {
        this.bands = [];
        this.selectedband = null;
    }


    //begins app
    init() {
        let find = this.mainMenu();
        while (find !=0) {
            switch(find) {
                case '1' :
                    this.createBand ();
                    break;
                case '2' :
                    this.viewBand ();
                    break;
                case '3' :
                    this.deleteBand ();
                    break;
                default:
                    find = 0;
            }
        find = this.mainMenu();
        }
    alert("Thank you!"); 
    } 
    
    mainMenu(){
        return prompt(`
        0) leave
        1) create a band
        2) view bands
        3) delete a band
        `);
    }

    createBand(){
        let name = prompt("Enter a new band's name:")
        this.bands.push(new Band(name));
    }

    viewBand(){
        let listOfBands = '';
        for (let i=0;i<this.bands.length;i++) {
            listOfBands += i +') ' + this.bands[i].name + '\n';
        }
        alert(listOfBands);
    }

    deleteBand() {
        let del = prompt(`Enter the number of the band you wish to remove: `);
        if (del > -1 && del < this.bands.length) {
            this.bands.splice(del,1);
        }
    }
}


//runs menu app
let menu = new Menu();
menu.init();
