import { ListCardProps } from "./props";
import Image from "next/image";
import avatarImage from "/public/avatar.png";
import Link from "next/link";
import { shimmer, toBase64 } from "@/utils/imageBlur";
import { loremText } from "@/utils/loremText";

const ListCard: React.FC<ListCardProps> = ({
  name,
  imagePortraitUrl,
  mainText,
}): JSX.Element => {
  return (
    <div className="w-full lg:max-w-full lg:flex">
      <div className="flex flex-col justify-between w-full p-4 leading-normal border rounded-b border-slate-1 bg-slate-800 border-slate-700 font-poppins">
        <div className="mb-8">
          <Image
            className="w-10 h-10 rounded-full "
            width={40}
            height={40}
            alt="User image"
            src={imagePortraitUrl != "" ? imagePortraitUrl : avatarImage}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(40, 100)
            )}`}
            layout="fixed"
            placeholder="blur"
            quality={75}
          />
          <h3 className="mb-2 text-xl text-white">{name ?? "no name"}</h3>
          <p className="text-xs text-white line-clamp-3">
            {!mainText && loremText}
            {mainText?.replace(/(<([^>]+)>)/gi, "") ?? "No description"}{" "}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <Link href={`${name}`}>
              <a
                title={`Show ${name}'s profile`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800"
              >
                Show profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
