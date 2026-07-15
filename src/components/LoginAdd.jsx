import axios from 'axios';
import React, { useState } from 'react'
import NavigationBar from './NavigationBar';

const LoginAdd = () => {
    const [input, changeInput] = useState({
    loginId: "",
    studentId: "",
    studentName: "",
    hostelBlock: "",
    roomNumber: "",
    department: "",
    yearOfStudy: "",
    loginDate: "",
    loginTime: "",
    attendanceStatus: ""
});
  const inputHandler=(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
  }
    const readValue =()=>{
    console.log(input)
    axios.post("http://localhost:3000/login-add",input).then(
        (response)=>{
            console.log(response.data)
            alert("details added successfully")
        }
    ).catch()
  }
  return (
    <><NavigationBar/>
    <div className="container mt-4">
    <div className="row g-3">

        <div className="col-md-6">
            <label className="form-label">Log In ID</label>
            <input
                type="text"
                className="form-control"
                name="loginId"
                value={input.loginId}
                onChange={inputHandler}
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Student ID</label>
            <input
                type="text"
                className="form-control"
                name="studentId"
                value={input.studentId}
                onChange={inputHandler}
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Student Name</label>
            <input
                type="text"
                className="form-control"
                name="studentName"
                value={input.studentName}
                onChange={inputHandler}
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Hostel Block</label>
            <input
                type="text"
                className="form-control"
                name="hostelBlock"
                value={input.hostelBlock}
                onChange={inputHandler}
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Room Number</label>
            <input
                type="text"
                className="form-control"
                name="roomNumber"
                value={input.roomNumber}
                onChange={inputHandler}
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Department</label>
            <input
                type="text"
                className="form-control"
                name="department"
                value={input.department}
                onChange={inputHandler}
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Year of Study</label>
            <select
                className="form-select"
                name="yearOfStudy"
                value={input.yearOfStudy}
                onChange={inputHandler}
            >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
            </select>
        </div>

        <div className="col-md-6">
            <label className="form-label">Log In Date</label>
            <input
                type="date"
                className="form-control"
                name="loginDate"
                value={input.loginDate}
                onChange={inputHandler}
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Log In Time</label>
            <input
                type="time"
                className="form-control"
                name="loginTime"
                value={input.loginTime}
                onChange={inputHandler}
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Attendance Status</label>
            <select
                className="form-select"
                name="attendanceStatus"
                value={input.attendanceStatus}
                onChange={inputHandler}
            >
                <option value="">Select Status</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
            </select>
        </div>
         <div className="mt-4 text-center">
        <button
            type="button"
            className="btn btn-primary px-5"
            onClick={readValue}
        >
            Submit
        </button>
    </div>

    </div>
</div>
</>
  )
}

export default LoginAdd