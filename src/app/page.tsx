import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";
import { NextPage } from "next";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";


export default async function Home() {
    const data = await api.post.getAll.query();
    const user = await currentUser();

    console.log('data', data)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            {!user && <SignInButton />}
            {user && <SignOutButton />}
            {data?.map((post) => (
                <div key={post.id}>
                    <p>{post.content}</p>
                </div>
            ))}
        </main >
    );
}
