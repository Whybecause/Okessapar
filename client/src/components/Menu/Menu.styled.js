import styled from 'styled-components';


export const StyledMenu = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};  
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center
  justify-content: center;
  // background: #1D1D1B;
  padding-top: 8vh;
  position: fixed;
  top: 8vh;
  


  // a {
  //   font-family: 'Oswald', sans-serif;
  //   font-size: 20px;
  //   padding: 2rem 0;
  //   font-weight: bold;
  //   letter-spacing: 0.5rem;
  //   text-decoration: none;
  //   transition: color 0.3s linear;
    
  //   @media (max-width: 576px) {
  //     font-size: 1.5rem;
  //     text-align: center;
  //   }

  //   &:hover {
  //     color: white;
  //    }
  // }
`;