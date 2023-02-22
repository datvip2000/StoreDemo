import {X} from 'phosphor-react'
import classNames from 'classnames/bind'

import styles from './ShowRoom.module.scss'
import Popup from '../Popup';
import Item from './Item';
import Img from '../../../assets/Img';

const cx=classNames.bind(styles)

function ShowRoom(props) {
    return props.trigger ? (
      <Popup>
        <div className={cx('wrapper')}>
          <div className={cx('header')}>
            <h3 className={cx('tittle')}>HỆ THỐNG SHOWROOM</h3>
            <X className={cx("close")} size={24} onClick={()=>{props.setTrigger(false)}}/>
          </div>
          <div className={cx('info')}>
            <Item
              tittle="247 Lý Thường Kiệt, TP. Hồ Chí Minh"
              sell="0354****-0242***"
              phone="097****"
              time="08:30 - 18:30"
              src={Img.product9}
            />
            <Item
              tittle="247 Lý Thường Kiệt, TP. Hồ Chí Minh"
              sell="0354****-0242***"
              phone="097****"
              time="08:30 - 18:30"
              src={Img.product9}
            />
            <Item
              tittle="247 Lý Thường Kiệt, TP. Hồ Chí Minh"
              sell="0354****-0242***"
              phone="097****"
              time="08:30 - 18:30"
              src={Img.product9}
            />
            <Item
              tittle="247 Lý Thường Kiệt, TP. Hồ Chí Minh"
              sell="0354****-0242***"
              phone="097****"
              time="08:30 - 18:30"
              src={Img.product9}
            />
            <Item
              tittle="247 Lý Thường Kiệt, TP. Hồ Chí Minh"
              sell="0354****-0242***"
              phone="097****"
              time="08:30 - 18:30"
              src={Img.product9}
            />
            <Item
              tittle="247 Lý Thường Kiệt, TP. Hồ Chí Minh"
              sell="0354****-0242***"
              phone="097****"
              time="08:30 - 18:30"
              src={Img.product9}
            />
          </div>
        </div>
      </Popup>
    ) : (
      ''
    );
}

export default ShowRoom;