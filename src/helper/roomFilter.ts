export const roomFilter = (roomList: Room[]) =>
  roomList.filter((room: Room) => {
    if (room.name.includes('Berlin')) {
      return room;
    }
  });
