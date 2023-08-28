import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistic';
import { Section } from 'components/Section/Section';
import { Notification } from './Notification';


export class Feedbacks extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handlerAddGoodFeedback = () => {
        this.setState((p) => ({
            good: p.good + 1
        }))
    }

    handlerAddNeutralFeedback = () => {
        this.setState((p) => ({
            neutral: p.neutral + 1
        }))
    }

    handlerAddBadFeedback = () => {
        this.setState((p) => ({
            bad: p.bad + 1
        }))
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback()
        const precentage = this.state.good / total * 100
        return `${Math.round(precentage)}%`
    }

    render() {
        return <>
            <Section title='Please leave feedback'>
            <FeedbackOptions
                good={this.handlerAddGoodFeedback}
                neutral={this.handlerAddNeutralFeedback}
                bad={this.handlerAddBadFeedback}
            />
            </Section>
            {this.countTotalFeedback() ? <> 
            <Section title='Statistics'>
            <Statistic
                good={this.state.good }
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePrecentage={this.countPositiveFeedbackPercentage()}
            />
                </Section>
            </> : <Section title='Statistics'><Notification message='!!!There is no feedback!!!' /></Section>}
           
        </>
    }
}