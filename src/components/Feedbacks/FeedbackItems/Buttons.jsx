import { ButtonLi } from "../Feedback.styled";
import { Btn } from "../Feedback.styled";

export const Button = ({ type, handlerAddFeedback }) => {
    return <ButtonLi>
        <Btn type="button" onClick={handlerAddFeedback}>{type}</Btn>
        </ButtonLi>
}