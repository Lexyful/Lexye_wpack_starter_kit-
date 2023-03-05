class Rooms {
  constructor(rooms){
    this.rooms = rooms
    // this.available =[]
   
  }
  getAvailableRooms(bookedRoomNumbers){
    return this.rooms.filter(room => !bookedRoomNumbers.includes(room.number))
  } 
  getAvailableRoomsByType(bookedRoomTypes){
    console.log('hi',bookedRoomTypes)
    return this.rooms.filter(room => !bookedRoomTypes.includes(room.type))
  }

}

export default Rooms