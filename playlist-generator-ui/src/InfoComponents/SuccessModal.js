import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { clearSelectedPlaylist, toggleSuccessModal } from '../actions/actionCreators'

class ErrorModal extends React.Component {
    render(){
        const {
            selectedPlaylist,
            showSuccessModal, 
            handleCloseModal
        } = this.props

        return <Modal centered show={showSuccessModal} backdrop="static" className="modal">
            <Modal.Header style={{justifyContent: "center"}}>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               We successfully generated and added your new cover photo to the playlist:
                <p className="bold-text modal-playlist-name">{selectedPlaylist.name}</p>
            </Modal.Body>
            <Modal.Footer style={{justifyContent: "center"}}>
                <Button variant="success" onClick={handleCloseModal}>OK</Button>
            </Modal.Footer>
        </Modal>
    }
}

const mapStateToProps = state => {
    return {
        showSuccessModal: state.showSuccessModal,
        selectedPlaylist: state.selectedPlaylist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCloseModal: () => {
            dispatch(clearSelectedPlaylist())
            dispatch(toggleSuccessModal())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal)