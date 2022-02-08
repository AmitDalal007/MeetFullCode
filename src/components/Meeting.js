import React from 'react'
import { useHistory } from 'react-router'

const Meeting = () => {
    let history = useHistory();
    const url = localStorage.getItem('meeting_url')

    if (localStorage.getItem('meeting_url') === null || localStorage.getItem('meeting_url') === "undefined") {
        return <> {history.push("/joinmeeting")}</>
    }
    else {
        return <div className="_inmeet">
            <iframe className="_jmframe" title="join" src={url} frameBorder="0" allowFullScreen="" id="meeting_url"></iframe>
        </div>
    }
}

export default Meeting
