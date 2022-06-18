import React from 'react'
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

import './sidebar.css'


export default function Sidebar() {

    const activeClassName = 'sidebarListItem link active'
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">

                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/">
                                <LineStyle className='sidebarIcon' /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/analytics">
                                <Timeline className='sidebarIcon' /> Analytics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/sales">
                                <TrendingUp className='sidebarIcon' /> Sales
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menu</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/users">
                                <PersonOutline className='sidebarIcon' /> Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/products">
                                <Storefront className='sidebarIcon' /> Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/transactions">
                                <AttachMoney className='sidebarIcon' /> Transactions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/reports">
                                <BarChart className='sidebarIcon' /> Reports
                            </NavLink>
                        </li>
                    </ul>
                </div >
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/mail">
                                <MailOutline className='sidebarIcon' /> Mail
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/feedback">
                                <DynamicFeed className='sidebarIcon' /> Feedback
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/messages">
                                <ChatBubbleOutline className='sidebarIcon' /> Messages
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/staff-manage">
                                <WorkOutline className='sidebarIcon' /> Manage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/staff-analytics">
                                <Timeline className='sidebarIcon' /> Analytics
                            </NavLink>

                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClassName : 'sidebarListItem link'
                            } to="/staff-reports">
                                <Report className='sidebarIcon' /> Reports
                            </NavLink>
                        </li>
                    </ul>
                </div >
            </div >
        </div >
    )
}
