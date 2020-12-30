import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeAndSetPhoto, closeModal } from '../actions/actionCreators';

class AreYouSureModal extends React.Component {
    render(){
        const {
            showModal,
            selectedPlaylist,
            handleCloseModal,
            handleCloseAndMakePhoto
        } = this.props

        console.log("selected playlist:", selectedPlaylist)

        return <Modal show={showModal} onHide={handleCloseModal} className="playlist-modal">
            <Modal.Header closeButton>
                <Modal.Title>Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Clicking "OK" below will make AND set your playlist:&nbsp;
                <span className="bold-text">{selectedPlaylist.name}</span>&nbsp;cover photo to be a mosiac of the 
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
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    }
}

const mapStateToProps = state => {
    return {
        showModal: state.showModal,
        selectedPlaylist: state.selectedPlaylist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCloseModal: () => dispatch(closeModal()),
        handleCloseAndMakePhoto: (id) => {
            console.log("want to set the photo of the playlist", id)
            dispatch(closeModal())
            dispatch(makeAndSetPhoto(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreYouSureModal)