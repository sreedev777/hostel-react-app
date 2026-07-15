import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewStudent = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedStudent, setSelectedStudent] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const fetchData = () => {
        axios.post("http://localhost:3000/view-students").then(

            (response) => {
                changeData(response.data)
            }

        ).catch(

            (error) => {
                console.log(error)
            }

        )
    }

    const deleteStudent = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            axios.post("http://localhost:3000/delete-student", { _id: id }).then(
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

    const editStudent = (student) => {
        setSelectedStudent({ ...student })
        setShowModal(true)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setSelectedStudent((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const updateStudent = () => {
        axios.post("http://localhost:3000/update-student", selectedStudent).then(
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
                    <div className="col col-12 col-md-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2 style={{ color: "#0F766E", textAlign: "center", fontFamily: "Poppins" }}>
                                🏨 View Students
                            </h2>

                            <div className="mb-3 mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search students by name, ID, department, block, room, or warden"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Admission ID</th>
                                        <th scope="col">Student ID</th>
                                        <th scope="col">Student Name</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Hostel Block</th>
                                        <th scope="col">Room Number</th>
                                        <th scope="col">Parent Name</th>
                                        <th scope="col">Parent Phone</th>
                                        <th scope="col">Admission Date</th>
                                        <th scope="col">Warden Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data.filter((item) => {
                                        const term = searchTerm.toLowerCase()
                                        return (
                                            item.admissionId?.toString().toLowerCase().includes(term) ||
                                            item.studentID?.toString().toLowerCase().includes(term) ||
                                            item.name?.toString().toLowerCase().includes(term) ||
                                            item.gender?.toString().toLowerCase().includes(term) ||
                                            item.dept?.toString().toLowerCase().includes(term) ||
                                            item.year?.toString().toLowerCase().includes(term) ||
                                            item.hostelBlock?.toString().toLowerCase().includes(term) ||
                                            item.roomNo?.toString().toLowerCase().includes(term) ||
                                            item.parentName?.toString().toLowerCase().includes(term) ||
                                            item.parentNo?.toString().toLowerCase().includes(term) ||
                                            item.date?.toString().toLowerCase().includes(term) ||
                                            item.wardenName?.toString().toLowerCase().includes(term)
                                        )
                                    }).map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.admissionId}</td>
                                                <td>{data.studentID}</td>
                                                <td>{data.name}</td>
                                                <td>{data.gender}</td>
                                                <td>{data.dept}</td>
                                                <td>{data.year}</td>
                                                <td>{data.hostelBlock}</td>
                                                <td>{data.roomNo}</td>
                                                <td>{data.parentName}</td>
                                                <td>{data.parentNo}</td>
                                                <td>{data.date}</td>
                                                <td>{data.wardenName}</td>
                                            </tr>
                                        )
                                    })}
                                    {data.map(

                                        (data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{data.admissionId}</td>
                                                    <td>{data.studentID}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.gender}</td>
                                                    <td>{data.dept}</td>
                                                    <td>{data.year}</td>
                                                    <td>{data.hostelBlock}</td>
                                                    <td>{data.roomNo}</td>
                                                    <td>{data.parentName}</td>
                                                    <td>{data.parentNo}</td>
                                                    <td>{data.date}</td>
                                                    <td>{data.wardenName}</td>
                                                    <td>
                                                        <button className="btn btn-warning btn-sm" onClick={() => editStudent(data)}>Edit</button>{' '}<br/>
                                                        <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(data._id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    )}

                                </tbody>
                            </table>

                            {showModal && selectedStudent && (
                                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Edit Student</h5>
                                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Admission ID</label>
                                                        <input type="text" className="form-control" name="admissionId" value={selectedStudent.admissionId || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Student ID</label>
                                                        <input type="text" className="form-control" name="studentID" value={selectedStudent.studentID || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Student Name</label>
                                                        <input type="text" className="form-control" name="name" value={selectedStudent.name || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Gender</label>
                                                        <input type="text" className="form-control" name="gender" value={selectedStudent.gender || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Department</label>
                                                        <input type="text" className="form-control" name="dept" value={selectedStudent.dept || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Year</label>
                                                        <input type="text" className="form-control" name="year" value={selectedStudent.year || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Hostel Block</label>
                                                        <input type="text" className="form-control" name="hostelBlock" value={selectedStudent.hostelBlock || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Room Number</label>
                                                        <input type="text" className="form-control" name="roomNo" value={selectedStudent.roomNo || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Parent Name</label>
                                                        <input type="text" className="form-control" name="parentName" value={selectedStudent.parentName || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Parent Phone</label>
                                                        <input type="text" className="form-control" name="parentNo" value={selectedStudent.parentNo || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Admission Date</label>
                                                        <input type="text" className="form-control" name="date" value={selectedStudent.date || ''} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="form-label">Warden Name</label>
                                                        <input type="text" className="form-control" name="wardenName" value={selectedStudent.wardenName || ''} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                                <button type="button" className="btn btn-success" onClick={updateStudent}>Update</button>
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

export default ViewStudent