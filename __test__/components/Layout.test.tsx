import { renderForTest } from '@/utils/tests';

import Layout from '@/components/Layout';

describe('Layout component', () => {
  it('Renders layout with header bar', async () => {
    const view = renderForTest(
      <Layout>
        <></>
      </Layout>
    );
    expect(await view.findByText(/Employment Management/i)).toBeInTheDocument();
  });
});
