import './TypingStats.css';
import React, {useEffect, useRef, useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

function TypingStats({text, key_log, test_duration, test_over, update_test_over}) {
    const [seconds_left, set_seconds_left] = useState(test_duration);
    const [speed, set_speed] = useState(0);
    const [accuracy, set_accuracy] = useState(0);
    const typed_total = useRef(0);
    const correct_total = useRef(0);
    const timer_interval = useRef();
    const history = useHistory();

    // starts the timer and calculates the WPM
    useEffect(() => {
        if (!timer_interval.current && key_log) {
            timer_interval.current = setInterval(() => {
                set_seconds_left(prev => --prev);
            }, 1000); // every 1000 ms
        }

        // if text has ' ' as next character
        if (text[key_log.length] === ' ' || text.length === key_log.length) {
            // extra spaces at the end saves us from for checking for string end in below loop
            const typed_text = key_log + ' ';
            const expected_text = text.slice(0, key_log.length) + ' ';
            let incorrect = 0;
            let split_index = 0;

            for (let i = 0; i < expected_text.length; i++) {
                if (expected_text[i] === ' ' && typed_text[i] === ' ') {
                    const typed_slice = typed_text.slice(split_index, i);
                    const expected_slice = expected_text.slice(split_index, i);

                    if (typed_slice !== expected_slice) {
                        incorrect += expected_slice.split(' ').length;
                    }

                    split_index = i + 1;
                }
            }

            const typed = expected_text.split(' ').length  - 1; // -1 for extra space
            const correct = typed - incorrect;

            typed_total.current = typed;
            correct_total.current = correct;

            // test_duration - seconds_left will initially be zero
            if (test_duration - seconds_left) {
                set_speed(Math.round(correct/(test_duration - seconds_left) * 60));
                set_accuracy(Math.round(100/typed * correct));
            }
        }
    }, [key_log]);


    useEffect(() => {
        if (seconds_left ===  0 || key_log.length === text.length) {
            clearInterval(timer_interval.current);
            update_test_over(!test_over);
        }
    }, [seconds_left]);

    // timer's setInterval gets cleared on unmount
    useEffect(() => {
        return () => {clearInterval(timer_interval.current);}
    }, []);

    function get_time(seconds) {
        const time_array = [
            `${Math.floor(seconds / 3600)}h`, // hours
            `${Math.floor(seconds/60 % 60)}m`, // minutes
            `${seconds % 60}s`, // seconds
        ];

        for (let [index, unit] of time_array.entries()) {
            if (parseFloat(unit) || index === time_array.length - 1) {
                return time_array.slice(index).join(' ');
            }
        }
    }

    return (
        <div className='typing_stats'>
            <div className='stats'>
                <div className='accuracy'>{accuracy}% accurate</div>
                <div className='speed'>{speed} wpm</div>
                <div className='timer'>{get_time(seconds_left)}</div>
            </div>

            <div className={'result' + (test_over ? ' unfolded' : '')}>
                <div>
                    <h1>Test completed</h1>
                    <ul>
                        <li>Speed: {speed} words/minute</li>
                        <li>Accuracy: {accuracy}% ({correct_total.current} correct / {typed_total.current} typed)</li>
                        <li>Time taken: {get_time(test_duration - seconds_left)}</li>
                    </ul>
                    <div>
                        <button onClick={event => {history.push('/')}}>Home</button>
                        <button onClick={event => {history.go(0)}}>Retry</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypingStats;