import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { searchUser } from '../slices/userDetailSlice';
import { Link, useParams } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function Navbar() {

  let [searchItem, setSerachItem] = useState('');

  let allUserData = useSelector(state => state.app);
  let dispatch = useDispatch();
  let params = useParams();
  console.log('parmas seeeee: ', params);


  useEffect(() => {
    dispatch(searchUser(searchItem))
  }, [searchItem])
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static" >
        <Toolbar display='flex' justifyContent='space-around'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: 'flex' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              RTK
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link to='/'>
                Create Post
              </Link>

            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link to='/read'>
                All Post ({allUserData?.users?.length})
              </Link>

            </Typography>

          </div>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              name='search'
              value={searchItem}
              onChange={(e) => { setSerachItem(e.target.value) }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar> */}
      <AppBar position="static">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"

            sx={{
              mr: 2, fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem'
            }}
          >
            CRUD-APP
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0.09, display: { xs: 'none', sm: 'inline' } }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit',fontSize:'15px', fontWeight: 700,
              letterSpacing: '0.1rem' }}>
              Create Post
            </Link>

          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/read' style={{ textDecoration: 'none', color: 'inherit',fontSize:'15px', fontWeight: 700,
              letterSpacing: '0.1rem' }}>
              All Post ({allUserData?.users?.length})
            </Link>

          </Typography>


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              name='search'
              value={searchItem}
              onChange={(e) => { setSerachItem(e.target.value) }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
