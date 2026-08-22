import TerminalError from "../components/TerminalError";
import { FaArrowRight } from "react-icons/fa6";

const errorHtml = `
<span class="text-[#f48771]" style="font-weight: 600;">Website received signal SIGSEGV, Segmentation fault (core dumped)</span><br/>
<span class="text-[#cccccc]">Aw shucks! The page you requested could not be found.<br/>
This usually means the URL is incorrect or the page has been moved.<br/> <br/>
ERRNO 404 Page not found</span>
`;

const NotFound = () => (
  <TerminalError
    title="ERR Segmentation Fault"
    command="./navpage"
    errorHtml={errorHtml}
    actions={
      <a
        href="/"
        className="font-geist inline-flex items-center gap-2 rounded-full border border-[#333333] bg-black px-4 py-2 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-black active:scale-95"
      >
        Return to Home Page <FaArrowRight className="inline-block" />
      </a>
    }
  />
);

export default NotFound;
