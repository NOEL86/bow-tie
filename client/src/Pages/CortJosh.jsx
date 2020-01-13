import "./portfolio.css";
import Loader from "../Components/Loader";

class CortJosh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cortJosh: [],
      jacey: [],
      isLoaded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    // console.log("Portfolio Image :", this.state.cortJosh);
    //go to db get all images associated with
  };

  // getPics = () => {
  //   console.log("I MADE IT TO THIS API GET");
  //   //Need to pass in the get api + the array I want back
  //   fetch("/portfolio" + arr)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(myJson => {
  //       console.log(myJson);
  //     });

  //   fetch("/portfolio", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(contactInfo) // data can be `string` or {object}!
  //   }).then(res => {
  //     // console.log({ res });
  //     if (res.ok) {
  //       return JSON.stringify(res);
  //     } else {
  //       return JSON.stringify(res);
  //     }
  //   });
  // };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
      // console.log(this.state.isLoaded);
    }, 5000);
  }

  render() {
    return this.state.isLoaded ? (
      <div id="portfolio-page">
        <Nav />

        <div style={{ marginTop: "15%" }} className="row">
          <div className="col s12 m4 offset-m2">
            <div
              id="select"
              className="card"
              name="cortneyJosh"
              value={this.state.cortJosh}
              onClick={this.handleClick}
            >
              <img id="cort" src="../images/cort.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>
          <div className="col s12 m4">
            <div
              id="select"
              className="card"
              name="jacey"
              value={this.state.jacey}
              onClick={this.handleClick}
            >
              <img id="cort" src="../images/6.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>
        </div>
        {/* <input type="file" onChange={this.fileSelectorHandler()} /> */}
        <div id="portfolioPics" className="row">
          <div className="col s12 m3 l3">
            <div
              className="card"
              name="cortneyJosh"
              value={this.state.cortJosh}
              onClick={this.handleClick}
            >
              <img id="cort" src="../images/cort.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/flowers.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/cuteFaces.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/isle.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/chairs.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/kiss.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/table.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/kissHead.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/laugh.jpeg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/dressClose.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/dressFar.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/cake.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/desserts.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/table2.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/aisleLow.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div className="card">
              <img id="hundred" src="../images/tables.jpg" alt="Cort" />
            </div>
          </div>

          {/* <div className="col s12 m6 l4">
            <div className="card">
              <img id="hundred" src="../images/laugh.jpeg" alt="Cort" />
            </div>
          </div> */}
        </div>
      </div>
    ) : (
      <div id="loaderPage" style={{ backgroundColor: "#214e63" }}>
        <div
          id="loaderRow"
          style={{ paddingTop: "30%" }}
          className="row center"
        >
          <div className="col s12 m12 l12">
            <Loader />
          </div>
        </div>
      </div>
    );
  }
}
export default CortJosh;
