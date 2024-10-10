import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';

import App from './app';
import store from './store';

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
        components: {
          Splitter: {
            splitBarSize: 6,
            resizeSpinnerSize: 64,
            splitTriggerSize: 12,
          },
        },
      }}
    >
      <App store={store} />
    </ConfigProvider>
  </StrictMode>,
);
