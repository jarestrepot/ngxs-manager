import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Person, PersonsResponse } from '../model/person';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {

  // Datos
  public peopleMock: PersonsResponse =
    {
      msg: "All results found for users",
      success: true,
      status: 200,
      data: [
        {
          createdAt: new Date("2024-07-22T22:18:09.127Z"),
          updatedAt: new Date("2024-07-22T22:18:09.127Z"),
          "id": "8bcb364d-cc39-434a-894c-37c7165105fb",
          "nick_name": "Alzatica",
          "name": "Valentina",
          "password": "$2b$12$Wwe/9cTuhpeoi9gxp96q2uvNrVyK79u7CPPLtY8Ye4szmls9Q3HbS",
          "surname": "Andres",
          "secondSurname": "Restrepo",
          "email": "cuentica76@gmail.com",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhiY2IzNjRkLWNjMzktNDM0YS04OTRjLTM3YzcxNjUxMDVmYiIsImVtYWlsIjoiY3VlbnRpY2E3NkBnbWFpbC5jb20iLCJuYW1lIjoiSmF2aWVyIiwiaWF0IjoxNzIxODM3MDg1LCJleHAiOjE3MjE5MjM0ODV9.W5c1Wt3AMUMXT3hGn-BOhcl-4n53dpTsc0LeuTl1eYw",
          "address": {
            createdAt: new Date("2024-07-22T22:18:09.033Z"),
            updatedAt: new Date("2024-07-22T22:18:09.033Z"),
            "id": "d54612c4-5c64-4c98-a3e4-ba570a2c8338",
            "post_code": 8901,
            "street": "Riera blanca",
            "number_street": 199,
            "apartment": "Bajos 3",
            "city": {
              createdAt: new Date("2024-07-22T10:05:06.589Z"),
              updatedAt: new Date("2024-07-22T10:05:06.589Z"),
              "id": 7,
              "name": "San Antonio",
              "country": {
                createdAt: new Date("2024-07-22T10:05:06.554Z"),
                updatedAt: new Date("2024-07-22T10:05:06.554Z"),
                "id": "11111111-1111-1111-1111-111111111111",
                "name": "United States"
              }
            }
          }
        },
        {
          createdAt: new Date("2024-07-23T10:49:57.847Z"),
          updatedAt: new Date("2024-07-23T10:49:57.847Z"),
          "id": "988f0893-703c-4151-b4c4-2c429fd5dff4",
          "nick_name": "JavierRestrepo2",
          "name": "Javier",
          "password": "$2b$12$b904SxxwijhO6ZC.97IaYOrLJxNYwA7JagfnX3VnmFG0Vx3jxBuR.",
          "surname": "Andres",
          "secondSurname": "Restrepo",
          "email": "javier.restrepo@sdweb.es",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4OGYwODkzLTcwM2MtNDE1MS1iNGM0LTJjNDI5ZmQ1ZGZmNCIsImVtYWlsIjoiamF2aWVyLnJlc3RyZXBvQHNkd2ViLmVzIiwibmFtZSI6IkphdmllciIsImlhdCI6MTcyMTg0MDE3MywiZXhwIjoxNzIxOTI2NTczfQ.siV_zEVdWVpjOekvA-8OQJMyQP3rNQjVdF6edU3Ti3A",
          "address": {
            createdAt: new Date("2024-07-23T10:49:57.775Z"),
            updatedAt: new Date("2024-07-23T10:49:57.775Z"),
            "id": "b27178ee-fec9-4d44-bd69-d8b759ec6d29",
            "post_code": 8900,
            "street": "Calle Angel Guimnera",
            "number_street": 121,
            "apartment": "Bajos 1",
            "city": {
              createdAt: new Date("2024-07-22T10:05:06.589Z"),
              updatedAt: new Date("2024-07-22T10:05:06.589Z"),
              "id": 51,
              "name": "Bareclona",
              "country": {
                createdAt: new Date("2024-07-22T10:05:06.554Z"),
                updatedAt: new Date("2024-07-22T10:05:06.554Z"),
                "id": "112083-2ptddfjml44km-sjdo",
                "name": "España"
              }
            }
          }
        }
      ]
  };

  constructor(private http: HttpClient) { }


  fetchPeople(): Observable<Person[]> {
    return this.http.get<PersonsResponse>('http://localhost:3001/user/users')
      .pipe(
        map( (personResponse) => personResponse.data )
      )

  }

}
