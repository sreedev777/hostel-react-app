import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewLogout = () => {

    const [data, changeData] = useState([])
    const [selectedLogout, setSelectedLogout] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const fetchData = () => {
        axios.post("http://localhost:3000/view-logout").then(

            (response) => {
                changeData(response.data)
            }

        ).catch(

            (error) => {
                console.log(error)
            }

        )
    }

    const deleteLogout = (id) => {
        if (window.confirm("Are you sure you want to delete this logout record?")) {
            axios.post("http://localhost:3000/delete-logout", { _id: id }).then(
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

    const editLogout = (logout) => {
        setSelectedLogout({ ...logout })
        setShowModal(true)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setSelectedLogout((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const updateLogout = () => {
        axios.post("http://localhost:3000/update-logout", selectedLogout).then(
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

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            <NavigationBar />

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2
                                style={{
                                    color: "#2a3d89",
                                    textAlign: "center",
                                    fontFamily: "Poppins"
                                }}
                            >
                                🚪 View Student Logout
                            </h2>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Logout ID</th>
                                        <th>Student ID</th>
                                        <th>Student Name</th>
                                        <th>Hostel Block</th>
                                        <th>Room Number</th>
                                        <th>Department</th>
                                        <th>Year</th>
                                        <th>Logout Time</th>
                                        <th>Logout Date</th>
                                        <th>Purpose</th>
                                        <th>Expected Return Time</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {data.map(

                                        (data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{data.logoutId}</td>
                                                    <td>{data.studentID}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.block}</td>
                                                    <td>{data.roomNo}</td>
                                                    <td>{data.dept}</td>
                                                    <td>{data.year}</td>
                                                    <td>{data.logoutTime}</td>
                                                    <td>{data.logoutDate}</td>
                                                    <td>{data.purpose}</td>
                                                    <td>{data.returnTime}</td>
                                                    <td>
                                                        <button className="btn btn-warning btn-sm" onClick={() => editLogout(data)}>Edit</button>{' '}
                                                        <button className="btn btn-danger btn-sm" onClick={() => deleteLogout(data._id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    )}

                                </tbody>
                            </table>

                            {showModal && selectedLogout && (
                                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Edit Logout</h5>
                                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Logout ID</label>
                                                        <input type="text" className="form-control" name="logoutId" value={selectedLogout.logoutId || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Student ID</label>
                                                        <input type="text" className="form-control" name="studentID" value={selectedLogout.studentID || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Student Name</label>
                                                        <input type="text" className="form-control" name="name" value={selectedLogout.name || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Hostel Block</label>
                                                        <input type="text" className="form-control" name="block" value={selectedLogout.block || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Room Number</label>
                                                        <input type="text" className="form-control" name="roomNo" value={selectedLogout.roomNo || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Department</label>
                                                        <input type="text" className="form-control" name="dept" value={selectedLogout.dept || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Year</label>
                                                        <input type="text" className="form-control" name="year" value={selectedLogout.year || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Logout Time</label>
                                                        <input type="text" className="form-control" name="logoutTime" value={selectedLogout.logoutTime || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Logout Date</label>
                                                        <input type="text" className="form-control" name="logoutDate" value={selectedLogout.logoutDate || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Purpose</label>
                                                        <input type="text" className="form-control" name="purpose" value={selectedLogout.purpose || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Expected Return Time</label>
                                                        <input type="text" className="form-control" name="returnTime" value={selectedLogout.returnTime || ''} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                                <button type="button" className="btn btn-success" onClick={updateLogout}>Update</button>
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

export default ViewLogout