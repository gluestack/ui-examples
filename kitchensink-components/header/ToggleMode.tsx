import React, { useContext } from "react";
import { Icon, MoonIcon, SunIcon, Button } from "../../components";
import { ThemeContext } from "../../App";

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  return (
    <Button className='p-0 bg-transparent' onPress={toggleColorMode}>
      <Icon
        as={colorMode === "dark" ? SunIcon : MoonIcon}
        size="xl"
        className='text-background-700'
        fill="currentColor"
      />
    </Button>
  );
};
export default ToggleMode;
