import React, {FC } from 'react';
import {Col, Image, Layout, Row} from 'antd';
import { Typography } from 'antd';
import '../pages/pages.css'

const About: FC = () => {
  return (
  <Layout className='pages-layout'>
    <Layout.Content className='page-about-content'>
    <Row className='page-about-row'>
      <Col span={3} >
      <Image 
        className='page-about-image'
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      </Col>
      <Col span={11} >
      <Typography.Text className='page-about-text' ellipsis={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut ligula ullamcorper, 
        sodales ante dignissim, commodo lorem. In a egestas ex. Sed rhoncus lorem posuere massa rutrum consectetur. 
        In at augue vitae risus fermentum volutpat sagittis nec ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse ut ligula ullamcorper, sodales ante dignissim, commodo lorem. In a egestas ex. 
        Sed rhoncus lorem posuere massa rutrum consectetur. In at augue vitae risus fermentum volutpat sagittis nec ex.
      </Typography.Text>
      </Col>
      <Col span={10} >
      </Col>
    </Row>
    </Layout.Content>
  </Layout>
  );
};

export default About;