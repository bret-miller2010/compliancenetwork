/** @format */

import "./App.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
    return (
        <header>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
              <div>Tester</div>
                {/* <UserButton /> */}
            </SignedIn>
        </header>
    );
}
