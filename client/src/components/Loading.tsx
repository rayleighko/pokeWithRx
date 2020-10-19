import React from 'react'
import { Spin, Space } from 'antd';

const Loading = () => {
    return (
        <div style={{ width: '300px', lineHeight: '300px', margin: '0 auto', textAlign: 'center' }}>
            <Space align="center">
                <Spin tip="Loading...">
                </Spin>
            </Space>
        </div>
    )
}

export default Loading