import { createContext, useState, useContext } from "react";

// sử dụng context API để lấy thông tin đơn 
const BookingContext = createContext();

export function BookingProvider({ children }) {
    const [bookedTours, setBookedTours] = useState([]);

    // Hàm đặt tour mới
    const bookTour = (tour) => {
        setBookedTours((prevTours) => [...prevTours, tour]);
    };

    return (
        <BookingContext.Provider value={{ bookedTours, bookTour }}>
            {children}
        </BookingContext.Provider>
    );
}

// Hook để sử dụng context
export function useBooking() {
    return useContext(BookingContext);
}