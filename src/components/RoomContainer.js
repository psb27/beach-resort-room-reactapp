import React from 'react';
import RoomsFilter from "./RoomFilter";
import RoomList from "./RoomList";
//import { RoomConsumer } from "../Context";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

//Using Higher Order Component
function RoomContainer({ context }) {
    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading />;
    }
    return (
        <>
        <RoomsFilter rooms={rooms} />
       <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);


/*const RoomContainer = () => {
    return (
        <>
        <RoomConsumer>
            {
                (value) => {
                


    const {loading, sortedRomms, rooms} = value;
                    if(loading){
                        return <Loading />;
                    }
                    return (
                        <div>
                        <RoomsFilter rooms={rooms} />
                        { <RoomList rooms={sortedRomms} />
                        </div>
                    );
                }
            }
        </RoomConsumer>
        </>
    );

}

export default RoomContainer }*/
