export const getRoomOptions = (meetingTimeSuggestions: MeetingTimeSuggestion[]) => {
  const roomList: string[] = [];

  const suggestionList = meetingTimeSuggestions?.map((meetingTimeSuggestion: MeetingTimeSuggestion) => {
    return meetingTimeSuggestion.locations;
  });

  for (let i = 0; i < suggestionList?.length; i++) {
    for (let j = 0; j < suggestionList[i].length; j++) {
      if (!roomList.includes(suggestionList[i][j].displayName)) {
        roomList.push(suggestionList[i][j].displayName);
      }
    }
  }
  return roomList;
};

export const getTimeOptions = (raumName: string, meetingTimeSuggestions: MeetingTimeSuggestion[]) => {
  const timeList: any[] = [];

  //return alle TimeSlots von einem Raum
  for (let i = 0; i < meetingTimeSuggestions.length; i++) {
    const locations = meetingTimeSuggestions[i].locations.map((element: Location) => {
      return element.locationEmailAddress;
    });
    const roomAddress = locations.find((element) => element.includes(raumName));
    if (!!roomAddress) {
      timeList.push(meetingTimeSuggestions[i].meetingTimeSlot);
    }
  }

  // Bearbeiten timeList aaray damit FE einfacher zu benutzen
  const timeSuggestions = timeList.map((element: TimeSlotsItem) => {
    const temp = [];
    temp.push(element.start.dateTime);
    temp.push(element.end.dateTime);
    return temp;
  });

  return timeSuggestions;
};

export const getRoomOptionsAddresse = (meetingTimeSuggestions: MeetingTimeSuggestion[]) => {
  const roomList: string[] = [];

  const suggestionList = meetingTimeSuggestions?.map((meetingTimeSuggestion: MeetingTimeSuggestion) => {
    return meetingTimeSuggestion.locations;
  });

  for (let i = 0; i < suggestionList?.length; i++) {
    for (let j = 0; j < suggestionList[i].length; j++) {
      if (!roomList.includes(suggestionList[i][j].locationEmailAddress)) {
        roomList.push(suggestionList[i][j].locationEmailAddress);
      }
    }
  }
  return roomList;
};
