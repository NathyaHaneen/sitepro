import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
    const logindetails = JSON.parse((localStorage.getItem("User")));
    const navigate = useNavigate()
    const [authenticated, setAuthenticated] = useState(false);
    const [Homedetails, setHomedetails] = useState({
        username: "",
        phonenumber: "",
        mailid: ""
    })

    useEffect(() => {
        if (logindetails) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
            navigate(-1)
        }
    }, [logindetails]);

    useEffect(() => {
        if (authenticated) {
            logindetails.filter((e) => {
                const { username, phonenumber, mailid } = e;
                setHomedetails({ ...Homedetails, username, phonenumber, mailid })
            })
        }
    }, [authenticated]);

    if (!authenticated) {
        return (
            <div>
                <h1>Access Denied</h1>
            </div>
        )
    }

    return (
        <>
            <div class="home-info">
                <h2>Home</h2>
                <h4>username: {Homedetails.username}</h4>
                <h3>Contact Details</h3>
                <h4>Phone number: {Homedetails.phonenumber}</h4>
                <h4>Password: {Homedetails.mailid}</h4>
            </div>
        </>
    )
}

export default Home