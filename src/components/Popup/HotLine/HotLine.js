import {X} from 'phosphor-react'

import styles from './HotLine.module.scss'

import classNames from 'classnames/bind'
import Popup from "../Popup";

const cx = classNames.bind(styles)

function Hotline(props) {
    return props.trigger ? (
      <Popup>
        <div className={cx("inner")}>
          <div className={cx("header")}>
            <h1 className={cx("tittle")}>TƯ VẤN MIỄN PHÍ</h1>
            <X className={cx("close")} size={18} onClick={()=>{props.setTrigger(false)}}/>
          </div>
          <div className={cx("body")}>
            <p>Tổng đài miền Bắc :<b>1900*** </b></p>
            <p>Tổng đài miền Trung :<b>1900***</b></p>
            <p>Tổng đài miền Nam :<b>1900***</b></p>
          </div>
        </div>
      </Popup>
    ) : (
      ""
    );
}

export default Hotline;