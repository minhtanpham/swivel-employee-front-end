import { ReactNode } from 'react';

declare namespace LayoutTypes {
  export interface LayoutProps {
    children: ReactNode;
  }
}

export = LayoutTypes;
export as namespace LayoutTypes;
