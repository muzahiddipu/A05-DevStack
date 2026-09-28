import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technology/technologies";
import type { Technology } from "./types/technology";
import FooterSection from "./components/FooterSection";

const technologiesInformation: Promise<Technology[]> = fetch("/data.json").then(
  (response) => {
    if (!response.ok) {
      throw new Error("Failed to load technologies");
    }

    return response.json() as Promise<Technology[]>;
  },
);

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const handleAddTechnology = (technology: Technology) => {
    if (selectedTechnologies.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveTechnology = (technologyId: number) => {
    const technologyToRemove = selectedTechnologies.find(
      (technology) => technology.id === technologyId,
    );

    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== technologyId),
    );

    if (technologyToRemove) {
      toast.info(`${technologyToRemove.name} removed from your stack.`);
    }
  };

  const handleClearStack = () => {
    if (selectedTechnologies.length === 0) return;

    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h1>Loading</h1>}>
        <Technologies
          technologiesInformation={technologiesInformation}
          selectedTechnologies={selectedTechnologies}
          onAddTechnology={handleAddTechnology}
          onRemoveTechnology={handleRemoveTechnology}
          onClearStack={handleClearStack}
        />
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
