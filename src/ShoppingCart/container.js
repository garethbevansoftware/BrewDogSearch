import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    IncrementItemCount: (item) => dispatch({ type: 'INCREMENT',item:item }),
    DecrementItemCount: (item) => dispatch({ type: 'DECREMENT',item:item })
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);