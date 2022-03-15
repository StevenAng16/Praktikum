
/*
class user {
    var id;
    var username;
    var password;
}
class userservice{
    user[] = users = [];

    user[] getallusers () {
        return users;
    }
    user getuserbyid(userid){
        return users.filter(userid);
    }
}
*/

class User {
    constructor(id, username, password){
        this.id = id;
        this.username = username;
        this.password = password;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setId(username) {
        this.username = username;
        return this;
    }
    setId(password) {
        this.password = password;
        return this;
    }
    save() {
        console.log(this.id, this.username, this.password);
        return this;
    }
}
const user = new User ("1403","John Doe","johndoe1234").save();

    