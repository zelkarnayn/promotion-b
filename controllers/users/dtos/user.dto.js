module.exports = class UserDto {
    email;
    id;
    isActivated;
    roles;
    firstName;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.roles = model.roles
        this.firstName = model.firstName
    }
}