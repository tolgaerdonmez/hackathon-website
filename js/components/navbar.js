class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// initilizating sidenav for mobile
		var elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	}

	render() {
		return (
			<nav class="grey darken-4 " role="navigation">
				<div class={"nav-wrapper container " + (window.innerWidth <= 992 ? "valign-wrapper" : "")}>
					<a id="logo-container" href="index.html" class="brand-logo">
						cal&lt;<span>hackathon</span>&gt;
					</a>
					{/* <img src="logo.png" alt="btlogo" height="100" class="brand-logo" id="logo-container"/> */}

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
							<a href="#">Başvur !</a>
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
							<a href="#">Başvur !</a>
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
