import styles from './Search.module.scss'

import classNames from 'classnames/bind'
import PRODUCTS from '../../Products/Product'

const cx = classNames.bind(styles)
const item = PRODUCTS[0]

function ProductItem() {
    return (
      <div className={cx("content")}>
        <img className={cx("image")} alt="" src={item.productImg} />
        <span>
          <span className={cx("name")}>
            {item.name}
          </span>
          <span className={cx("price")}>{item.price}$</span>
        </span>
      </div>
    );
}

export default ProductItem;