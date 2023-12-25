import { Avatar } from "@mui/material";
import "./Header.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                    className="header_Avatar"
                // alt={user?.displayName}
                // src={user?.photoURl}
                />
                <AccessTimeIcon />
            </div>
            <div className="search_bar">

            </div>
            <div className="header_right">
                {/* Help */}
            </div>
        </div>
    )
}

export default Header
