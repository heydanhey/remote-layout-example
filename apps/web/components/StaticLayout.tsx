import * as UI from 'ui'

interface LayoutProps {
  children?: React.ReactNode;
  layoutOptions?: UI.LayoutOptions;
}

export const StaticLayout = ({ layoutOptions, children }: LayoutProps) => {

  return (
    <UI.Layout layoutOptions={layoutOptions}>
      {children}
    </UI.Layout>
  );
}
