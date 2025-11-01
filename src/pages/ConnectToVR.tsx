import { useState } from "react";

export default function ConnectToVR() {
  const [step, setStep] = useState(1);
  const [floorplan, setFloorplan] = useState("");
  const [purpose, setPurpose] = useState("");
  const [requirements, setRequirements] = useState({
    kitchen: true,
    wardrobe: 1,
    entertainment: 1,
    study: 1,
    crockery: 1,
  });

  const handleNext = () => {
    if (step === 1 && (!floorplan || !purpose)) {
      alert("Please select both floorplan and purpose!");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  // Function to limit counts
  const updateCount = (key: string, newValue: number) => {
    if (key === "wardrobe") {
      if (newValue >= 1 && newValue <= 2) {
        setRequirements({ ...requirements, [key]: newValue });
      }
    } else {
      if (newValue >= 1 && newValue <= 3) {
        setRequirements({ ...requirements, [key]: newValue });
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#ffe6a7] gap-8 p-4 md:p-6 overflow-hidden">
      {step === 1 && (
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl mx-auto p-6 md:p-8 overflow-hidden">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800">LET'S GET STARTED</h2>
            <p className="text-sm text-gray-600">STEP 1 OF 3</p>

            {/* Floorplan */}
            <div>
              <p className="font-medium text-gray-700 mb-2">Your floorplan</p>
              <div className="flex gap-3 flex-wrap">
                {["1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFloorplan(item)}
                    className={`px-4 py-2 border rounded-md transition-all ${
                      floorplan === item
                        ? "bg-red-600 text-white"
                        : "border-red-600 text-red-600 hover:bg-red-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Purpose */}
            <div>
              <p className="font-medium text-gray-700 mb-2">Purpose</p>
              <div className="flex gap-3 flex-wrap">
                {["Move In", "Rent Out", "Renovate"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setPurpose(item)}
                    className={`px-4 py-2 border rounded-md transition-all ${
                      purpose === item
                        ? "bg-red-600 text-white"
                        : "border-red-600 text-red-600 hover:bg-red-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="bg-red-600 text-white px-6 py-2 rounded-md mt-4 w-fit hover:bg-red-700"
            >
              NEXT
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <img
              src="/GetFreeEstimate/step1.svg"
              alt="Step 1 Illustration"
              className="w-48 mb-4"
            />
            <h3 className="font-semibold text-gray-800">Your Ideas. Our Expertise.</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our 600+ design experts use state-of-the-art 3D design technology to ensure that you
              get the perfect designs for your home. Start your home interiors journey with us.
            </p>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl mx-auto p-6 md:p-8 overflow-hidden">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800">TELL US WHAT YOU NEED</h2>
            <p className="text-sm text-gray-600">STEP 2 OF 3</p>

            <p className="font-medium text-gray-700 mb-2">
              Your requirements for {floorplan}
            </p>

            {Object.entries(requirements).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center border-b py-2">
                <span className="capitalize text-gray-700">{key.replace(/([A-Z])/g, " $1")}</span>
                {typeof value === "boolean" ? (
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() =>
                      setRequirements({ ...requirements, [key]: !value })
                    }
                    className="accent-red-600"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-red-600 text-white w-6 h-6 rounded-md"
                      onClick={() => updateCount(key, value - 1)}
                    >
                      -
                    </button>
                    <span>{value}</span>
                    <button
                      className="bg-red-600 text-white w-6 h-6 rounded-md"
                      onClick={() => updateCount(key, value + 1)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            ))}

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleBack}
                className="border border-red-600 text-red-600 px-6 py-2 rounded-md hover:bg-red-100"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
              >
                NEXT
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <img
              src="/GetFreeEstimate/step2.1.svg"
              alt="Step 2 Illustration"
              className="w-48 mb-4"
            />
            <h3 className="font-semibold text-gray-800">Modular Kitchen</h3>
            <p className="text-gray-600 text-sm mt-2">
              Whether you are a Masterchef or a two-minute-noodle cook, our kitchen designs are
              personalized to suit your lifestyle, preferences, and floor plan.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
