import React from 'react'

const NavigationBar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg navbar-dark shadow"
                style={{ background: "linear-gradient(to right, #25284d, #1b423e)" }}
            >
                <div className="container-fluid px-4">

                    <a
                        className="navbar-brand fw-bold fs-3 text-white"
                        href="#"
                        style={{
                            letterSpacing: "1px",
                            fontFamily: "Poppins, sans-serif"
                        }}
                    >
                        🏨 HOSTEL MANAGEMENT SYSTEM
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                        <div className="navbar-nav flex-nowrap">

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/">🏠 Home</a>

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/addstudent">➕ Add Student</a>

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/viewstudent">👨‍🎓 View Students</a>

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/addlogin">🔐 Add Login</a>

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/viewlogin">👤 View Login</a>

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/addlogout">🚪 Add Logout</a>

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/viewlogout">📄 View Logout</a>

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/addleave">📝 Add Leave</a>

                            <a className="nav-link text-white fw-semibold mx-2 text-nowrap" href="/viewleave">📋 View Leave</a>

                        </div>

                    </div>

                </div>
            </nav>

        </div>
    )
}

export default NavigationBar