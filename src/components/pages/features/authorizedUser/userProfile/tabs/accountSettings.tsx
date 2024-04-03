import React from 'react';

import { TextField, Button, Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../../redux/slices/userSlice';

const AccountSettingsForm: React.FC = () => {

    //get user data from redux store
    const user = useSelector(selectCurrentUser);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Box>
            <h2>Account Settings</h2>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField label="First Name" variant="outlined" defaultValue={user.fname} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Last Name" variant="outlined" defaultValue={user.lname} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" variant="outlined" defaultValue={user.email} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" variant="outlined" type="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>

    );
};

export default AccountSettingsForm;