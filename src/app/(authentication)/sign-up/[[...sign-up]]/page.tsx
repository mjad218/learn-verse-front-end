import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center items-center h-screen w-full bg-[url('/assets/AuthbackgroundTemp.jpg')] bg-contain">
            <SignUp />
        </div>
    )
}