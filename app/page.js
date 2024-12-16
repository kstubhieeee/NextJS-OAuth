"use client";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Component() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: <IconUserBolt className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <IconSettings className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div
        className={cn(
          "rounded-md flex flex-row bg-neutral-800 w-full flex-1   border border-neutral-700 overflow-hidden",
          "h-screen"
        )}
      >
        <Sidebar
          open={open}
          setOpen={setOpen}
          animate={false}
          className="flex-shrink-0"
        >
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <>
                <Logo />
              </>
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: session.user.name,
                  href: "#",
                  icon: (
                    <Image
                      src={session.user.image}
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="flex-1 p-6 text-white">
          <div>
            Signed in as {session.user.email} <br />
            Hello {session.user.name}👋🏻
            <br />
            <button
              onClick={() => signOut()}
              className="mt-4 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4 bg-neutral-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Welcome to Auth Demo</h1>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => signIn("github")}
          className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors flex items-center gap-2"
        >
          Sign in using Github
        </button>
        <button
          onClick={() => signIn("google")}
          className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors flex items-center gap-2"
        >
          Sign in using Google
        </button>
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white whitespace-pre"
      >
        Next JS auth demo
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
