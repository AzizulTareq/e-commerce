import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (


    <Card className='my-3 p-3 rounded' style={{ maxWidth: '100%'}}>
        <Card.Img style={{ height: '200px', maxWidth: '100%'}} src={product.image} variant='top' />

      <Card.Body>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h5' style={{paddingTop: '10px', paddingBottom: '10px'}}>Tk. {product.price}</Card.Text>
        <Link to={`/product/${product._id}`}>
        <Button variant="warning" block>Details</Button>{' '}
        </Link>
      </Card.Body>
    </Card>
  )
}
export default Product