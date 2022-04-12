
class PatientDTO {
    
    public id;
    public UserId;
    public RolesId;
  
    
    constructor({id, UserId,RolesId } : {id: number, UserId: number, RolesId: number}) {
        this.id = id;
        this.UserId = UserId;
        this.RolesId = RolesId;

    }

}

export default PatientDTO;

