export const roomFilter = (roomList: Room[]): Room[] => roomList.filter((room: Room) => room.name.includes('Berlin'));
