import { useState, useContext } from 'react';
import { BookingContext } from "../context/BookingContext";
import { submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const { availableTimes, dispatch } = useContext(BookingContext);

    const [date, setDate] = useState("");
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Select occasion");

    const navigate = useNavigate();

    function handleDate(e) {
        setDate(e.target.value);
        dispatch(e.target.value);
    }

    const isFormValid = () => {
        const selectedDate = new Date(date);
        const today = new Date();
        return (
            date !== "" &&
            selectedDate >= today &&
            time !== "" &&
            guests >= 1 && guests <= 10 &&
            occasion !== "Select occasion"
        );
    };

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion,
        };
        submitAPI(formData);
        navigate('/confirmation');
    }

    return (
        <form className="bookingform">
            <label className="form-label" htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                className="form-control"
                onChange={handleDate}
                required
                aria-label="Choose reservation date"
            />

            <label className="form-label" htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                className="form-control"
                onChange={(e) => setTime(e.target.value)}
                required
                aria-label="Choose reservation time"
            >
                {availableTimes.map(m => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </select>

            <label className="form-label" htmlFor="guests">Number of guests</label>
            <input
                type="number"
                className="form-control"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                aria-label="Number of guests"
            />

            <label className="form-label" htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                className="form-control"
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-label="Select occasion"
            >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input
                className="btnSubmit"
                type="submit"
                value="Make your reservation"
                onClick={handleSubmit}
                disabled={!isFormValid()}
                aria-label="On Click"
            />
        </form>
    )
}

export default BookingForm;