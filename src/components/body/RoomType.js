import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

// 방 종류별 이미지 링크와 타이틀
// 이미지는 unsplash source에서 받아옴
// https://cloud-library.tistory.com/entry/Unsplash-Source-%EB%9E%9C%EB%8D%A4-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
// https://unsplash.com/developers
const roomType = [
  {
    type : "거실",
    imgSrc : "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400"
  }, 
  {
    type : "침실",
    imgSrc : "https://source.unsplash.com/900x1300/?interior,bed"
  }, 
  {
    type : "주방",
    imgSrc : "https://source.unsplash.com/900x1300/?kitchen"
  }, 
  {
    type : "욕실",
    imgSrc : "https://source.unsplash.com/900x1300/?interior,bathroom"
  }, 
  /*
  {
    type : "공부방",
    imgSrc : "https://source.unsplash.com/900x1500/?interior,book"
  },   
  */
];

function ActionAreaCard({room}) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={room.imgSrc}
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {room.type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {room.type} 가구 보러가기
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  const Item = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

// roomType 배열의 길이만큼 카드컴포넌트를 그리는 컴포넌트
function ResponsiveGrid() {
    return (
      <Box sx={{ flexGrow: 29 }}>
        <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 18}}>
          {roomType.map((room, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <ActionAreaCard room={room}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

// RoomType 타이틀과 ResponsiveGrid를 포함하는 RoomType컴포넌트
function RoomType() {
    return (
        <Container fixed>
            <h2>Room Type</h2>
            <ResponsiveGrid />
        </Container>
    )
}

export default RoomType;