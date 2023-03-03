import * as React from 'react';
import { useState } from 'react';
import { styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
// 쇼핑카트 아이콘 설정 https://mui.com/material-ui/react-badge/
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';

// 페이지 이동 버튼 타이틀과 실제 링크
const pages = ['상품', '모델하우스', '예산 맞춤 서비스', '블로그'];
const links = ['/items', '/modelhouses', '/budget', '/blog'];

// 아이콘 스타일 설정
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

// 검색창 div 스타일 설정
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// ===================================== AppBar 컴포넌트 =====================================
export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // 우측 사용자 메뉴 열림 여부
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // 유저 메뉴 오픈
  const handleProfileMenuOpen = (event) => {  
    setAnchorEl(event.currentTarget);
  };

  // 모바일 - 우측 버튼 open/close
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // 페이지 링크 메뉴 open/close
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // 우측 사용자 메뉴 컴포넌트
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose} 
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  // 모바일용 우측 메뉴 컴포넌트
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // react-router-dom 페이지 이동용 함수
  let navigate = useNavigate();

  let [drawerOpen, setDrawerOpen] = useState(false);

  // ===================================== RETURN =====================================
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          {/* drawer 메뉴 버튼 */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              console.log('menu button clicked');
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* 타이틀 FULLHOUSE */}
          <Button 
            onClick={()=> {navigate('/')}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="white"    // 폰트 색상
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              FULLHOUSE
            </Typography>            
          </Button>

          {/* 검색창 */}          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* 페이지 이동 버튼 */}             
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>   
            {pages.map((page, i) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                onClick={() => {
                  setAnchorElNav(null);
                  navigate(links[i]);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}      
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          {/* 우측 버튼 - 장바구니, 유저 */}             
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* 장바구니 */}               
            <IconButton aria-label="cart" onClick={() => { navigate('/cart') }}>
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>

            {/* 유저 아이콘 */}               
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle  onClick={()=> {console.log('user icon clicked')}}/>
            </IconButton>
          </Box>
          {/* 유저 메뉴 */}              
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  
      {/* 클릭하면 열리는 메뉴들 */}
      {renderMobileMenu}  {/* 모바일용 우측 메뉴창 */}
      {renderMenu}        {/* 우측 사용자 메뉴창 */}

      {/* 좌측 탭 메뉴 - 참고자료: https://mui.com/material-ui/react-drawer/  https://webdevassist.com/reactjs-materialui/material-ui-navigation-drawer */}
      <Drawer open={drawerOpen} anchor={'left'} onClose={() => setDrawerOpen(false)}>
        <div style={{width: 250}}>
          <p>Hello</p>
        </div>
      </Drawer>
      {
        // 작동을 안한다... 
        // drawerOpen ? <Drawer open={drawerOpen} anchor='left' onClose={setDrawerOpen(false)}/> : null
      }
    </Box>
  );
}
