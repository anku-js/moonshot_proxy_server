import { useState, useEffect } from "react"
const Home = () => {

    const [token, setToken] = useState("");

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Api-key", "4NKQ3-815C2-8T5Q2-16318-55301");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
        };

        fetch("/api/generate-token", requestOptions)
        .then(response => response.json())
        .then(result => JSON.parse(result))
        .then(res => {
            setToken(res.data.token);
            var myHeaders = new Headers();
            myHeaders.append("Api-key", "4NKQ3-815C2-8T5Q2-16318-55301");
            myHeaders.append("Auth-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE2ODk0OTMyNDMsImV4cCI6MTY4OTUwNDA0MywibmJmIjoxNjg5NDkzMjQzLCJqdGkiOiI3WGZNRG4yVm1KUlZFN1RvIn0.gPuWCE2axaQK7n7GUFPbEna_dtBMyEuqsvYMA69HohE");
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                "session_id": "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw
            };

            fetch("/api/get-products", requestOptions)
            .then(response => response.json())
            .then(result => console.log(JSON.parse(result)))
            .catch(error => console.log('error', error));
        })
        .catch(error => console.log('error', error));
    },[]);
    return (
        <p>Token: {token}</p>
    )
}

export default Home;