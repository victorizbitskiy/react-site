import {Col, Image, Layout, Row} from 'antd';
import { Switch, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Title from 'antd/es/typography/Title';
import React, {FC } from 'react';

const About: FC = () => {
  return (
  <Layout style={{background: '#ffffff' }}>
    <Title level={2}>About</Title>
    <Layout.Content >
    <Row>
      <Col span={4}>
      <Image 
      style={{ width: 200, float: 'left' }}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />

      </Col>
      <Col span={3} >
      <Typography.Text ellipsis={false} >
        <div style={{position: "fixed" , }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut ligula ullamcorper, 
          sodales ante dignissim, commodo lorem. In a egestas ex. Sed rhoncus lorem posuere massa rutrum consectetur. 
          In at augue vitae risus fermentum volutpat sagittis nec ex.
        </div>

      </Typography.Text>
      </Col>
      <Col span={3} >
      </Col>
    </Row>
    </Layout.Content>
  </Layout>
  );
};

export default About;