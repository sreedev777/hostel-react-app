import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
    return (
        <>
            <NavigationBar />

            <div
                className="d-flex align-items-center"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(to right, #899ee6, #14B8A6)",
                    color: "white",
                    paddingTop: "80px"
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <h1 className="display-3 fw-bold">
                                🏨 Hostel Management System
                            </h1>

                            <p className="fs-4 mt-4">
                                Manage hostel admissions, login & logout records,
                                leave applications and student information with ease.
                            </p>

                            <button className="btn btn-light btn-lg mt-3">
                                Get Started
                            </button>
                        </div>

                        <div className="col-lg-6 text-center">
                            <div className="card border-0 shadow-lg rounded-4 p-4">
                                <h2>✨ Features</h2>
                                <hr />
                                <p>👨‍🎓 Student Management</p>
                                <p>🔐 Login Register</p>
                                <p>🚪 Logout Register</p>
                                <p>📝 Leave Management</p>
                                <p>🏠 Hostel Records</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home