import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'

import { closeAddPrfModal } from '../../actions/modals'
import { addPerformer } from '../../actions/festivals'

import PerformersList from './PerformersList'

class AddPerformerModal extends Component {
    onAddPrf = prf_id => {
        this.props.addPerformer(this.props.modal.festival_id, prf_id)
    }
    render(){
        const { modal, closeModal } = this.props
        return (
            <Dialog
                open={modal.opened}
                onClose={closeModal}
            >
                <DialogTitle>Add performer</DialogTitle>
                <DialogContent>
                    <PerformersList onAddPrf={this.onAddPrf} addedPrfIds={modal.festival_prf_ids} />
                </DialogContent>
            </Dialog>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modals.addPfr
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeAddPrfModal()), 
    addPerformer: (f_id, p_id) => dispatch(addPerformer(f_id, p_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPerformerModal)
