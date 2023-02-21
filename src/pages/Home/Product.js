import { useContext } from 'react'
import styles from './Home.module.scss'

import classNames from 'classnames/bind'
import { ShopContext } from '../../components/ShopContextProvider/ShopContextProvider'

const cx = classNames.bind(styles)


function Product({data}) {
    const {id,name,price,productImg}=data
    const {addCartItems,cartItem} = useContext(ShopContext)

    const pushItem = cartItem[id]
    return ( 
        <div className={cx("product")}>
            <img className={cx("img")} alt='' src={productImg}/>
            <div className={cx("content")}>
                <p><b>{price}$</b></p>
                <p>{name}</p>
                <button onClick={()=>{addCartItems(id)}}>Thêm vào giỏ hàng
                {pushItem > 0 && <>({pushItem})</>}
                </button>
            </div>
        </div>
     );
}

export default Product;