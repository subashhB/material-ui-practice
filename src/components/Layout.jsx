import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const drawerWidth = 240

const useStyles = makeStyles({
    pages: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer:{
        width: drawerWidth
    },
    drawerPaper:{
        width: drawerWidth
    },
    root:{
        display: 'flex'
    }
})

const Layout = ({ children }) => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        {/* App Bar */}
        {/* Side Drawer */}
        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{paper: classes.drawerPaper}}
        >
            <div>
                <Typography variant='h5'>Nottsu</Typography>
            </div>
        </Drawer>
        <div className={classes.pages}>
            { children }
        </div>
    </div>
  )
}

export default Layout