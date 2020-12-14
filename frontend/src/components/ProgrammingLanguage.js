import React, { Component } from 'react';
import Vote from './Vote';
import axios from 'axios';

class ProgrammingLanguage extends Component {
  constructor() {
    super();

    //configure the APIHOSTPORT, this is the public IP address of the host that the API server is running on
    this.APIHOSTPORT = `${window._env_.REACT_APP_APIHOSTPORT}`;

    this.state = {
      language: {},
      loaded: false
    }
  }

  componentDidMount() {
    //provide implementation to request language details for current language from the API server
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(`http://${this.APIHOSTPORT}/languages/${this.props.id}`).then(
      response => this.setState({
        language: response.data,
        loaded: true
      })
    );
  }

  render() {
    //provide implementation for the render function to render the HTML for the ProgrammingLanguage component
    if (this.state.loaded) {
      var usecase = this.state.language.codedetail.usecase;
      var rank = this.state.language.codedetail.rank;
      var homepage = this.state.language.codedetail.homepage;
      var votecount = this.state.language.codedetail.votes;

      return (
        <div>
          <div>
            <img src={"./img/" + this.props.logo} alt={this.props.name} class="center-block lang-logo" /><h2><a href={homepage}>{this.props.name}</a></h2>
          </div>

          <p class="clear-it"><b>Uses</b>: {usecase}</p>

          <p><Vote id={this.props.id} count={votecount} /></p>
        </div>
      )
    }
    return <div></div>;
  }
}

//export the ProgrammingLanguage class, allows the VoteApp component to import it
export default ProgrammingLanguage;
