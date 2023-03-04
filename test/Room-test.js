import { expect } from 'chai';
import {customers, rooms, bookings} from './sampleData'
import Rooms from '../src/classes/Room';




describe('Rooms', () => {
  let rooms1;
  let rooms2;
 
beforeEach(() => {
  rooms1 = new Rooms(rooms[0])
  rooms2 = new Rooms(rooms[1])
});
})

//   it('should be a function', () => {
//       expect(Room).to.be.a('function');
//   })

//   it('should be an instance of rooms', () => {
//       expect(rooms).to.be.an.instanceof(Room);
//   })
//   it('should have an id', () => {
//     customerSampleData.forEach(customer => {
//       expect(room).to.have.property('id');
//     });
//   });
// });