import React from 'react';

function AstroList(props) {

    const seen = (celestialObject) => {
        props.update({ ...celestialObject, seen: !celestialObject.seen });
    }

    const imaged = (celestialObject) => {
        if (celestialObject.imageURL === '' && celestialObject.imaged === false) {
            const imageLink = prompt('Add image URL')
            if (imageLink === '') {
                props.update({ ...celestialObject, imaged: !celestialObject.imaged })
            } else { 
                props.update({ ...celestialObject, imaged: !celestialObject.imaged, imageURL: imageLink }) 
            }
        } else {
            props.update({ ...celestialObject, imaged: !celestialObject.imaged }
            )
        }
    }

    let filteredCO = props.listType === 'celestial objects' ? props.celestialObjects : props.celestialObjects.filter((co) => co.category === props.listType);

    return (
        <ul className='COList'>
            {filteredCO.map((obj) => {
                return (
                    <li key={obj.name}>
                        <div className='COWrapper'>
                            <div className='COStats'>
                                <p>{obj.name}  {obj.seen ? '☑️  Observed ' : null}  {obj.imaged ? '☑️  Imaged ' : null}</p>
                            </div>
                            <div className='buttons'>
                                <button onClick={() => seen(obj)}>{obj.seen ? 'Unsee' : 'Seen it!'}</button>
                                <button onClick={() => imaged(obj)}>{obj.imaged ? 'I have not imaged' : 'I have imaged'}</button>
                                <button onClick={() => { props.deleteCO(obj.name) }}>Delete</button>
                                <button className='editButton'>✎ edit</button>
                            </div>
                            {obj.imaged && obj.imageURL && <img src={obj.imageURL} alt={obj.name}></img>}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default AstroList;