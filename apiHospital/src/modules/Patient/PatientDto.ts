
class PatientDTO {
    
    public id;
    public firstname;
    public password;
    public lastname;
    public phone;
    public email;
    constructor({id, firstname, password, lastname,phone, email } : {id: number, email: string, books?: Book[]}) {
        this.id = id;
        this.firstname = firstname;
        this.password = password;
        this.email = email;
        this.email = email;
        this.email = email;
        // this.books = books.map((book: any) => new BookDTO(book));
    }

}

export default PatientDTO;

