# `@gluestack-ui/alert-dialog`

AlertDialog effectively interrupts a user's flow and prompts them to take a specific action. It's commonly used for mandatory confirmations or call-to-actions.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx gluestack-ui@latest add alert-dialog
```

## Usage

Default styling of all these components can be found in the components/core/Default styling of all these components can be found in the components/core/alert-dialog file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/main/example/storybook/src/ui-components/AlertDialog/styled-components/index.tsx) of the styled AlertDialog components.

```jsx
// import the styles
import {
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
} from '../components/core/alert-dialog/styled-components';

// import the createAlertDialog function
import { createAlertDialog } from '@gluestack-ui/alert-dialog';

// Understanding the API
const AlertDialog = createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
});

// Using the alert-dialog component
export default () => (
  <AlertDialog>
    <AlertDialog.Backdrop />
    <AlertDialog.Content>
      <AlertDialog.Header>
        <Heading>Confirm your request</Heading>
        <AlertDialog.CloseButton>
          <CloseIcon />
        </AlertDialog.CloseButton>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Text>AlertDialog Body</Text>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <Button>
          <Button.Text></Button.Text>
        </Button>
        <Button>
          <Button.Text></Button.Text>
        </Button>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
