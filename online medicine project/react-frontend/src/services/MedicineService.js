import axios from 'axios';

const MEDICINE_API_BASE_URL = "http://localhost:8080/api/v1/medicines";

class MedicineService {

    getMedicines(){
        return axios.get(MEDICINE_API_BASE_URL);
    }

    createMedicine(medicine){
        return axios.post(MEDICINE_API_BASE_URL, medicine);
    }

    
    OrderMedicine(medicine, medicineId){
        return axios.put(MEDICINE_API_BASE_URL ,  medicine);
    }

    
}

export default new MedicineService()