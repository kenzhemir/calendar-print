import React from "react";
import moment from "moment";

const RulesCalendar = ({ title, numberOfWeeks, startDayOfWeek }) => {
	const monthName = moment().format("MMMM");
	console.log(monthName);
	// console.log(startDate);
	const weeks = [];
	for (let i = 1; i <= numberOfWeeks; i++) weeks.push(i);
	const weekdays = moment.weekdaysShort();
	const sortedWeekdays = weekdays
		.slice(startDayOfWeek, weekdays.length)
		.concat(weekdays.slice(0, startDayOfWeek));
	return (
		<div className="calendar">
			<div className="calendar__title">{title}</div>
			<div className="calendar__weekday-row">
				{sortedWeekdays.map(weekday => (
					<div className="calendar__weekday-cell" key={weekday}>
						{weekday}
					</div>
				))}
			</div>
			<div className="calendar__month-grid">
				{weeks.map(weekNum => (
					<div className="calendar__week-row" key={weekNum}>
						{weekdays.map(dayNum => (
							<div className="calendar__day-cell" key={dayNum}>
								<div className="day-cell__day"></div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default RulesCalendar;
