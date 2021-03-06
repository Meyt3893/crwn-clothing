import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../logos/crown.svg'

const Header =() => (
    <div className='header'>
        <Link className='logo-conatainer' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
               Shop
            </Link>
            <Link className='option' to='/shop'>
               Contact
            </Link>
        </div>
    </div>
)

export default Header;
