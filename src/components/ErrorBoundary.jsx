import React from "react";
import TerminalError from "./TerminalError";
import { FaArrowRotateRight, FaArrowRight } from "react-icons/fa6";

const errorHtml = `
<span class="text-[#f48771]" style="font-weight: 600;">Website received signal SIGABRT, Aborted (core dumped)</span><br/>
<span class="text-[#cccccc]">Whoops! Something crashed while rendering this page.<br/>
Reloading usually clears it up — if not, the crash has been logged.<br/> <br/>
ERRNO 500 Internal error</span>
`;

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <TerminalError
        title="ERR Aborted"
        command="./render"
        errorHtml={errorHtml}
        actions={
          <>
            <button
              onClick={() => window.location.reload()}
              className="font-geist inline-flex items-center gap-2 rounded-full border border-[#333333] bg-black px-4 py-2 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-black active:scale-95"
            >
              Reload Page <FaArrowRotateRight className="inline-block" />
            </button>
            <a
              href="/"
              className="font-geist inline-flex items-center gap-2 rounded-full border border-[#333333] bg-black px-4 py-2 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-black active:scale-95"
            >
              Return to Home Page <FaArrowRight className="inline-block" />
            </a>
          </>
        }
      />
    );
  }
}

export default ErrorBoundary;
