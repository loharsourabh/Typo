import './Typing.css'
import TypingStats from './TypingStats.js';
import TypingText from './TypingText.js';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

function Typing() {
    const {test_text, test_duration} = useParams();
    const [text, set_text] = useState(() => {
        const texts = JSON.parse(localStorage.getItem('texts'));

        return texts[test_text.slice(0, -1)][test_text.slice(-1)];
    });
    const [key_log, set_key_log] = useState('');
    const [test_over, set_test_over] = useState(false);

    function update_key_log(event) {
        const {value} = event.target;

        if (value.length <= text.length && !test_over) {
            set_key_log(value);
        }
    }

    return (
        <div className='typing'>
            <div className='content_parent'>
                <div className='hight_holder'></div>
                <div className='content'>
                    <TypingStats
                        text={text}
                        key_log={key_log}
                        test_duration={Number(test_duration)}
                        test_over={test_over}
                        update_test_over={value => {set_test_over(value)}}
                    />
                    <TypingText
                        text={text}
                        key_log={key_log}
                    />
                    <textarea
                        className='test_input'
                        autoFocus
                        placeholder='Start typing'
                        spellCheck='false'
                        value={key_log}
                        onChange={update_key_log}
                        onPaste={event => {event.preventDefault()}}
                    ></textarea>
                </div>          
            </div>
        </div>
    );
}

export default Typing;