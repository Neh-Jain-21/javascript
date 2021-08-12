class NotesStore {

    constructor() {
        this.namesActive = new Array();
        this.namesCompleted = new Array();
        this.namesOthers = new Array();
        this.i = 0;
        this.j = 0;
        this.k = 0;
    }

    addNote(state, name) {
        try {
            if (state == "active") {
                if (name == "") {
                    throw "Name cannot be empty";
                }
                this.namesActive[this.i] = name;
                this.i++;
            }
            else if (state == "completed") {
                if (name == "") {
                    throw "Name cannot be empty";
                }
                this.namesCompleted[this.j] = name;
                this.j++;
            }
            else if (state == "others") {
                if (name == "") {
                    throw "Name cannot be empty";
                }
                this.namesOthers[this.k] = name;
                this.k++;
            }
            else {
                throw `Invalid state ${state}`;
            }
        } catch (error) {
            console.log(error);
        }
    }

    getNotes(state) {
        try {
            if (state == "active") {
                return this.namesActive;
            }
            else if (state == "completed") {
                return this.namesCompleted;
            }
            else if (state == "others") {
                return this.namesOthers;
            }
            else {
                throw `Invalid state ${state}`;
            }            
        } catch (error) {
            console.log(error);
        }
    }
}

const obj = new NotesStore();

obj.addNote("active","");

console.log(obj.getNotes("active"));