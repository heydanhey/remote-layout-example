export interface HeaderBase {
  showCart?: boolean;
  showNotifications?: boolean;
}

export interface LiteHeader extends HeaderBase {
  type: "lite";
}

export interface SearchHeader extends HeaderBase {
  type: "search";
}

export interface LayoutOptions {
  brand?: any;
  showInAppMessages?: boolean;
  header: LiteHeader | SearchHeader;
}
