import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MemberShape = ({ classname, width = "270px", height = "117px" }) => {
  return (
    <div className={`${classname} flex items-center justify-center`}>
      <div className="w-full flex items-center justify-center absolute gap-4">
        <div className="icon p-0 flex items-center justify-center bg-slate-100 text-mehron-100 rounded-sm transition-all duration-700">
          <CiFacebook />
        </div>
        <div className="icon p-0 flex items-center justify-center bg-slate-100 text-mehron-100 rounded-sm transition-all duration-700">
          <FaInstagram />
        </div>
        <div className="icon p-0 flex items-center justify-center bg-slate-100 text-mehron-100 rounded-sm transition-all duration-700">
          <FaLinkedinIn />
        </div>
        <div className="icon p-0 flex items-center justify-center bg-slate-100 text-mehron-100 rounded-sm transition-all duration-700">
          <FaWhatsapp />
        </div>
        <div className="icon p-0 flex items-center justify-center bg-slate-100 text-mehron-100 rounded-sm transition-all duration-700">
          <FaXTwitter />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
      >
        <path
          fillRule="evenodd"
          opacity="0.851"
          fill="#8C1D1D"
          d="M270.000,116.987 L270.000,44.989 C263.000,34.608 253.489,28.220 241.350,27.206 C226.848,25.997 212.390,30.577 198.263,34.070 C184.137,37.565 168.755,39.934 155.237,34.550 C138.587,27.919 127.899,10.850 111.428,3.789 C97.057,-2.373 80.510,0.033 65.342,3.838 C50.174,7.642 34.647,12.784 19.041,11.771 C11.849,11.304 -0.000,5.364 -0.000,5.364 L-0.000,116.987 L270.000,116.987 Z"
        />
      </svg>
    </div>
  );
};

export default MemberShape;
