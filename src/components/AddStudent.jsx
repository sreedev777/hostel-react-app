import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const AddStudent = () => {

    const [input, changeInput] = useState(
        {
            admissionId: "",
            studentID: "",
            name: "",
            gender: "",
            dept: "",
            year: "",
            hostelBlock: "",
            roomNo: "",
            parentName: "",
            parentNo: "",
            date: "",
            wardenName: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-student", input).then(

            (response) => {
                console.log(response.data)
                alert("Added successfully")
            }

        ).catch(

            (error) => {
                console.log(error.response)
                alert("Failed to add student")
            }
        )
    }

    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2 style={{ color: "#2a3d89", textAlign: "center", fontFamily: "Poppins" }}>
                                ADD STUDENT
                            </h2>

                            <div className="row g-3">

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Admission ID</label>
                                    <input type="text" className="form-control" name="admissionId" value={input.admissionId} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Student ID</label>
                                    <input type="text" className="form-control" name="studentID" value={input.studentID} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Student Name</label>
                                    <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Department</label>
                                    <input type="text" className="form-control" name="dept" value={input.dept} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Year</label>
                                    <input type="text" className="form-control" name="year" value={input.year} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Hostel Block</label>
                                    <input type="text" className="form-control" name="hostelBlock" value={input.hostelBlock} onChange={inputHandler} />

                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Room Number</label>
                                    <input type="text" className="form-control" name="roomNo" value={input.roomNo} onChange={inputHandler} />

                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Parent Name</label>
                                    <input type="text" className="form-control" name="parentName" value={input.parentName} onChange={inputHandler} />

                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Parent Phone Number</label>
                                    <input type="tel" className="form-control" name="parentNo" value={input.parentNo} onChange={inputHandler} />

                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Admission Date</label>
                                    <input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler} />

                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Warden Name</label>
                                    <input type="text" className="form-control" name="wardenName" value={input.wardenName} onChange={inputHandler} />

                                </div>

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <button className="btn btn-success" onClick={readValue}>
                                        ADD STUDENT
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddStudent