import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft } from '@material-ui/icons';

import './HeaderStyle.scss';

const Header = ({
  onBack,
  text,
}) => (
  <div className="Header">
    {onBack && (
    <button
      type="button"
      className="Header__Left-Button"
      onClick={onBack}
    >
      <ArrowLeft />
      Back
    </button>
    )}
    <h2 className="Header__Title">
      {text}
    </h2>
    <div className="Header__Right-Button" />
  </div>
);

Header.propTypes = {
  onBack: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
