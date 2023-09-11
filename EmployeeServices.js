import axios from "axios";
const API_URL="http://localhost:8070/api/v1/divum_Employee"
class EmployeeService{
    getAllEmployee(){
        return axios.get(API_URL)
    }

   verifyemployee(employeeId)
    {
        return axios.get(API_URL+'/verifyuser/'+employeeId);
    }

    createEmployee(employee){
        return axios.post(API_URL,employee)
    }
    getAllEmployeeById(employeeId){
        console.log(employeeId)
        return axios.get(API_URL+'/'+employeeId);
    }
    updateEmployee(employeeId,employee){
        return axios.put(API_URL+'/'+employeeId,employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(API_URL+'/'+employeeId);
    }
}
export default  new EmployeeService();