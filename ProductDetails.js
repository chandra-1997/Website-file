import React from "react";
import './Product.css';
import {Button} from "react-bootstrap";
export default function ProductDetails(){
const product = (props)=>{
    const{name,image,price,categories}= props.product;
}
return(
<div className="container-fluid">
<div className="product-card shadow-sm">
    <img className="product-img img-fluid" src={image} alt=""/>
<h5 className="categories">{categories}</h5>
<h5 className="product-title">{productname}</h5>
<h5>Price: ${price}</h5>
<Button onClick={()=>props.addProduct(props.product)}
className="btn btn-success">Add to Card</Button>
</div>
</div>
);

}