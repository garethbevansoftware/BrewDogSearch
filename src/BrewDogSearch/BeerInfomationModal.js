import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid'
import { Container } from '../ShoppingCart/container'
import Paper from '@material-ui/core/Paper'
import { styled, useTheme } from '@material-ui/core/styles';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const BeerInformationModalStyle = styled(Paper)({
    position: 'absolute',
    border: '2px solid #000',
})



class SearchItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalStyle:getModalStyle(),
            onClose: ()=> props.onClose(),
            item: props.item,
            open: false
        };
    }

    handleClose = () => {
        this.state.onClose()
    };

    body() {
        return (
            <BeerInformationModalStyle style={this.state.modalStyle}>
                <Grid container spacing={3} justify="left" >
                    <Grid item xs={4}>
                        <img height='550' width='100%' objectFit='cover' src={this.state.item.image_url} />
                    </Grid>
                    <Grid item xs={8} height="550">
                        <h4>{this.state.item.name}</h4>
                        <h5>{this.state.item.tagline}</h5>
                        <h5>{this.state.item.abv}</h5>
                        <h5>{this.state.item.description}</h5>
                        <br></br>
                        <h5>Food Pairings:</h5>
                        <ul>
                            {this.state.item.food_pairing.map((food, index) => (
                                <li>{food}</li>
                            ))}
                        </ul>
                        <Container item={this.state.item} />
                    </Grid>
                </Grid>
            </BeerInformationModalStyle>
        )
    }


    render() {
        return (
            <Modal
                open={true}
                onClose={this.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {this.body()}
            </Modal>
        );
    }
}

export default SearchItemModal
