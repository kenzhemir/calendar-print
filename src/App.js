import React, { useState } from "react";
import RulesCalendar from "./RulesCalendar";
import ParametersForm from "./ParametersForm";

function App() {
	const [title, settitle] = useState("the two day rule");
	const [numberOfWeeks, setnumberOfWeeks] = useState(5);
	const [startDayOfWeek, setstartDayOfWeek] = useState(1);
	const [width, setwidth] = useState(700);
	return (
		<div className="App">
			<RulesCalendar
				title={title}
				numberOfWeeks={numberOfWeeks}
				startDayOfWeek={startDayOfWeek}
				width={width}
			/>
			<ParametersForm
				title={title}
				numberOfWeeks={numberOfWeeks}
				startDayOfWeek={startDayOfWeek}
				width={width}
				settitle={settitle}
				setnumberOfWeeks={setnumberOfWeeks}
				setstartDayOfWeek={setstartDayOfWeek}
				setwidth={setwidth}
			/>
		</div>
	);
}

export default App;
