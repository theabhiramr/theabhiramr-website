import { useState, useEffect } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

const TerminalError = ({ title, command, errorHtml, actions }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  const { displayText, isComplete } = useTypewriter(errorHtml, 10);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !skipped) {
        setSkipped(true);
      }
    };
    const handleClick = () => {
      if (!skipped) setSkipped(true);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    };
  }, [skipped]);

  const finalText = skipped ? errorHtml : displayText;
  const finalIsComplete = skipped || isComplete;

  return (
    <div className="text-md flex min-h-screen w-full flex-col bg-black text-white">
      <style>
        {`
                    .blink {
                        animation: blink 1s infinite;
                    }
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                `}
      </style>
      <div className="flex h-full w-full flex-col bg-black p-6 font-mono">
        <div className="mb-4 text-[#7ee787]">
          abhi<span className="text-[#f85149]">@</span>portfolio
          <span className="text-white">:</span>
          <span className="text-[#79c0ff]">~</span>
          <span className="text-white">$ </span>
          <span className="text-white">{command}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              finalText +
              (!finalIsComplete ? '<span class="blink">█</span>' : ""),
          }}
        />
        {finalIsComplete && actions && (
          <div className="mt-4 flex flex-wrap items-center gap-3 text-left">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalError;
