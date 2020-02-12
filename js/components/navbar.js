function ApplyModal({ index }) {
	return (
		// <div>
		<div id={"modal" + index} class="modal">
			<div class="modal-content modal-fixed-footer black-text">
				<h4>Başvur!</h4>
				<p>Başvuruları yakında açacağız!</p>
				<a href="#!" class="modal-close btn waves-effect waves-light black">
					Tamam
				</a>
			</div>
		</div>
		// </div>
	);
}

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// initilizating sidenav for mobile
		const sidenav = document.querySelectorAll(".sidenav");
		const modal = document.querySelectorAll(".modal");
		M.Sidenav.init(sidenav);
		M.Modal.init(modal);
	}

	render() {
		return (
			<nav class="grey darken-4 " role="navigation">
				<div class={"nav-wrapper container " + (window.innerWidth <= 992 ? "valign-wrapper" : "")}>
					<a id="logo-container" href="index.html" class="brand-logo">
						cal&lt;<span>hackathon</span>&gt;
					</a>
					{/* <img src="img/logo.png" alt="btlogo" height="100" class="brand-logo" id="logo-container"/> */}

					{/* desktop navbar */}
					<ul class="right hide-on-med-and-down">
						<li>
							<a href="hackathon.html">Hackathon</a>
						</li>
						<li>
							<a href="about.html">Hakkımızda</a>
						</li>
						<li>
							<a href="contact.html">İletişim</a>
						</li>
						<li>
							<a href="sss.html">S.S.S.</a>
						</li>
						<li>
							<a class="modal-trigger" href="#modal1">
								Başvur!
							</a>
							<ApplyModal index={1} />
						</li>
					</ul>
					{/* mobile navbar */}
					<ul id="nav-mobile" class="sidenav">
						<li>
							<a href="index.html">Anasayfa</a>
						</li>
						<li>
							<a href="hackathon.html">Hackathon</a>
						</li>
						<li>
							<a href="about.html">Hakkımızda</a>
						</li>
						<li>
							<a href="contact.html">İletişim</a>
						</li>
						<li>
							<a href="sss.html">S.S.S.</a>
						</li>
						<li>
							<a class="modal-trigger" href="#modal2">
								Başvur!
							</a>
							<ApplyModal index={2} />
						</li>
					</ul>
					<a href="#" data-target="nav-mobile" class="sidenav-trigger white-text">
						<i class="material-icons">menu</i>
					</a>
				</div>
			</nav>
		);
	}
}

const domContainer = document.querySelector("#navbar_container");
ReactDOM.render(<Navbar />, domContainer);
