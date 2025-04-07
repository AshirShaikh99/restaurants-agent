import { CALL_STATUS, useVapi } from "@/hooks/useVapi";
import { Loader2, Mic, Square } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const AssistantButton = ({
  toggleCall,
  callStatus,
  audioLevel = 0,
}: Partial<ReturnType<typeof useVapi>>) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Start pulsing animation when active
  useEffect(() => {
    if (callStatus === CALL_STATUS.ACTIVE) {
      setIsPulsing(true);
    } else {
      setIsPulsing(false);
    }
  }, [callStatus]);

  const getColors = () => {
    if (callStatus === CALL_STATUS.ACTIVE) {
      return {
        bg: "bg-red-500 dark:bg-red-600",
        hover: "hover:bg-red-600 dark:hover:bg-red-700",
        ring: "ring-red-400 dark:ring-red-500",
        shadow: "shadow-red-500/50 dark:shadow-red-600/50",
        text: "text-white",
        pulse: "pulse-red",
      };
    } else if (callStatus === CALL_STATUS.LOADING) {
      return {
        bg: "bg-amber-500 dark:bg-amber-600",
        hover: "hover:bg-amber-600 dark:hover:bg-amber-700",
        ring: "ring-amber-400 dark:ring-amber-500",
        shadow: "shadow-amber-500/50 dark:shadow-amber-600/50",
        text: "text-white",
        pulse: "pulse-amber",
      };
    } else {
      return {
        bg: "bg-primary-500 dark:bg-primary-600",
        hover: "hover:bg-primary-600 dark:hover:bg-primary-700",
        ring: "ring-primary-400 dark:ring-primary-500",
        shadow: "shadow-primary-500/50 dark:shadow-primary-600/50",
        text: "text-white",
        pulse: "pulse-primary",
      };
    }
  };

  const colors = getColors();

  const pulseSize = 10 + audioLevel * 60;

  return (
    <div className="relative flex items-center justify-center">
      {/* Pulse animation */}
      {isPulsing && (
        <div
          className={`absolute rounded-full ${colors.bg} opacity-20 animate-pulse-slow`}
          style={{
            width: `${pulseSize}px`,
            height: `${pulseSize}px`,
            transition: "all 0.3s ease-in-out",
          }}
        ></div>
      )}

      <Button
        className={`relative rounded-full w-16 h-16 ${colors.bg} ${
          colors.hover
        } ${colors.text} shadow-xl ${colors.shadow} ${
          isHovered ? `ring-4 ${colors.ring}` : ""
        } transition-all duration-300 transform ${
          isHovered ? "scale-110" : "scale-100"
        } animate-fade-in`}
        onClick={toggleCall}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10">
          {callStatus === CALL_STATUS.ACTIVE ? (
            <Square className="w-6 h-6" />
          ) : callStatus === CALL_STATUS.LOADING ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Mic className="w-6 h-6" />
          )}
        </div>
      </Button>
    </div>
  );
};

export { AssistantButton };
