import styled from 'styled-components'

export const Container = styled.div`
  width: min(90%, 600px);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  padding: 3rem;
  animation: fadeIn 0.5s ease-in-out;
  margin: 0 auto;
  margin-top: 50px;
`

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #2ecc71;
  text-align: center;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`