import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom'

const Header = props => (
    <div className="header">
        <Link to="/" className="header app-link">
            <AppsIcon className="mosaic-icon"/>
            <h4 className="header-title">Mosaic Cover Photo Maker</h4>
        </Link>
    </div>
)

export default Header