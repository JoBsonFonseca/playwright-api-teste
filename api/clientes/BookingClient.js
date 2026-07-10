export class BookingClient {

    constructor(request) {
        this.request = request;
        this.baseUrl = "https://restful-booker.herokuapp.com";
    }

    async criarReserva(payload) {

        return await this.request.post(
            `${this.baseUrl}/booking`,
            {
                data: payload
            }
        );

    }
     async buscarReservas(id) {
        return await this.request.get(
            `${this.baseUrl}/booking/${id}`
        );
    }
}