import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import { listProducts } from '../../actions/productActions';

const HomeScreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const { loading , error , products } = productList

    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                { 
                    loading ? <Loader/> : error ? <Message variant='danger'>{ error }</Message> :
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
