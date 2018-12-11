import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Card, Grid, CardMedia, CardContent, CircularProgress, Typography, CardActions, Button, List, ListItem, Avatar, ListItemText, } from '@material-ui/core'
import ReactPaginate from 'react-paginate'

import { getFestivals } from '../../actions/festivals'
import { openAddPrfModal } from '../../actions/modals'

import AddPerformerModal from '../Dumb/AddPerformerModal'

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    item: {
        flex: '0 0 280px',
        margin: 10,
    }
})

const conf = {
    perPage: 4
}

class Festivals extends Component {
    state = {
        activePage: 0
    }

    componentDidMount() {
        if(!this.props.festivals.data.length) {
            this.props.getFestivals()
        }
    }

    onPageChange = page => {
        this.setState({
            activePage: page.selected
        })
    }
    
    render() {
        const { festivals, classes } = this.props
        const { activePage } = this.state

        const indexOfLast = (activePage + 1) * conf.perPage
        const indexOfFirst = indexOfLast - conf.perPage
        const fstv = festivals.data.slice(indexOfFirst, indexOfLast)

        return (
            <div
                style={{
                    margin: 20,
                }}
            >
                {festivals.fetching &&
                    <div style={{
                        textAlign: 'center',
                        margin: 40
                    }}>
                        <CircularProgress />
                    </div>
                }
                <Grid className={classes.grid}>
                    {fstv.map(el => {
                        const prfIds = el.performers.map(p => p.id)
                        return (
                            <Card key={el.id} className={classes.item}>
                                <CardMedia
                                    image={el.logo}
                                    title={el.name}
                                    className={classes.media}
                                />
                                <CardContent>
                                    <Typography variant="title">{el.name}</Typography>
                                    <List>
                                        {el.performers.map(p => (
                                            <ListItem key={p.id}>
                                                <Avatar
                                                    src={p.logo}
                                                />
                                                <ListItemText>{p.name}</ListItemText>
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => this.props.openAddPrfModal(el.id, prfIds)} variant="outlined" color="primary">Add Performer</Button>
                                </CardActions>
                            </Card>
                        )
                    })}
                </Grid>

                {festivals.data.length &&
                    <ReactPaginate
                        pageCount={Math.ceil(festivals.data.length / conf.perPage)}
                        containerClassName="pagination"
                        pageRangeDisplayed={8}
                        marginPagesDisplayed={5}
                        onPageChange={this.onPageChange}
                        initialPage={0}
                    />
                }
                <AddPerformerModal />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    festivals: state.festivals.list
})

export default connect(mapStateToProps, { getFestivals, openAddPrfModal })(withStyles(styles)(Festivals))
