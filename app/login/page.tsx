
'use client';

import { FaFacebook } from "react-icons/fa";
import { FcGoogle as Google } from "react-icons/fc";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Card } from '@mui/material';



const SignIn = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Card variant="outlined" sx={{ p: 4, mt: 5 }}>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Sign in
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            type="email"
                            name="email"
                            required
                            fullWidth
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <TextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            type="password"
                            name="password"
                            required
                            fullWidth
                        />
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox value="remember" />}
                        label="Remember me"
                    />

                    <Button type="submit" variant="contained" fullWidth>
                        Sign in
                    </Button>
                </Box>

                <Divider sx={{ my: 2 }}>or</Divider>

                <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Google />}
                    onClick={() => alert('Sign in with Google')}
                >
                    Sign in with Google
                </Button>
                <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<FaFacebook />}
                    onClick={() => alert('Sign in with Facebook')}
                >
                    Sign in with Facebook
                </Button>

                <Typography textAlign="center" sx={{ mt: 2 }}>
                    Don't have an account? <Link href="#">Sign up</Link>
                </Typography>
            </Card>
        </Container>
    );
}

export default SignIn;





