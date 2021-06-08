import React from 'react';
import Web3 from 'web3';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      tokenAddress: '0xA145ac099E3d2e9781C9c848249E2e6b256b030D',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const freeProvider = 'https://mainnet.infura.io/v3/ae288bb591b44aad847c57f6d211e0d3';
    const web3 = new Web3(freeProvider);

    web3.eth.getBalance(this.state.tokenAddress, (error, balance) => {
      this.setState({
        balance: web3.utils.fromWei(balance, 'ether') + ' Ether'
      });
    });
  }
  render() {
    return (
      <article className='app'>
        <p className='app__text'><span className='app__text--bold'>Address:</span> {this.state.tokenAddress}</p>
        <p className='app__text'><span className='app__text--bold'>Balance:</span> {this.state.balance}</p>
        <button className='app__button' onClick={this.handleClick}>Get balance</button>
      </article>
    )
  }
}

export default App;