import React, { Component } from 'react';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BeerInformationModal from './BeerInfomationModal'
import Grid from '@material-ui/core/Grid'


const MyCard = styled(Card)({
  width: '100%',
  height: '100%',
  alignItems: 'center'
})

class SearchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

   setModalState(open){
    this.setState({
      modalOpen:open
    })
  }

  InfoModal(){ 
    if(this.state.modalOpen){
      return <BeerInformationModal item={this.props.item} onClose={() => this.setModalState(false)}/>
    }
  }

  render (){   
    return (
      <>
    <MyCard onClick={ () => this.setModalState(true)}>
      <CardActionArea>
        <CardContent>
        <Grid container justify="center" spacing={1}>
        <Grid item>
        <img height="200" src={this.props.item.image_url}/>
        </Grid>
        <Grid item xs="12" zeroMinWidth>
          <Typography align="center" variant="h6" component="h2"  overflow="hidden" noWrap>
            {this.props.item.name}
          </Typography>
          </Grid>
          <Grid item xs='12' zeroMinWidth >
          <Typography align="center" variant="body2" color="textSecondary" component="p" noWrap>
            {this.props.item.abv}
          </Typography>
          </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </MyCard>
    {this.InfoModal()}
   </>
    ) 
  }
}

export default SearchItem;