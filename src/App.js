import react from "react";
import "./App.css";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      fullname: "billie eilish",
      bio: "Billie Eilish, née le 18 décembre 2001 à Los Angeles, est une auteure-compositrice-interprète américaine. Son premier single, Ocean Eyes, sorti en mars 2016, rencontre un franc succès, enregistrant près de 87 millions d'écoutes durant le mois de juillet 2016. Son premier EP, Don't Smile at Me",
      profession: "acteur,danseur,sineur",
      imageSrc:
        "https://img.nrj.fr/1oM7wKKGntcXq5VCGF9csengXxs=/https://image-api.nrj.fr/medias/2020/10/re-191015-billieeilish-press-01764_5f928407ce895.jpg",
      
        toggle: false,
      timer: 0,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
    if (!this.state.toggle) {
      setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000);
    } else {
      this.setState({ timer: 0 });
    }
  }

  render() {
    return (
      <div>
        {this.state.toggle ? (
          <div>
            <h1>{this.state.fullname}</h1>
            <h2>{this.state.profession}</h2>
            <h3>{this.state.bio}</h3>
            <img src={this.state.imageSrc} height={200} />
            {this.state.timer}
          </div>
        ) : null}
        <button onClick={this.toggle}>Toggle</button>
        <br />
      </div>
    );
  }
}

export default App;
