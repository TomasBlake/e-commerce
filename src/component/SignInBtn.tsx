import React from 'react'
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';

interface Props {

}

const SignInBtn: React.FC<Props> = ({}) => {
        return (
            <Button
            variant="outlined"
            startIcon={<LoginIcon />}
            className="snipcart-customer-signin">
                Sign In
            </Button>
        );
}

export default SignInBtn