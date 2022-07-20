import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiChopsticks, GiWhiteBook } from "react-icons/gi"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import IcecreamIcon from "@mui/icons-material/Icecream"

export default function Category() {
  return (
    <List>
      <Slink to={`/cuisine/Italian`}>
        <FaPizzaSlice />

        <h4>Italian</h4>
      </Slink>
      <Slink to={`/cuisine/American`}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={`/cuisine/Thai`}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={`/cuisine/Chinese`}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </Slink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem, 0;
`
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #8acedb, #8acedb);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 2rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #f04328);
  }
  svg {
    color: white;
  }
  h4 {
    color: white;
  }
`
