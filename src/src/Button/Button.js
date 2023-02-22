import {Link} from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Button.module.scss'


const cx=classNames.bind(styles)

function Button({children,to,href,className,leftIcon,topIcon,primary,repeating,text,onClick,...passProps}) {
    let Comp = 'button'
    const props ={
        onClick,
        ...passProps
    }
    if (to) {
        props.to=to
        Comp = Link
    } else if (href) {
        props.href=href
        Comp = 'a'
    }


    const classless = cx('wrapper', {
        [className]:className,
        primary,
        repeating,
        text

    })

    return ( 
    
        <Comp className={classless} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {topIcon && <span className={cx('icon')}>{topIcon}</span>} 
            <span className={cx('tittle')}>{children}</span>
        </Comp>
     );
}

export default Button;