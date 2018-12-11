import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, List, ListItem, ListItemText, Avatar, CircularProgress } from '@material-ui/core'

import { getPerformers } from '../../actions/performers'
import ReactPaginate from 'react-paginate'

const conf = {
    perPage: 3
}

class Performers extends Component {
    state = {
        activePage: 0
    }
    
    componentDidMount() {
        if(!this.props.performers.data.length) {
            this.props.getPerformers()
        }
    }

    onPageChange = page => {
        this.setState({
            activePage: page.selected
        })
    }
    
    render() {
        const { performers } = this.props

        const { activePage } = this.state

        const indexOfLast = (activePage + 1) * conf.perPage
        const indexOfFirst = indexOfLast - conf.perPage
        const prf = performers.data.slice(indexOfFirst, indexOfLast)

        return (
            <div
                style={{
                    margin: '20px auto',
                    maxWidth: 500
                }}
            >
                <Card>
                    {performers.fetching &&
                        <div style={{
                            textAlign: 'center',
                            margin: 40
                        }}>
                            <CircularProgress />
                        </div>
                    }
                    <List>
                        {prf.map(el => (
                            <ListItem key={el.id}>
                                <Avatar
                                    src={el.logo}
                                />
                                <ListItemText>{el.name}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                    {performers.data.length &&
                        <ReactPaginate
                            pageCount={Math.ceil(performers.data.length / conf.perPage)}
                            containerClassName="pagination"
                            pageRangeDisplayed={8}
                            marginPagesDisplayed={5}
                            onPageChange={this.onPageChange}
                            initialPage={0}
                        />
                    }
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    performers: state.performers.list
})

export default connect(mapStateToProps, { getPerformers })(Performers)
