import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setErrror] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSignUp(e) {
        e.preventDefault()

        try {
            setErrror('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setErrror('Failed to Log In :(')
            setLoading(false)
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSignUp}>
                        <Form.Group id="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        &nbsp;
                        <Form.Group id="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        &nbsp;
                        <Button disabled={loading} className="w-100" type="submit" >
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to='/forgot-password' style={{ textDecoration: 'none' }}>
                            Forgot Password?
                        </Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2"> Don't have an Account?
                <Link to='/signup' style={{ textDecoration: 'none' }}> Sign Up
                </Link>
            </div>
        </>
    )
}
