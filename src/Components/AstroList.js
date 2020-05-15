import React from 'react';

function AstroList(props) {
    console.log(props)

    const seen = (celestialObject) => {
        props.update({ ...celestialObject, seen: !celestialObject.seen});
    }

    const imaged = (celestialObject) => {
        props.update({...celestialObject, imaged: !celestialObject.imaged});
    }

    return (
        <ul>
            {props.celestialObjects.map((obj) => {
                return (
                    <li key={obj.name}>
                        <p>{obj.name}</p>
                        <p>Category: {obj.category}</p>
                        <p>{obj.seen ? 'Seen' : 'Unseen'}</p>
                        <button onClick={() => seen(obj)}>{obj.seen ? 'Unsee' : 'Seen it!'}</button>
                        <button onClick={() => imaged(obj)}>{obj.imaged ? 'I have not imaged' : 'I have imaged'}</button>
                        {obj.imaged && obj.imageURL && <img src={obj.imageURL} alt='Andromeda'></img>}
                    </li>
                )
            })}
        </ul>
    )
}

export default AstroList;