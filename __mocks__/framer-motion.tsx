// __mocks__/framer-motion.tsx
import * as React from 'react';

export const motion = {
    div: (props: any) => <div {...props} />,
    span: (props: any) => <span {...props} />,
    // Add more tags as needed like motion.button, motion.ul, etc.
};

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;
