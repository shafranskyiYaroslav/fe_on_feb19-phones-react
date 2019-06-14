import React from 'react';

import { getAll, getById } from './api/phone'
import Basket from './components/Basket'
import Filter from './components/Filter'
import Catalog from './components/Catalog'
import Viewer from './components/Viewer'

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(phoneId) {
    this.setState(prevState => {
      return {
      basketItems: [
        ...prevState.basketItems,
        phoneId
      ]
    }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <Basket items={this.state.basketItems}/>
            </div>

            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    });
                  }}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId),
                    });
                  }}
                  addItem={(phoneId) => {
                    this.addItem(phoneId);
                  }}
                />
              ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Viewer = (props) => (
  <div>
    <img className="phone" src={props.phone.images[0]}/>
    <button onClick={props.onBack}>Back</button>
    <button>Add to basket</button>

    <h1>{props.phone.name}</h1>
    <p>{props.phone.description}</p>

    <ul className="phone-thumbs">
      { props.phone.images.map(imageUrl => (
        <li>
          <img src={imageUrl}/>
        </li>
      )) }
    </ul>
  </div>
);

export default App;
