import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles((theme)=>{
    return{
        pages: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer:{
            width: drawerWidth
        },
        drawerPaper:{
            width: drawerWidth
        },
        root:{
            display: 'flex'
        },
        active:{
            background: '#f4f4f4'
        },
        title:{
            padding: theme.spacing(2)
        },
        appbar:{
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        }
    }
})

const Layout = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text: 'My Notes',
            Icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        },
        {
            text: 'Create Note',
            Icon: <AddCircleOutlined color='secondary'/>,
            path: '/create'
        }
    ]
  return (
    <div className={classes.root}>
        {/* App Bar */}
        <AppBar
            elevation={0}
            className={classes.appbar}
        >
            <Toolbar>
                <Typography className={classes.date}>
                    Today is: { format(new Date(), 'do MMMM Y')}
                </Typography>
                <Typography>
                    Suppose User
                </Typography>
            </Toolbar>
        </AppBar>
        {/* Side Drawer */}
        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{paper: classes.drawerPaper}}
        >
            <div>
                <Typography variant='h5' className={classes.title}>Nottsu</Typography>
            </div>
            {/* List / Links */}
            <List>
                {menuItems.map(item=>(
                    <ListItem
                        button
                        key={item.text}
                        onClick={()=>{history.push(item.path)}}
                        className={location.pathname == item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.Icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        <div className={classes.pages}>
            <div className={classes.toolbar}/>
            { children }
        </div>
    </div>
  )
}

export default Layout