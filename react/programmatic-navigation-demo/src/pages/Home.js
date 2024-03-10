import React from "react";
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    const redirectToDashboard = () => {
        navigate("/dashboard");
    };

    const navigationCondition = (window.performance.navigation && window.performance.navigation.type == 1);

    React.useEffect(() => {
        if(navigationCondition){
            console.log("Reload Detected....")
        }
        else{
            console.log("No Reload Detected....")
        }
    })

    return (
        <div>
            <h2>Welcome to Home Page!</h2>
            <button onClick={redirectToDashboard}>Go to Dashboard</button>
        </div>
    );
}

export default Home;