import React from 'react'
import { connect } from 'react-redux'
import { getToken } from '../actions/actionCreators'

class Main extends React.Component {

    componentDidMount(){
        const {
            getToken
        } = this.props

        console.log(this.props.location.pathname)

        getToken()
    }

    render(){
        return <div>
            Congrats! you've authenticated!
        </div>
    }

}

const mapStateToProps = state => {
    return {
        tokenData: state.tokenData 
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getToken: () => dispatch(getToken(props.location.pathname))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Main)