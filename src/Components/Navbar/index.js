import React from 'react';
import { Link } from 'react-router-dom';
import scale from '../../assets/images/scale.png';
import './index.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
			<Link to='/'>
				<div className='navbar__logo'>
					<img src={scale} alt='logo'></img>
				</div>
			</Link>
			<div className='navbar__items'>
				<Link to='/' className='navbar__item'>
					<i className='far fa-chart-bar'></i>statstics
				</Link>
				<Link to='/history' className='navbar__item'>
					<i className='fas fa-history'></i>history
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
