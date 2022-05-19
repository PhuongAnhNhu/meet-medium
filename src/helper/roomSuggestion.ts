export const roomSuggestion = (meetingTimeSuggestions: MeetingTimeSuggestion[]) => {
  const roomList: string[] = [];
  const suggestionList = meetingTimeSuggestions?.map((meetingTimeSuggestion: MeetingTimeSuggestion) => {
    return meetingTimeSuggestion.locations;
  });
  for (let i = 0; i < suggestionList.length; i++) {
    for (let j = 0; j < suggestionList[i].length; j++) {
      if (!roomList.includes(suggestionList[i][j].displayName)) roomList.push(suggestionList[i][j].displayName);
    }
  }

  return roomList;
};
