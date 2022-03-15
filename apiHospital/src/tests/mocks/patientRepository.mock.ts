import { Patient, patient } from "../../modules/Patient/PatientEntity";
import { IPatientRepository  } from "../../modules/Patient/PatientRepository";

const patients: Patient[] = [];

class PatientRepositoryMock implements IPatientRepository {

	async findAll() {
		return patients;
	}

	async addNew(patientEntity: patient) {

		let patient = new Patient();
		patient.firstname = patientEntity.firstname;
		patient.lastname = patientEntity.lastname;
		patient.phone = patientEntity.phone;
		patient.email = patientEntity.email;
		patient.password = patientEntity.password;

        patients.push(patient);
        return patients[patients.length - 1];
    }

	async findByeEmail(email: string) {
		const results = patients.filter((patient) => patient);
		return results[0];
	}
    //à refacto
    async compareHash(password: string, hash: string): Promise<boolean> {
    }
}
export default PatientRepositoryMock;
