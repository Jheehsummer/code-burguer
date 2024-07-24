import styled from "styled-components";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


export const Container = styled.div`
  
   
`
export const Image = styled.img`
  width: 130px;
  border-radius: 10px;
`

export const EditIcon = styled(EditOutlinedIcon)`
  cursor: pointer;
  color: #9758A6; 

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

