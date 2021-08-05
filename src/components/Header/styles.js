import styled from "styled-components";

export const HeaderWrap = styled.div`
  background-color: #791e94;
  color: #fff;
  height: 70px;
  box-shadow: 0px 5px 20px #000;

  @media (max-width: 320px) {
      height: 80px;
  }

  .container {
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    img {
      width: 50px;
    }
  }

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    margin-right: 20px;
    color: #fff;
    font-size: 15px;
    display: block;
  }
  ul li {
    display: inline;
  }
  ul li a {
    padding: 2px 10px;
    display: inline-block;
    color: #ededed;
    text-decoration: none;
  }
  ul li a:hover {
    color: #6d6d6d;
    background-color: #ffff;
  }

  @media (max-width: 180px) {
    img {
      display: none;
    }
  }

  @media (max-width: 380px) {
    .icon {
      display: none;
    }
  }
`;
