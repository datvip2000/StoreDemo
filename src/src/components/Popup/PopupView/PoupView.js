import styles from './PoupView.module.scss'
import {X} from 'phosphor-react'


import classNames from 'classnames/bind'
import Popup from "../Popup";

const cx = classNames.bind(styles)

function PopupView(props) {
    return props.trigger ? (
      <Popup>
        <div className={cx("wrapper")}>
          <div className={cx("header")}>
            <X
              className={cx("close")}
              size={18}
              onClick={() => {
                props.setTrigger(false);
              }}
            />
          </div>
          <div  className={cx("content")}>
            <p>
              Cảm ơn anh/chị đã xem code của em . Chúc anh/chị 1 ngày làm việc
              hiểu quả . Em cảm ơn ! 😘 😘 😘
            </p>
          </div>
        </div>
      </Popup>
    ) : (
      ""
    );
}

export default PopupView;