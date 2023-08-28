import { TextValue } from "../Feedback.styled";
import { ParagraphValue } from "../Feedback.styled";

export const Value = ({ type, quantity }) => {
    return <TextValue>
        <ParagraphValue>{type}: {quantity}</ParagraphValue>
    </TextValue>
}