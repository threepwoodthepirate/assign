import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Logo } from "@/components/Logo/Logo";
import { UserProp } from "@/features/User/props";
import PageLayout from "@/components/Layout/PageLayout";
import Image from "next/image";
import avatarImage from "/public/avatar.png";
import { shimmer, toBase64 } from "@/utils/imageBlur";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";
import { loremText } from "@/utils/loremText";
export const User: NextPage<UserProp> = ({ user }) => {
  const router = useRouter();

  return (
    <PageLayout>
      <div className="h-screen">
        <div className="absolute top-0 left-0 h-12 p-4 lg:top-6 lg:left-4 w-18">
          <Logo></Logo>
        </div>
        <div className="flex flex-wrap h-auto max-w-4xl mx-auto ">
          <div
            id="profile"
            className="w-full mx-6 rounded-lg shadow-2xl opacity-75 lg:w-3/5 lg:rounded-lg bg-slate-700 border-slate-700 lg:mx-0"
          >
            <div className="p-4 text-center md:p-12 lg:text-left">
              <div className="block w-48 h-48 mx-auto -mt-16 bg-center bg-cover lg:hidden">
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
                    className="rounded-lg"
                    layout="responsive"
                    objectFit="cover"
                    placeholder="blur"
                    quality={100}
                  />
                )}
              </div>

              <h1 className="pt-8 text-3xl font-bold lg:pt-0">{user?.name}</h1>
              <div className="w-4/5 pt-3 mx-auto border-b-2 opacity-25 lg:mx-0 border-slate-200"></div>
              <p className="flex justify-center pt-4 text-base font-bold lg:justify-start">
                {!user?.mainText && loremText}
                {user?.mainText != ""
                  ? user?.mainText?.replace(/(<([^>]+)>)/gi, "")
                  : loremText}
              </p>

              <p className="pt-8 text-sm text-white text-ellipsis line-clamp-3">
                {user?.email}
              </p>

              <div className="flex flex-wrap items-center justify-between w-full pb-16 mx-auto mt-6 lg:pb-0 sm:max-w-xs">
                <FacebookIcon />
                <TwitterIcon />
                <GithubIcon />
                <YoutubeIcon />
              </div>
              <div className="pt-12 pb-1">
                <button
                  title={"Back"}
                  onClick={() => router.back()}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Back
                </button>
              </div>
            </div>
          </div>

          <div className="hidden w-full pl-2 mt-8 lg:w-2/5 lg:block">
            {user && (
              <Image
                width={50}
                height={50}
                className="rounded-lg"
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
