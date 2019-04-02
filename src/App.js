import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => (
	<Layout style={{}}>
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			<div
				className="logo"
				style={{
					width: '120px',
					height: '31px',
					background: 'rgba(255,255,255,.2)',
					margin: '16px 24px 16px 0',
					float: 'left'
				}}
			/>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '3' ]} style={{ lineHeight: '64px' }}>
				<Menu.Item key="1">홈</Menu.Item>
				<Menu.Item key="2">검색</Menu.Item>
				<Menu.Item key="3">내책</Menu.Item>
			</Menu>
		</Header>
		<Content style={{ padding: '0 50px', marginTop: 64 }}>
			{/* <Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>홈</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb> */}
			<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
		</Content>
		<Footer style={{ textAlign: 'center' }}>심심하다</Footer>
	</Layout>
);

export default App;
