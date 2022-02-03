import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

export default function QueryWrapper({ children }) {
  const { current } = React.useRef(new QueryClient());

  return <QueryClientProvider client={current}>{children}</QueryClientProvider>;
}
