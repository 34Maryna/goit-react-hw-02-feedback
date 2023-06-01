import { Text } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
        <>
        <Text>{message}</Text>
        </>
    );
};

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

