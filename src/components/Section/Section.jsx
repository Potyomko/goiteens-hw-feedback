import { Title } from "components/Feedbacks/Feedback.styled"

export const Section = ({ title, children }) => {
    return <>
        {title && <Title>{title}</Title>}
        {children}
    </>
      
}