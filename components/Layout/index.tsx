import { Typography } from '@mui/material';
import { FC } from 'react';

import type { LayoutProps } from './layout';

const Layout: FC<LayoutProps> = (props: { children: any }) => {
  const { children } = props;

  return (
    <div className="w-full h-min-screen">
      <nav className="py-4 bg-swivel-primary">
        <div className="container mx-auto">
          <Typography className="text-white heading-2">
            Employment Management
          </Typography>
        </div>
      </nav>
      <div className="container mx-auto py-9">{children}</div>
    </div>
  );
};

export default Layout;
