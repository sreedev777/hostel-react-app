import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddLogout = () => {

    const [input, changeInput] = useState(
        {
            logoutId: "",
            studentID: "",
            name: "",
            block: "",
            roomNo: "",
            dept: "",
            year: "",
            logoutTime: "",
            logoutDate: "",
            purpose: "",
            returnTime: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/logout", input).then(

            (response) => {
                console.log(response.data)
                alert("Logout added successfully")
            }

        ).catch(

            (error) => {
                console.log(error.response)
                alert("Failed to add logout")
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
                                ADD STUDENT LOGOUT
                            </h2>

                            <div className="row g-3">

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Logout ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="logoutId"
                                        value={input.logoutId}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Student ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="studentID"
                                        value={input.studentID}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Student Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={input.name}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Hostel Block</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="block"
                                        value={input.block}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Room Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="roomNo"
                                        value={input.roomNo}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Department</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="dept"
                                        value={input.dept}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Year</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="year"
                                        value={input.year}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Logout Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="logoutTime"
                                        value={input.logoutTime}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Logout Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="logoutDate"
                                        value={input.logoutDate}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Purpose</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="purpose"
                                        value={input.purpose}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Expected Return Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="returnTime"
                                        value={input.returnTime}
                                        onChange={inputHandler}
                                    />
                                </div>

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <button className="btn btn-success" onClick={readValue}>
                                        ADD LOGOUT
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

export default AddLogout