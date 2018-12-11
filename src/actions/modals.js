
export const OPEN_ADD_PRF_MODAL = 'OPEN_ADD_PRF_MODAL'
export const CLOSE_ADD_PRF_MODAL = 'CLOSE_ADD_PRF_MODAL'

export const openAddPrfModal = (festival_id = '', festival_prf_ids = []) => ({
    type: OPEN_ADD_PRF_MODAL,
    payload: {
        festival_id,
        festival_prf_ids,
    }
})
export const closeAddPrfModal = () => ({
    type: CLOSE_ADD_PRF_MODAL
})