import { useState } from 'react';
import Learner from './components/Learner.jsx';
import LearnerData from './LearnerData.jsx';
import './App.css';

function App() {

 const [LearnerData, setLearnerData] = useState({
  Learners: [
    {
      name: 'Cait Yomorta',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    }]
  })
  return (
    <>
    <h1>Learners </h1>
    <Learner Learner={LearnerData.Learners[0]}/>

    </>
  )
}

export default App
