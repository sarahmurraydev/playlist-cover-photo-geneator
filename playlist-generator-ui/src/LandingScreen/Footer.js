import { Icon } from '@iconify/react';
import { icons } from '../constants';
import { Link } from 'react-router-dom'

const Footer = props => (
    <div className="footer">
        <h5 className="footer-title">Made by Sarah Murray</h5>
        <div className="footer-row icon-row">
            {icons.map((icon, index) => {
                return <a
                    className="app-link"
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                ><Icon icon={icon.component} className="footer-icon"/></a>
            })}
        </div>
        <div className="footer-row details-row">
            <Link to="/disclaimer" className="app-link"><p>Disclaimer</p></Link>
            <Link to="/faq" className="app-link"><p>FAQs</p></Link>
        </div>
    </div>
)

export default Footer