import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";
import { NextPage } from "next";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";


export default async function Home() {
    // const hello = await api.post.hello.query({ text: "from tRPC" });
    const user = await currentUser();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            {!user && <SignInButton />}
            {user && <SignOutButton />}
        </main >
    );
}
