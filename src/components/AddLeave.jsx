import { useState } from 'react'

const initialLeaveForm = {
  leaveRequestId: '',
  studentId: '',
  studentName: '',
  hostelBlock: '',
  roomNumber: '',
  department: '',
  yearOfStudy: '',
  fromDate: '',
  toDate: '',
  reasonForLeave: '',
  parentContactNumber: '',
  leaveStatus: 'Pending',
}

function LeaveRequestForm() {
  const [form, setForm] = useState(initialLeaveForm)
  const [status, setStatus] = useState(null)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'pending', message: 'Submitting leave request...' })

    try {
      const response = await fetch('http://localhost:3000/add-leave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Failed to submit leave request')
      }

      setStatus({ type: 'success', message: 'Leave request added successfully.' })
      setForm(initialLeaveForm)
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'An error occurred.' })
    }
  }

  return (
    <main className="leave-request-page">
      <section className="leave-form-card">
        <h1>Add Leave Request</h1>
        <p>Fill in the student leave details and submit the request.</p>

        <form className="leave-form" onSubmit={handleSubmit}>
          <label>
            Leave Request ID
            <input
              name="leaveRequestId"
              value={form.leaveRequestId}
              onChange={updateField}
              placeholder="LR-1001"
              required
            />
          </label>

          <label>
            Student ID
            <input
              name="studentId"
              value={form.studentId}
              onChange={updateField}
              placeholder="S12345"
              required
            />
          </label>

          <label>
            Student Name
            <input
              name="studentName"
              value={form.studentName}
              onChange={updateField}
              placeholder="John Doe"
              required
            />
          </label>

          <label>
            Hostel Block
            <input
              name="hostelBlock"
              value={form.hostelBlock}
              onChange={updateField}
              placeholder="A Block"
            />
          </label>

          <label>
            Room Number
            <input
              name="roomNumber"
              value={form.roomNumber}
              onChange={updateField}
              placeholder="101"
            />
          </label>

          <label>
            Department
            <input
              name="department"
              value={form.department}
              onChange={updateField}
              placeholder="Computer Science"
            />
          </label>

          <label>
            Year of Study
            <select name="yearOfStudy" value={form.yearOfStudy} onChange={updateField} required>
              <option value="">Select year</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </select>
          </label>

          <label>
            From Date
            <input
              type="date"
              name="fromDate"
              value={form.fromDate}
              onChange={updateField}
              required
            />
          </label>

          <label>
            To Date
            <input
              type="date"
              name="toDate"
              value={form.toDate}
              onChange={updateField}
              required
            />
          </label>

          <label>
            Reason for Leave
            <textarea
              name="reasonForLeave"
              value={form.reasonForLeave}
              onChange={updateField}
              placeholder="Enter the reason for leave"
              rows="4"
              required
            />
          </label>

          <label>
            Parent Contact Number
            <input
              type="tel"
              name="parentContactNumber"
              value={form.parentContactNumber}
              onChange={updateField}
              placeholder="+91 9876543210"
            />
          </label>

          <label>
            Leave Status
            <select name="leaveStatus" value={form.leaveStatus} onChange={updateField}>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </label>

          <button type="submit">Submit Leave Request</button>
        </form>

        {status && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}
      </section>
    </main>
  )
}

export default LeaveRequestForm
