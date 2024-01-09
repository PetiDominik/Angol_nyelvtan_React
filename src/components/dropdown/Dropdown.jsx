
import "./Dropdown.css";

export default function Dropdown(props) {

    function submitAnswer(element) {
        props.submitFn(element.target.value);
    }

    return (
        <div className="dropdown">
            <select name="question" onChange={submitAnswer} id="dropDwn">
                <option selected disabled value=""> -- Válasszon -- </option>
                {
                    props.options.map((element, index) => {
                        return(
                            <option value={element} key={index} >{element}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}