import Link from "next/link";

import { RiYoutubeLine, RiInstagramLine, RiLinkedinLine, RiGithubLine} from "react-icons/ri";
const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link href={"https://www.instagram.com/k_dhawal_verma/"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.linkedin.com/in/dhawalverma2808/"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={"https://github.com/dhawal-verma"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
