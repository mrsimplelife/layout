import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import img from './다운로드.jpg';
import img1 from './17493_36286_524.jpg';
const App = () => (
	<Router basename={process.env.PUBLIC_URL}>
		<div>
			<ul>
				<li>
					<Link to="/">홈</Link>
				</li>
				<li>
					<Link to="/books">내책</Link>
				</li>
			</ul>

			<hr />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/books" component={Books} />
				<Route exact path="/book/:bookId" component={Book} />
			</Switch>
		</div>
	</Router>
);

const Home = () => (
	<div>
		<h2>홈</h2>
	</div>
);

const Books = ({ match }) => {
	return (
		<div>
			<h2>내책</h2>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, 219px)',
					gridGap: '59px',
					justifyContent: 'center'
				}}
			>
				<div>
					<img src={img} alt="" style={{ width: '100%', height: '390px' }} />
					<Link to="/book/1">오늘도 무사히</Link>
				</div>
				<div>
					<img src={img1} alt="" style={{ width: '100%', height: '390px' }} />
					<Link to="/book/2">나와 싸워 이기라</Link>
				</div>
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};

const Book = ({ match }) => {
	console.log('실행');
	return (
		<div>
			<h3>{match.params.bookId}</h3>
		</div>
	);
};

export default App;
