import React from 'react';
import ReviewsList from "./components/reviewList/reviewsList";
import "./App.css";
import "./components/reviewList/reviewsList.css";
import "./components/addReview/review.css";
import Review from "./components/addReview/review";
import Context from './components/context/context'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [reviews, setReviews] = React.useState([
    {
      id: 1, userName: 'Ivan Borsh', userPosition: 'Senior Front End Developer at Amazon', date: '1 січня 2020', reviewText: 'Елементом українського поступу до економічного' +
          ' розвитку та суспільної стабільності є успішна реалізація' +
          ' амбітного проекту створення електронних торговельних майданчиків, одним з яких став E-tender', mark: 0, clicked: false
    },
    {
      id: 2, userName: 'Aleksey Nazarov', userPosition: 'Director at Ciklum Ukraine', date: '3 січня 2020', reviewText: 'Елементом українського поступу до економічного' +
          ' розвитку та суспільної стабільності є успішна реалізація' +
          ' амбітного проекту створення електронних торговельних майданчиків, одним з яких став E-tender', mark: 3, clicked: false
    },
    {
      id: 3, userName: 'Dmytro Sholomko', userPosition: 'Country Director at Google Ukraine', date: '12 січня 2020', reviewText: 'Елементом українського поступу до економічного' +
          ' розвитку та суспільної стабільності є успішна реалізація' +
          ' амбітного проекту створення електронних торговельних майданчиків, одним з яких став E-tender', mark: 2, clicked: false
    },
  ]);



  function answerUser(id) {
    reviews.map(review => {
      if (review.id === id) {
        // textReview = `@${review.userName.split(' ').join('')}`;
      }
      return review
    })
  }

  const likeComment = id =>{
    setReviews(
        reviews.map(review => {
          if (review.id === id) {
            if (review.clicked === false){
              review.mark = review.mark + 1;
              review.clicked = true;
            } else {
              review.mark = review.mark - 1;
              review.clicked = false;
            }
          }
          return review
        })
    )
  }

  function cancel() {
    let comment = document.getElementById('comment');
    comment.value = '';
  }

  function removeReview(id) {
    setReviews(reviews.filter(review => review.id !== id))
  }

  function addReview(textReview) {
    setReviews(reviews.concat([{
      id: Date.now(),
      userName: 'New User',
      userPosition: 'New Position',
      date: '7 січня 2020',
      reviewText: textReview,
      mark: 5,
      clicked: false
    }]))
  }

  return (
      <Context.Provider value={{ removeReview, answerUser, likeComment }}>
        <div className="companyReviews">
          <div className='reviewList'>
            <div className="reviewList-header">
              { reviews.length ? <p>Коментарі</p> : ''}

            </div>
            <ReviewsList reviews={reviews} />
            <Review onCancel={cancel} onCreate={addReview}/>
          </div>
        </div>
      </Context.Provider>
  )
}

export default App;
