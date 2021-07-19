export const songListReducer = () => {
  return [
    { title: "I'LL NEVER BREAK YOUR HEART", duration: "03:40" },
    {
      title: "SHOW ME THE MEANING OF BEING LONELY",
      duration: "04:20",
    },
    {
      title: "QUIT PLAYING GAMES",
      duration: "05:00",
    },
    {
      title: "AS LONG AS YOU LOVE ME",
      duration: "03:10",
    },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
