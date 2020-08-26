import React from 'react';
import './index.scss';
const Backdrop = props => {
	return <div className='backdrop'>{props.children}</div>;
};

export default Backdrop;
