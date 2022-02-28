import { InMemoryDbService } from "angular-in-memory-web-api";
import { RequestInfo } from "angular-in-memory-web-api/interfaces";

export class MyInMemoryService implements InMemoryDbService {
  createDb() {
  
    const adverts = [
      {
        id: 3,
        userId: 2,
        title: "2 Bedroom Apartment (Mock API)",
        province: "Gauteng",
        city: "Johannesburg",
        details:
          "2 bedrooms with the main leading out to garden with french doors, unit has a beautiful full bathroom. Generous sized living area open plan lounge/ dining and kitchen with sliding doors leading out on to the private  garden and covered patio area. Complex offers tennis court 3 pools active club house fiber and 24 hour security, access control, Douglasdale village shopping center a walk away.",
        price: 940000,
        status: "Live",
      },
      {
        id: 1,
        userId: 1,
        title: "3 Bedroom House (Mock API)",
        province: "Gauteng",
        city: "Johannesburg",
        details:
          "Enjoy the warm and inviting family lifestyle of this popular complex where mothers meet and enjoy a glass of wine, whilst the children play and ride their bikes in the street. 3/4 sunlit bedrooms with wood laminated floors (main bedroom with air-conditioner), 2 full modern bathrooms with blinds (main with double vanities). Functional modern, open plan kitchen with granite tops, scullery and lots of storage.",
        price: 2400000,
        status: "Live",
      },
      {
        id: 2,
        userId: 1,
        title: "2 Bedroom House (Mock API)",
        province: "Gauteng",
        city: "Pretoria",
        details:
          "The property has a generous floor space of 91m2, your open plan kitchen with plenty of granite counter top and cupboard space will cater for the aspiring cook. The kitchen is open plan, leading into the generous living area, which flows seamlessly onto the private covered patio. The well sized bedrooms have been lovingly maintained, the main bedroom is en-suite with a shower, and the second bedroom is serviced by the second bathroom with bath and overhead shower. This unit provides 2 carports, one covered and one open, and the added benefits of what the lifestyle estate offers, swimming pool, clubhouse, tennis courts, 24 hour security, manicured communal gardens, ample visitors parking, and so much more. It really is a must view.",
        price: 1300000,
        status: "Hidden",
      },
      
    ];


    const cities = [
      { name: "Johannesburg", province: "Gauteng"},
      { name: "Pretoria", province: "Gauteng"},
      { name: "Port Elizabeth", province: "Eastern Cape"},
      { name: "East London", province: "Eastern Cape"},
      { name: "Cape Town", province: "Western Cape"},
      { name: "Jeffries Bay", province: "Western Cape"},
      { name: "Kimberley", province: "Northern Cape"},
      { name: "Upington", province: "Northern Cape"},
      { name: "Bloemfontein", province: "Free State"},
      { name: "Welkom", province: "Free State"},
      { name: "Mahikeng", province: "North West"},
      { name: "Klerksdop", province: "North West"},
      { name: "Polokwane", province: "Limpopo"},
      { name: "Mokopane", province: "Limpopo"},
      { name: "Mbombela", province: "Mpumalanga"},
      { name: "Hazyview", province: "Mpumalanga"},
      { name: "Durban", province: "Kwazulu-Natal"},
      { name: "Pietermaritzburg", province: "Kwazulu-Natal"}
    ];

    return { adverts, cities };
  }
}
