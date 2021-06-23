import React, { Component } from 'react';
import rehypeRaw from 'rehype-raw'

import { Layout, Menu, Breadcrumb, BackTop } from 'antd';

import "../Styles/IndexPage.less";

import pic1 from "../Images/1.png";
import pic2 from "../Images/2.png";
import pic3 from "../Images/3.png";
import pic4 from "../Images/4.png";
import pic5 from "../Images/5.png";
import pic6 from "../Images/6.png";
import pic7 from "../Images/7.png";
import pic8 from "../Images/8.png";


const { Header, Content, Footer } = Layout;

const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')

const markdown = `# 我的技术栈

Web应用后端开发：.NET 5/.NET Core/.NET Framework + EntityFramework或NewLife.XCode

数据库构建：MySQL及其派生,如MariaDB + Redis

Web前端构建：React.js + Ant Design/Material Design + ECharts + react-router + 其他组件或自定义组件

桌面应用构建：.NET中的WinForm、WPF

---

# 我的部分作品

### 1.智能分析服务演示系统 - 前端

个人负责部分：Web前端

<a href="https://smartdemo.ipdle.com" target="_blank">DEMO网站</a> 用户名:test 密码:test

该作品是我在大学实习时为一个大型项目的展示端开发的前端项目，该项目由后台的深度学习网络+图像处理服务端+前端部分组成。

由于当初项目时间较为紧促，使用了Websocket作为前后端图像传输方案（后续采用了RTC协议进行传输）。整个UI框架使用Material Design和自定义组件深度定制完成，根据设计图完美复刻了设计原案并加入了相关的组件特效。同样也是时间原因，原计划使用非线性动画的部分暂时使用了普通线性动画代替。

表格部分使用了react-table组件完成，图表部分使用了ECharts组件，短时间内能够快速实现美观的前端UI效果。

在DEMO网站中，由于保密原因，原公司的服务端是无法再次访问的。可在DEMO站中了解前端设计的相关效果。

#### UI示范图片

<img style="display:block;margin-bottom:0.5rem" src="${pic1}" width="50%"/>

##### 佩戴口罩界面UI

<img style="display:block;margin-bottom:0.5rem" src="${pic2}" width="50%"/>

##### 历史数据界面UI

<img style="display:block;margin-bottom:0.5rem" src="${pic3}" width="50%"/>

##### 能耗预测界面UI

### 2.海绵城市监测系统

个人负责部分：前端设计、后端、数据服务端 

<a href="http://121.199.42.23/" target="_blank">DEMO网站</a> 用户名:test 密码:123456 （首次打开需要一会，登录后如遇图表无数据请刷新一下页面）

该项目由硬件+软件端组成，该作品也作为毕业论文发表，<a href="https://1drv.ms/b/s!Av2Fc9NE9u042EbnU9Qb27-wrDYw?e=7nTIDj" target="_blank">论文地址</a>。

#### UI示范图片

<img style="display:block;margin-bottom:0.5rem" src="${pic5}" width="50%"/>

##### 传感器数据一览UI

<img style="display:block;margin-bottom:0.5rem" src="${pic6}" width="50%"/>

##### 传感器具体数据走向UI

### 3.Cyrus Process Launcher进程启动器 

个人负责部分：全部

<a href="https://github.com/Cyrus-Vance/Cyrus-Process-Launcher" target="_blank">GitHub仓库地址</a>

该作品是特殊时期用于辅助搭载了Windows Server系统的服务器进行开机相关进程管理的辅助工具。可用于Windows系统的自定义进程自启动、先后启动顺序自定等。

在该进程启动器中，利用.NET的Process类以及调用WinAPI实现了完整的进程管理和系统级的进程源信息获取。该作品的详细源代码已经在GitHub公开，可通过上面的链接找到该项目的源代码进行参考。（有趣的是，该项目已被GitHub官方加入2020年北极代码仓库计划）

为保证兼容性和稳定性，同时兼顾应用的良好交互性，该项目使用了WinForm作为界面实现。

#### UI示范图片

<img style="display:block;margin-bottom:0.5rem" src="${pic4}" width="50%"/>

##### CPL主界面

### 4.暖萤信息平台 

个人负责部分：后端构建 + 数据库构建 + 架构设计

该平台为在大学期间创立的公司中任职时负责开发的商业项目，该项目为面向社会的家教信息、培训信息发布平台，预计2020年夏季上线。由于新冠疫情原因，该项目被迫长期暂停，原公司也已经暂停运作。

该项目采用ASP.NET Core WebAPI作为后端服务端，利用IdentityServer4实现鉴权管理，通过服务器集群和Nginx的upstream实现负载均衡。通过Keepalived实现多节点高可用、Redis实现高速读写数据缓存化。

### 5.神奇海螺 - QQ机器人

个人负责部分：全部

该项目为个人实验性项目，使用.NET Core作为核心，利用mirai-console作为交互内核，实现具有丰富聊天功能的QQ机器人。该机器人可进行日常娱乐交流，API调用查询图片等功能。

### 5.鲜鱼高校通（开发中）

<a href="https://studentadmin.ipdle.com/" target="_blank">DEMO网站</a>（由于网站开发中，不一定可实时登录）

<a style="margin-right:2rem" href="https://studentadmin-api.ipdle.com/swagger" target="_blank">管理后台Swagger调试面板</a><a href="https://stu-api.ipdle.com/swagger" target="_blank">前端Swagger调试面板</a>

个人负责部分：前后端设计开发 + 移动端界面设计

该项目使用ASP.NET Core WebAPI作为后端API实现，利用IdentityServer4实现鉴权管理，利用React.js实现网页管理后台前端。使用MariaDB+Redis实现读写分离、自动建立缓存的高效数据架构，可实现高校学生管理部门进行日常课程签到、调查填表、信息统计、查寝上报、请假批假等功能。

#### UI示范图片

<img style="display:block;margin-bottom:0.5rem" src="${pic8}" width="20%"/>

##### 高校通用户端UI - 1

<img style="display:block;margin-bottom:0.5rem" src="${pic7}" width="20%"/>

##### 高校通用户端UI - 2

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
                            <Menu.Item key="github"><a href="https://github.com/Cyrus-Vance" target="_blank" rel="noreferrer">GitHub</a></Menu.Item>
                        </Menu>
                    </Header>
                    <Content className="content-page">
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">
                            <BackTop />
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