import React, { Component } from 'react';
import TabPanel from './BrewDogSearch/TabPanel'
import BeerInformationModal from './BrewDogSearch/BeerInfomationModal'
import Button from '@material-ui/core/Button'
import NavigationIcon from "@material-ui/icons/Navigation";
import { styled } from '@material-ui/core/styles';
import ShoppingCartDrawer from './ShoppingCartDrawer'
import { fetchProducts } from "./actions/brew-dog-api-actions";
import { connect } from "react-redux";

class App extends Component {

  setShoppingCardState(open){
    this.setState({
      shoppingCartOpen:false
    })
  }

  ShoppingCart(){
    if(this.state.shoppingCartOpen){
      return <BeerInformationModal item={this.props.products} onClose={() => this.setModalState(false)}/>
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render (){   
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
    <TabPanel products={products}/>
    {/* <ShoppingCartButton onClick={ () => this.setShoppingCardState(true)}>
    <NavigationIcon />
      Navigate
     </ShoppingCartButton> */}
     {/* <ShoppingCartDrawer/> */}
     </div>
    )
  }

}

const mapStateToProps = state => ({
  products: state.brewDogApiReducer.items,
  loading: state.brewDogApiReducer.loading,
  error: state.brewDogApiReducer.error
});

export default connect(mapStateToProps)(App);
