"use client";
import { useSearchParams } from "next/navigation";

const ResultsMessage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  return (
    <span className="text-start text-4xl font-semibold">
      Showing results for {searchQuery || "..."}
    </span>
  );
};

export default ResultsMessage;
