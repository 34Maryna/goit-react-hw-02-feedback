import PropTypes from 'prop-types';
import { FeedbackClick } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
          <FeedbackClick>Good: {good}</FeedbackClick>
          <FeedbackClick>Neutral: {neutral}</FeedbackClick>
          <FeedbackClick>Bad: {bad}</FeedbackClick>
          <FeedbackClick>Total: {total()}</FeedbackClick>
          <FeedbackClick>Positive feedback: {total() === 0 ? 0 : positivePercentage()}%</FeedbackClick>
        </>
    );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}