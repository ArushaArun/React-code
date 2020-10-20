import React, { Component } from 'react'
import { ProductConsumer } from '../Context';
import { Button } from './Button';

export default class Product extends Component {
    render() {
        let {id, title, img, inCart, price} = this.props.product;
        return (
            <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="card my-2">
                    <ProductConsumer>
                        {
                            value => {
                                return  (<div className="img-container">
                                             <img src={img} className="card-img-top" />
                                         {
                                             inCart? <Button className="cart-btn">InCart</Button> : <Button onClick={() => value.addToCart(id)} className="cart-btn fa fa-cart-plus"/>
                                         }
                                      </div>)
                            }
                        }
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}

