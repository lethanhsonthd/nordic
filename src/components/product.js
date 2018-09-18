import React, {Component} from 'react'
import image1  from '../images/product_1.png'
import image2  from '../images/product_2.png'
const productImage = {image1, image2}
class Product extends Component{
    constructor(props){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        super(props)
        this.state = {
            idProduct: this.props.idProduct,
            nameProduct: this.props.nameProduct,
            isNew: this.props.isNew,
            priceProduct: this.props.priceProduct,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            salePriceProduct: this.props.salePriceProduct,
            saleProduct: this.props.saleProduct
        }
    }
    convertProduct = (ID)=>{
        return "product_" + ID
    }                                                                                       
    convertPrice = (price) =>{
        return "$" + price + ".00"
    }
    isNew(cur){
        if (cur==true) return <div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
        <span>new</span></div>
    }
    isSale(cur){
        if (cur !== "") return <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
        <span>{cur}</span></div>
    }
    isSalePri(cur){
        if (cur !=="") return <span>{this.convertPrice(cur)}</span>
    }
    render(){
        return (
            <div className="product-item men">
                <div className="product discount product_filter">
                    <div className="product_image">
                        <img src={require(`../images/${this.convertProduct(this.state.idProduct)}.png`)} alt=""/>
                    </div>
                    <div className="favorite favorite_left"></div>
                    {this.isSale(this.state.saleProduct)}
                    {this.isNew(this.state.isNew)}
                    <div className="product_info">
                        <h6 className="product_name">
                        <a href="single.html">{this.state.nameProduct}</a></h6>
                        <div className="product_price">{this.convertPrice(this.state.priceProduct)}
                            {this.isSalePri(this.state.salePriceProduct)}
                        </div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
            </div>
        )
    }
}
export default Product