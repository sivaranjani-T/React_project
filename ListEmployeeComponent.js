import { useEffect, useState } from "react";
import EmployeeServices from "../Services/EmployeeServices";
import { Link } from "react-router-dom";
// const deleteEmployee=(id)=>{
//     console.log(id);
//     EmployeeServices.deleteEmployee(id).then((response)=>{
//       console.log(response);
      

//     }).catch(error=>{
//         console.log(error)
//     })
// }

const ListEmployeeComponent=()=>{
    const[Employee,setEmployee]=useState([]);
    useEffect(()=>{
        getemp();
        
    },[])
    const getemp=()=>{
        EmployeeServices.getAllEmployee().then((response)=>{
            setEmployee(response.data);
            console.log(response.data)
        }) .catch(error=>{
            console.log(error);
        })
    }
    const deleteEmployee=(id)=>{
    console.log(id);
    EmployeeServices.deleteEmployee(id).then((response)=>{
      console.log(response);
      getemp();

    }).catch(error=>{
        console.log(error)
    })
}

    return (
        
        <div className="container">
            <h2 className="text-center">Employee List</h2>
            <div>
                <img id="logo1" src="https://divum.in/images/logo/Divum%20LOGO%202022.svg"/>
            </div>
           
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Link to="/add_Employee" className="btn btn-primary">Add Employee</Link></div>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>E-mail Id</th>
                    <th>Mobile Number</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employee.map(
                            Employee=>
                            <tr key={Employee.id}>
                                <td>{Employee.firstName}</td>
                                <td>{Employee.lastName}</td>
                                <td>{Employee.emailId}</td>
                                <td>{Employee.mobileNumber}</td>
                                <td>{Employee.date}</td>
                                <td>{Employee.address}</td>
                                <td>
                                    
                                    <Link className="btn btn-info" to={`/edit-employee/${Employee.id}`}>Update</Link>
                                    <button className="btn btn-danger" onClick={()=>deleteEmployee(Employee.id)}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>


        </div>
    )
}
export default ListEmployeeComponent;