import{test, expect} from '@playwright/test';
import { BookingClient } from '../api/clientes/BookingClient';
import { bookingPayload } from '../api/payload/Booking.payload';

test('criar reserva com sucesso', async ({request}) => {
  const bookingClient = new BookingClient(request);

    const response = await bookingClient
    .criarReserva(bookingPayload);

expect(response.status()).toBe(200);
const responseBody = await response.json();
    expect(responseBody.booking.firstname)
        .toBe('Jobson');
});

// arquivo teste PR