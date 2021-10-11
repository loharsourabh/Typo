import './Setup.css';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Setup() {
    const dfault = [
        `On the nineteenth of October Nahum staggered into Ammi's house with hideous news. The death had come to poor Thaddeus in his attic room, and it had come in a way which could not be told. Nahum had dug a grave in the railed family plot behind the farm, and had put therein what he found. There could have been nothing from outside, for the small barred window and locked door were intact; but it was much as it had been in the barn. Ammi and his wife consoled the stricken man as best they could, but shuddered as they did so. Stark terror seemed to cling round the Gardners and all they touched, and the very presence of one in the house was a breath from regions unnamed and unnamable. Ammi accompanied Nahum home with the greatest reluctance, and did what he might to calm the hysterical sobbing of little Merwin. Zenas needed no calming. He had come of late to do nothing but stare into space and obey what his father told him; and Ammi thought that his fate was very merciful. Now and then Merwin's screams were answered faintly from the attic, and in response to an inquiring look Nahum said that his wife was getting very feeble. When night approached, Ammi managed to get away; for not even friendship could make him stay in that spot when the glow of the vegetation began and the trees may or may not have swayed without wind. It was really lucky for Ammi that he was not more imaginative. Even as things were, his mind was bent ever so slightly; but had he been able to connect and reflect upon all the portents around him he must inevitably have turned a total maniac. In the twilight he hastened home, the screams of the mad woman and the nervous faint child ringing horrible in his ears. Three days later Nahum burst into Ammi's kitchen in the early morning, and in the absence of his host stammered out a desperate tale once more, while Mrs. Pierce listened in a clutching fright. It was little Merwin this time. He was gone. He had gone out late at night with a lantern and pail for water, and had never come back. He'd been going to pieces for days, and hardly knew what he was about. Screamed at everything. There had been a frantic shriek from the yard then, but before the father could get to the door the boy was gone. There was no glow from the lantern he had taken, and of the child himself no trace. At the time Nahum thought the lantern and pail were gone too; but when dawn came, and the man had plodded back from his all-night search of the woods and fields, he had found some very curious things near the well. There was a crushed and apparently somewhat melted mass of iron which had certainly been the lantern; while a bent pail and twisted iron hoops beside it, both half-fused, seemed to hint at the remnants of the pail. That was all. Nahum was past imagining, Mrs. Pierce was blank, and Ammi, when he had reached home and heard the tale, could give no guess. Merwin was gone, and there would be no use in telling the people around, who shunned all Gardners now. No use, either, in telling the city people at Arkham who laughed at everything. Thad was gone, and now Merwin was gone. Something was creeping and creeping and waiting to be seen and heard. Nahum would go soon, and he wanted Ammi to look after his wife and Zenas if they survived him. It must all be a judgment of some sort; though he could not fancy what for, since he had always walked uprightly in the Lord's ways so far as he knew.`,
        `When I glance over my notes and records of the Sherlock Holmes cases between the years '82 and '90, I am faced by so many which present strange and interesting features that it is no easy matter to know which to choose and which to leave. Some, however, have already gained publicity through the papers, and others have not offered a field for those peculiar qualities which my friend possessed in so high a degree, and which it is the object of these papers to illustrate. Some, too, have baffled his analytical skill, and would be, as narratives, beginnings without an ending, while others have been but partially cleared up, and have their explanations founded rather upon conjecture and surmise than on that absolute logical proof which was so dear to him. There is, however, one of these last which was so remarkable in its details and so startling in its results that I am tempted to give some account of it, in spite of the fact that there are points in connection with it which never have been, and probably never will be, entirely cleared up. The year '87 furnished us with a long series of cases of greater or less interest, of which I retain the records. Among my headings under this one twelve months I find an account of the adventure of the Paradol Chamber, of the Amateur Mendicant Society, who held a luxurious club in the lower vault of a furniture warehouse, of the facts connected with the loss of the British bark Sophy Anderson, of the singular adventures of the Grice Patersons in the island of Uffa, and finally of the Camberwell poisoning case. In the latter, as may be remembered, Sherlock Holmes was able, by winding up the dead man's watch, to prove that it had been wound up two hours before, and that therefore the deceased had gone to bed within that time, a deduction which was of the greatest importance in clearing up the case. All these I may sketch out at some future date, but none of them present such singular features as the strange train of circumstances which I have now taken up my pen to describe. It was in the latter days of September, and the equinoctial gales had set in with exceptional violence. All day the wind had screamed and the rain had beaten against the windows, so that even here in the heart of great, hand-made London we were forced to raise our minds for the instant from the routine of life, and to recognize the presence of those great elemental forces which shriek at mankind through the bars of his civilization, like untamed beasts in a cage. As evening drew in, the storm grew higher and louder, and the wind cried and sobbed like a child in the chimney. Sherlock Holmes sat moodily at one side of the fireplace cross-indexing his records of crime, while I at the other was deep in one of Clark Russell's fine sea-stories, until the howl of the gale from without seemed to blend with the text, and the splash of the rain to lengthen out into the long swash of the sea waves. My wife was on a visit to her mother's, and for a few days I was a dweller once more in my old quarters at Baker Street.`,
        `This story is of a time beyond the memory of man, before the beginning of history, a time when one might have walked dryshod from France (as we call it now) to England, and when a broad and sluggish Thames flowed through its marshes to meet its father Rhine, flowing through a wide and level country that is under water in these latter days, and which we know by the name of the North Sea. In that remote age the valley which runs along the foot of the Downs did not exist, and the south of Surrey was a range of hills, fir-clad on the middle slopes, and snow-capped for the better part of the year. The cores of its summits still remain as Leith Hill, and Pitch Hill, and Hindhead. On the lower slopes of the range, below the grassy spaces where the wild horses grazed, were forests of yew and sweet-chestnut and elm, and the thickets and dark places hid the grizzly bear and the hyena, and the grey apes clambered through the branches. And still lower amidst the woodland and marsh and open grass along the Wey did this little drama play itself out to the end that I have to tell. Fifty thousand years ago it was, fifty thousand years, if the reckoning of geologists is correct. And in those days the spring-time was as joyful as it is now, and sent the blood coursing in just the same fashion. The afternoon sky was blue with piled white clouds sailing through it, and the southwest wind came like a soft caress. The new-come swallows drove to and fro. The reaches of the river were spangled with white ranunculus, the marshy places were starred with lady's-smock and lit with marshmallow wherever the regiments of the sedges lowered their swords, and the northward moving hippopotami, shiny black monsters, sporting clumsily, came floundering and blundering through it all, rejoicing dimly and possessed with one clear idea, to splash the river muddy. Up the river and well in sight of the hippopotami, a number of little buff-coloured animals dabbled in the water. There was no fear, no rivalry, and no enmity between them and the hippopotami. As the great bulks came crashing through the reeds and smashed the mirror of the water into silvery splashes, these little creatures shouted and gesticulated with glee. It was the surest sign of high spring. "Boloo!" they cried. "Baayah. Boloo!" They were the children of the men folk, the smoke of whose encampment rose from the knoll at the river's bend. Wild-eyed youngsters they were, with matted hair and little broad-nosed impish faces, covered (as some children are covered even nowadays) with a delicate down of hair. They were narrow in the loins and long in the arms. And their ears had no lobes, and had little pointed tips, a thing that still, in rare instances, survives. Stark-naked vivid little gipsies, as active as monkeys and as full of chatter, though a little wanting in words. Their elders were hidden from the wallowing hippopotami by the crest of the knoll. The human squatting-place was a trampled area among the dead brown fronds of Royal Fern, through which the crosiers of this year's growth were unrolling to the light and warmth. The fire was a smouldering heap of char, light grey and black, replenished by the old women from time to time with brown leaves. Most of the men were asleep, they slept sitting with their foreheads on their knees. They had killed that morning a good quarry, enough for all, a deer that had been wounded by hunting dogs; so that there had been no quarrelling among them, and some of the women were still gnawing the bones that lay scattered about. Others were making a heap of leaves and sticks to feed Brother Fire when the darkness came again, that he might grow strong and tall therewith, and guard them against the beasts. And two were piling flints that they brought, an armful at a time, from the bend of the river where the children were at play. `,
    ];

    let saved_texts = JSON.parse(localStorage.getItem('texts'));

    // if saved_texts is not in expected form
    if (!(saved_texts &&
        JSON.stringify(dfault) === JSON.stringify(saved_texts.dfault) &&
        Array.isArray(saved_texts.custom) &&
        saved_texts.custom.every(val => typeof val === 'string'))) {

        localStorage.setItem('texts', JSON.stringify({dfault, custom: []}));
        saved_texts = JSON.parse(localStorage.getItem('texts'));
    }

    // console.log(JSON.stringify(dfault) === JSON.stringify(saved_texts.dfault))
    // console.log(JSON.stringify(dfault));

    // if (saved_texts === null) {
    //     localStorage.setItem('texts', JSON.stringify({dfault, custom: []}));
    //     saved_texts = JSON.parse(localStorage.getItem('texts'));
    // }

    const [text, set_text] = useState(() => localStorage.getItem('text_pref') || 'dfault0');
    const [user_text, set_user_text] = useState('');
    const [duration, set_duration] = useState('60');
    const [custom_duration, set_custom_duration] = useState(() => localStorage.getItem('duration_pref') || '');
    const [delete_texts, set_delete_texts] = useState(false); // to delete custom texts
    const history = useHistory();

    function update_duration(event) {
        if (custom_duration) {
            set_custom_duration('');
        }

        set_duration(event.target.value);
    }

    function update_custom_duration(event) {
        const value = event.target.value;

        if (value.match(/^\d*$/)) { // will match empty string also, which is needed
            set_custom_duration(value);
        }
    }

    function navigate_to_typing(event) {
        let test_text = text;
        let test_duration = custom_duration || duration;

        if (user_text || delete_texts) {
            const texts = saved_texts;
            const custom = texts.custom; // reference of texts.custom array

            if (delete_texts) {
                custom.splice(0); // remove all elements
            }

            if (user_text) {
                if (!custom.includes(user_text)) { // no need to add the same text twice
                    custom.push(user_text);
                }

                test_text = `custom${custom.length - 1}`;
            }

            localStorage.setItem('texts', JSON.stringify(texts));
        }

        // saving preferences to localStorage
        localStorage.setItem('text_pref', test_text);
        localStorage.setItem('duration_pref', test_duration);

        history.push(`/${test_text}/${test_duration}`);
    }

    return (
        <div className='setup'>
            <div className='parent'>
                <h1 className='heading'>Check your typing speed</h1>
                <div className='text_parent'>
                    <label className='select_label first'>
                        Text
                        <select
                            value={text}    
                            onChange={event => {set_text(event.target.value)}}
                        >
                            <optgroup label='Default texts'>
                                {saved_texts.dfault.map((v, i) => (
                                    <option
                                        key={i}
                                        value={`dfault${i}`}
                                    >
                                        {v.slice(0, 17)}...
                                    </option>
                                ))}
                            </optgroup>

                            {saved_texts.custom.length > 0 && (
                                <optgroup label='Your texts'>
                                    {saved_texts.custom.map((v, i) => (
                                        <option
                                            key={i}
                                            value={`custom${i}`}
                                        >
                                            {v.slice(0, 17)}...
                                        </option>
                                    ))}
                                </optgroup>
                            )}
                        </select>
                    </label>

                    <textarea
                        className='custom_input'
                        placeholder='Custom text'
                        spellCheck='false'
                        value={user_text}
                        onChange={event => {set_user_text(event.target.value)}}
                    ></textarea>
                </div>

                <div className='time_parent'>
                    <label className='select_label'>
                        Test duration
                        <select
                            value={duration}
                            onChange={update_duration}
                        >
                            <option value='60'>1 minute</option>
                            <option value='120'>2 minutes</option>
                            <option value='180'>3 minutes</option>
                            <option value='240'>4 minutes</option>
                            <option value='300'>5 minutes</option>
                        </select>
                    </label>

                    <input
                        className='custom_input'
                        placeholder='Custom duration in seconds'
                        value={custom_duration}
                        onChange={update_custom_duration}
                    />  
                </div>

                <label className='delete_checkbox'>
                    <input
                        type='checkbox'
                        checked={delete_texts}
                        onChange={event => {set_delete_texts(event.target.checked)}}
                    />
                    Delete all custom texts
                </label>

                <button
                    className='start_button'
                    onClick={navigate_to_typing}
                >Start test</button>
            </div>
        </div>
    );
}

export default Setup;