import { Button, IconButton } from '@mui/material'
import './Sidebar.css'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import SidebarOption from '../sidebaroption/SidebarOption';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
                Compose
            </Button>

            <SidebarOption
                Icon={InboxIcon}
                title="inbox"
                number="25"
                selected={true} />
            <SidebarOption
                Icon={StarIcon}
                title="Started"
                number="10" />
            <SidebarOption
                Icon={AccessTimeIcon}
                title="Snoozed"
                number="" />
            <SidebarOption
                Icon={LabelImportantIcon}
                title="Important"
                number="7" />
            <SidebarOption
                Icon={NearMeIcon}
                title="Sent"
                number="125" />
            <SidebarOption
                Icon={NoteIcon}
                title="Draft"
                number="2" />
            <SidebarOption
                Icon={ExpandMoreIcon}
                title="More"
                number="" />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
