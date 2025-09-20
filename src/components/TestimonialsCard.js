const TestimonialsCard = (props) => {
    return(
        <div className="card col-4">
            <h3>{props.rating}</h3>
            <div className="col-12">
                <div className="row">
                    <div className="col-5">
                        <img src={props.img} alt={props.name}></img>
                    </div>
                    <div className="col-7">
                        <h4>{props.name}</h4>
                    </div>
                </div>
            </div>
            <p>{props.comment}</p>
        </div>
    );
}

export default TestimonialsCard;