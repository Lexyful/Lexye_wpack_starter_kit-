const customers = [

  {
    id: 1,
    name: "Bri B"
},
{
    id: 2,
    name: "Bea O"
},
{
    id: 3,
    name: "Madi Perkins"
},


]

const room = [
  
    {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38
    },
    {
        number: 3,
        roomType: "single room",
        bidet: true,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14
    },
    {
        number: 14,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 577.38
    },
]

const bookingRepository = [ 
{
    id: "5fwrgu4i7k55hl6t9",
    userID: 1,
    date: "2023/12/14",
    roomNumber: 14
},
{
    id: "5fwrgu4i7k55hl6ta",
    userID: 2,
    date: "2022/01/11",
    roomNumber: 9
},]



export{customers, room, bookingRepository}