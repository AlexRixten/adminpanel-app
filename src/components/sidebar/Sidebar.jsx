import React from 'react'
import './sidebar.css'

import {
    LineStyle,
    Timeline,
    TrendingUp,
    DynamicFeed,
    MailOutline,
    ChatBubbleOutline,
    AttachMoney,
    BarChart,
    PersonOutline,
    WorkOutline,
    Report,
    Storefront
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <NavLink className="link" to="/">
                            <li className="sidebarListItem">
                                <LineStyle className='sidebarIcon' /> Home
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/analytics">
                            <li className="sidebarListItem">
                                <Timeline className='sidebarIcon' /> Analytics
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/sales">
                            <li className="sidebarListItem">
                                <TrendingUp className='sidebarIcon' /> Sales
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menu</h3>
                    <ul className="sidebarList">
                        <NavLink className="link" to="/users">
                            <li className="sidebarListItem">
                                <PersonOutline className='sidebarIcon' /> Users
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/products">
                            <li className="sidebarListItem">
                                <Storefront className='sidebarIcon' /> Products
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/transactions">
                            <li className="sidebarListItem">
                                <AttachMoney className='sidebarIcon' /> Transactions
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/reports">
                            <li className="sidebarListItem">
                                <BarChart className='sidebarIcon' /> Reports
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <NavLink className="link" to="/mail">
                            <li className="sidebarListItem">
                                <MailOutline className='sidebarIcon' /> Mail
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/feedback">
                            <li className="sidebarListItem">
                                <DynamicFeed className='sidebarIcon' /> Feedback
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/messages">
                            <li className="sidebarListItem">
                                <ChatBubbleOutline className='sidebarIcon' /> Messages
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <NavLink className="link" to="/manage">
                            <li className="sidebarListItem">
                                <WorkOutline className='sidebarIcon' /> Manage
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/analytics">
                            <li className="sidebarListItem">
                                <Timeline className='sidebarIcon' /> Analytics
                            </li>
                        </NavLink>
                        <NavLink className="link" to="/reports">
                            <li className="sidebarListItem">
                                <Report className='sidebarIcon' /> Reports
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}
