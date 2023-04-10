import { createIcon } from "@gluestack-ui/icon";
import { Root } from "../styled-components";
import { Path } from "react-native-svg";

export const HeartIcon = createIcon({
  Root,
  viewBox: "0 0 24 24",
  path: (
    <Path
      d="M12 19C17.25 15.4503 22.5 11.5 22.5 6.25C22.5 4.906 21.9878 3.56275 20.9625 2.5375C19.9373 1.513 18.594 1 17.25 1C15.9067 1 14.5628 1.513 13.5383 2.5375L12 4.07575L10.4625 2.5375C9.43725 1.513 8.094 1 6.75 1C5.40675 1 4.06275 1.513 3.03825 2.5375C2.013 3.56275 1.5 4.906 1.5 6.25C1.5 11.5 6.75 15.4503 12 19Z"
      fill="black"
      fill-opacity="0.5"
      stroke="#FAFAFA"
      stroke-width="2"
    />
  ),
});

HeartIcon.displayName = "HeartIcon";
