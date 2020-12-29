import React from 'react'
import { connect } from 'react-redux'
import { getToken, toggleLoader, getUserData } from '../actions/actionCreators'
import User from '../SpotifyDataComponents/User'
import AreYouSureModal from '../InfoComponents/AreYouSureModal'

class Main extends React.Component {

    componentDidMount(){
        const {
            getToken
        } = this.props

        console.log("the props in component did mount", this.props)

        getToken()
    }

    componentDidUpdate(){
        const {
            toggleLoader, 
            getUserData
        } = this.props

        console.log("The props in component did update", this.props)

        if(this.props.tokenData && this.props.tokenData['Authorization'] && !this.props.loading){
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
            Congrats! You've authenticated!
            {loading ? <p>Standby while we fetch your spotify data ...</p> : ""}
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