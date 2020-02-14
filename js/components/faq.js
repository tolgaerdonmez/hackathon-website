import React from "react";
import questions from "./questions.js";
// const questions = questions;
export default class FAQ extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// initilizating sidenav for mobile
		var elems = document.querySelectorAll(".collapsible");
		M.Collapsible.init(elems);
	}

	render() {
		return (
			<ul class="collapsible popout">
				{questions.map((question, index) => {
					return (
						<li key={index}>
							<div class="collapsible-header">
								<i class="material-icons">expand_more</i>
								{question.query}
							</div>
							<div class="collapsible-body">
								<span>{question.answer}</span>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}
