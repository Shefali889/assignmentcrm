import React from 'react';
import PropTypes from 'prop-types';

// Importing icons
import MenuIcon from './icons/IconMenu';
import BuildingIcon from './icons/IconBuilding';
import CalendarIcon from './icons/IconCalendar';
import CardIcon from './icons/IconCard';
import ChartIcon from './icons/IconChart';
import DollarIcon from './icons/IconDollar';
import EnvelopeIcon from './icons/IconEnvelope';
import LineIcon from './icons/IconLine';
import MoreIcon from './icons/IconMore';
import OfficeIcon from './icons/IconOffice';
import ProfileIcon from './icons/IconProfile';
import SettingIcon from './icons/IconSetting';
import TagIcon from './icons/IconTag';

import './LeftIcons.css'; // Import the CSS file

const LeftIcons = () => {
  // Array of icon components
  const icons = [
    MenuIcon,
    ProfileIcon,
    BuildingIcon,
    TagIcon,
    OfficeIcon,
    EnvelopeIcon,
    CalendarIcon,
    LineIcon,
    DollarIcon,
    ChartIcon,
    CardIcon,
    SettingIcon,
    MoreIcon,
  ];

  return (
    <div className="leftIconsTray">
      {/* Render all icons */}
      {icons.map((Icon, index) => (
        <Icon key={index} className="lefticons" />
      ))}
    </div>
  );
};


export default LeftIcons;
