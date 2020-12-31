import React from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getToken, toggleLoader, getUserData } from '../actions/actionCreators'
import User from '../SpotifyDataComponents/User'
import AreYouSureModal from '../InfoComponents/AreYouSureModal'
import LoadingModal from '../InfoComponents/LoadingModal'
import ErrorModal from '../InfoComponents/ErrorModal'
import SuccessModal from '../InfoComponents/SuccessModal'

class Main extends React.Component {

    componentDidMount(){
        const {
            getToken
        } = this.props

        getToken()
    }

    render(){
        const {
            mainInlineLoader, 
            showInlineError,
            userData
        } = this.props

        return <div className="main-body">
            <AreYouSureModal />
            <LoadingModal />
            <ErrorModal />
            <SuccessModal />
            {mainInlineLoader ? 
                ( <div>
                    <p>Standby while we fetch your spotify data. This should just be a sec</p>
                    <Spinner animation="border" role="status" variant="success">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                ) : ""}
            {showInlineError ? 
            <p className="inline-error">
                There's been an getting your spotify data, our call to our API's /me endpoint failed. 
                This could be due to our API or the spotify API. Please check back in a few minutes and try again. 
                Our sincre apologies. In the meantime, wanna look at some dog photos?
                <br></br>
                <br></br>
                <a
                    className="green-button-link"
                    href="https://unsplash.com/s/photos/dog"
                    target="_blank"
                    rel="noopener noreferrer"
                
                >YES, show dogs</a>
            </p> : ""}
            {userData && userData.display_name ? <User /> : ""}
        </div>
    }

}

const mapStateToProps = state => {
    return {
        tokenData: state.tokenData, 
        userData: state.userData,
        mainInlineLoader: state.mainInlineLoader,
        showInlineError: state.showInlineError
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getToken: () => dispatch(getToken(props.location.pathname)),
        toggleLoader: () => dispatch(toggleLoader()),
        getUserData: () => dispatch(getUserData())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Main)