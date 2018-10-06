import React from "react";
import { connect } from "react-redux";
import listApi from '../services/homesite/listApi';
import DeckActions from "../actions/deckActions";
import { LoadingScreen } from './loadingScreen';

import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const DECK_ID = 1;

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
    }
});
class Deck extends React.Component {
    state = { blankCard: "initial" };

    componentDidMount = () => {
    }

    generate = () => {
        return this.props.cardsByDeck[DECK_ID].map(card => (
            <ListItem key={card.id}>
                <ListItemText primary={card.text} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={this.handleDelete}
                        value={card.id}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ));
    };

    handleSubmit = event => {
        event.preventDefault();

        let newCard = {
            cardId: + new Date(),
            text: this.state.blankCard,
            ordinal: + new Date(),
            deckId: DECK_ID,
            dateCreated: '2019-10-05T00:00:00Z',
            isComplete: false
        };

        if (this.state.blankCard !== "") {

            // callback to add card data to store
            const callback = (context) => {
                const {
                    error,
                    deckId,
                    card
                } = context;
                if (error) console.log("[deck] and error occurred: ", error);
                if (deckId && card) {
                    this.props.createCard(deckId, card);
                }
            }

            // send add request to api
            listApi.AddCardToDeck(
                callback,
                DECK_ID.toString(),
                newCard)
        }
        this.setState({ blankCard: "" });
    };


    handleDelete = event => {
        // delete the item from the store
        this.props.deleteCard(DECK_ID.toString(), event.target.value);
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const {
            classes,
            decks } = this.props;
        const deck = decks[DECK_ID]
        if (!deck) {
            return (<LoadingScreen/>)
        }
        return (
            <div>
                <div>
                    <h1>{deck.displayName} : {deck.cardCount}</h1>
                </div>
                <div>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <FormControl>
                            <TextField
                                label="New Task"
                                id="margin-dense"
                                value={this.state.blankCard}
                                className={classes.textField}
                                margin="dense"
                                name="blankCard"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <Button onClick={this.handleSubmit}>Add</Button>
                        </FormControl>
                    </form>
                </div>
                <div>
                    <Grid item container justify="space-evenly" alignItems="center">
                        <div className={classes.demo}>
                            <List dense={false}>{this.generate()}</List>
                        </div>
                    </Grid>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    cardsByDeck: state.deck.cardsByDeck,
    decks: state.deck.userDecks

});


const mapDispatchToProps = dispatch => ({
    createCard: (deckId, card) => dispatch(DeckActions.createCard(deckId, card)),
    deleteCard: (deckId, cardId) => dispatch(DeckActions.deleteCard(deckId, cardId))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Deck));