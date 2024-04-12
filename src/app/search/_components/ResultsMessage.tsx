"use client";
import { Text } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";

const ResultsMessage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  return (
    <Text className="text-start text-4xl font-semibold">
      Showing results for {searchQuery || "..."}
    </Text>
  );
};

export default ResultsMessage;
