import './App.css';
import React from 'react';
import Wrapper from './components/Wrapper';
import Screens from './components/Screens';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './context/CalcContext';

const btnValues=[
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
];

function App() {
  return (
    <CalcProvider className='App'>
      <Wrapper>
      <Screens/>
      <ButtonBox>
        {btnValues.flat().map((btn,i)=>(
          <Button value={btn} key={i}/>
        ))}
      </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
