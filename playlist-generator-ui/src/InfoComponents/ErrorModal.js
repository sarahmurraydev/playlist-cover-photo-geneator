import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { toggleErrorModal, clearSelectedPlaylist } from '../actions/actionCreators'

class ErrorModal extends React.Component {
    render(){
        const {
            selectedPlaylist,
            showErrorModal, 
            handleCloseModal
        } = this.props

        return <Modal centered show={showErrorModal} backdrop="static" className="modal">
            <Modal.Header style={{justifyContent: "center"}}>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               There was an error generating the photo for your playlist:
                <p className="bold-text modal-playlist-name">{selectedPlaylist.name}</p>
                You could try again with another playlist, or wait a few mintues and try again with this playlist.
            </Modal.Body>
            <Modal.Footer style={{justifyContent: "center"}}>
                <Button onClick={handleCloseModal}>OK</Button>
            </Modal.Footer>
        </Modal>
    }
}

const mapStateToProps = state => {
    return {
        showErrorModal: state.showErrorModal,
        selectedPlaylist: state.selectedPlaylist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCloseModal: () => {
            dispatch(clearSelectedPlaylist())
            dispatch(toggleErrorModal())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal)