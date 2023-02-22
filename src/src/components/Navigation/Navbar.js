import {ShoppingCart} from 'phosphor-react'
import { useState,useContext } from 'react'
import {Headset} from 'phosphor-react'
import styles from './Navbar.module.scss'

import classNames from 'classnames/bind'
import Button from '../../Button/Button'
import Hotline from '../Popup/HotLine/HotLine'
import ShowRoom from '../Popup/ShowRoom/ShowRoom'
import { ShopContext } from '../ShopContextProvider/ShopContextProvider'
import Search from '../Search/Search'

const cx = classNames.bind(styles)

function Navbar(props) {
  const [showHotLine,setShowHotLine] = useState(false)
  const [showRoom,setShowRoom] = useState(false)

  const {getTotalCart} = useContext(ShopContext)
  const totalItem = getTotalCart()

    return (
      <div className={cx("wrapper")}>
        <div className={cx("nav")}>
          <div className={cx("links")}>
            <div className={cx("left")}>
              <Button primary to="/">
                Trang chủ
              </Button>
              <>
                <Button
                  leftIcon={<Headset size={16} weight="bold" />}
                  onClick={() => setShowRoom(true)}
                  repeating
                  primary
                >
                  Hệ thống cửa hàng
                </Button>
                <ShowRoom trigger={showRoom} setTrigger={setShowRoom} />
              </>
              <>
                <Button
                  leftIcon={<Headset size={16} weight="bold" />}
                  onClick={() => setShowHotLine(true)}
                  repeating
                  primary
                >
                  Tư vấn khách hàng
                </Button>
                <Hotline trigger={showHotLine} setTrigger={setShowHotLine} />
              </>
            </div>
            <Search />
            <Button to="/cart">
              <div className={cx("icon-store")}>
                <ShoppingCart size={32} />
                <span className={cx("number")}>{totalItem}</span>
              </div>
            </Button>
          </div>
        </div>
        {props.children}
      </div>
    ); 
}

export default Navbar;