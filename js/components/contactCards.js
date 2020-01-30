class Cards extends React.Component {
	constructor(props) {
		super(props);
    }
        
	render() {
		return (
			<div class="section">
				<div class={"card col "+(window.innerWidth >= 800 ? "s3 push-s2" : "")}>
					<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="tolga.png" />
					</div>
					<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Ahmet Tolga Erdönmez</span>
						<p>Ayrıntılı bilgi için karta tıklayınız</p>
					</div>
					<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">
							Ahmet Tolga Erdönmez<i class="material-icons right">close</i>
						</span>
						<p>
							<strong>E-Posta:</strong> tolgaerdonmez@gmail.com
						</p>
						<p>
							<strong>Tel:</strong> +90 505 154 78 27
						</p>
					</div>
				</div>
				<div class={"card col "+(window.innerWidth >= 800 ? "s3 push-s4" : "")}>
					<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" width="auto" src="can.png" />
					</div>
					<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Can Koçman</span>
						<p>Ayrıntılı bilgi için karta tıklayınız</p>
					</div>
					<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">
							Can Koçman<i class="material-icons right">close</i>
						</span>
						<p>
							<strong>E-Posta:</strong> cankocman3@gmail.com
						</p>
						<p>
							<strong>Tel:</strong> +90 551 241 61 00
						</p>
					</div>
				</div>
			</div>
		);
	}
}

const domContainer = document.querySelector("#contact_cards");
ReactDOM.render(<Cards />, domContainer);
