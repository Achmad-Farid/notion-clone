"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

function Header() {
  const { user } = useUser();

  return (
    <div className="flex justify-between p-5">
      {user && <h1 className="text-2xl">{user?.firstName}</h1>}

      {/* breadcrumbs */}

      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
}
export default Header;
