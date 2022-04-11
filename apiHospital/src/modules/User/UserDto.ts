
class UserDTO {
    
    public id;
    public firstname;
    public lastname;
    public password;
    public phone;
    public email;
    
    constructor({id, firstname,lastname, password, phone, email } : {id: number, firstname: string, lastname: string, password: string, phone: number, email: string}) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.phone = phone;
        this.email = email;
    }

}

export default UserDTO;

