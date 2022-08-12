import type { GetServerSideProps } from 'next'
import type { LayoutOptions } from 'ui'
import { getLayoutOptions } from '../lib/getLayoutOptions'
import { RemoteLayout } from '../components/RemoteLayout.server'

interface RemotePageProps {
  layoutOptions?: LayoutOptions
}

export default function RemotePage({ layoutOptions }: RemotePageProps) {
  return (
    <RemoteLayout layoutOptions={layoutOptions}>
      <main>Remote Layout</main>
    </RemoteLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const layoutOptions = getLayoutOptions(ctx)
  return { props: { layoutOptions } }
};
