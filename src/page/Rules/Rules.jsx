import { LinkButton } from "../../component";
import "./rules.css";

const rules = [
    "Every category has 10 questions of multiple choice",
    "Each question has one correct answer.",
    "Every correct answer will award you 10 points.",
    "Click on Next for next question",
    "Click on Quit to leave the quiz",
];
export const Rules = () => {
    return (
        <>
            <div className="m-2 pd-4 rule-container">
                <div className="m-1 pd-2 rules-card">
                    <img src="https://raw.githubusercontent.com/anupkgurung/images/main/quizimg/rulespage.png" alt="rules" />
                    <ul className="ul-list-flex">
                    {rules.map(item => (
                        <li className="pd-2">{item}</li>
                    ))}
                    </ul>
                </div>
                <div className="w-100 pd-4">
                    <LinkButton pathName={"/"}
                        btnCaption={"Back"}
                        classes={"btn-primary w-10"} />
                </div>
            </div>

        </>
    )
}