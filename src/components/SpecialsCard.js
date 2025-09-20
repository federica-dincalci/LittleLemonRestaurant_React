const SpecialsCard = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.title}></img>
            <div className="col-12">
                <div className="row">
                    <div className="col-8">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="col-4">
                        <h4>{props.price}</h4>
                    </div>
                </div>
            </div>
            <p>{props.description}</p>
            <p><strong>Order a delivery</strong></p>
        </div>
    )
}

export default SpecialsCard;