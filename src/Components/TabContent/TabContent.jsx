
import "./TabContent.css";

const TabContent = ({title, description, code}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <pre><code>{code}</code></pre>
        </div>
    )
}


export default TabContent;
