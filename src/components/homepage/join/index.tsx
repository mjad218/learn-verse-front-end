import { Row } from "@/components/shared/row";
import Link from "next/link";

export const JoinUs = () => {
  return (
    <Row>
      <div className="relative flex flex-col justify-center rounded-t-3xl bg-accent4 px-20 py-16">
        <h2 className="mb-4 font-dmSerif text-4xl text-white">
          Join LearnVerse!
        </h2>

        <p className="text-white">Level up your knowledge!</p>
        <Link
          href={"/auth/register"}
          className="mt-10 w-fit rounded-3xl bg-black px-4 py-1 font-dmSerif text-white transition-transform delay-75 hover:scale-110"
        >
          Sign Up
        </Link>
      </div>
    </Row>
  );
};
