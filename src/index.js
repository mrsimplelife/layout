import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocaleProvider } from 'antd';
import ko_KR from 'antd/lib/locale-provider/ko_KR';

ReactDOM.render(
	<LocaleProvider locale={ko_KR}>
		<App />
	</LocaleProvider>,
	document.getElementById('root')
);
