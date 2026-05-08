// @ts-check
import { test, expect } from '@playwright/test';
    var tokenRecebido

test('consultar reservas cadastradas', async ({ request }) => {
    const response = await request.get('/booking/');
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('consultar reservas cadastradas com id', async ({ request }) => {
    const response = await request.get('/booking/1570');

    const jsonBody = await response.json();
    expect(response.status()).toBe(200);
    expect(jsonBody.firstname).toBe('Jobson')
    expect(jsonBody.lastname).toBe('Fonseca')
    expect(jsonBody.totalprice).toBe(111)
    expect(jsonBody.bookingdates.checkin).toBe("2018-01-01")
    expect(jsonBody.bookingdates.checkout).toBe("2019-01-01")
    expect(jsonBody.additionalneeds).toBe("Breakfast")
    //vericando a respost da API 
    expect(response.ok()).toBeTruthy()
});

test('consultar as propriedas da id', async ({ request }) => {
    const response = await request.get('/booking/1570');

    const jsonBody = await response.json();
    expect(jsonBody).toHaveProperty('firstname')
    expect(jsonBody).toHaveProperty('lastname')
    expect(jsonBody).toHaveProperty('totalprice')
    expect(jsonBody).toHaveProperty('bookingdates')
    expect(jsonBody).toHaveProperty('additionalneeds')

    //vericando a respost da API 
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200);
});

test('cadastrar reserva', async ({ request }) => {
    const response = await request.post('/booking', {
        data: {
            "firstname": "Jobs",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-25",
                "checkout": "2019-01-26"
            },
            "additionalneeds": "Breakfast"
        }
     }
    );
    console.log(await response.json());
    //vericando a respost da API 
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200);
    //Verifando resposta request
    const responseBody = await response.json()
expect(responseBody.booking).toHaveProperty("firstname","Jobs")
expect(responseBody.booking).toHaveProperty("lastname","Brown")
expect(responseBody.booking).toHaveProperty("totalprice",111)
expect(responseBody.booking).toHaveProperty("depositpaid",true)
})

test('criar token e atualizar reserva', async ({ request }) => {
  // Criando token
  const response = await request.post('/auth', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  const tokenRecebido = responseBody.token;

  console.log("Seu token é: " + tokenRecebido);

  // Atualizando reserva
  const ParcialReservaUpdate = await request.patch('/booking/12', {
headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Cookie': `token=${tokenRecebido}`
},
data: {
  firstname: "James",
  lastname: "Brow",
  totalprice: 111
}
});

  console.log(await ParcialReservaUpdate.json());
  expect(ParcialReservaUpdate.ok()).toBeTruthy();
  expect(ParcialReservaUpdate.status()).toBe(200);

  const parcialUpdateRespondeBody = await ParcialReservaUpdate.json()
  
  expect(parcialUpdateRespondeBody).toHaveProperty("firstname","James")
  expect(parcialUpdateRespondeBody).toHaveProperty("lastname","Brow")
  expect(parcialUpdateRespondeBody).toHaveProperty("totalprice",111)
});