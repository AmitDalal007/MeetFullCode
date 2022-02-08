import React from 'react'
import { useState, useRef } from 'react'

const Modal = () => {
    const myForm = useRef(null)
    const [details, setDetails] = useState({ meeting_name: "", meeting_description: "", meeting_start_datetime: "", meeting_end_datetime: "" })

    const handleMeeting = async (e) => {
        e.preventDefault();
        const {meeting_name, meeting_description, meeting_start_datetime, meeting_end_datetime} = details

        const response = await fetch(`http://103.127.30.218:8081/meeting-scheduler/v1.0/schedule-meeting/`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ meeting_name, meeting_description, meeting_start_datetime, meeting_end_datetime })
        });
        const json = await response.json();
        // console.log(json);
        // console.log(json["ResponseData"]["meeting_passcode"]);
        document.getElementById("meeting_passcode").innerHTML=json["ResponseData"]["meeting_passcode"]
        document.getElementById("hidden_button").click()
        
        myForm.current.reset();
    }

    const handleCopy = async (e) => {
        e.preventDefault();
        var text = document.getElementById("meeting_passcode").innerHTML
        navigator.clipboard.writeText(text).then(function() {
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
    }

    const onchange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header _mdlh">
                            <h5 className="modal-title" id="exampleModalLabel">Schedule A Meeting</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleMeeting} ref={myForm}>
                            <div className="modal-body">
                                <div className="mb-4">
                                    <label htmlFor="meeting_name" className="form-label _mdltxt">Meeting Name</label>
                                    <input type="text" className="form-control" onChange={onchange} name="meeting_name" id="meeting_name" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="meeting_description" className="form-label _mdltxt">Meeting Description</label>
                                    <textarea type="text" className="form-control" onChange={onchange} name="meeting_description" id="meeting_description" rows="3" required></textarea>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="meeting_start_datetime" className="_mdltxt">From :</label>
                                    <input type="datetime-local" className="_mdlinp" onChange={onchange} id="meeting_start_datetime" name="meeting_start_datetime" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="meeting_end_datetime" className="_mdltxt">To :</label>
                                    <input type="datetime-local" className="_mdlinp _mdlto" onChange={onchange} id="meeting_end_datetime" name="meeting_end_datetime" />
                                </div>
                            </div>
                            <div className="modal-footer _mdlh">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" data-bs-toggle="modal" className="btn _mdlbtn">Add Meeting</button>
                                <button type="button" id="hidden_button" className="visually-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal2"></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            {/* On Success */}
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header _mdlh">
                            <h5 className="modal-title _mdlh2" id="exampleModalLabel">Meeting Scheduled Successfully</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="_mdltxt">Passcode :</p>
                            <span className="_mdlpc" id="meeting_passcode"></span>
                            <button type="button" className="btn _hombtn mx-4" onClick={handleCopy}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clipboard _mdlclpbtn">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg></button>
                        </div>
                        <div className="modal-footer _mdlh">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Modal
