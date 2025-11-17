import { useState } from "react";

const Dashboard = () => {

    //const appMode = "darkmode";
    //conditional rendering using if..else statement
    //conditional rendering is also done using ternary operator and it is considered the best way of doing conditional rendering

    const [appMode, setAppMode] = useState("lightmode");
    function lightModeToggle() {
        setAppMode("lightmode")
    }

    function darkModeToggle() {
        setAppMode("darkmode")
    }

    if (appMode == "lightmode") {
        return (
            <div className="row bg-light py-5">
                <h1>Dashboard</h1>
                <button className="btn btn-dark" onClick={darkModeToggle}>DarkMode</button>
            </div>
        )
    } else {
        return (
            <div className="row bg-dark text-light py-5">
                <h1>Dashboard</h1>
                <button className="btn btn-light" onClick={lightModeToggle}>LightMode</button>
            </div>
        )
    }
}

export default Dashboard