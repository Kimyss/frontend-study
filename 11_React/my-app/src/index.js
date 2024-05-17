import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/jsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropsUse from './chapter5/5.3/PropUse';
import CommentEx from './chapter5/5.6/CommentEx';
import CommentList from './chapter5/CommentList';
import Counter from './chapter7/7.2/Counter';
import MailBox from './chapter9/9.3/MailBox';
import LoginControl from './chapter9/9.2/LoginControl';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import NumberList from './chapter10/10.1/NumberList';
import ListKey from './chapter10/10.2/ListKey';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRefactory from './chapter11/11.4/ReservationRefactory';
import SignUp from './chapter11/SignUp';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import FileInput from './chapter11/11.3/FileInput';
import UnitCalculator from './chapter12/UnitCalculator';
import FancyBoader from './chapter13/13.1.1.1/FancyBorder';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';
import Card from './chapter13/Card';
import ProfileCard from './chapter13/ProfileCard';
import StyledPage from './chapter15/StyledPage';
import Blocks from './chapter15/theme/Blocks';
import ThemeApp from './chapter15/theme/ThemeApp';
import CounterEffect from './chapter7/7.3/ex1/CounterEffect';
import TimerContainer from './chapter7/7.3/ex2/TimerContainer';
import EffectContainer from './chapter7/7.3/ex3/EffectContainer';
import EffectSummary from './chapter7/7.3/ex3/EffectSummary';
import SimpleRouter from './chapter16/SimpleRouter';





const root = ReactDOM.createRoot(document.getElementById('root'));

const messages = 2;

// Root DOM Node에 리액트 컴포넌트를 렌더링 하도록 하는 함수(React 엘리먼트를 DOM 엘리먼트로 렌더링하는 역할)
// 처음으로 렌더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음
root.render(
  // <React.StrictMode>
    // <App />///
  // </React.StrictMode> 

  // 3장 예제
  // <JsxUse/>
  // <Library />

  // 5장 예제
  // <PropsUse />

  // <CommentEx
  //   date = {new Date()}
  //   text = "리액트를 즐기세요"
  //   user = {{
  //     name: 'hello kitty',
  //     avatarUrl: 'http://placekitten.com/200/300'
  //   }}
  // />


  // <CommentList />
  
  //7장예제 
  // <Counter />
  // <TextInputWithFocusButton />
  // <ComponentVariable />
  // <CounterEffect />
  // <TimerContainer />
  // <EffectContainer />

  


  // 9장예제
  // <MailBox unreadMessages = {['react', 'Re: React', 'Re:Re: React']}/>
  // <MailBox unreadMessages = {[]} />

  // <LoginControlRefactoring />
  // <MainPage />
  // <LandingPage />

  // 10장예제
  // <NumberList />
  // <ListKey />

  // Quiz
  // <AttendanceBook />

  // 11장
  // <NameForm />
  // <EssayForm />
  // <FlavorForm />
  // <Reservation />
  // <ReservationRefactory />
  // <FileInput />

  // 12장 예제
  // <UnitCalculator />

  // 13장 예제
  // <FancyBoader />
  // <WelcomeDialog />
  // <SplitPaneSection />
  // <DialogContainer />
  // <SignUpDialog />
  // <ProfileCard />

  // 14장 예제
  // <StyledPage />
  // <Blocks />
  // <ThemeApp />

  <SimpleRouter />

  // SignUp Quiz
  // <SignUp />
);
// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링하는 코드
// setInterval(()=>{
//   root.render(<Clock />);
// }, 1000);
// <Clock />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
