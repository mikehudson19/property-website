import { InMemoryDbService } from "angular-in-memory-web-api";
import { RequestInfo } from "angular-in-memory-web-api/interfaces";

export class MyInMemoryService implements InMemoryDbService {
  createDb() {
  
    const adverts = [
      {
        id: 3,
        userId: 2,
        title: "2 Bedroom Apartment",
        province: "Western Cape",
        city: "Jeffries Bay",
        details:
          "2 bedrooms with the main leading out to garden with french doors, unit has a beautiful full bathroom. Generous sized living area open plan lounge/ dining and kitchen with sliding doors leading out on to the private  garden and covered patio area. Complex offers tennis court 3 pools active club house fiber and 24 hour security, access control, Douglasdale village shopping center a walk away.<br><br> The unit comes with one covered parking with plenty of visitors parking for your guests. Complex has 24 hour security and a beautiful pool area with braai facilities for those hot summer days. <br><br> This is a ground floor apartment, parking is close to the unit one is covered and second one is not. In a well maintained complex, which is close to schools, shops and transport. Apartment has modern finishes. Unit is fibre ready. Kitchen has space for two under counter appliances. Main bathroom has a shower. The second bathroom has a shower and separate bath. Complex has play areas for the kids. Easy access to the highway to get to work.",
        price: 940000,
        status: "Live",
        bedrooms: 2,
        bathrooms: 2,
        parkingSpaces: 1,
        images: [
          '../../../assets/headline-image.jpg',
          '../../../assets/image-1.jpg',
          '../../../assets/image-2.jpg',
          '../../../assets/image-3.jpg',
          '../../../assets/image-4.jpg',
          '../../../assets/image-5.jpg',
        ],
        headlineImage: '../../../assets/image-1.jpg'
      
      },
      {
        id: 1,
        userId: 1,
        title: "3 Bedroom House",
        province: "Gauteng",
        city: "Johannesburg",
        details:
          "Enjoy the warm and inviting viking family lifestyle of this popular complex where mothers meet and enjoy a glass of wine, whilst the children play and ride their bikes in the street. 3/4 sunlit bedrooms with wood laminated floors (main bedroom with air-conditioner), 2 full modern bathrooms with blinds (main with double vanities). Functional modern, open plan kitchen with granite tops, scullery and lots of storage.",
        price: 2400000,
        status: "Live",
        bedrooms: 3,
        bathrooms: 2,
        parkingSpaces: 2,
        images: [
          '../../../assets/headline-image.jpg',
          '../../../assets/image-1.jpg',
          '../../../assets/image-2.jpg',
          '../../../assets/image-3.jpg',
          '../../../assets/image-4.jpg',
          '../../../assets/image-5.jpg',
        ],
        headlineImage: '../../../assets/image-2.jpg'
      
      },
      {
        id: 2,
        userId: 1,
        title: "2 Bedroom House",
        province: "Gauteng",
        city: "Johannesburg",
        details:
          "The property has a generous novik floor space of 91m2, your open plan kitchen with plenty of granite counter top and cupboard space will cater for the aspiring cook. The kitchen is open plan, leading into the generous living area, which flows seamlessly onto the private covered patio. The well sized bedrooms have been lovingly maintained, the main bedroom is en-suite with a shower, and the second bedroom is serviced by the second bathroom with bath and overhead shower. This unit provides 2 carports, one covered and one open, and the added benefits of what the lifestyle estate offers, swimming pool, clubhouse, tennis courts, 24 hour security, manicured communal gardens, ample visitors parking, and so much more. It really is a must view.",
        price: 1300000,
        status: "Live",
        bedrooms: 2,
        bathrooms: 1,
        parkingSpaces: 2,
        images: [
          '../../../assets/headline-image.jpg',
          '../../../assets/image-1.jpg',
          '../../../assets/image-2.jpg',
          '../../../assets/image-3.jpg',
          '../../../assets/image-4.jpg',
          '../../../assets/image-5.jpg',
        ],
        headlineImage: '../../../assets/image-5.jpg' 
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
