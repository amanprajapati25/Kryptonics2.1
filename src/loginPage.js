import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Input, Button, Card, notification } from 'antd';
import { cardBody, valueField, backImage } from './styles';

const { Text } = Typography;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'Incorrect Creditial (use Email id - aman1@gmail.com and Password - "12345")',
    });
  };

  const handleSubmitButton = () => {
    if (
      (email === 'aman1@gmail.com' || email === 'ankit@gmail.com') &&
      (password === '12345' || password === 'aman12345')
    ) {
      history.push('/HomePage');
    } else {
      openNotificationWithIcon('error');
    }
  };

  return (
    <div style={backImage}>
      <div style={cardBody}>
        <Card style={{ width: '27rem' }}>
          <Typography>
            <h2 style={{ marginTop: '0rem' }}>Login</h2>
          </Typography>
          <div style={valueField}>
            <div>
              <Text>Email</Text>
              <Input
                style={{ width: '23rem' }}
                type="text"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Text>Password</Text>
              <Input
                style={{ width: '23rem' }}
                type="password"
                placeholder="Enter Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button
            type="primary"
            style={{
              background: '#3E86DE',
              width: '23rem',
              marginTop: '1rem',
              height: '2.5rem',
            }}
            onClick={handleSubmitButton}
          >
            Submit
          </Button>
        </Card>
      </div>
    </div>
  );
}
