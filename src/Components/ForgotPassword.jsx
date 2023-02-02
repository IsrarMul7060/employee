import React from 'react'
import { Card, CardContent, Grid, TextField, Button } from '@mui/material'


export const ForgotPassword = () => {
    return (
        <React.Fragment>
            <Card style={{ width: "400px", marginLeft: "37%", marginTop: "100px" }}>
                <CardContent align="center">

                    <Grid container spacing={3}>

                        <Grid item xs={12}> <h1>Reset Password</h1> </Grid>

                        <Grid item xs={12}> <TextField type={"email"} variant='outlined' label="Enter Email" fullWidth /> </Grid>

                        <Grid item xs={12}> <TextField type={"text"} variant='outlined' label="Enter UserName" fullWidth /> </Grid>

                        <Grid item xs={12}> <Button variant='contained'>Reset Password</Button> </Grid>

                    </Grid>

                </CardContent>
            </Card>

        </React.Fragment>
    )
}
