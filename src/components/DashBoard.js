import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function DashBoard() {

    const [error, setErrror] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogOut() {
        setErrror('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setErrror('Failed to Log out')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogOut}>
                        Log Out
                    </Button>
                </div>
            </Card>
        </>
    )
}
