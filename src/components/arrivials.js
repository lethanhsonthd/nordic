import React, {Component} from 'react'
import Product from './product'
var nameOfProduct = [
    "Fujifilm X100T 16 MP Digital Camera (Silver)",
    "Samsung CF591 Series Curved 27-Inch FHD Monitor",
    "Blue Yeti USB Microphone Blackout Edition",
    "DYMO LabelWriter 450 Turbo Thermal Label Printer",
    "Pryma Headphones, Rose Gold & Grey",
    "Fujifilm X100T 16 MP Digital Camera (Silver)",
    "amsung CF591 Series Curved 27-Inch FHD Monitor",
    "Blue Yeti USB Microphone Blackout Edition",
    "DYMO LabelWriter 450 Turbo Thermal Label Printer",
    "Pryma Headphones, Rose Gold & Grey"
]
var isNewProduct = [
    false, true, false, false, false, false, false, false, false, false 
]
var saleProduct = [
    "-$20","","","sale","","-$20","","","sale",""
]
var priceProduct = [
    520,610,120,410,180,520,610,120,410,180
]
var salePriceProduct = [
    590,"","","","",590,"","", "",""
]
var arrayOfProductObject = []
for (var i=0;i<nameOfProduct.length;i++){
      arrayOfProductObject.push({
            idProduct: i+1,
            nameOfProduct: nameOfProduct[i],
            isNewProduct: isNewProduct[i],
            saleProduct: saleProduct[i],
            priceProduct: priceProduct[i],
            salePriceProduct: salePriceProduct[i]
        })
}
class Arrivial extends Component {
    oneProduct = (ObjectProduct) =>{
        return <Product 
        idProduct={ObjectProduct.idProduct} 
        nameProduct={ObjectProduct.nameOfProduct} 
        isNew ={ObjectProduct.isNewProduct}
        priceProduct={ObjectProduct.priceProduct}
        saleProduct ={ObjectProduct.saleProduct} 
        salePriceProduct={ObjectProduct.salePriceProduct}/>
    }
    showProduct = () =>{
        return (
            <div>
              {arrayOfProductObject.map(product => this.oneProduct(product))}
            </div>
          )
    }
    render(){
        return (
            <div>
                <div className="new_arrivals">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section_title new_arrivals_title">
                                    <h2>New Arrivals</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col text-center">
                                <div className="new_arrivals_sorting">
                                    <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
                                    {this.showProduct()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Arrivial