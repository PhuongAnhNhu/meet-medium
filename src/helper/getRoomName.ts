const removeWhiteSpace = (name: string) => {
  const temp = name.split(' ');
  let test = '';
  for (let i = 0; i < temp.length; i++) {
    test += temp[i];
  }
  return test;
};

export const getRoomName = (name: string) => {
  const roomName = removeWhiteSpace(name.split(/\d\s/)[1]);
  return roomName;
};
