import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 12px;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 110px;
  height: 20vh;
  background-color: #0d0d0d;

  > img {
    width: 146px;
    height: 68px;
  }
`
export const Content = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SearchInput = styled.header`
  width: 50%;
  @media (max-width: 900px) {
    width: 90%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 50px;
  margin-top: -25px;

  > input {
    color: white;
    background-color: #262626;
    height: 100%;
    width: 100%;
    font-size: 16px;
    padding-left: 12px;
    border-radius: 8px;
    border: 1px solid black;
    outline: none;
  }

  > button {
    font-weight: 700;
    background-color: #1e6f9f;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 16px;
    border-radius: 8px;
    outline: none;
    border: none;
    gap: 8px;
    cursor: pointer;

    &:hover:not(:disabled) {
      transition: 0.2s;
      filter: brightness(120%);
    }
  }
  > button:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`

export const ToDoList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 72px;
`

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  @media (max-width: 900px) {
    width: 90%;
  }
  > :first-child {
    color: #4ea8de;
  }

  > :nth-child(2) {
    color: #8284fa;
  }
`

export const ListContent = styled.div`
  margin-top: 24px;
  width: 50%;
  @media (max-width: 900px) {
    width: 90%;
  }
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > :nth-child(2) {
    color: white;
    background-color: #262626;
    padding: 2px 6px;
    border-radius: 6px;
  }
`

export const Task = styled.div`
  width: 100%;
  background-color: #333333;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover:not(:disabled) {
      transition: 0.2s;
      filter: brightness(150%);
    }
  }
`
export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;
  word-break: break-all;
  padding-right: 24px;
`
