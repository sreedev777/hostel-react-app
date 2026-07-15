import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewStudent = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

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

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewStudent