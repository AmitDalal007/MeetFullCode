import React from 'react'

const JoinMeeting = () => {
    return (
        <>
            <div className="container-fluid py-5 _jmeet">
                <div className="_jmcont">
                    <form>
                        <div class="mb-4">
                            <label for="passcode" class="form-label _mdltxt">Enter Passcode</label>
                            <input type="text" class="form-control" name="passcode" id="passcode" aria-describedby="emailHelp" required />
                        </div>
                        <button type="button" class="btn _jmbtn">Join Meeting ?</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default JoinMeeting
