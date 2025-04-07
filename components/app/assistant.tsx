"use client";

import { useVapi } from "../../hooks/useVapi";
import { AssistantButton } from "./assistantButton";
import { Display } from "./display";
import { useDisplay } from "@/context/DisplayContext";

function Assistant() {
  const { toggleCall, callStatus, audioLevel } = useVapi();
  const { hasContent } = useDisplay();

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`flex justify-center items-center ${
          !hasContent ? "min-h-[40vh]" : ""
        }`}
      >
        <div
          className={`user-input mb-6 p-4 bg-white/90 dark:bg-dark-700/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 hover:shadow-xl animate-fade-in flex justify-center z-50 ${
            hasContent
              ? "fixed top-4 left-1/2 transform -translate-x-1/2"
              : "relative"
          }`}
        >
          <AssistantButton
            audioLevel={audioLevel}
            callStatus={callStatus}
            toggleCall={toggleCall}
          />
        </div>
      </div>
      {!hasContent && (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in mb-6">
          <p>Click the button and speak to interact with the assistant</p>
        </div>
      )}
      <div
        className={`chat-history w-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
          hasContent ? "mt-20" : ""
        }`}
      >
        <Display />
      </div>
    </div>
  );
}

export { Assistant };
