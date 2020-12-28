import React from 'react'
import { connect } from 'react-redux'
import { getToken, toggleLoader, getUserData } from '../actions/actionCreators'

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
            loading
        } = this.props

        return <div>
            Congrats! you've authenticated!
            {loading ? <p>Standby while we fetch your spotify data ...</p> : ""}
        </div>
    }

}

const mapStateToProps = state => {
    return {
        tokenData: state.tokenData, 
        loading: state.loading
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