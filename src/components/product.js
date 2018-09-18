import React, {Component} from 'react'
import product_image  from '../images/product_1.png'
class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            idProduct: this.props.idProduct,
            nameProduct: this.props.nameProduct,
            isNew: this.props.isNew,
            priceProduct: this.props.priceProduct,
            salePriceProduct: this.props.salePriceProduct
        }
    }
    convertProduct = (ID)=>{
        return "product_" + ID 
    }
    render(){
        return (
            <div className="product-item men">
                <div className="product discount product_filter">
                    <div className="product_image">
                        <img src={this.convertProduct(this.state.idProduct)} alt=""/>
                    </div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                        <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                        <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
            </div>
        )
    }
}
export default Product