import React from 'react'

const Modal = () => {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header _mdlh">
                            <h5 class="modal-title" id="exampleModalLabel">Schedule A Meeting</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div class="modal-body">
                                <div class="mb-4">
                                    <label for="meetingName" class="form-label _mdltxt">Meeting ID</label>
                                    <input type="text" class="form-control" name="meetingName" id="meetingName" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-4">
                                    <p className="_mdltxt">From :</p>
                                    <label className="_mdltxt" for="fromTime">Time</label>
                                    <input type="time" className="_mdlinp" id="fromTime" name="fromTime" />
                                    <label for="fromDate" class="form-label _mdltxt">Date</label>
                                    <input type="date" className="_mdlinp" id="fromDate" name="fromDate"></input>
                                </div>
                                <div className="mb-4">
                                    <p className="_mdltxt">To :</p>
                                    <label className="_mdltxt" for="fromTime">Time</label>
                                    <input type="time" className="_mdlinp" id="toTime" name="toTime" />
                                    <label for="toDate" class="form-label _mdltxt">Date</label>
                                    <input type="date" className="_mdlinp" id="toDate" name="toDate"></input>
                                </div>
                            </div>
                            <div class="modal-footer _mdlh">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn _mdlbtn">Add Meeting</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
