import React from 'react';
import { AppBar, Toolbar, Typography, Button  } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                >
                    <Typography variant="h6" color="inherit">
                        App Bar
                    </Typography>
                    <div>
                        <Button style={{
                            marginLeft: 10
                        }} variant="contained" color="secondary">
                            <Link to="/">Festivals</Link>
                        </Button>
                        <Button style={{
                            marginLeft: 10
                        }} variant="contained" color="secondary">
                            <Link to="/performers">Performers</Link>
                        </Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
