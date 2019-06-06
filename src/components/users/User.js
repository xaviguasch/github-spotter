import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user

    const { loading } = this.props

    if (loading) return <Spinner />

    return (
      <Fragment>
        <h1>{name}</h1>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        <p>
          Hireable: {''}
          {hireable ? (
            <i className='fas fa-check text-success' />
          ) : (
            <i className='fas fa-times-circle text-danger' />
          )}
        </p>
      </Fragment>
    )
  }
}

export default User
