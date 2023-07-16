"use client";
import { Auth, Hub } from "aws-amplify";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [signedUser, setSignedUser] = useState(false);
  useEffect(() => {
    authListener();
  }, []);

  async function authListener() {
    Hub.listen("auth", (data) => {
      console.dir(data)
      switch (data.payload.event) {
        case "signIn":
          return setSignedUser(true);
        case "signOut":
          return setSignedUser(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedUser(true);
    } catch (error) {}
  }

  const menuPages = [
    ["Home", "/"],
    ["Create Post", "/create-post"],
    ["Profile", "/profile"],
  ];

  return (
    <nav className="justify-left w-full pt-3 pb-3  border-b bg-[#0B324B] mb-5">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className=" inline justify-left space-x-4">
          {menuPages.map(([title, url], index) => {
            return (
              <Link
                href={url}
                key={index}
                className="rounded-lg px3 py2 text-slate-200 font-medium  hover:text-gray-400"
              >
                {title}
              </Link>
            );
          })}
          {signedUser && (
            <Link
              href={"/my-posts"}
              className="rounded-lg px3 py2 text-slate-200 font-medium  hover:text-gray-400"
            >
              My posts
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
