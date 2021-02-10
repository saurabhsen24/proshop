import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Product from '../Product/Product';

const HomeScreen = () => {

    const [products , setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }

        fetchProducts()
    },[])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map(product => (
                        <Col sm={12} md={6} lg={4} key={product._id}>
                            <Product product = {product} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomeScreen;
