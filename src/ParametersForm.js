import React from "react";
import moment from "moment";

const ParametersForm = ({
	title,
	numberOfWeeks,
	startDayOfWeek,
	width,
	settitle,
	setnumberOfWeeks,
	setstartDayOfWeek,
	setwidth
}) => {
	const handleWith = f => e => f(e.target.value);
	return (
		<div className="form">
			<span>title</span>
			<input value={title} onChange={handleWith(settitle)} />
			<span>table width</span>
			<input type="number" value={width} onChange={handleWith(setwidth)} />
			<span>number of weeks</span>
			<input
				type="number"
				value={numberOfWeeks}
				onChange={handleWith(setnumberOfWeeks)}
			/>
			<span>start day of week</span>
			<select value={startDayOfWeek} onChange={handleWith(setstartDayOfWeek)}>
				{moment.weekdays().map((day, i) => (
					<option value={i} key={i}>
						{day}
					</option>
				))}
			</select>
		</div>
	);
};

export default ParametersForm;
