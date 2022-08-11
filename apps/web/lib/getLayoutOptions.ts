import type { GetServerSidePropsContext } from "next";

export const getLayoutOptions = (ctx: GetServerSidePropsContext) => {
  const layoutOptions = {
    header: {
      type: "search",
      showCart: true,
      showNotifications: true,
      showLogo: true,
    },
  };

  return layoutOptions;
};
