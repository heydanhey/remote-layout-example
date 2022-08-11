import React from 'react'
import { LayoutOptions } from '../types'

export interface LiteHeaderProps {
  layoutOptions: LayoutOptions;
}

export const LiteHeader = ({ layoutOptions }: LiteHeaderProps) => {

  const { brand } = layoutOptions;

  return (
    <header
      id="lite-header"
      data-brand={brand}
    >
      <div>
        Lite Header
      </div>
    </header>
  )
};
