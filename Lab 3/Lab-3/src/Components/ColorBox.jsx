import { useState } from 'react';
import colors from '../data/data.js';

export default function ColorBox({colour}) {
    const [color, setColor] = useState(colour);

    return (<div className="ColorBox" style={{backgroundColor: color}} onClick={() => {
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }}></div>);
}