import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; //Dont get rid of this
import { convertNumber } from '../../../functions/convertNumber';

function LineChart({ chartData, multiAxis, priceType }) {
	const options = {
		plugins: {
			legend: {
				display: multiAxis ? true : false,
			},
		},
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		scales: {
			crypto1: {
				position: 'left',
				ticks: {
					callback: function (value) {
						if (priceType === 'prices') {
							return '$' + value.toLocaleString();
						} else {
							return '$' + convertNumber(value);
						}
					},
				},
			},
			crypto2: multiAxis && {
				position: 'right',
				ticks: {
					callback: function (value) {
						if (priceType === 'prices') {
							return '$' + value.toLocaleString();
						} else {
							return '$' + convertNumber(value);
						}
					},
				},
			},
		},
	};

	return (
		<Line
			data={chartData}
			options={options}
		/>
	);
}

export default LineChart;
