import './App.css';
import React from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
//1. Convert this component to a class component
//2. Set a countries state as soon as this component mounts with
//the result of the following api: https://restcountries.eu/rest/v2/all
//3. Create a CountryList component (functional)
//4. Pass the list of countries as a prop to CountryList
//5. List all countries inside CountryList
class App extends React.Component {
  state = {
    countries: [],
  };
  async componentDidMount() {
    const result = await axios.get('https://restcountries.eu/rest/v2/all');
    this.setState({
      countries: result.data,
    });
  }
  render() {
    return (
      <>
        <div style={{ float: 'left', height: '900px', overflow: 'scroll' }}>
          <CountryList countries={this.state.countries} />
        </div>
        <div style={{ float: 'right', marginRight: '500px' }}>
          <Route path="/:id" component={CountryDetails} />
        </div>
      </>
    );
  }
}
export default App;
