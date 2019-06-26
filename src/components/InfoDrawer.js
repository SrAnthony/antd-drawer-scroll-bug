import React from 'react'
import { Drawer, Button } from 'antd'
import InfoModal from './InfoModal'

class InfoDrawer extends React.Component {
  constructor() {
    super()
    this.modalRef = React.createRef()
  }

  state = {
    visible: false,
  }

  open = () => {
    this.setState({ visible: true })
  }

  render() {
    const { visible } = this.state

    const lot_content = []
    for(let i = 0; i < 100; i++) {
      lot_content.push(<div>content</div>)
    }

    return (
      <Drawer
        visible={visible}
        onClose={() => this.setState({ visible: false })}
      >
        <Button onClick={() => this.modalRef.open()}>Open modal</Button>
        <InfoModal ref={ref => this.modalRef = ref} />
        {lot_content}
      </Drawer>
    )
  }
}

export default InfoDrawer
