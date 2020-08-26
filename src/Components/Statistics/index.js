import React from 'react';
import { Chart, Interval, Tooltip } from 'bizcharts';
import './index.scss';

const Statistics = ({ data }) => {
	return (
		<div className='chart'>
			{data.length > 0 ? (
				<Chart height={300} forceFit autoFit data={data}>
					<Interval position='displayedDate*weight' color={'#1fb66d'} />
					<Tooltip shared />
				</Chart>
			) : (
				<div>No Data Found</div>
			)}
		</div>
	);
};

export default Statistics;
