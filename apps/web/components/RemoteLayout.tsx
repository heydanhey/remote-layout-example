import getConfig from 'next/config'
import type { LayoutOptions } from 'ui'

interface RemoteLayoutProps {
  children?: React.ReactNode;
  layoutOptions?: LayoutOptions;
}

export const RemoteLayout = ({ layoutOptions, children }: RemoteLayoutProps) => {
  const config = getConfig() as { serverRuntimeConfig: { getUI: any } }
  const UI = config.serverRuntimeConfig.getUI()

  return (
    <UI.Layout layoutOptions={layoutOptions}>
      {children}
    </UI.Layout>
  );
}
