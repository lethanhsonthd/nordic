import React, {Component} from 'react'
import background1 from '../images/banner_1.jpg'
import background2 from '../images/banner_2.jpg'
import background3 from '../images/banner_3.jpg'
var style = [
    {
        backgroundImage: `url(${background1})`
    },
    {
        backgroundImage: `url(${background2})`
    },
    {
        backgroundImage: `url(${background3})`
    }
]
class QuickCategoryBar extends Component{
    render(){
        return(
            <div class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="banner_item align-items-center" style={style[0]}>
                                <div class="banner_category">
                                    <a href="categories.html">women's</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="banner_item align-items-center" style={style[1]}>
                                <div class="banner_category">
                                    <a href="categories.html">accessories's</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="banner_item align-items-center" style={style[2]}>
                                <div class="banner_category">
                                    <a href="categories.html">men's</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuickCategoryBar