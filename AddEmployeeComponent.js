import React, { useEffect, useState } from "react";
import EmployeeServices from "../Services/EmployeeServices";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployeeComponent = () => {

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [emailId, setemailId] = useState('')
    const [mobileNumber, setmobileNumber] = useState('');
    const [date, setdate] = useState();
    const [address, setaddress] = useState('');
    const navigate = useNavigate()
    const { id } = useParams();
    const [error, setError] = useState(false);
    const [validfirst, setValidfirst] = useState('');
    const [validlast, setValidlast] = useState('');
    const [validemail, setValidemail] = useState('');
    const [validmob, setValidmob] = useState('');
    const [validdate, setValiddate] = useState('');
    const [validadd, setValidadd] = useState('');
    const [validateuser, setValidateuser] = useState('');


    useEffect(() => {

        if (id !== undefined) {
            EmployeeServices.getAllEmployeeById(id).then((response) => {
                console.log("aaaaaa");
                setfirstName(response.data.firstName);
                setlastName(response.data.lastName);
                setemailId(response.data.emailId);
                setmobileNumber(response.data.mobileNumber);
                setdate(response.data.date);
                setaddress(response.data.address);
                console.log(response.data)
            }).catch(error => {
                console.log(error);
            })

        }
    }, [])

    const cancelEmployee = (e) => {
        e.preventDefault();
        navigate('/employee')
    }


    const saveEmploee = async (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId, mobileNumber, date, address }
        if (id) {

            EmployeeServices.updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigate('/employee')

            }).catch(error => {
                console.log(error)
            })
        } else {
            const inputDate = new Date(date);
            const currentDate = new Date()
            console.log(inputDate < currentDate);
            const re2 = /^[0-9]+$/;
            const re = /^[a-zA-Z]+$/;
            const re1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const fnameval = (firstName?.length > 0) ? ((re.test(firstName)) ? (setError(true), setValidfirst(""), true) : (setError(false), setValidfirst("Invalid name"), false)) : (setError(false), setValidfirst("Name should not be empty"), false);
            console.log(fnameval);
            const lnameval = (lastName?.length > 0) ? ((re.test(lastName)) ? (setError(true), setValidlast(""), true) : (setError(false), setValidlast("Invalid name"), false)) : (setError(false), setValidlast("Nmae shoud not be empty"), false);
            console.log(lnameval);
            const emailval = (emailId?.length > 0) ? ((re1.test(emailId)) ? (setError(true), setValidemail(""), true) : (setError(false), setValidemail("Invalid email"), false)) : (setError(false), setValidemail("Email should not be empty"), false);
            console.log(emailval)
            const mobileval = (mobileNumber?.length > 0) ? ((re2.test(mobileNumber)) ? ((mobileNumber?.length === 10) ? (setError(true), setValidmob(""), true) : (setError(false), setValidmob("Mobile number should not exceed 10 digits"), false)) : (setError(false), setValidmob("Invalid mobile"), false)) : (setError(false), setValidmob("Mobile number should be empty"), false);
            console.log(mobileval);
            const dateval = (date?.length > 0) ? ((inputDate < currentDate) ? (setError(true), setValiddate(""), true) : (setError(false), setValiddate("future date"), false)) : (setError(false), setValiddate("Date should not be empty"), false);
            console.log(dateval)
            const addval = (address?.length > 0) ? (address?.length <= 50 ? (setError(true), setValidadd(""), true) : (setError(false), setValidadd("Address should not exceed 50 charachters"), false)) : (setError(false), setValidadd("Address should not be empty"), false);
            console.log(addval)

            //fnameval == true && lnameval == true && emailval == true && dateval == true && mobileval == true && addval == true


            if (fnameval === true && lnameval === true && emailval === true && dateval === true && mobileval === true && addval === true) {
                // if(emailval){console.log("aaa");}else{console.log("bbb")}
                console.log(employee.emailId)
                const val = await axios.get(`http://localhost:8070/api/v1/divum_Employee/verifyuser/${employee.emailId}`);
                console.log(val.data, 'val');
                if (val.data) {
                    console.log("fhjs");
                    setError(false);
                    setValidateuser("User Already Exist ");
                }
                else {
                    console.log("no user>>")
                    EmployeeServices.createEmployee(employee).then((response) => {
                        console.log(response.data);

                        navigate('/employee')
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
        console.log(employee);
    }

    const title = () => {
        if (id) {
            return <h2 className="text-center">Update Employee</h2>
        } else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }
    return (
        <div className="container">

            <div className="row">
                <div className="card col-md-6 offset -md-3 offset-md-3">
                    {
                        title()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                {!error && (<p style={{ color: 'red' }}>{validateuser}</p>)}
                                <label className="form-label"> First Name : </label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    //  onChange={handle}

                                    onChange={(e) => setfirstName(e.target.value)}
                                >

                                </input>

                                {!error && (
                                    <p style={{ color: 'red' }}>{validfirst}</p>
                                )}
                            </div>
                            < div className="form-group mb-2">
                                <label className="form-label"> Last Name : </label>
                                <input
                                    type="text"
                                    placeholder="Enter Last name"
                                    name="LastName"
                                    className="form-control"
                                    value={lastName}
                                    // onChange = {handleLastName }
                                    onChange={(e) => setlastName(e.target.value)}
                                ></input>
                                {!error && (<p style={{ color: 'red' }}>{validlast}</p>)} </div>
                            < div className="form-group mb-2">
                                <label className="form-label"> E-mailId: </label>
                                <input
                                    type="text"
                                    placeholder="Enter e-mail id"
                                    name="emaild"
                                    className="form-control"
                                    value={emailId}
                                    //  onChange = {validateEmail}
                                    onChange={(e) => setemailId(e.target.value)} >
                                </input>
                                {!error && (<p style={{ color: 'red' }}>{validemail}</p>)}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> MobileNumber : </label>
                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    name="MobileNumber"
                                    className="form-control"
                                    value={mobileNumber}
                                    //  onChange = {handlenumber}
                                    onChange={(e) => setmobileNumber(e.target.value)} >
                                </input>
                                {!error && (<p style={{ color: 'red' }}>{validmob}</p>)}
                            </div>
                            < div className="form-group mb-2">
                                <label className="form-label"> Date of Birth: </label>
                                <input
                                    type="date"
                                    placeholder=" dd-mm-yyyy"
                                    
                                    name="Date"
                                    className="form-control"
                                    value={date}
                                    onChange={(e) => setdate(e.target.value)}
                                ></input>
                                {!error && (<p style={{ color: 'red' }}>{validdate}</p>)}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> Address : </label>
                                <textarea
                                    type="text"
                                    placeholder="Enter Address"
                                    name="Address"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setaddress(e.target.value)}
                                ></textarea>
                                {!error && (<p style={{ color: 'red' }}>{validadd}</p>)}
                            </div>

                            <button className="btn btn-success " onClick={(e) => saveEmploee(e)}>Submit</button>

                            <button className="btn btn-danger" onClick={(e) => cancelEmployee(e)}>Cancel</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default AddEmployeeComponent;