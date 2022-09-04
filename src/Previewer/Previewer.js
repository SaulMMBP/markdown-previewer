import { marked } from "marked";
import "./Previewer.css";

marked.setOptions({
    gfm: true,
    breaks: true,
});

const Previewer = (props) => {
    let mark = marked.parse(props.output);
    return (
        <div
            className="preview"
            dangerouslySetInnerHTML={{
                __html: mark,
            }}
        />
    );
};

export default Previewer;
