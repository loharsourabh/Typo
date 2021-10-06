import './TypingText.css';
import React, {useRef, useEffect} from 'react';

function TypingText({text, key_log}) {
    const text_el_ref = useRef(null);

    useEffect(() => {
        const text_el = text_el_ref.current;
        const line_height = parseFloat(getComputedStyle(text_el).lineHeight);
        // top position of span element containing remaining text
        const top_pos = text_el.lastElementChild.getBoundingClientRect().top;
        // it gives us middle line top position. it stays same because of text_el.scrollTop
        // top position of first child + scrollTop + half the number of lines in view
        const scroll_start = text_el.firstElementChild.getBoundingClientRect().top + text_el.scrollTop + line_height * Math.floor(parseFloat(getComputedStyle(text_el).height)/line_height / 2);

        // this will be zero on middle line and approx equal to line-height on next line
        const scroll_value = Math.floor(top_pos - scroll_start)

        if (scroll_value) {
            text_el.scrollBy({
                top: scroll_value, 
                behavior: 'smooth',
            });
        }
    }, [key_log]);

    // grouping text and key_log.
    // recalculated every time because user can edit typed text.
    const grouped_key_log = [];
    const grouped_text = [];
    let last_check = null;
    let index = 0;

    for (let char of key_log) {
        if (last_check !== (char === text[index])) {
            grouped_key_log.push('');
            grouped_text.push('');
        }

        grouped_key_log[grouped_key_log.length - 1] += char;
        grouped_text[grouped_text.length - 1] += text[index];

        last_check = char === text[index];
        index += 1;
    }

    return (
        <div id='test_text' ref={text_el_ref}>
            {grouped_text.map((text_slice, i) => (
                <span
                    key={i}
                    className={text_slice === grouped_key_log[i] ? 'right' : 'wrong'}
                >{text_slice}</span> 
            ))}
            <span>{text.slice(key_log.length)}</span>
        </div>
    );
}

export default TypingText;