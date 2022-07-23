import { ReactNode } from 'react';

declare namespace ConditionViewTypes {
  export interface ConditionViewProps {
    children: ReactNode;
    condition: boolean;
  }
}

export = ConditionViewTypes;
export as namespace ConditionViewTypes;
