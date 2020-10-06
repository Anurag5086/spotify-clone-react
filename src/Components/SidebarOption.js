import React from 'react'
import './SidebarOption.css'

function SidebarOption({title, Icon}) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="sidebaroption__icon"/>}
    {Icon ? <h4 className="sidebaroption__title">{title}</h4> : <span className="sidebaroption__title__span">{title}</span>}
        </div>
    )
}

export default SidebarOption
