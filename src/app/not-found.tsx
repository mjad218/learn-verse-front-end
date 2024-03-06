import { Text } from "@radix-ui/themes";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex h-[50dvh] items-center justify-center">
      <Text className="font-roboto text-2xl font-bold">
        404 | The requested page was not found &#9785;
      </Text>
    </div>
  );
};

export default NotFoundPage;
