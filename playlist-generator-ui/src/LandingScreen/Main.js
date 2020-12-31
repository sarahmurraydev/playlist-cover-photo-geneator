import React from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getToken, toggleLoader, getUserData } from '../actions/actionCreators'
import { isEmpty } from '../utils'
import User from '../SpotifyDataComponents/User'
import AreYouSureModal from '../InfoComponents/AreYouSureModal'
import LoadingModal from '../InfoComponents/LoadingModal'

class Main extends React.Component {

    componentDidMount(){
        const {
            getToken
        } = this.props

        getToken()
    }

    showAndLogAdditionalErrorDetails(){
        console.log("There's been an API error")
        if(this.props.showInLineError) {
            console.log("There was an error on the /me endpoint, fetching the user data")
            return <p>More specifically, our call to our API's /me endpoint failed. This could be due to our API or the spotify API. Please gives us a few mintues.</p>
        }
    }

    render(){
        const {
            mainInlineLoader, 
            error,
            showInlineError,
            userData
        } = this.props

        return <div>
            <AreYouSureModal />
            <LoadingModal />
            {mainInlineLoader ? 
                ( <div>
                    <p>Standby while we fetch your spotify data. This should just be a sec</p>
                    <Spinner animation="border" role="status" variant="success">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                ) : ""}
            {showInlineError ? <p>There's been an getting your spotify data. Please check back in a few minutes and try again.</p> : ""}
            {error.message ? this.showAndLogAdditionalErrorDetails() : ""}
            {userData && userData.display_name ? <User /> : ""}
        </div>
    }

}

const mapStateToProps = state => {
    return {
        tokenData: state.tokenData, 
        userData: state.userData,
        mainInlineLoader: state.mainInlineLoader,
        error: state.error,
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