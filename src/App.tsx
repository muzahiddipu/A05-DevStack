import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technology/technologies";
import type { Technology } from "./types/technology";

const technologiesInformation: Promise<Technology[]> = fetch("/data.json").then(
  (response) => {
    if (!response.ok) {
      throw new Error("Failed to load technologies");
    }

    return response.json() as Promise<Technology[]>;
  },
);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h1>Loading</h1>}>
        <Technologies technologiesInformation={technologiesInformation} />
      </Suspense>
    </>
  );
}

export default App;
