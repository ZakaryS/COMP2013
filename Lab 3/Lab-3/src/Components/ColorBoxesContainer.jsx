import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({colours}){
    return (
        <div className="ColorBoxesContainer">
            {Array.from({length:25}).map((_, index) => (
                <ColorBox key={index} colour={colours[index]}/>
            ))}
        </div>
    );
}