import React from 'react';
export const useLayout = () => {
  const [layout, setLayout] = React.useState({
    width: 0,
    height: 0
  });
  return {
    onLayout: e => {
      setLayout(e.nativeEvent.layout);
    },
    layout
  };
};
//# sourceMappingURL=useLayout.js.map