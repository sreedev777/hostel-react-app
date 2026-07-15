import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const LogView = () => {
    const [data,ChangeData]=useState([])

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
              {data.map((value, index) => (
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