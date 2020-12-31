import React from 'react'
import Question from './Question'
import { faqs } from '../constants'
import { Link } from 'react-router-dom'

class FAQ extends React.Component {
    render(){
        return <div className="main-body">
                <h2>FAQs</h2>
                <div className="faqs">
                    {faqs.map((q, index) => {
                        return <Question key={index} faq={q}/>
                    })}
                </div>
                <div className="faq-final-note">
                    <Link to="/" className="green-button-link app-link">
                        Go Home
                    </Link>
                </div>
            </div>
    }
}

export default FAQ