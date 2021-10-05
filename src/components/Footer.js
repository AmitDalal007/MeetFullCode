import React from 'react'
import footer from '../images/footer_logo.png'

const Footer = () => {
    return (
        <>
            <div>
                <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 border-top _ftrbg">
                    <img className="_ftrimg mx-2" src={footer} alt="" />
                    <span>Powered by Teliphoni Pvt. Ltd. | All rights reserved &copy; 2021 </span>
                </footer>
            </div>
        </>
    )
}

export default Footer
