import React, {FC } from 'react';
import {Col, Image, Layout, Row} from 'antd';
import { Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import '../pages/pages.css'

const About: FC = () => {
  return (
  <Layout className='Pages-layout'>
    {/* <Title level={2}>About</Title> */}
    <div style={{height: '25px'}}></div>
    <Layout.Content >
    <Row style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(0, 0, 0)'}}>
      <Col span={3} >
      <Image 
      style={{float: 'left' }}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      </Col>
      <Col span={11} >
      <Typography.Text ellipsis={false} style={{ left: "20px", position: "relative" }}>
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