class StaffList {

    constructor() {
        this.member = new Array();
        this.i = 0;
    }

    add(name, age) {
        if (age>20) {
            let flag = true;
            for (let index = 0; index < this.i; index++) {
                if (this.member == name) {
                    flag = false;
                }
            }
            if (flag) {
                this.member[this.i] = name;
                this.i++;
            }
        }
        else if (age<=20) {
            throw "Error: Staff member age must be greater than 20";
        }
    }

    remove(name) {
        let index = -1;
        index = this.member.indexOf(name);
        if (index != -1) {
            delete this.member[index];
            this.i--;
            return true;
        }
        else {
            return false;
        }
    }

    getSize() {
        return this.i;
    }
}

const obj = new StaffList();

obj.add("Neh",21);
obj.add("Manthan",22);

obj.remove("Neh");

console.log(obj.getSize());