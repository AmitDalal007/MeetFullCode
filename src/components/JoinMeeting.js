import React from 'react'
import { useRef } from 'react'
import { useHistory } from 'react-router'

const JoinMeeting = () => {
    const sbtn = useRef(null)
    let history = useHistory();

    const handleJoinM = async (e) => {
        e.preventDefault()

        let passcode = document.getElementById('passcode');
        let passcode_value = passcode.value;
        const response = await fetch(`http://103.127.30.218:8081/meeting-scheduler/v1.0/schedule-meeting/?request_type=FILTERED&meeting_passcode=${passcode_value}`, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
            }
        });
        const json = await response.json();
        // console.log(json);
        if (json.Success) {
            // document.getElementById("meeting_url").innerHTML=json["ResponseData"]["meeting_url"]
            // console.log(json["ResponseData"]["meeting_url"])
            // // sbtn.current.click();
            // document.getElementById("meeting_url").setAttribute("src",json["ResponseData"]["meeting_url"])

            if (json["ResponseData"]["meeting_url"] === undefined) {
                // history.push("/");
                sbtn.current.click();
            }
            else {
                localStorage.setItem('meeting_url', json["ResponseData"]["meeting_url"]);
                history.push("/meeting");
            }
        }

    }

    return (
        <>
            <div className="container-fluid py-5 _jmeet">
                <div className="_jmcont">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="passcode" className="form-label _mdltxt">Enter Passcode</label>
                            <input type="text" className="form-control" name="passcode" id="passcode" aria-describedby="emailHelp" required />
                        </div>
                        <button onClick={handleJoinM} id="jmbtn" className="btn _jmbtn">Join Meeting</button>
                    </form>
                </div>
            </div>

            {/* For invalid passcode */}

            <button type="button" ref={sbtn} className="btn btn-primary visually-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header _mdlh">
                            <h5 className="modal-title _jmerr" id="exampleModalLabel">Something went wrong!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Please enter a valid passcode.
                        </div>
                        <div className="modal-footer _mdlh">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinMeeting
