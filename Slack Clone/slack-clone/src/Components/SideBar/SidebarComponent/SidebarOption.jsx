import PropTypes from 'prop-types';
import "./SidebarOption.css";
import { useNavigate } from 'react-router-dom';
import db from '../../../firebase';
import DeleteIcon from '@mui/icons-material/Delete'; // Importing Delete icon from Material-UI

function SidebarOption({ Icon, title, id, addChannelOption, removeChannelOption }) {
    const navigate = useNavigate();

    const selectChannel = () => {
        if (id) {
            navigate(`/room/${id}`);
        } else {
            navigate(title);
        }
    };

    const addChannel = () => {
        const ChannelName = prompt("Please enter the channel Name");

        if (ChannelName) {
            db.collection('rooms').add({
                name: ChannelName,
            });
        }
    };

    const removeChannel = () => {
        const confirmation = window.confirm(`Are your sure you want to delete this channel ${title}! Once deleted will not recover Again`)
        if (confirmation) {
            navigate("/home")
            if (id) {
                db.collection('rooms').doc(id).delete()
                    .then(() => {
                        console.log("Channel deleted successfully");
                    })
                    .catch((error) => {
                        console.error("Error deleting channel: ", error);
                    });
            }
        }
        else {
            return;
        }
    };

    return (
        <div className="sidebaroption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebar__Icon" />}
            {Icon ?
                (<h3>{title}</h3>) :
                (
                    <div className="sidebar__channel">
                        <div>#&nbsp;&nbsp;{title}</div>
                        <div
                            className='deleteIcon'
                        >
                            {removeChannelOption && <DeleteIcon
                                onClick={removeChannel} className="deleteIcon" />}
                        </div>
                    </div>
                )}
        </div>
    );
}

SidebarOption.propTypes = {
    Icon: PropTypes.elementType,
    title: PropTypes.string,
    id: PropTypes.string,
    addChannelOption: PropTypes.bool,
    removeChannelOption: PropTypes.bool
};

export default SidebarOption;
