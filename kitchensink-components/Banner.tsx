import React from "react";
import { HStack, Link, LinkText, Text } from "../components";

const Banner = () => {
  return (
    <HStack
      className="justify-center items-center h-16 bg-background-900"
      space="sm"
    >
      <Text className="text-typography-0 " size="sm">
        Show total prices up front
      </Text>
      <Link href="https://ui.gluestack.io">
        <LinkText className="text-typography-0 font-semibold" size="sm">
          Learn more
        </LinkText>
      </Link>
    </HStack>
  );
};
export default Banner;
