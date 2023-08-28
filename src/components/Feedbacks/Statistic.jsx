import { Value } from './FeedbackItems/Value';

export const Statistic = ({good, neutral, bad, total, positivePrecentage}) => {
    return <>
            <ul>
                <Value
                    type='Good'
                    quantity={good}
                />
                 <Value
                    type='Neutral'
                    quantity={neutral}
                />
                 <Value
                    type='Bad'
                    quantity={bad}
                />
                 <Value
                    type='Total'
                    quantity={total}
                />
                <Value
                    type='Positive feedback'
                    quantity={positivePrecentage}
                />

        </ul>
    </>

}