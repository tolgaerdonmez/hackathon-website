import React from "react";
export default function GenModal({ index, title, content, buttonTitle }) {
	return (
		<div id={"modal" + index} class="modal">
			<div class="modal-content modal-fixed-footer black-text">
				<h4>{title}</h4>
				<p>{content}</p>
				<a href="#!" class="modal-close btn waves-effect waves-light black">
					{buttonTitle}
				</a>
			</div>
		</div>
	);
}
