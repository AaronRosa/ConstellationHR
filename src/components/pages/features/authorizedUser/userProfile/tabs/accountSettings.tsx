import React, { useState, ChangeEvent, FormEvent } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Box,
    Paper,
} from "@mui/material";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../../redux/slices/userSlice';

// Define the type for the form data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const AccountSettingsForm: React.FC = () => {

    //get user data from redux store
    const user = useSelector(selectCurrentUser);

    // State with type annotation
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    // Handle input change with type annotations
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission with type annotations
    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Account Management
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            defaultValue={user.fname}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            defaultValue={user.lname}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            defaultValue={user.email}
                            onChange={handleChange}
                            type="email"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            type="password"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default AccountSettingsForm;