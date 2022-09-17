import { CardProps } from "./props";
import Image from "next/image";
import avatarImage from "/public/avatar.png";
import Link from "next/link";

import { shimmer, toBase64 } from "@/utils/imageBlur";

const Card: React.FC<CardProps> = ({
  name,
  mainText,
  imagePortraitUrl,
}): JSX.Element => {
  return (
    <div className="border rounded-lg shadow-md bg-slate-800 border-slate-700">
      <Image
        width={50}
        height={50}
        className="border-t rounded-t-lg"
        alt="User image"
        src={imagePortraitUrl != "" ? imagePortraitUrl : avatarImage}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(40, 100))}`}
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
        quality={75}
      />
      <div className="p-5">
        <h1 className="mb-1 font-bold tracking-tight text-white">
          {name ?? "noname"}
        </h1>

        <p className="mb-3 font-normal text-gray-400 text-ellipsis line-clamp-3">
          {mainText?.replace(/(<([^>]+)>)/gi, "") ?? ""}
        </p>
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
  );
};

export default Card;
