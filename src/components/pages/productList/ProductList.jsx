import React, { useState } from 'react'
import { Edit, DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';
import './productList.css'
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [data, setData] = useState(productRows)

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id) )
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 130, renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 130 },
        { field: 'status', headerName: 'Status', type: 'number', width: 120 },
        { field: 'price', headerName: 'Price', type: 'number', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        {/* <button className="userListEdit"> Edit</button> */}
                        <Link to={"/product/" + params.row.id}>
                            <Edit className="productListEdit" />
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                // rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
