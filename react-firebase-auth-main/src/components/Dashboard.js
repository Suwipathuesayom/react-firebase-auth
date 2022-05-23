import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const DashBoard = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  return (
    <div>
      <div className="container mt-5">
        <h1>ยินดีต้อนรับ</h1>
        <p>นี่คือหน้าแดชบอร์ด หากคุณเห็นสิ่งนี้แสดงว่าคุณเข้าสู่ระบบแล้ว.</p>
        <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
    </Stack>
     <br></br>
        <button
          onClick={() => firebaseConfig.auth().signOut()}
          class="btn btn-danger"
        >
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
