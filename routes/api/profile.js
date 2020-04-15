const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const mongoose = require('mongoose');
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

// region Get Logged In User Profile
// @route      GET api/profile/me
// @desc       Get current user's profile
// @access     Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate('user',
            ['name', 'avatar']
        );

        if (!profile) {
            return res.status(400).json({msg: 'There is no profile for this user'});
        }

        res.json(profile);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error')
    }
});
// endregion

// region Create or update a user profile
// @route      GET api/profile/me
// @desc       Create or update a user profile
// @access     Private
router.post('/', [auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('bio', 'Bio is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {
        status,
        bio,
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;

    try {
        let profile = await Profile.findOne({
            user: req.user.id
        });

        if (profile) {
            // Update if profile exists
            profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true});
            return res.json(profile);
        }

        // Create if profile doesn't exist
        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});
// endregion

// region Get all user profiles
// @route      GET api/profile/
// @desc       Create or update a user profile
// @access     Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (e) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// endregion

// region Get all user profiles
// @route      GET api/profile/user/:user_id
// @desc       Get profile by user ID
// @access     Public
router.get('/users/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user', ['name', 'avatar']);

        if (!profile) return res.status(400).json({msg: 'Profile not found'});

        res.json(profile);
    } catch (e) {
        console.error(e.message);

        if (e.kind === 'ObjectId') {
            return res.status(400).json({msg: 'Profile not found'});
        }
        res.status(500).send('Server Error');
    }
});
// endregion

// region Delete profile, user & posts
// @route      DELETE api/profile/
// @desc       Delete profile, user, & posts
// @access     Private
router.delete('/', auth, async (req, res) => {
    try {
        // Remove user posts
        await Post.deleteMany({user: req.user.id});

        // Remove profile
        await Profile.findOneAndRemove({user: req.user.id});
        // Remove user
        await User.findOneAndRemove({_id: req.user.id});

        res.json({msg: 'User deleted'});
    } catch (e) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// endregion

module.exports = router;
