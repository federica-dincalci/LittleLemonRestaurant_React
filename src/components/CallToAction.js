import image from '../img/restauranfood.jpg'

const CallToAction = () => {
    return (
        <div className="calltoaction col-12 d-flex">
            <div className="row">
                <div className="col-6">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
                    <button type="button" className="btnReserve">Reserve a table</button>
                </div>
                <div className="col-6">
                    <img src={image} alt="Chef"></img>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;