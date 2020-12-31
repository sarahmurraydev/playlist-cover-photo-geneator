import { Icon } from '@iconify/react';
import { icons } from '../constants';
import { Link } from 'react-router-dom'

const Footer = props => (
    <div className="footer">
        <h5 className="footer-title">Made by Sarah Murray</h5>
        <div className="footer-row icon-row">
            {icons.map(i => {
                return <a
                    className="footer-link"
                    href={i.link}
                    target="_blank"
                    rel="noopener noreferrer"
                ><Icon icon={i.component} className="footer-icon"/></a>
            })}
        </div>
        <div className="footer-row details-row">
            <Link to="/disclaimer" className="footer-link"><p>Disclaimer</p></Link>
            <Link to="/faq" className="footer-link"><p>FAQs</p></Link>
        </div>
    </div>
)

export default Footer