import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner'

class LoadingModal extends React.Component {
    render(){
        const {
            selectedPlaylist,
            showLoadingModal
        } = this.props

        return <Modal centered show={showLoadingModal} backdrop="static" className="modal">
            <Modal.Header style={{justifyContent: "center"}}>
                <Modal.Title>Generating Your New Cover Photo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Standby... we are generating the new photo for your playlist:
                <br/>
                <span className="bold-text">{selectedPlaylist.name}</span>&nbsp;
                <br/>
                This might take a minute, especially for longer playlists.
                
            </Modal.Body>
            <Modal.Footer style={{justifyContent: "center"}}>
                <Spinner animation="border" role="status" variant="success">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Modal.Footer>
        </Modal>
    }
}

const mapStateToProps = state => {
    return {
        showLoadingModal: state.showLoadingModal,
        selectedPlaylist: state.selectedPlaylist
    }
}

export default connect(mapStateToProps)(LoadingModal)