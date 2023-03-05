class Rooms {
  constructor(rooms){
    this.rooms = rooms
   
  }

  getAvailableRooms(bookedRoomNumbers){
    return this.rooms.filter(room => !bookedRoomNumbers.includes(room.number))
  } 

}

export default Rooms