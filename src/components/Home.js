import React from 'react'
import Modal from './Modal'

const Home = () => {
    return (
        <>
            <Modal />
            <div className="container-fluid py-5 _hcont">
                <button type="button" class="btn rounded-circle _hombtn _fxdbtn" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-lg _homfbtn" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                </svg></button>

                <div className="container">
                    <div className="my-4">
                        <button type="button" class="btn _hombtn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-plus-lg"></i> Add Meeting</button>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr className="_homtbbg">
                                <th scope="col">Meeting ID</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XYZ_TFRG/GHJ-yuh-jkl/</td>
                                <td>09:45 am, Oct 05, 2021</td>
                                <td>10:00 am, Oct 05, 2021</td>
                                <td><span className="_homdlt" type="button"> Delete</span></td>
                            </tr>
                            <tr>
                                <td>XYZ_TFRG/GHJ-yuh-jkl/</td>
                                <td>10:00 am, Oct 05, 2021</td>
                                <td>10:30 am, Oct 05, 2021</td>
                                <td><span className="_homdlt" type="button"> Delete</span></td>
                            </tr>
                            <tr>
                                <td>XYZ_TFRG/GHJ-yuh-jkl/</td>
                                <td>10:45 am, Oct 05, 2021</td>
                                <td>11:00 am, Oct 05, 2021</td>
                                <td><span className="_homdlt" type="button"> Delete</span></td>
                            </tr>
                            <tr>
                                <td>XYZ_TFRG/GHJ-yuh-jkl/</td>
                                <td>11:45 pm, Oct 06, 2021</td>
                                <td>12:05 am, Oct 07, 2021</td>
                                <td><span className="_homdlt" type="button"> Delete</span></td>
                            </tr>
                            <tr>
                                <td>XYZ_TFRG/GHJ-yuh-jkl/</td>
                                <td>10:45 am, Oct 07, 2021</td>
                                <td>11:00 am, Oct 07, 2021</td>
                                <td><span className="_homdlt" type="button"> Delete</span></td>
                            </tr>
                            <tr>
                                <td>XYZ_TFRG/GHJ-yuh-jkl/</td>
                                <td>09:45 pm, Oct 07, 2021</td>
                                <td>11:00 pm, Oct 07, 2021</td>
                                <td><span className="_homdlt" type="button"> Delete</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home
