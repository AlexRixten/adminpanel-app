import React, {useState} from 'react'
import { Edit, DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';
import './userList.css'
import { Link } from 'react-router-dom';


export default function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id) )
    }
 
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img className='userListImg' src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', type: 'number', width: 120 },
        { field: 'transaction', headerName: 'Transaction', type: 'number', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        {/* <button className="userListEdit"> Edit</button> */}
                        <Link to={"/users/" + params.row.id}>
                            <Edit className="userListEdit" />
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                // rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
