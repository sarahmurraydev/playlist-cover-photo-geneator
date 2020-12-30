import React from 'react'
import { connect } from 'react-redux'
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

    componentDidUpdate(){
        const {
            toggleLoader, 
            userData,
            getUserData
        } = this.props

        if(this.props.tokenData && this.props.tokenData['Authorization'] && !this.props.loading && isEmpty(userData)){
            toggleLoader()
            getUserData()
        }
    }

    render(){
        const {
            loading, 
            error,
            userData
        } = this.props

        return <div>
            <AreYouSureModal />
            <LoadingModal />
            {loading ? 
                ( <div>
                    <p>Standby while we fetch your spotify data ...</p>
                  </div>
                ) : ""}
            {error.message ? <p>There's been an error: {error.message}</p> : ""}
            {userData && userData.display_name ? <User /> : ""}
        </div>
    }

}

const mapStateToProps = state => {
    return {
        tokenData: state.tokenData, 
        userData: state.userData,
        loading: state.loading,
        error: state.error
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