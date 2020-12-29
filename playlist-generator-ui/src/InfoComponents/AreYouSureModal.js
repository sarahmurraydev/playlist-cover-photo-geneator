import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeAndSetPhoto, toggleModal } from '../actions/actionCreators';

class AreYouSureModal extends React.Component {
    render(){
        const {
            showModal,
            handleCloseModal,
            handleCloseAndMakePhoto
        } = this.props

        return <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Clicking "OK" below will make AND set this playlist's cover photo to be a mosiac 
                of the current songs on this playlist. You can not undo this. You will still be 
                able to change your playlist's profile photo via the spotify desktop app as normal.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
          </Button>
                <Button variant="primary" onClick={handleCloseAndMakePhoto}>
                    Make and Upload My Playlist's New Mosiac Cover Photo
          </Button>
            </Modal.Footer>
        </Modal>
    }
}

const mapStateToProps = state => {
    return {
        showModal: state.showModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCloseModal: () => dispatch(toggleModal()),
        handleCloseAndMakePhoto: () => {
            dispatch(toggleModal())
            dispatch(makeAndSetPhoto())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreYouSureModal)