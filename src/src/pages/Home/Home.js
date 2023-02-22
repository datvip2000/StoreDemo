import styles from './Home.module.scss'

import classNames from 'classnames/bind'
import PRODUCTS from '../../Products/Product';
import Product from './Product';

const cx = classNames.bind(styles)

function Home() {
    return (
      <div className={cx("wrapper")}>
        <h1 className={cx("tittle")}>TIKTOK SHOP</h1>
        <div className={cx("inner")}>
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
}

export default Home;