import styled from "styled-components";

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758A6;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px #00000040;

  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758A6;
    background-color: #efefef;
    color: #9758A6;
}

.rec.rec-arrow:disabled {
  border: none;
  background-color: #bebebf;
  color: #efefef;
}
`

export const CategoryImg = styled.img`

`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`
export const Image = styled.img`
  width: 200px;
  border-radius: 10px;

`
