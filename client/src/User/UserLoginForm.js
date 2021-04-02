import React from 'react';

function UserLoginForm() {

    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
    <div className="UserLoginForm">
        <h2>Login:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Log In</button>
        </form>
    </div>  
    );
} 

export default UserLoginForm;
