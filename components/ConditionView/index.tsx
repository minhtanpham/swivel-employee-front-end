import { FC } from 'react';

import type { ConditionViewProps } from './condition-view';

const ConditionView: FC<ConditionViewProps> = ({ condition, children }) => {
  if (condition) {
    return <>{children}</>;
  }
  return null;
};

export default ConditionView;
