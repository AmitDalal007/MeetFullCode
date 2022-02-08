import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Login = () => {

    const nAgt = navigator.userAgent;
    console.log(nAgt);

    // const [ip, setIP] = useState('');

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        // const res = await axios.get('https://www.cloudflare.com/cdn-cgi/trace')
        console.log(res.data);
        console.log(res.data.IPv4)
        // setIP(res.data.IPv4)
        // console.log(res.data.ip)
    }

    useEffect(() => {
        getData()

    })


    return (
        <>
            <div className="_slmcont">
                <div className="_msinlogc">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" />
                        </div>
                        <button type="submit" className="btn _hombtn">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
