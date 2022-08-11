import type { GetServerSideProps } from 'next'
import type { LayoutOptions } from 'ui'
import { getLayoutOptions } from '../lib/getLayoutOptions'
import { StaticLayout } from '../components/StaticLayout'

interface StaticPageProps {
  layoutOptions?: LayoutOptions
}

export default function StaticPage({ layoutOptions }: StaticPageProps) {
  return (
    <StaticLayout layoutOptions={layoutOptions}>
      <main>Static Layout</main>
    </StaticLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const layoutOptions = getLayoutOptions(ctx)
  return { props: { layoutOptions } }
};
