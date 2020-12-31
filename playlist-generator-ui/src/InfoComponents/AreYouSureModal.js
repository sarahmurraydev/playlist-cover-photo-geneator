import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeAndSetPhoto, closeModal, clearSelectedPlaylist } from '../actions/actionCreators';

class AreYouSureModal extends React.Component {
    render(){
        const {
            showPlaylistModal,
            selectedPlaylist,
            closeModalNoAPICall,
            handleCloseAndMakePhoto
        } = this.props

        return <Modal centered show={showPlaylistModal} onHide={closeModalNoAPICall} className="modal">
            <Modal.Header closeButton>
                <Modal.Title>Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Clicking "OK" below will make AND set your playlist:&nbsp;
                <span className="bold-text">{selectedPlaylist.name}</span>&nbsp;cover photo to be a mosaic of the 
                current songs on this playlist. You <span className="bold-text">can not</span> undo this. 
                You will still be able to change your playlist's profile photo via the spotify desktop app as normal.
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="primary" 
                    onClick={() => handleCloseAndMakePhoto(selectedPlaylist.id)} 
                    style={{ backgroundColor: "#21af43" }}
                >
                    OK
                </Button>
                <Button variant="secondary" onClick={closeModalNoAPICall}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    }
}

const mapStateToProps = state => {
    return {
        showPlaylistModal: state.showPlaylistModal,
        selectedPlaylist: state.selectedPlaylist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModalNoAPICall: () => {
            dispatch(closeModal())
            dispatch(clearSelectedPlaylist())
        },
        handleCloseAndMakePhoto: (id) => {
            dispatch(closeModal())
            dispatch(makeAndSetPhoto(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreYouSureModal)