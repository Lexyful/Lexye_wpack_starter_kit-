import { expect } from 'chai';
import {customers, room, bookings} from './sampleData'
import Room from '../src/classes/Room';
import Rooms from '../src/classes/Rooms';



describe('Room', () => {
  let room1;
  let room2;
 
beforeEach(() => {
  room1 = new Room(room[0])
  room2 = new Room(room[1])
});


  it('should be a function', () => {
      expect(Room).to.be.a('function');
  })

  it('should be an instance of Room', () => {
      expect(room1).to.be.an.instanceof(Room);
      expect(room2).to.be.an.instanceof(Room);
  })


    it('should have a room', () => {
     expect(room1.number).to.equal(2);
      expect(room2.number).to.equal(3);
    
  });

  it('should check if the room has a bidet',  () => {
  expect(room1.bidet).to.equal(false);
  expect(room2.bidet).to.equal(true);
    });

  it('should check if the room has a bidet',  () => {
    expect(room1.bidet).to.equal(false);
    expect(room2.bidet).to.equal(true);
        });
  
  it('should check if the room has a bedSize',  () => {
        expect(room1.bedSize).to.equal('full');
      
    });
  it('should how many beds in the room',  () => {
    expect(room1.numBeds).to.equal(2);
        
    });
    it('should check if the room has a bedSize',  () => {
      expect(room1.costPerNight).to.equal(477.38);
    
       });
  })
  
 