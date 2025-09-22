import Colour from "./Colour"
export default function Card(props) {
    return <div>
        <img className="card-img" src={props.Image} alt="" width="50px"/>
        <p className="card-country"><b>{props.Country}</b></p>
        <p className="card-hotel"><b>{props.Hotel}</b></p>
        <p className="card-rating" style={{color: Colour(props.Rating)}}>{props.Rating} ★</p>
        <p className="card-price">${props.Price}/night</p>
    </div>;
}