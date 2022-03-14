import { Book } from '../Book/EntityBook';
import BookDTO from '../Book/DtoBook';

class UserDTO {
    
    public id;
    public firstname;
    public password;
    public lastname;
    public phone;
    public email;
    constructor({id, email, books = []} : {id: number, email: string, books?: Book[]}) {
        this.id = id;
        this.email = email;
        // this.books = books.map((book: any) => new BookDTO(book));
    }

}

export default PatientDTO;

