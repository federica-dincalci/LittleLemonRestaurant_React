import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import BookingProvider from "../context/BookingContext"; // Assicurati di importare il Provider

test('Choose date label in BookingForm', () => {
    render(<BookingProvider><BookingForm /></BookingProvider>);

    // Verifica che il testo statico sia nel DOM
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});
