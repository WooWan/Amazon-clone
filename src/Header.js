import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
      <nav className="header">
        {/*logo*/}
        {/*Link 는 refresh 되지 않는다*/}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* 우측 아이콘 버튼 */}
        <div className="header__nav">

          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Wan</span>
              <span className="header__optionLineTwo">Sign in</span>
            </div>
          </Link>
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">&Orders</span>
            </div>
          </Link>
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket" >
                <ShoppingBasketIcon />
                <span className="header__BasketCount">0</span>
            </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header