import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../stateManager/actions/modal';
import Add from './Add';
import Backdrop from '../Backdrop';
import './index.scss';

const Modal = props => {
	const { show, info, title, type, toggleModal } = props;
	const handleClick = () => {
		toggleModal();
	};
	const renderModalType = type => {
		switch (type) {
			case 'add':
				return <Add />;
			default:
				return;
		}
	};
	return (
		show && (
			<Backdrop>
				<div className='modal'>
					<div className='close-btn' onClick={handleClick}>
						<i className='fa fa-times' />
					</div>
					<div className='modal__title'> {title}</div>
					<div className='modal__info'>{info}</div>
					{renderModalType(type)}
				</div>
			</Backdrop>
		)
	);
};

const mapStateToProps = state => {
	return {
		show: state.modal.show,
	};
};

export default connect(mapStateToProps, { toggleModal })(Modal);
