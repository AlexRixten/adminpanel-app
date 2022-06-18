import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { userRows } from '../../dummyData';
import { 
    PermIdentity, 
    CalendarToday, 
    PhoneAndroid, 
    MailOutline, 
    LocationSearching, 
    Publish 
} from '@material-ui/icons';



import './user.css'
import { Link } from 'react-router-dom';

export default function User(props) {
    const { userId } = useParams();

    const[data, setData] = useState(userRows)

    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{data[userId].username}</span>
                            <span className="userShowUserTitle">Frontend Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom"></div>
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon' />
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">{data[userId].bithday}</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">{data[userId].phone}</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">{data[userId].email}</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon' />
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input className='userUpdateInput' type="text" placeholder='annabeck99' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input className='userUpdateInput' type="text" placeholder={data[userId].username} />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input className='userUpdateInput' type="text" placeholder={data[userId].email} />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input className='userUpdateInput' type="text" placeholder={data[userId].phone} />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input className='userUpdateInput' type="text" placeholder='New York | USA' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className='userUpdateIcon' /> </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
