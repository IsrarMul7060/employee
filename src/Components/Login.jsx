import React, { useState } from 'react'
import { Card, CardContent, Grid, TextField, Button } from '@mui/material'
import { Validation } from "../Validation/LoginValidation"

export const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        // console.log("===>", e)
        setValues({ ...values, [e.target.name]: e.target.value })
        // console.log("===>", values)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(Validation(values))
    }
    // console.log("===>", error)
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <Card style={{ width: "300px", marginLeft: "38%", marginTop: "100px" }}>
                    <CardContent align="center">

                        <Grid container spacing={3}>

                            <Grid item xs={12}> <h1>Empolyee Login</h1> </Grid>

                            <Grid item xs={12}>
                                <TextField type='text' onChange={handleChange} variant='outlined' label="Enter email" name='email' fullWidth />
                                {error && <p style={{ color: "red" }}> {error.email}</p>}
                                {/* {error ? <p>{error.email}</p> : ""} */}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type='password' onChange={handleChange} variant='outlined' label="Enter Paswword" name='password' fullWidth />
                                {error && <p style={{ color: "red" }}>{error.password}</p>}
                            </Grid>

                            <Grid item xs={12}> <Button variant='contained' type='submit'>Login</Button> </Grid>

                            <Grid item xs={12}> <p>Don't have an Account? <a href="">Register Here</a></p> </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </form>
        </React.Fragment>
    )
}
