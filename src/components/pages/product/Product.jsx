import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Chart from '../../chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons'
import { productRows } from '../../dummyData'
import './product.css'

export default function Product() {

    const {productId} = useParams()
    const [product, setProduct] = useState(productRows) 

    console.log(product[productId])
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="" alt="" className="productInfoImg" />
                        <span className="productName">{product[productId].name}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product[productId].id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">{product[productId].price}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">{product[productId].status}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stoke:</span>
                            <span className="productInfoValue">{product[productId].product ? 'yes' : 'no'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className='productForm'>
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Macbook Pro' />
                        <label>In Stoke</label>
                        <select name="inStoke" id="inStoke">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="" alt="" className="productUploadImg" />
                            <label htmlFor="file"><Publish className='productUploadIcon' /> </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
