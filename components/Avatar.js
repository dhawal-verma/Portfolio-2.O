import Image from "next/image";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/5.png"}
        width={532}
        height={588}
        alt=""
        className="translate-z-0 w-full -h-full"
      />
    </div>
  );
};

export default Avatar;
