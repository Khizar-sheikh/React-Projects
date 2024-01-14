import PropTypes from 'prop-types';
import "./Message.css"


function Message({ message, user, timestamp, userImage, }) {

    let formattedTime = "";
    if (timestamp && timestamp.seconds) {
        formattedTime = new Date(timestamp.seconds * 1000).toUTCString();
    } else if (timestamp instanceof Date) {
        formattedTime = timestamp.toUTCString();
    }
    const formatMessage = (text) => {
        if (!text) {
            return text; // Return the text as is if it's empty or undefined
        }

        const urlRegex = /(\b(?:https?|ftp):\/\/[^\s]+)/g;
        const emailRegex = /(\b[\w\.-]+@[\w\.-]+\.\w{2,}\b)/g;

        let parts = text.split(urlRegex);

        return parts.map((part, index) => {
            if (part.match(urlRegex)) {
                const url = part.startsWith('http') ? part : `http://${part}`;
                return <a key={index} href={url} target="_blank" rel="noopener noreferrer">{part}</a>;
            } else {
                const emailParts = (part || '').split(emailRegex);
                const emailElements = emailParts.map((emailPart, emailIndex) => {
                    if (emailPart && emailPart.match(emailRegex)) {
                        const urlEmail = `mailto:${emailPart}`;
                        return <a key={emailIndex} href={urlEmail}>{emailPart}</a>;
                    } else {
                        return emailPart;
                    }
                });
                return <span key={index}>{emailElements}</span>;
            }
        });
    };


    return (
        <div className="message">
            <img src={userImage} alt="" />
            <div className="message__info">
                <h4>
                    {user}
                    <span className='message__timestamp'> {formattedTime}</span>
                </h4>
                <p>{formatMessage(message)}</p>
                {/* <button onClick={handleDeleteMessage}>Delete</button> */}
                {/* Use a button or icon for delete, modify the styling as needed */}
            </div>
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.string,
    timestamp: PropTypes.oneOfType([
        PropTypes.shape({
            seconds: PropTypes.number,
            nanoseconds: PropTypes.number
        }),
        PropTypes.instanceOf(Date)
    ]),
    user: PropTypes.string,
    userImage: PropTypes.string,
    messageId: PropTypes.string,
};

export default Message;
