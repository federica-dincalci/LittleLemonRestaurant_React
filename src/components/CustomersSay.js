import TestimonialsCard from "./TestimonialsCard";

const CustomersSay = () => {
    const testimonials = [
        {
            rating: '9/10',
            img: '../img/placeholder.png',
            name: 'Anna',
            comment: "Lorem ipsum."
        },
        {
            rating: '10/10',
            img: '../img/placeholder.png',
            name: 'Alen',
            comment: "Lorem ipsum."
        },
        {
            rating: '8.5/10',
            img: '../img/placeholder.png',
            name: 'John',
            comment: "Lorem ipsum."
        },
        {
            rating: '9/10',
            img: '../img/placeholder.png',
            name: 'Sophia',
            comment: "Lorem ipsum."
        },
    ]

    return (
        <div className="customerssay col-12">
            <div className="row">
                <div className="col-12">
                    <h1>Testimonials</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    {testimonials.map(m => {
                        return(
                            <TestimonialsCard 
                                rating={m.rating}
                                img={m.img}
                                name={m.name}
                                comment={m.comment}
                                key={m.name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default CustomersSay;