import { useContext } from 'react'
import classNames from 'classnames/bind'

import styles from './Cart.module.scss'
import { ShopContext } from '../../components/ShopContextProvider/ShopContextProvider'

const cx = classNames.bind(styles)

function ItemCart({data}) {
    const {id,name,price,productImg}=data

    const {cartItem,addCartItems,removeCartItems,updateCart,deleteCartItems} = useContext(ShopContext)

    return (
      <div className={cx("wrapperItem")}>
        <img className={cx("img")} alt="" src={productImg} />
        <div className={cx("inner")}>
          <div className={cx("tittle")}>
            <p>
              <b>{name}</b>
            </p>
            <p>{price} $</p>
          </div>
          <div className={cx("handler")}>
            <button onClick={() => removeCartItems(id)}> - </button>
            <input
              
              value={cartItem[id]}
              onChange={(e) => updateCart(Number(e.target.value),id)}
            />
            <button onClick={() => addCartItems(id)}> + </button>
            <button className={cx("delete")} onClick={()=>deleteCartItems(id)}>Delete</button>
          </div>
        </div>
      </div>
    );
}

export default ItemCart;

