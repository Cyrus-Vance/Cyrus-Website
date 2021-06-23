import React, { Component } from 'react';
import rehypeRaw from 'rehype-raw'

import { Layout, Menu, Breadcrumb } from 'antd';

import "../Styles/IndexPage.less";

import pic1 from "../Images/1.png";
import pic2 from "../Images/2.png";
import pic3 from "../Images/3.png";


const { Header, Content, Footer } = Layout;

const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')

const markdown = `# 我的技术栈

### Web应用后端开发

.NET 5/.NET Core/.NET Framework + EntityFramework或NewLife.XCode

数据库构建：MySQL及其派生,如MariaDB + Redis

Web前端构建：React.js + Ant Design/Material Design + ECharts + react-router + 其他组件或自定义组件

桌面应用构建：.NET中的WinForm、WPF

---

# 我的作品

### 1.智能分析服务演示系统 - 前端

<a href="https://smartdemo.ipdle.com" target="_blank">DEMO网站</a> 用户名:test 密码:test

该作品是我在通号智慧城市研究设计院有限公司实习时为一个大型项目的展示端开发的前端项目，该项目由后台的深度学习网络+图像处理服务端+前端部分组成。

由于当初项目时间较为紧促，使用了Websocket作为前后端图像传输方案（后续采用了RTC协议进行传输）。整个UI框架使用Material Design和自定义组件深度定制完成，根据设计图完美复刻了设计原案并加入了相关的组件特效。同样也是时间原因，原计划使用非线性动画的部分暂时使用了普通线性动画代替。

表格部分使用了react-table组件完成，图表部分使用了ECharts组件，短时间内能够快速实现美观的前端UI效果。

在DEMO网站中，由于保密原因，原公司的服务端是无法再次访问的。可在DEMO站中了解前端设计的相关效果。

#### UI示范图片

<img style="display:block;margin-bottom:0.5rem" src="${pic1}" height="300"/>

##### 佩戴口罩界面UI

<img style="display:block;margin-bottom:0.5rem" src="${pic2}" height="300"/>

##### 历史数据界面UI

<img style="display:block;margin-bottom:0.5rem" src="${pic3}" height="300"/>

##### 能耗预测界面UI

### 2.海绵城市监测系统 - 前端设计、后端、数据服务端  

`

class IndexPage extends Component {
    render() {
        return (
            <>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['index']}>
                            <Menu.Item key="index">首页</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 150px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">
                            <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} children={markdown} />
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Cyrus Vance 2021</Footer>
                </Layout>

            </>
        );
    }
}

export default IndexPage;