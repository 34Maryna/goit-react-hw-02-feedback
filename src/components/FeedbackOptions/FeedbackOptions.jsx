import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <>  
        {options.map(option => (
            <FeedbackBtn
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
            >
            {option}
            </FeedbackBtn>
         ))}
      </>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};