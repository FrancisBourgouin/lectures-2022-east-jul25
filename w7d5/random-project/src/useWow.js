import { useEffect, useState } from "react";
import axios from "axios";

export default function useWow() {
  const [wowPath, setWowPath] = useState("");
  const sound = wowPath && new Audio(wowPath);

  const fetchAudio = () => {
    axios
      .get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
      .then((res) => res.data[0])
      .then((data) => setWowPath(data.audio));
  };

  useEffect(() => {
    fetchAudio();
  }, []);

  const sayWow = () => {
    sound.play();
    fetchAudio();
  };
  const saySameWow = () => {
    sound.play();
  };

  return { sayWow, saySameWow };
}
