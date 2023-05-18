import { AsForwarder } from '@dank-style/react';
import { styled } from '../../styled';

const Comp: any = styled(
  AsForwarder,
  {},
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

export default Comp;
