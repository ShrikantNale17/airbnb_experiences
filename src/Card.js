export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (

        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg} alt="" className="card-img"></img>
            <p><img src="star.png" alt="" className="star-icon"></img>{props.stats.rating}<span className="review-count">({props.stats.reviewCount}).{props.location}</span></p>
            <p className="card-title">{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>

    )
}