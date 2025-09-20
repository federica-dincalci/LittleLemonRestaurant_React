import image from '../img/Mario and Adrian A.jpg'

const Chicago = () => {
    return (
        <div className="chicago col-12 d-flex justify-content-center">
            <div className="card">
                <div className="row">
                    <div className="col-6">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <img src={image} alt="Mario and Adrian" width="400px"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chicago;