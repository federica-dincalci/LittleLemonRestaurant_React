const ConfirmedBooking = () => {
    const style = {
        height: "350px",
        marginTop: "50px"
    }
    return(
        <>
            <div className="bookingpage">
                <div className="bookingtitle d-flex align-items-center">
                    <h1>Reserve a table</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <h2 style={style}>Thank you for your booking!</h2>
                </div>
            </div>
        </>
    );
}

export default ConfirmedBooking;