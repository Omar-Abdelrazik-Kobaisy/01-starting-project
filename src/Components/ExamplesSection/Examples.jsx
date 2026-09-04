import {useState} from 'react';
import TabButton from '../TabButton/TabButton.jsx';
import TabContent from '../TabContent/TabContent.jsx';
import TAB_BUTTONS from '../TabButton/data.js';
import EXAMPLES from '../TabContent/data.js';

const Examples = () => {
    const [clickedButton, setClickedButton] = useState('components');

    const handleClick = (item) => {
        console.log('Button ' + item + ' clicked');
        setClickedButton(item);
        console.log(clickedButton);
    };
    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                {TAB_BUTTONS.map((item) => (
                    <TabButton
                        key={crypto.randomUUID()}
                        onClick={() => handleClick(item.toLowerCase())}
                        isSelected={clickedButton === item.toLowerCase()}>
                        {item}
                    </TabButton>
                ))}
            </menu>
            <div id='tab-content'>
                <TabContent
                    key={crypto.randomUUID()}
                    {...EXAMPLES[clickedButton]} />
            </div>
        </section>
    );
};
export default Examples;
