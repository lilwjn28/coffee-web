import React from 'react';

const Logout = () => {
    localStorage.removeItem("email");
    return (
        <div className="log-out"> 
            
        </div>
    );
};

export default Logout;