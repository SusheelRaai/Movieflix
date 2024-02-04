import React from 'react';
import './navListItem.css'

function NavListitem({nav}){
 return(
  <li><a href={nav.link}>{nav.name}</a></li>
 );
}

export default NavListitem;