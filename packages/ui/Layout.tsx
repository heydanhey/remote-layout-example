import React from 'react'
import { LayoutOptions } from './types'
import { SearchHeader } from './header/SearchHeader'
import { LiteHeader } from './header/LiteHeader'

export interface LayoutProps {
  children?: React.ReactNode;
  layoutOptions?: LayoutOptions;
}

export const Layout: React.FC<LayoutProps> = ({ children, layoutOptions }) => {

  if (!layoutOptions) {
    return <>{children}</>;
  }

  const Header = layoutOptions.header.type === 'search' ? SearchHeader : LiteHeader;

  const Footer = () => <footer id="layout-footer">Footer</footer>

  return (
    <>
      <Header layoutOptions={layoutOptions} />
        {children}
      <Footer />
    </>
  )
};
