import { Container, ItemContainer, ListLink } from "./styles";
import React from "react";
import ListLinks from "./menu-list";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useUser } from "../../hooks/UserContext";
import PropTypes from "prop-types";



export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {ListLinks.map(item => (
      <ItemContainer key={item.id} isActive={path === item.link}>
        <item.icon className='icon' />
        <ListLink to={item.link}>{item.label}</ListLink>
      </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: '30px'}}>
        <LogoutOutlinedIcon style={{ color: '#efefef' }}/>
        <ListLink to='/login' onClick={logout} >Sair</ListLink>
      </ItemContainer>
    </Container>
  )
}


SideMenuAdmin.propTypes = {
   path: PropTypes.string
}