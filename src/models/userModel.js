export default class UserModel {
    constructor(parseModel) {
        this.id = parseModel.id;
        this.email = parseModel.get("email");
        this.fname = parseModel.get("fname");
        this.lname = parseModel.get("lname");
    }
}