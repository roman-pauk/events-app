import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Avatar, ListItemText, CircularProgress, ListItemSecondaryAction, Fab, Icon } from '@material-ui/core'

import { getPerformers } from '../../actions/performers'

class PerformersList extends Component {

    componentDidMount() {
        if(!this.props.performers.data.length) {
            this.props.getPerformers()
        }
    }

    render() {
        const { performers, onAddPrf, addedPrfIds, addPfr } = this.props

        return (
            <div>
                {performers.fetching &&
                    <div style={{
                        textAlign: 'center',
                        margin: 40
                    }}>
                        <CircularProgress />
                    </div>
                }
                <List>
                    {performers.data.map(el => {
                        const isDisabled = addedPrfIds.includes(el.id) || addPfr.fetching
                        return (
                            <ListItem style={{
                                minWidth: 300
                            }} key={el.id}>
                                <Avatar
                                    src={el.logo}
                                />
                                <ListItemText>{el.name}</ListItemText>
                                <ListItemSecondaryAction>
                                    <Fab onClick={() => onAddPrf(el.id)} disabled={isDisabled} size="small" color="secondary">
                                        <Icon>add</Icon>
                                    </Fab>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    performers: state.performers.list,
    addPfr: state.festivals.addPfr
})

export default connect(mapStateToProps, { getPerformers })(PerformersList)


