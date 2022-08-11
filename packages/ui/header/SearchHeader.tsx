import React from 'react'
import { LayoutOptions } from '../types'

export interface SearchHeaderProps {
  layoutOptions: LayoutOptions;
}

export const SearchHeader = ({ layoutOptions }: SearchHeaderProps) => {

  const { brand } = layoutOptions;

  return (
    <header
      id="search-header"
      data-brand={brand}
    >
      <div>
        Search Header
      </div>
    </header>
  )
};
