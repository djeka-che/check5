import React, {useState} from 'react';

function Detective(props) {
    const [sherlock, setSherlock] = useState({name: 'психопат'})
    const handleClick = setSherlock => {setSherlock ({name: 'высокоактивный социопат'})}
    return (
        <div>
            <div>
                Шерлок - {sherlock.name}
            </div>
            <div>
                <button onClick={() => handleClick(setSherlock)}>
                    Узнать правду
                </button>
            </div>
        </div>
    );
}

export default Detective;