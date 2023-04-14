import React from "react";
import {useState} from "react"
import{storage,db} from "../config/config";
const Addproduct =()=>{
    const[ProductName,setProductName] = useState("");
    const[ProductPrice,setProductPrice]= useState(0);
    const[ProductImg,setProductImg]= useState(null);
    const[error,setError]= useState("");
    const types=['image/png','image/jpeg']
const ProductImghandler = (e) =>{
    let selectedFile = e.target.files[0];
    if(selectedFile && types.includes(selectedFile.type)){
        setProductImg(selectedFile);
        setError('');
    }
    else{
        setProductImg(null);
        setError("please select image type png or jpeg")
    }
}

    return(
        <div className="container">
            <br/>
            <h2> Add Products</h2> 
            <hr/>
<form autoComplete="off" className="form-group">
    <label htmlFor="product-name">Product Name</label>
    <br/>
<input type="text" className="form-control"required  onChange={(e)=>setProductName(e.target.value)} value={ProductName}/>
<br/>
<label htmlFor=" product-price">Product Price</label>
<br/>
<input type="number"className="form-control"required  onChange={(e)=>setProductPrice(e.target.value)} value={ProductPrice}/>
<br/>
<label htmlFor="product-img">Product Image</label>
<input  type="file" className="form-control" onChange={ProductImghandler}/>
<br/>
<button className="btn btn-success btn-md mybtn">ADD</button>
    </form>
    {error && <span>{error}</span>}

        </div>
    )
}
export default Addproduct