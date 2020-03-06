import React, { useState } from "react";
import RulesCalendar from "./RulesCalendar";
import ParametersForm from "./ParametersForm";

function App() {
	const [title, settitle] = useState("the two day rule");
	const [numberOfWeeks, setnumberOfWeeks] = useState(5);
	const [startDayOfWeek, setstartDayOfWeek] = useState(1);
	return (
		<div className="App">
			<RulesCalendar
				title={title}
				numberOfWeeks={numberOfWeeks}
				startDayOfWeek={startDayOfWeek}
			/>
			<ParametersForm
				title={title}
				numberOfWeeks={numberOfWeeks}
				startDayOfWeek={startDayOfWeek}
				settitle={settitle}
				setnumberOfWeeks={setnumberOfWeeks}
				setstartDayOfWeek={setstartDayOfWeek}
			/>
		</div>
	);
}

export default App;
