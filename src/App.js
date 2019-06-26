import React, { useRef } from 'react';
import { Button } from 'antd'
import InfoDrawer from './components/InfoDrawer'
import './App.css';
import 'antd/dist/antd.css';

export default () => {
  const infoDrawerRef = useRef()

  const lot_content = []
  for(let i = 0; i < 100; i++) {
    lot_content.push(<div>content</div>)
  }

  return (
    <div>
      <InfoDrawer ref={infoDrawerRef} />
      <Button onClick={() => infoDrawerRef.current.open()}>Open Drawer</Button>
      {lot_content}
    </div>
  );
}
