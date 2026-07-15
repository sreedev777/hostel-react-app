import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const LogView = () => {
    const [data,ChangeData]=useState([])
    const [searchTerm,setSearchTerm]=useState("")

        const fetchData=()=>{
        axios.get("http://localhost:3000/login-view").then(
            (response)=>{
                
                ChangeData(response.data)
            }
        ).catch()
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
  <NavigationBar/>

  <div className="container">
    <h1 className="text-center mt-4">VIEW LOGIN DETAILS</h1>

    <div className="row mt-4">
      <div className="col-12">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search login records by student name, ID, block, department, or attendance"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-primary">
              <tr>
                <th>Log In ID</th>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Hostel Block</th>
                <th>Room Number</th>
                <th>Department</th>
                <th>Year of Study</th>
                <th>Log In Date</th>
                <th>Log In Time</th>
                <th>Attendance Status</th>
              </tr>
            </thead>

            <tbody>
              {data.filter((item) => {
                const term = searchTerm.toLowerCase()
                return (
                  item.loginId?.toString().toLowerCase().includes(term) ||
                  item.studentId?.toString().toLowerCase().includes(term) ||
                  item.studentName?.toString().toLowerCase().includes(term) ||
                  item.hostelBlock?.toString().toLowerCase().includes(term) ||
                  item.roomNumber?.toString().toLowerCase().includes(term) ||
                  item.department?.toString().toLowerCase().includes(term) ||
                  item.yearOfStudy?.toString().toLowerCase().includes(term) ||
                  item.loginDate?.toString().toLowerCase().includes(term) ||
                  item.loginTime?.toString().toLowerCase().includes(term) ||
                  item.attendanceStatus?.toString().toLowerCase().includes(term)
                )
              }).map((value, index) => (
                <tr key={index}>
                  <td>{value.loginId}</td>
                  <td>{value.studentId}</td>
                  <td>{value.studentName}</td>
                  <td>{value.hostelBlock}</td>
                  <td>{value.roomNumber}</td>
                  <td>{value.department}</td>
                  <td>{value.yearOfStudy}</td>
                  <td>{value.loginDate}</td>
                  <td>{value.loginTime}</td>
                  <td>{value.attendanceStatus}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default LogView