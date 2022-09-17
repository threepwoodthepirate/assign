import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Logo } from "@/components/Logo/Logo";
import { UserProp } from "@/features/User/props";
import PageLayout from "@/components/Layout/PageLayout";
import Image from "next/image";
import avatarImage from "/public/avatar.png";
import { shimmer, toBase64 } from "@/utils/imageBlur";
export const User: NextPage<UserProp> = ({ user }) => {
  console.log(user);
  const router = useRouter();

  return (
    <PageLayout>
      <div className="h-screen">
        <div className="absolute top-0 left-0 h-12 p-4 lg:top-6 lg:left-4 w-18">
          <Logo></Logo>
        </div>
        <div className="flex flex-wrap items-center h-auto max-w-4xl mx-auto ">
          <div
            id="profile"
            className="w-full mx-6 rounded-lg shadow-2xl opacity-75 lg:w-3/5 lg:rounded-lg bg-slate-700 border-slate-700 lg:mx-0"
          ></div>

          <div className="hidden w-full lg:w-2/5 lg:block">
            {user && (
              <Image
                width={50}
                height={50}
                alt="User image"
                src={
                  user.imagePortraitUrl != null
                    ? user.imagePortraitUrl
                    : avatarImage
                }
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(40, 100)
                )}`}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                quality={75}
              />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
