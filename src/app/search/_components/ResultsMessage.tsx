"use client";
import { useSearchParams } from "next/navigation";

const ResultsMessage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  return (
    <span className="text-start font-dmSerif text-xl">
      Showing results for {searchQuery || "..."}
    </span>
  );
};

export default ResultsMessage;
