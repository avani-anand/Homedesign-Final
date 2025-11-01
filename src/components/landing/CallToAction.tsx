"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonColorful } from "../ui/button-colorful";
import ConnectToVR from "../../pages/ConnectToVR"; // ✅ make sure this path is correct

export default function CallToAction() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Main Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center bg-[#99582a]/10 rounded-3xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-[#99582a] mb-6"
        >
          Ready to Transform Your Dream Home?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg sm:text-xl text-[#99582a]/80 mb-10 max-w-2xl"
        >
          Take the first step towards creating your perfect living space. Our expert team is ready
          to bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ButtonColorful
            label="View in VR"
            size="xl"
            className="shadow-lg shadow-[#99582a]/20 hover:shadow-xl hover:shadow-[#99582a]/30 transition-shadow"
            onClick={() => setShowForm(true)} // 👈 open the modal
          />
        </motion.div>
      </motion.div>

      {/* Modal Section */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold z-50"
              >
                ×
              </button>

              {/* 🧩 Your ConnectToVR Form */}
              <ConnectToVR />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
