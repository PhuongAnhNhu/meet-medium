export const getRoomListDashboard = (roomList: Room[], meetingTimeSuggestions: MeetingTimeSuggestion[]) => {
  const data = roomList.map((room) => {
    const timeslot = [];
    for (let i = 0; i < meetingTimeSuggestions.length; i++) {
      for (let j = 0; j < meetingTimeSuggestions[i].locations.length; j++) {
        const address = meetingTimeSuggestions[i].locations[j].locationEmailAddress;
        const meetingTimeSlot = meetingTimeSuggestions[i].meetingTimeSlot;
        if (room.address === address) {
          timeslot.push(meetingTimeSlot);
        }
      }
    }
    return { ...room, timeslot };
  });
  return data;
};
