import React from 'react';

import { Apollo } from './Apollo';

const Providers: React.FC<{}> = ({ children }) => <Apollo>{children}</Apollo>;

export default Providers;
