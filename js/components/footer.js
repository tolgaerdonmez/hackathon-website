class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer class="page-footer grey darken-4">
                {/* <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                        </div>
                    </div>
                </div> */}
                <div class="footer-copyright">
                    <div class="container">CAL Hackathon - CALBT 2020</div>
                </div>
            </footer>
        );
    }
}

const domContainer = document.querySelector("#footer_container");
ReactDOM.render(<Footer />, domContainer);
