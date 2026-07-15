import React from 'react'

const Home = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #6a11cb, #2575fc)",
                color: "white",
                padding: "40px"
            }}
        >
            <div>
                <h1 className="display-3 fw-bold">
                    🏨 Hostel Management System
                </h1>

                <p className="lead mt-4 fs-4">
                    Welcome to the Hostel Management System.
                    Manage student admissions, room allocation,
                    hostel records, and warden details efficiently.
                </p>

                <div className="row mt-5 justify-content-center">

                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card shadow-lg p-4 h-100">
                            <h1>📝</h1>
                            <h4>Student Admission</h4>
                            <p>Register hostel students quickly and securely.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card shadow-lg p-4 h-100">
                            <h1>🏠</h1>
                            <h4>Room Allocation</h4>
                            <p>Assign hostel blocks and room numbers.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card shadow-lg p-4 h-100">
                            <h1>👨‍🎓</h1>
                            <h4>Student Records</h4>
                            <p>View and manage hostel student information.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home