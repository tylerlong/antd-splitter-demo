import React from 'react';
import { Splitter } from 'antd';
import { auto } from 'manate/react';

import { Store } from './store';

const App = auto((props: { store: Store }) => {
  const { store } = props;
  return (
    <Splitter
      layout="vertical"
      onResize={(sizes) => {
        store.showToolbar = sizes[0] >= 12;
      }}
    >
      <Splitter.Panel size={store.showToolbar ? 24 : 0} max={24} min={0}>
        top
      </Splitter.Panel>
      <Splitter.Panel>
        <Splitter>
          <Splitter.Panel>left</Splitter.Panel>
          <Splitter.Panel>right</Splitter.Panel>
        </Splitter>
      </Splitter.Panel>
    </Splitter>
  );
});

export default App;
