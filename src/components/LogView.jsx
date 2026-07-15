import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const LogView = () => {
    const [data,ChangeData]=useState([])
    const [selectedLog, setSelectedLog] = useState(null)
    const [showModal, setShowModal] = useState(false)

        const fetchData=()=>{
        axios.get("http://localhost:3000/login-view").then(
            (response)=>{
                
                ChangeData(response.data)
            }
        ).catch()
    }

    const deleteLog = (id) => {
        if (window.confirm("Are you sure you want to delete this login record?")) {
            axios.post("http://localhost:3000/delete-login", { _id: id }).then(
                () => {
                    fetchData()
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }
    }

    const editLog = (log) => {
        setSelectedLog({ ...log })
        setShowModal(true)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setSelectedLog((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const updateLog = () => {
        axios.post("http://localhost:3000/update-login", selectedLog).then(
            () => {
                setShowModal(false)
                fetchData()
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
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
                <th>Actions</th>
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
                  <td>
                    <button className="btn btn-warning btn-sm" onClick={() => editLog(value)}>Edit</button>{' '}
                    <button className="btn btn-danger btn-sm" onClick={() => deleteLog(value._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

          {showModal && selectedLog && (
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Login</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Log In ID</label>
                        <input type="text" className="form-control" name="loginId" value={selectedLog.loginId || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Student ID</label>
                        <input type="text" className="form-control" name="studentId" value={selectedLog.studentId || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Student Name</label>
                        <input type="text" className="form-control" name="studentName" value={selectedLog.studentName || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Hostel Block</label>
                        <input type="text" className="form-control" name="hostelBlock" value={selectedLog.hostelBlock || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Room Number</label>
                        <input type="text" className="form-control" name="roomNumber" value={selectedLog.roomNumber || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Department</label>
                        <input type="text" className="form-control" name="department" value={selectedLog.department || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Year of Study</label>
                        <input type="text" className="form-control" name="yearOfStudy" value={selectedLog.yearOfStudy || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Log In Date</label>
                        <input type="text" className="form-control" name="loginDate" value={selectedLog.loginDate || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Log In Time</label>
                        <input type="text" className="form-control" name="loginTime" value={selectedLog.loginTime || ''} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Attendance Status</label>
                        <input type="text" className="form-control" name="attendanceStatus" value={selectedLog.attendanceStatus || ''} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                    <button type="button" className="btn btn-success" onClick={updateLog}>Update</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default LogView