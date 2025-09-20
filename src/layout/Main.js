import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import { fetchAPI } from '../api';

import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';

import { BookingContext } from "../context/BookingContext";
import ConfirmedBooking from '../components/ConfirmedBooking';

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    function initializeTimes() {
        return fetchAPI(new Date());
    }

    function updateTimes(state, action) {
        const selectedDate = new Date(action);  // ottieni la data dall'azione
        const availableTimes = fetchAPI(selectedDate);  // chiama la funzione API
        return availableTimes;
    }

    return (
        <BookingContext.Provider value={{ availableTimes, dispatch }}>
            <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/confirmation" element={<ConfirmedBooking />} />
                </Routes>
            </main>
        </BookingContext.Provider>
    )
}

export default Main;