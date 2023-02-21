import classNames from 'classnames/bind'

import styles from './ShowRoom.module.scss'
const cx=classNames.bind(styles)


function Item({tittle,sell,phone,time,src}) {
    return (
      <div className={cx('container')}>
        <p className={cx('tittle-item')}>
          Địa chỉ:
          <span>{tittle}</span>
        </p>
        <p className={cx('sell')}>
          Bán hàng:
          <span>{sell}</span>
        </p>
        <p className={cx('phone-number')}>
          Hỗ trợ kỹ thuật:
          <span>{phone}</span>
        </p>
        <p className={cx('time')}>
          Giờ làm việc:
          <span>{time}</span>
        </p>
        <img className={cx('map')} src={src} alt="" />
      </div>
    );
}

export default Item;