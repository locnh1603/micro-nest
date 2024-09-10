'use client'

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Toolbar from "@mui/material/Toolbar"
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Link from 'next/link'
export default function SideBar() {
  const getIcon = (text: string) => {
    if (text === 'User') {
      return (<PersonIcon />)
    }
    if (text === 'Product') {
      return (<InventoryIcon />)
    }
    if (text === 'Order') {
      return (<ContentPasteIcon />)
    }
    return <></>
  }
  const getUrl = (text: string) => {
    if (text === 'User') {
      return '/user'
    }
    if (text === 'Product') {
      return '/product'
    }
    if (text === 'Order') {
      return '/order'
    }
    return '/'
  }
  const drawerWidth = 240;
  return (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {['User', 'Product', 'Order'].map((text) => (
          <ListItem key={text} disablePadding>
            <Link href={getUrl(text)} className="navigation-link">
              <ListItemButton>
                <ListItemIcon>
                  {getIcon(text)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>)
}