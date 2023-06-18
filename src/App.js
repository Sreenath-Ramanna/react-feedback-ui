import React from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPageLink from './components/AboutPageLink';
import { NavLink } from 'react-router-dom';
import Card from './components/shared/Card';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

function learnerComponent() {
  const body = 'This is a sample blog post, post';
  const comments = [
    {id: 1, text: 'comment one'},
    {id: 2, text: 'comment two'},
    {id: 3, text: 'comment three'}
  ];
  let showComments = true;
  const commentsBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) =>(
          <li key={index}>{comment.id}: {comment.text}</li>
        ))}
      </ul>
    </div>
  );

  const learnerBlock = (
    <div>
      <h2> Hello from the app component</h2>
      <p>{body}</p>
      <br/>
      {showComments && commentsBlock }
    </div>
  )
  return learnerBlock;
}

function App() {
  const title = 'My App'
  const showLernerBlock = false

  const navLinkExp = false;
  const navLinkComponent = (
    <Card>
      <NavLink to='/' 
        activeClassName='active'>Home</NavLink>
      <NavLink to='/about' 
        activeClassName='active'>About</NavLink>
    </Card>
  )

  const postIdExp = false;
  const postIdExpComponent = (
    <Route path='/post/:id/:auth' element={<Post />} />
    // if /post/* is used for path, further embedded routing 
    // can be done insude the Post component.
    // Need to figure out if both :xyz for params and * for
    // embedded routing can be done.
  )
  
  return (
    <FeedbackProvider>
      <Router>
        <Header textColor='black' bgColor= 'greenyellow'/>
        <div className='container'>
          <h2>{title.toUpperCase()}</h2>
          <Routes>
            <Route exact path='/' element={
              <>
                {showLernerBlock && learnerComponent()}
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutPageLink/>
              </>
            }>
            </Route>

            <Route exact path='/about' element={<AboutPage/>} />
            {postIdExp && postIdExpComponent}
          </Routes>
          {navLinkExp && navLinkComponent}
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
