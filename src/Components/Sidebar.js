import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useStateValue } from '../StateProvider'
 

function Sidebar() {
    const [{playlists}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon}/>
      <SidebarOption title="Search" Icon={SearchIcon}/>
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
        <h5 className="playlists">PLAYLISTS</h5>
        <hr className="sidebar__horizontal"/>
        {playlists?.items?.map((playlist) =>(
            <SidebarOption title={playlist.name} />
        ))}
        </div>
    )
}

export default Sidebar
