import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import Meta from '../Meta/Meta';
import Paginate from '../../Components/Paginate/Paginate';
import { listProducts } from '../../actions/productActions';
import ProductCarousel from './ProductCarousel';

const HomeScreen = ({ match }) => {

    const keyword = match.params.keyword 
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const { loading , error , products , page , pages } = productList
 
    useEffect(() => {
        dispatch(listProducts(keyword , pageNumber))
    },[dispatch, keyword, pageNumber])

    return (
        <div>

            <Meta  />
            { !keyword ? <ProductCarousel/> : <Link to='/' className="btn btn-light">Go Back</Link> }
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
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </div>
    )
}

export default HomeScreen;
