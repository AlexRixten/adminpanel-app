import React from 'react'
import './newUser.css'

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitel">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" className="newUserInput" placeholder='neo' />
                </div>
                <div className="newUserItem">
                    <label>Full name</label>
                    <input type="text" className="newUserInput" placeholder='Tomas Anderson' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" className="newUserInput" placeholder='example@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" className="newUserInput" placeholder='password' />
                </div>
                <div className="newUserItem">
                    <label>Birthday</label>
                    <input type="date" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="tel" className="newUserInput" placeholder='+1 123 456 78' />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" className="newUserInput" placeholder='New York | USA' />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" className="newUserInput" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" className="newUserInput" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" className="newUserInput" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className='newUserSelect' name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
