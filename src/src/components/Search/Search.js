import {XCircle,MagnifyingGlass} from 'phosphor-react'
import { useState,useRef } from 'react';
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'


import styles from './Search.module.scss'
import PopperWrapper from '../Popper/Popper';
import ProductItem from './ProductItem';

const cx=classNames.bind(styles)


function Search() {
    const [searchValue,setSearchValue] = useState('')
    const [showResult,setShowResult] = useState(true)

    const handleClear = () =>{
        setSearchValue('')
        inputRef.current.focus()
    }


    
        const handleShowResult = () => {
            setShowResult(false)
        }
    

    const inputRef=useRef()

    return (
      <div>
        <Tippy
          visible={searchValue.length > 1 && showResult}
          offset={[0, 6]}
          interactive
          onClickOutside={handleShowResult}
          placement="bottom"
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              ref={inputRef}
              value={searchValue}
              className={cx("input-search")}
              placeholder="Nhập tên sản phẩm, từ khóa cần tìm ..."
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => {
                setShowResult(true);
              }}
            />
            {!!searchValue && (
              <XCircle
                size={16}
                weight="fill"
                className={cx("close")}
                onClick={handleClear}
              />
            )}
            <div className={cx("search-btn")}>
              <MagnifyingGlass size={16} />
            </div>
          </div>
        </Tippy>
      </div>
    );
}

export default Search;