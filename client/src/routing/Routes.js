import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Profiles from '../components/profiles/Profiles'
import Profile from '../components/profile/Profile'
import CreateProfile from '../components/profile-form/CreateProfile'
import EditProfile from '../components/profile-form/EditProfile'
import AddExperience from '../components/profile-form/AddExperience'
import AddEducation from '../components/profile-form/AddEducation'
import Posts from '../components/posts/Posts'
import Post from '../components/post/Post'
import NotFound from '../components/layout/NotFound'

const Routes = () => {
    return (
        <section className='container'>
            <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/profile/:id' component={Profile} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                <PrivateRoute exact path='/add-experience' component={AddExperience} />
                <PrivateRoute exact path='/add-education' component={AddEducation} />
                <PrivateRoute exact path='/posts' component={Posts} />
                <PrivateRoute exact path='/posts/:id' component={Post} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes
