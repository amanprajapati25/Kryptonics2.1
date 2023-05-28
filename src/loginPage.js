import React, { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Input, Button, Card } from 'antd';
import { cardBody, valueField, check, backImage } from './styles';

const { Text } = Typography;

export default function LoginPage() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmitButton = () => {
      console.log('User Email', email);
      console.log('User Password', password);
      history.push('/HomePage');
    };
    const handleForgetPassword = () => {
      history.push('/ForgetPassword');
    };
    return (
        <div style={backImage}>
      <div direction="vertical" style={cardBody}>
        <Card style={{ width: '27rem', height: '21.7rem' }}>
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
                onChange={e => setEmail(e.target.value)}
              />
            </div>
  
            <div>
              <div>
                <Text>Password</Text>
                <Input
                  style={{ width: '23rem' }}
                  type="text"
                  placeholder="Enter Your passoword"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
  
            <div style={check}>
              <div style={{ display: 'flex', gap: '0.3rem' }}>
                <Input
                  type="checkbox"
                  style={{ width: '1rem', height: '1rem' }}
                  id="rememberMeField"
                />
                <Text style={{ position: 'relative', bottom: '2px' }}>
                  Remember me
                </Text>
              </div>
              <Button
                type="link"
                style={{
                  color: '#616161',
                  position: 'relative',
                  bottom: '5px',
                }}
                onClick={() => handleForgetPassword()}
              >
                Forget Password
              </Button>
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
            onClick={() => handleSubmitButton()}
          >
            Submit
          </Button>
        </Card>
      </div>
      </div>
    );
  }
  