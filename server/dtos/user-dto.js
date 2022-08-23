module.exports = class UserDto {
    email;
    id;
    fullName;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.fullName = model.fullName;
    }
}