import BookingForm from "../components/BookingForm";

const BookingPage = () => {
    return (
        <>
            <div className="bookingpage">
                <div className="bookingtitle d-flex align-items-center">
                    <h1>Reserve a table</h1>
                </div>
                <div className="card d-flex justify-content-center">
                    <BookingForm />
                </div>
            </div>
        </>
    )
}

export default BookingPage;