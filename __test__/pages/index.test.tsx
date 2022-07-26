import { renderForTest } from '@/utils/tests';

import Home from '@/pages/index';

describe('Home page', () => {
  it('Renders an screen with welcome text', async () => {
    const view = renderForTest(<Home />);
    expect(
      await view.findByText(/Welcome to Swivel Management/i)
    ).toBeInTheDocument();
  });
});
