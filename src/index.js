import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Body from "./body";

class Index extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Body />
			</div>
		);
	}
}

ReactDOM.render(<Index />, document.getElementById("root"));
