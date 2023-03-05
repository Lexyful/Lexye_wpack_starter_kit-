class Rooms {
  constructor(rooms){
    this.rooms = rooms
    this.availableRooms =[]
   
  }
  getAvailableRooms(bookedRoomNumbers){
   return this.availableRooms = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number))
  } 
  getAvailableRoomsByType(bookedRoomType){
    console.log('hi',bookedRoomType)
    if(bookedRoomType === 'all rooms'){
      return this.availableRooms
    }
    return this.availableRooms.filter(room => bookedRoomType === room.roomType) 
  }

}

export default Rooms