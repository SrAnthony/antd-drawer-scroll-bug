import React from 'react'
import { Modal } from 'antd'

class InfoModal extends React.Component {
   state = {
     visible: false,
   }

  open = () => {
    this.setState({ visible: true })
  }

  render() {
    const { visible } = this.state

    return (
      <Modal
        visible={visible}
        onCancel={() => this.setState({ visible: false })}
      >
        My info
      </Modal>
    )
  }
}

export default InfoModal
