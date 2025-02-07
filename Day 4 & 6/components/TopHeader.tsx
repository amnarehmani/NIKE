// "use client"; // Make it a client component
import React from "react";
import Image from "next/image";
// import { useUser } from "@clerk/nextjs"; // Use useUser() for client-side auth
// import { ClerkLoaded, SignInButton, UserButton } from "@clerk/nextjs";
// import { User } from "lucide-react";

const TopHeader = () => {
  // const { user } = useUser(); // Get user data on client-side

  return (
    <div className="bg-[#F5F5F5] w-full h-auto sm:h-[50px] py-2">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 px-4 md:px-8">
        {/* Icon Section */}
        <div className="flex items-center justify-center sm:mr-4">
          <Image
            src="/images/icon-header.png"
            alt="icon"
            width={28}
            height={28}
            className="w-[28px] h-[28px] md:w-[32px] md:h-[32px]"
          />
        </div>

        Clerk User / SignIn Button Section
        <div className="flex items-center sm:gap-4 gap-2 text-[12px] md:text-[14px] font-medium sm:ml-auto">
          {/* <ClerkLoaded>
            {user ? (
              <div className="flex items-center gap-2">
                <UserButton />
                <div>
                  <p className="p-1">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex gap-2">
                  <User />
                  <p className="p-1">Login/Register</p>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded> */}
        </div>
      </div>
      
    </div>
  );
};

export default TopHeader;
