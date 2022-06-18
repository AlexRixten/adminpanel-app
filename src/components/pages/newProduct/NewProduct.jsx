import React from 'react'
import { Publish } from '@material-ui/icons'
import './newProduct.css'

export default function NewProduct() {
    return (
        <div className='newProduct'>
            <h1 className="newProductTitel">New Product</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <span className="newProductTitle">Image</span>
                    <div className="newProductUpload">
                        <img src="" alt="" className="newProductUploadImg" />
                        <label htmlFor="file"><Publish className='newProductUploadIcon' /></label>
                        <input type="file" id="file" style={{ display: "none" }} />
                    </div>
                </div>
                <div className="newProductItem">
                    <label>Name</label>
                    <input type="text" className="newProductInput" placeholder='Macbook Pro' />
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <input type="text" className="newProductInput" placeholder='123' />
                </div>
                <div className="newProductItem">
                    <label>Active</label>
                    <select className='newProductSelect' name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newProductButton">Create</button>
            </form>
        </div>
    )
}
