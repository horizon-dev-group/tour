import React, {Fragment, useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {createProfile} from "../../actions/profile";

const CreateProfile = ({createProfile, history}) => {
    const [formData, setFormData] = useState({
        status: '',
        bio: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        status,
        bio
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className="lead">
                <i className="fas fa-user"/> Let's get some information to make your profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <select name="status" value={status} onChange={e => onChange(e)}>
                        <option value="0">* Select Your Status</option>
                        <option value="Tour Operator">Tour Operator</option>
                        <option value="Tour Guide">Tour Guide</option>
                    </select>
                    <small className="form-text"
                    >Give us an idea of what is your position in the company
                    </small>
                </div>

                <div className="form-group">
                    <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)}/>
                    <small className="form-text">Tell us a little about yourself</small>
                </div>

                <input type="submit" className="btn btn-primary my-1"/>
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, {createProfile})(withRouter(CreateProfile));