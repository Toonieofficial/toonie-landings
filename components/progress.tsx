'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="6px"
        color="#002EFF"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default Providers;