console.log("this is node js");
class employee {
    constructor(givenname, givenid, experince, role) {
        this.name = givenname;
        this.id = givenid;
        this.experince = experince;
        this.role = role;
    }
}
const rohan = new employee("rohan", 123, 32, "developer");
console.log(rohan);