import "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const lameLabels = ["Background Noise", "Fart", "Octopus", "Patate", "Poop", "Zombie"];
  const coolLabels = ["☁️😶☁️", "😎💨🤢", "🐙🐙🐙", "🍟🥔🍟", "💩💩💩", "🧟‍♀️🧟‍♂️🧟"];
  const sampleArray = [
    0.006349583156406879, 0.0008513472275808454, 0.06873131543397903,
    0.0000669902510708198, 0.9233937859535217, 0.0006069384980946779,
  ];
  const biggestValue = Math.max(...sampleArray);
  const biggestValueIndex = sampleArray.indexOf(biggestValue);

  const createModel = async () => {
    const URL = "http://localhost:3000/model/";
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
  };

  const listen = async (listenCallback, options) => {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels

    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields

    recognizer.listen(listenCallback, options);
  };

  const listenCallback = (result) => {
    // for (const index in lameLabels) {
    //   console.log(lameLabels[index], result.scores[index]);
    // }
    // console.log(Array.from(result.scores));
    const biggestValue = Math.max(...result.scores);
    const biggestValueIndex = result.scores.indexOf(biggestValue);

    biggestValueIndex !== 0 && setCurrentIndex(biggestValueIndex);
  };
  const options = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };

  return (
    <div className="App">
      <header>
        <h1>SUPER VOICE TO EMOJI OH YEAH.</h1>
      </header>
      <button onClick={() => listen(listenCallback, options)}>NAVI</button>
      <h1 style={{ fontSize: "6em" }}>{coolLabels[currentIndex]}</h1>
    </div>
  );
}

export default App;
