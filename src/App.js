import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import img from './다운로드.jpg';
import img1 from './17493_36286_524.jpg';
const App = () => (
	<div>
		<Router basename={process.env.PUBLIC_URL}>
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
				<Route exact component={NoMatch} />
			</Switch>
		</Router>
	</div>
);
const NoMatch = () => <div>그런 페이지 없어요</div>;

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
					<Link
						to={{
							pathname: '/book/1',
							state: {
								bookname: '오늘도 무사히',
								img
							}
						}}
					>
						<img src={img} alt="" style={{ width: '100%', height: '390px' }} />
						오늘도 무사히
					</Link>
				</div>
				<div>
					<Link
						to={{
							pathname: '/book/2',
							state: {
								bookname: '나와 싸워 이기라',
								img: img1
							}
						}}
					>
						<img src={img1} alt="" style={{ width: '100%', height: '390px' }} />
						나와 싸워 이기라
					</Link>
				</div>
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};

const Book = ({ match, location }) => {
	const { params: { bookId } } = match;
	console.log(bookId);
	const { state: { bookname } } = location;
	const { state: { img } } = location;

	return (
		<div>
			<style>
				{`
				.book{
					float:left;
					margin-left: 40px;
					margin-right: 40px;
				}
				.contents h3{
					padding-top:40px;
				}
				@media(max-width:650px){
					.book{
						margin: 0 auto;
						float:none;
					}
					.contents h3{
						padding-top:0px;
					}			
					.contents{
						margin: 0 20px;
					}		
				}
				`}
			</style>
			<div className="book" style={{ width: '300px' }}>
				<h3 style={{ textAlign: 'center' }}>{bookname}</h3>
				<img src={img} alt="" style={{ width: '100%', height: '500px' }} />
			</div>
			<div className="contents">
				<h3>저자: dasiwer!!!</h3>
				<p>
					캐릭캐릭 체인지의 주인공이다. 성우는 이토 카나에[4]/이용신.[5][6] 뮤지컬판은 마에다 유카. 이름의 어원은 1인칭 be동사인 am(일본식으로 발음하면 '아무')이며,
					'부적'을 의미하는 애뮬릿(Amulet)과도 이중적인 의미이기도 하다. 자신을 가리키는 1인칭은 아타시. 밝은 파스텔톤의 분홍머리에 금안, 그리고 사과머리가 특징인 소녀로, 세이요
					초등학원의 쿨걸로 유명한 '쿨 앤 스파이시 초등학생'[7] 초등학생이지만 키가 꽤 크다.[8]이지만, 사실은 소심하고 솔직하지 못한 성격으로 고민하고 오컬트에 약한 평범한
					소녀이다. 말재주 없는 것을 쿨한 걸로, 고집불통의 성격을 멋진 것으로 오해받는 '대외용 캐릭터'가 따로 노는 소녀. 작중 외모는 매우 뛰어난 편이다. 학교 내에선 거의 아이돌에
					가까운 팬덤을 보유하고 있고, 한 에피소드에선 인기 모델 사쿠라이 유아의 제안에 즉석에서 같이 화보를 촬영하기도 한다. 나중엔 교내 여학생 인기투표에서 1등을 차지하고 애니에선
					히이라기 릿카의 대사 "~난 선배처럼 예쁘지도 않고~"로 확실시했다. 위의 대외용 캐릭터와 맞물리며 아무의 말도 안 되는 인기와 비범한 플래그 무쌍(?)에 한몫했다.[9] 보유
					수호캐릭터는 란, 미키, 수우, 다이아의 4명으로 작중에서 가장 많은 수호캐릭터를 가지고 있다. 4학년이었던[10] 어느 날 진정한 자신이 되고 싶다고 빌자, 다음날 아침에
					빨강색, 파랑색, 초록색 알이 생겨났고 그 안에서 란, 미키, 수우가 먼저 태어나게 되었다. 이후 6학년이 되어서는 다이아가 태어나게 될 노란색 알도 추가. 하지만 다이아가 태어나
					아무의 수호캐릭터가 되기까지는 험난한 일들이 많았다. 상세한 내용은 다이아 항목 참조. 어찌되었든 세 명의 수호캐릭터를 가지게 된 덕분에 세이요 초등학원 가디언의 조커로 뽑힌다.
					조커에게 주어지는 아이템 '험프티 록'을 가지고 있으며[11] 이 힘으로 X알의 X를 떼거나, 다른 수호캐릭터와 캐릭터 변신을 하거나, 다른 친구들이 캐릭터 변신을 할 수 있게끔
					한다.[12] 자기 자신이 생각하는 '말재주 없고 고집불통'과는 다르게 다른 사람과 잘 융화하는 성격. 니카이도 유우가 말하길, 주위 사람들을 끌어들이는 독특한 파워가 있다고
					한다. 애당초 X알의 X를 떼는 일의 일부 중 하나가 대상의 오만가지 상념에 공감해줘야 하는 일이니... 또 어린 여동생이 있어서 아기를 돌보는 것에도 뛰어나다. 다만 성향상
					자기를 낮춰보는게 좀 심해서 스스로에겐 저런 평가를 내리는듯. 코멘트 6페이지:'말재주 없고 고집불통'과는 다르게 다른 사람과 잘 융화하는 성격.
				</p>
			</div>
		</div>
	);
};

export default App;
