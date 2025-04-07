"use client";

import { useVapi } from "../../hooks/useVapi";
import { AssistantButton } from "./assistantButton";
import { Display } from "./display";

function Assistant() {
  const { toggleCall, callStatus, audioLevel } = useVapi();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="chat-history w-full mb-8 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
        <Display />
      </div>
      <div className="user-input mb-6 p-4 bg-white dark:bg-dark-700 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
        <AssistantButton
          audioLevel={audioLevel}
          callStatus={callStatus}
          toggleCall={toggleCall}
        />
      </div>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
        <p>Click the button and speak to interact with the assistant</p>
      </div>
    </div>
  );
}

export { Assistant };
