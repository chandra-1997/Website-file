import { useState, useEffect } from 'react';

export default function CartComponent() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    
    function LoadCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                data.unshift("All");
                setCategories(data);
            })
    }
    function LoadProduct() {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }
    useEffect(() => {
        LoadCategories();
        LoadProduct();

    }, [])

    function HandleCategoryChange(e) {
        if (e.target.value === 'All') {
            LoadProduct();
        } else {
            fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);


                })
            }
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={HandleCategoryChange} className='form-select'>
                                {
                                    categories.map(category =>
                                        <option value={category} key={category}>
                                            {category.toUpperCase()}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-9' style={{  height: '500px' }}>
                    <div className='d-flex flex-wrap'>
                        {
                            products.map(product =>
                                <div key={product.id} className="card m-2 w-25">
                                    <img alt="preview" src={product.image} className="card-img-top" style={{ height: '150px' }} />
                                    <div className='card-header' style={{ height: '120px' }}>
                                        {product.title}
                                    </div>
                                    <div className='card-body'>
                                        <p>${product.price}</p>
                                    </div>
                                    <div className='card-footer'>
                                        <button className='btn btn-danger w-100'>
                                            <span></span>Product Details
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
           
        </div>
    )
}