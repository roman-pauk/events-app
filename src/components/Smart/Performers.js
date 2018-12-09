import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, List, ListItem, ListItemText, Avatar } from '@material-ui/core'

import { getPerformers } from '../../actions/performers'

class Performers extends Component {
    
    componentDidMount() {
        if(!this.props.performers.data.length) {
            this.props.getPerformers()
        }
    }
    
    render() {
        const { performers } = this.props
        return (
            <div
                style={{
                    margin: 20
                }}
            >
                <Card>
                    <List>
                        {performers.data.map(el => (
                            <ListItem key={el.id}>
                                <Avatar
                                    src={el.logo}
                                />
                                <ListItemText>{el.name}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    performers: state.performers.list
})

export default connect(mapStateToProps, { getPerformers })(Performers)
