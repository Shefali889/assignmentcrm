import React from 'react';
import SearchBar from './SearchBar';
import IconFullLogo from './icons/IconFullLogo';
import IconQuickAddButton from './icons/IconQuickAddButton';
import IconQuickBellButton from './icons/IconQuickBellButton';
import IconQuickGiftButton from './icons/IconQuickGiftButton';
import IconQuickMessageButton from './icons/IconQuickMessageButton';
import IconDivider from './icons/IconDivider';
import './TopNavbar.css'; // Import the CSS file
import quicHelper from '../assets/quickHelper.png'

const TopNavbar = () => {
  return (
    <div id="navbar">
      <div className="searchbar" >
        <SearchBar />
      </div>
      <IconFullLogo className="logo" />
      <div className="navright">
        <IconQuickAddButton className="topicon" />
        <IconDivider className="topicon" />
        <IconQuickGiftButton className="topicon" />
        <IconQuickMessageButton className="topicon" />
        <IconQuickBellButton className="topicon" />
        <img src={quicHelper} height={30} />
      </div>
    </div>
  );
};

export default TopNavbar;
