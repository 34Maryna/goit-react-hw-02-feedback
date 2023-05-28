import { Component } from "react";

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import { FeedbackContainer } from './App.styled';

export class App extends Component {
    state = {
          good: 0,
          neutral: 0,
          bad: 0
        };
onLeaveFeedback = option => {
    this.setState((prevState) => {
        return {
            [option]: prevState[option] + 1,
            };
        });
    };
countTotalFeedback = () => {
  const { good, neutral, bad} = this.state;
  const total = good + neutral + bad;
  return total;
};  
  countPositiveFeedbackPercentage = () =>  {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };
    
    render () {
        const { good, neutral, bad} = this.state;
         return (
<FeedbackContainer>          
<Section title={"Please leave feedback"}>
<FeedbackOptions 
  options={Object.keys(this.state)}
  onLeaveFeedback={this.onLeaveFeedback}
/>
</Section>
 <Section title={"Statistics"}>
 {this.countTotalFeedback() === 0 ? (<Notification message={'There is no feedback'} />) : (
<Statistics
  good={good}
  neutral={neutral}
  bad={bad}
  total={this.countTotalFeedback}
  positivePercentage={this.countPositiveFeedbackPercentage}
/>
 )}
</Section>
</FeedbackContainer>
);
}
}
