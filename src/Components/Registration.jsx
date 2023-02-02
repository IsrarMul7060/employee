import React from 'react'
import { Card, CardContent, Grid, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import { Registerschema } from '../Validation/yupValidation'


export const Registration = () => {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        confimpassword: ""
    }

    const { values, handleSubmit, handleChange, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: Registerschema,
        onSubmit: (values) => { console.log("formikValues", values) }
    })
    console.log("===>YupErrors", errors)


    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <Card style={{ width: "400px", marginLeft: "37%", marginTop: "100px" }}>
                    <CardContent align="center">

                        <Grid container spacing={3}>

                            <Grid item xs={12}> <h1>Empolyee Registration</h1> </Grid>

                            <Grid item xs={12}>
                                <TextField type={"text"} onChange={handleChange} variant='outlined' label="Enter Name" fullWidth name="name" value={values.name} />
                                {/* {<p style={{ color: "red" }}> {errors.name}</p>} */}
                                {errors && <p style={{ color: "red" }}> {errors.name}</p>}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type={"email"} onChange={handleChange} variant='outlined' label="Enter Email" fullWidth name="email" value={values.email} />
                                {<p style={{ color: "red" }}> {errors.email}</p>}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type={"number"} onChange={handleChange} variant='outlined' label="Enter Phone" fullWidth name="phone" value={values.phone} />
                                {<p style={{ color: "red" }}> {errors.phone}</p>}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type={"text"} onChange={handleChange} variant='outlined' label="Enter UserName" fullWidth name="username" value={values.username} />
                                {<p style={{ color: "red" }}> {errors.username}</p>}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type={"password"} onChange={handleChange} variant='outlined' label="Enter Paswword" fullWidth name="password" value={values.password} />
                                {<p style={{ color: "red" }}> {errors.password}</p>}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type={"password"} onChange={handleChange} variant='outlined' label="Confrim Paswword" fullWidth name="confimpassword" value={values.confirmpassword} />
                                {<p style={{ color: "red" }}> {errors.confimpassword}</p>}
                            </Grid>

                            <Grid item xs={12}> <Button variant='contained' type='submit'>Register</Button> </Grid>

                            <Grid item xs={12}> <p>Already have an Account? <a href="">Login Here</a></p> </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </form>
        </React.Fragment>
    )
}
