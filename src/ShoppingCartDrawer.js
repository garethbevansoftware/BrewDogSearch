import AppBar from '@material-ui/core/AppBar';
import React, { Component } from 'react';
import { styled } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Link from '@material-ui/core/Link'
import { removeItem,addQuantity,subtractQuantity} from './actions/cart-actions'
import { connect } from 'react-redux'

const appBarHeight = 50
const drawerHeight = 240;

const ShoppingCartAppBar = styled(AppBar)({
  height: appBarHeight,
  top: 'auto',
  bottom: '0',
})

class ShoppingCartDrawer extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  //to remove the item 
  handleRemove = (id) => {
    this.props.removeItem(id);
  }
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {

    let addedItems = this.props.items.length ?
    (  
        this.props.items.map(item=>{
            return(
               
                <li className="collection-item avatar" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.img} className=""/>
                            </div>
                        
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p> 
                                <p>
                                    <b>Quantity: {item.quantity}</b> 
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            </div>
                            
                        </li>
                 
            )
        })
    ):

     (
        <p>Nothing.</p>
     )

    return (
      <div>
        <ShoppingCartAppBar position="fixed" color="primary">
          Shopping Cart
        </ShoppingCartAppBar>

        <SwipeableDrawer
          anchor={'bottom'}
          open={this.state.open}
        >
        {addedItems}
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
      items: state.addedItems,
      //addedItems: state.addedItems
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
      removeItem: (id)=>{dispatch(removeItem(id))},
      addQuantity: (id)=>{dispatch(addQuantity(id))},
      subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartDrawer)