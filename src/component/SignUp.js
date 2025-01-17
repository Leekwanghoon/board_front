import axios from 'axios'
import styled from "styled-components";
import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Input from './Input';
import Button from './Button';
import Icon from './Icon';
import { Link, useHistory } from 'react-router-dom';

function SignUp() {

  const history = useHistory();

  const FacebookBackground =
  "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground =
  "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground =
  "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    const [id, setId ] = useState("")
    const [pass, setPass ] = useState(0)  
    
    const onSignUpHandler = () => {
      console.log('누름')
      let body = {
        id,
        pass
      }
      axios.post('/api/signUp',body).then(res => {
        if(res.data.status ==="성공"){
          history.push('/')
        } else {
          alert("넌틀렸어")
        }

      })
    }
  
    const idHandler = (e) => {
      setId(e.target.value)
    }
  
    const passHandler = (e) => {
      setPass(e.target.value)
    }
    // <div>
    //         <input placeholder="id" value={id} onChange={idHandler}/>
    //         <input placeholder="pass" value= {pass} onChange={passHandler}/>
    //         <div onClick={onSignUpHandler}>회원가입</div>
    // </div>
    return (
      <MainContainer>
      <WelcomeText>회원가입페이지</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="ID" value={id} onChange={idHandler}/>
        <Input type="password" value={pass} onChange={passHandler} placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onSignUpHandler} content="회원가입하기" />
      </ButtonContainer>
      <Link 
          to="/login" 
          style={{
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white',
            letterSpacing: '0.2rem'
          }}>
        <LoginWith>로그인으로가기</LoginWith>
      </Link>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
    </MainContainer>
    )
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;


export default SignUp
