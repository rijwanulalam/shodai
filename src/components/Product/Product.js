import React from 'react';
import { useHistory } from 'react-router';
import { Card, Button, Segment  } from 'semantic-ui-react'
import './Product.css';



const Product = ({p}) => {

    const history = useHistory()
    const handleButton = (id) =>{
        history.push(`/checkout/${id}`);
    }
    const extra = (
        <Segment inverted>
            <Button onClick={() => handleButton(p._id)} basic inverted color='green'>
            Buy Now
          </Button>
        </Segment>
      )
    return (
        <Card
            image= {p.imageURL}
            header={p.productName}
            meta={p.productWeight}
            description={p.productPrice}
            extra={extra}
        />
 )
};

export default Product;