class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		// initilizating sidenav for mobile
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems);
	}

	render() {
		return (
			<nav class="white" role="navigation">
				<div class="nav-wrapper container">
					{/* <a id="logo-container" href="#" class="brand-logo center"> */}
						<img src="logo.png" alt="btlogo" height="100" class="brand-logo" id="logo-container"/>
					{/* desktop navbar */}
					<ul class="right hide-on-med-and-down">
						<li>
							<a href="#">Anasayfa</a>
						</li>
						<li>
							<a href="#">Hakkımızda</a>
						</li>
						<li>
							<a href="#">İletişim</a>
						</li>
					</ul>
					{/* mobile navbar */}
					<ul id="nav-mobile" class="sidenav">
						<li>
							<a href="#">Anasayfa</a>
						</li>
						<li>
							<a href="#">Hakkımızda</a>
						</li>
						<li>
							<a href="#">İletişim</a>
						</li>
					</ul>
					<a href="#" data-target="nav-mobile" class="sidenav-trigger">
						<i class="material-icons">menu</i>
					</a>
				</div>
			</nav>
		);
	}
}

const domContainer = document.querySelector("#navbar_container");
ReactDOM.render(<Navbar />, domContainer);
