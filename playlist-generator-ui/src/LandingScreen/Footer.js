import { Icon } from '@iconify/react';
import { icons } from '../constants';

const Footer = props => (
    <div className="footer">
        <h5 className="footer-title">Made by Sarah Murray</h5>
        <div className="footer-icons">
            {icons.map(i => {
                return <a
                    className="icon-link"
                    href={i.link}
                    target="_blank"
                    rel="noopener noreferrer"
                ><Icon icon={i.component} className="footer-icon"/></a>
            })}
        </div>
    </div>
)

export default Footer