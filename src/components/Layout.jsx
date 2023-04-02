import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    pages: {
        background: '#f9f9f9',
        width: '100%'
    }
})

const Layout = ({ children }) => {
    const classes = useStyles()
  return (
    <div>
        {/* App Bar */}
        {/* Side Drawer */}
        <div className={classes.pages}>
            { children }
        </div>
    </div>
  )
}

export default Layout