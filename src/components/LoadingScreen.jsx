import { useEffect, useState, useRef } from "react";
import profileImage from "../assets/p.jpg"; // Your profile image

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Loading .... />";
  const textRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete();
          }
        }, 1000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Update bar width whenever text changes
  useEffect(() => {
    if (textRef.current) {
      const width = textRef.current.offsetWidth;
      setBarWidth(width);
    }
  }, [text]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#f5f5dc] to-[#ffe0b2] flex flex-col items-center justify-center text-[#3e2723] p-4">
      
      {/* Extra Large Round Profile Image */}
      <div className="mb-8">
        <img
          src={profileImage}
          alt="Divya"
          className="w-90 h-90 rounded-full object-cover border-[6px] border-gradient-to-r from-[#d7a1a9] to-[#ffcc80] shadow-lg"
        />
      </div>

      {/* Animated Typing Text */}
      <div
        ref={textRef}
        className="text-3xl font-bold tracking-wide drop-shadow-lg text-center mb-4 whitespace-nowrap"
      >
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Aesthetic Loading Bar */}
<div className="w-[240px] h-[6px] bg-[#d7ccc8] rounded-full overflow-hidden shadow-inner">
  <div
    className="h-full bg-[#8d6e63] shadow-[0_0_15px_#5d4037] transition-all duration-300"
    style={{
      width: `${Math.min((barWidth / 240) * 100 + 15, 100)}%` // +5% for extra length
    }}
  ></div>
</div>

    </div>
  );
};
