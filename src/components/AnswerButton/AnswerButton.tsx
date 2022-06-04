import './AnswerButton.css';

interface AnswerButtonProps {
    color: string;
    text: string;
    text_color?: string;
    onClick?: () => void;
}
function AnswerButton(props: AnswerButtonProps){
    const colors: any = {
        green: "#037921",
        orange: "#FE5E06",
        pink: "#FD026B",
        yellow: "#FFB701"
    }
    return (
        <button className="answer_button" style={{background: colors[props.color]}} onClick={props.onClick}>{props.text}</button>
    )
}
export default AnswerButton;