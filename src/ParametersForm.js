import React from "react";
import moment from "moment";

const ParametersForm = ({
	title,
	numberOfWeeks,
	startDayOfWeek,
	settitle,
	setnumberOfWeeks,
	setstartDayOfWeek
}) => {
	const handleWith = f => e => f(e.target.value);
	return (
		<div className="form">
			<input value={title} onChange={handleWith(settitle)} />
			<input
				type="number"
				value={numberOfWeeks}
				onChange={handleWith(setnumberOfWeeks)}
			/>
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
