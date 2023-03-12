import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// new navcard 전용 라이브러리
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import NavCard_Typography from '../../css/NavCard_Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));
const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '25vh',   // 컴포넌트 높이
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));
// 이미지와 버튼 타이틀과 사이즈 (%) 값이 들어있는 배열. 버튼을 추가하거나 없앨때 여기만 조작하면 됨.
const images = [
  {
    url: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400',
    title: '상품 보러가기',
    width: '38%',
  },
  {
    url: 'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400',
    title: '인테리어 플랜 서비스',
    width: '38%',
  },
  {
    url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400',
    title: '추천 가구',
    width: '24%',
  },
  {
    url: 'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400',
    title: '모델하우스',
    width: '60%',
  },
  {
    url: 'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400',
    title: 'FULLHOUSE 브랜드 소개',
    width: '40%',
  },
];
function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <NavCard_Typography variant="h4" marked="center" align="center" component="h2">
        {/* 링크 박스 상단 문구 for all taste and all desire 기본적으로 들어있던거라 지워도 됩니다*/}
        For all tastes and all desires
      </NavCard_Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {/* 이미지 배열을 순회하며 배열 내용을 하위 컴포넌트 props로 전달하며 갯수에 맞게 버튼을 생성한다. */}
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <NavCard_Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </NavCard_Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
// ==============================================================================================



function NavCard() {
    return (
        <React.Fragment>
            <Container fixed>
                
                {/*<h2>NavCard</h2>*/}
                {/*<FullBorderedGrid />*/}
                <ProductCategories />
            </Container>

        </React.Fragment>
    )
}

export default NavCard;

/* https://mui.com/store/previews/onepirate/ 이 페이지에서 가져온 카드형식 링크 디자인


*/