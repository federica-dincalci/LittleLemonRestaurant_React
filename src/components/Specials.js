import SpecialsCard from './SpecialsCard';

const Specials = () => {
    const specials = [
        {
            img: '../img/greeksalad.jpg',
            title: 'Greek Salad',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$12.99'
        },
        {
            img: '../img/bruschetta.jpg',
            title: 'Bruschetta',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$7.99'
        },
        {
            img: '../img/lemondessert.jpg',
            title: 'Lemon Dessert',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$5.99'
        }
    ];

    return (
        <div className="specials col-12">
            <div className="row">
                <div className="col-7">
                    <h2>This week's specials!</h2>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <button type="button" className="btnSpecials">Online Menu</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    {specials.map(m => {
                        return (
                                <SpecialsCard
                                    img={m.img}
                                    title={m.title}
                                    description={m.description}
                                    price={m.price}
                                    key={m.title}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Specials;