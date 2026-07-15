import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewLogout = () => {

    const [data, changeData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

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

                            <div className="mb-3 mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search logout records by student, ID, block, room, department, or purpose"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

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
                                    </tr>
                                </thead>

                                <tbody>

                                    {data.filter((item) => {
                                        const term = searchTerm.toLowerCase()
                                        return (
                                            item.logoutId?.toString().toLowerCase().includes(term) ||
                                            item.studentID?.toString().toLowerCase().includes(term) ||
                                            item.name?.toString().toLowerCase().includes(term) ||
                                            item.block?.toString().toLowerCase().includes(term) ||
                                            item.roomNo?.toString().toLowerCase().includes(term) ||
                                            item.dept?.toString().toLowerCase().includes(term) ||
                                            item.year?.toString().toLowerCase().includes(term) ||
                                            item.logoutTime?.toString().toLowerCase().includes(term) ||
                                            item.logoutDate?.toString().toLowerCase().includes(term) ||
                                            item.purpose?.toString().toLowerCase().includes(term) ||
                                            item.returnTime?.toString().toLowerCase().includes(term)
                                        )
                                    }).map((data, index) => {
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

export default ViewLogout