class Rooms {
  constructor(rooms){
    this.rooms = rooms
    this.availableRooms =[]
   
  }
  getAvailableRooms(bookedRoomNumbers){
   this.availableRooms = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number))
  } 
  getAvailableRoomsByType(bookedRoomType){
  
    if(bookedRoomType === 'all rooms'){
      return this.availableRooms
    }
    return this.availableRooms.filter(room => bookedRoomType === room.roomType) 
  }

}

export default Rooms