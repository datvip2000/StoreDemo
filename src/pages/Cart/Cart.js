import { useContext } from 'react';
import classNames from 'classnames/bind'

import styles from './Cart.module.scss'
import PRODUCTS from '../../Products/Product';
import { ShopContext } from '../../components/ShopContextProvider/ShopContextProvider';
import ItemCart from './ItemCart';
import {useNavigate} from 'react-router-dom'
import Button from '../../Button/Button';


const cx = classNames.bind(styles)

function Cart() {
    const {cartItem,getTotalCartAmount} = useContext(ShopContext)
    const total = getTotalCartAmount()

    const navigate = useNavigate()

    return (
      <div className={cx("wrapper")}>
        <h1>Thông tin giỏ hàng</h1>
        <div className={cx("container")}>
          {PRODUCTS.map((product) => {
            if (cartItem[product.id] !== 0) {
              return <ItemCart data={product} key={product.id} />;
            }
          })}
        </div>
        <div className={cx("Done")}>
          {total > 0 ? (
            <>
              <p>Total:{total}</p>
              <Button  className={cx('button')} onClick={() => navigate("/cart")}>Tiếp tục</Button>
            </>
          ) : (
            <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          )}
          <div>
            <Button  className={cx('button')} onClick={() => navigate("/")}>Trang chủ</Button>
          </div>
        </div>
      </div>
    );
}

export default Cart;