import {storiesOf} from "@storybook/react";
import React from "react";
import Button from "../src/button/Button";
import {useDisplayToast} from "../src/toast/util/toastHooks";
import StoryFragment from "./utils/StoryFragment";

function ToastComponent() {
  const displayToast = useDisplayToast();

  return (
    <StoryFragment>
      <Button
        type={"button"}
        onClick={() =>
          displayToast({
            mode: "success",
            content: "Success Message"
          })
        }>
        {"Show Success Toast"}
      </Button>

      <br />

      <Button
        type={"button"}
        onClick={() =>
          displayToast({
            mode: "danger",
            content: "Error Message"
          })
        }>
        {"Show Error Toast"}
      </Button>
    </StoryFragment>
  );
}

storiesOf("Toast", module).add("Toast Message", () => <ToastComponent />);
