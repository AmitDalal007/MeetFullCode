import React from 'react'
import Modal from './Modal'
import { useState, useEffect } from "react";
import { useHistory } from 'react-router';

const Home = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    let history = useHistory();

    const getData = async () => {
        const response = await fetch(`http://103.127.30.218:8081/meeting-scheduler/v1.0/schedule-meeting/?request_type=ALL`, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
            }
        });
        const json = await response.json();
        // console.log(json);
        document.getElementById("meeting_name").innerHTML = json["ResponseData"]["meeting_name"]
        let html = "";
        for (var i = 0; i < json.ResponseData.length; i++) {
            html += `<tr>
            <td>${json.ResponseData[i].meeting_name}</td>
            <td>${json.ResponseData[i].meeting_start_time}</td>
            <td>${json.ResponseData[i].meeting_end_time}</td>
            <td class="_tddisp">
                <input type=${passwordShown ? "text" : "password"} class="_hominp jpasscode" id="c${[i]}" value="${json.ResponseData[i].meeting_passcode}" disabled />
                <span class="spn3"  >
                    <i class="${passwordShown ? "bi bi-eye _hompeye" : "bi bi-eye-slash _hompeye"}""></i>
                </span>
            </td>
            <td><button type="button" id="j${[i]}" class="btn px-3 btn-sm _homjoin joinbtn">Join</button><button type="button" class="btn btn-sm _homdlt"><i class="bi bi-trash"></i></button></td>

        </tr>`
        }
        document.getElementById("tbody").innerHTML = html;

        // Toggle passcode
        document.querySelector('.spn3').addEventListener("click", () => {
            setPasswordShown(!passwordShown);
        });

        // Join meeting
        document.querySelector('.joinbtn').addEventListener("click", async (e) => {
            e.preventDefault()
            let passcode = document.getElementsByClassName('jpasscode');
            let passcode_value = passcode.value;
            console.log(passcode_value);
            const response = await fetch(`http://103.127.30.218:8081/meeting-scheduler/v1.0/schedule-meeting/?request_type=FILTERED&meeting_passcode=${passcode_value}`, {
                method: 'GET',
                headers: {
                    'Accept': '*/*',
                    'User-Agent': 'Thunder Client (https://www.thunderclient.io)'
                }
            });
            const json = await response.json();
            if (json.Success) {
                localStorage.setItem('meeting_url', json["ResponseData"]["meeting_url"]);
                console.log("this is value : ",json["ResponseData"]["meeting_url"]);
                history.push("/meeting");
            }
        })
    }
    useEffect(() => {
        getData()
    })


    return (
        <>
            <Modal />
            <div className="container-fluid py-5 _hcont">
                <button type="button" className="btn rounded-circle _hombtn _fxdbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus-lg _homfbtn" viewBox="0 0 16 16">
                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                    </svg>
                </button>

                <div className="container">
                    <div className="my-4">
                        <button type="button" className="btn _hombtn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus-lg"></i> Add Meeting</button>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="_homtbbg">
                                <th scope="col">Meeting Name</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Passcode</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            {/* Herewe get Data */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home
