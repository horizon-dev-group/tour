import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getTestProfile} from "../../actions/test";

//js
//css section
import "../../css/oneui.min.css"
import "../../css/themes/amethyst.min.css"
//image
import photo from "../../media/photos/photo6@2x.jpg"


const ProfileTest = ({loading, getTestProfile}) => {
    // const [formData, setFormData] = useState({
    //     status: '',
    //     bio: ''
    // });

    useEffect(() => {

    }, [loading, getTestProfile]);


    return (

        <div id="page-container" className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed">

            <header id="page-header">
                {/*// <!-- Header Content -->*/}
                <div className="content-header">
                    {/*// <!-- Left Section -->*/}
                    <div className="d-flex align-items-center">
                        {/*// <!-- Toggle Sidebar -->*/}
                        {/*// <!-- Layout API, functionality initialized in Template._uiApiLayout()-->*/}
                        <button type="button" className="btn btn-sm btn-dual mr-2 d-lg-none" data-toggle="layout"
                                data-action="sidebar_toggle">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        {/*// <!-- Search Form (visible on larger screens) -->*/}
                        <form className="d-none d-sm-inline-block" action="be_pages_generic_search.html" method="POST">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control form-control-alt" placeholder="Search.."
                                       id="page-header-search-input2" name="page-header-search-input2"/>
                                    <div className="input-group-append">
                                    <span className="input-group-text bg-body border-0">
                                        <i className="si si-magnifier"></i>
                                    </span>
                                    </div>
                            </div>
                        </form>
                        {/*// <!-- END Search Form -->*/}
                    </div>
                    {/*// <!-- END Left Section -->*/}

                    {/*// <!-- Right Section -->*/}
                    <div className="d-flex align-items-center">
                        {/*// <!-- User Dropdown -->*/}
                        <div className="dropdown d-inline-block ml-2">
                            <button type="button" className="btn btn-sm btn-dual" id="page-header-user-dropdown"
                                     aria-haspopup="true" aria-expanded="false">

                                    <span className="d-none d-sm-inline-block ml-1">Register</span>
                            </button>

                        </div>
                        {/*// <!-- END User Dropdown -->*/}

                        {/*// <!-- Notifications Dropdown -->*/}
                        <div className="dropdown d-inline-block ml-2">
                            <button type="button" className="btn btn-sm btn-dual"
                                    id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                <span className="d-none d-sm-inline-block ml-1">Login</span>
                            </button>

                        </div>
                        {/*// <!-- END Notifications Dropdown -->*/}

                        {/*// <!-- Toggle Side Overlay -->*/}
                        {/*// <!-- Layout API, functionality initialized in Template._uiApiLayout() -->*/}
                        <button type="button" className="btn btn-sm btn-dual ml-2" data-toggle="layout"
                                data-action="side_overlay_toggle">
                            <i className="fa fa-fw fa-user fa-flip-horizontal"></i>
                        </button>
                        {/*// <!-- END Toggle Side Overlay -->*/}
                    </div>
                    {/*// <!-- END Right Section -->*/}
                </div>
                {/*// <!-- END Header Content -->*/}

                {/*// <!-- Header Search -->*/}
                <div id="page-header-search" className="overlay-header bg-white">
                    <div className="content-header">
                        <form className="w-100" action="be_pages_generic_search.html" method="POST">
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    {/*// <!-- Layout API, functionality initialized in Template._uiApiLayout() -->*/}
                                    <button type="button" className="btn btn-danger" data-toggle="layout"
                                            data-action="header_search_off">
                                        <i className="fa fa-fw fa-times-circle"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control" placeholder="Search or hit ESC.."
                                       id="page-header-search-input" name="page-header-search-input"/>
                            </div>
                        </form>
                    </div>
                </div>
                {/*// <!-- END Header Search -->*/}

                {/*// <!-- Header Loader -->*/}
                {/*// <!-- Please check out the Loaders page under Components category to see examples of showing/hiding it -->*/}
                <div id="page-header-loader" className="overlay-header bg-white">
                    <div className="content-header">
                        <div className="w-100 text-center">
                            <i className="fa fa-fw fa-circle-notch fa-spin"></i>
                        </div>
                    </div>
                </div>
                {/*// <!-- END Header Loader -->*/}
            </header>

            <nav id="sidebar" aria-label="Main Navigation">
            {/*// <!-- Side Header -->*/}
            <div className="content-header bg-white-5">
                {/*// <!-- Logo -->*/}
                <a className="font-w600 text-dual" href="index.html">
                    <i className="fa fa-circle-notch text-primary"></i>
                    <span className="smini-hide">
                            <span className="font-w700 font-size-h5">Tourism</span>
                        </span>
                </a>
                {/*// <!-- END Logo -->*/}

                {/*// <!-- Extra -->*/}
                {/*// <!-- END Extra -->*/}
            </div>
            {/*// <!-- END Side Header -->*/}

            {/*// <!-- Side Navigation -->*/}
            <div className="content-side content-side-full">
                <ul className="nav-main">
                    <li className="nav-main-item">
                        <a className="nav-main-link" href="be_pages_dashboard.html">
                            <i className="nav-main-link-icon si si-speedometer"></i>
                            <span className="nav-main-link-name">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-main-item">
                        <a className="nav-main-link"  href="#">
                            <i className="nav-main-link-icon si si-cursor-move"></i>
                            <span className="nav-main-link-name">Register Car Rentals</span>
                        </a>
                    </li>
                    <li className="nav-main-item">
                        <a className="nav-main-link"  href="#">
                            <i className="nav-main-link-icon si si-home"></i>
                            <span className="nav-main-link-name">Register Hotels</span>
                        </a>
                    </li>
                    <li className="nav-main-item">
                        <a className="nav-main-link"  href="#">
                            <i className="nav-main-link-icon si si-map"></i>
                            <span className="nav-main-link-name">Register Places</span>
                        </a>
                    </li>
                    <li className="nav-main-item">
                        <a className="nav-main-link"  href="#">
                            <i className="nav-main-link-icon si si-people"></i>
                            <span className="nav-main-link-name">Register Operators</span>
                        </a>
                    </li>
                    <li className="nav-main-item">
                        <a className="nav-main-link"  href="#">
                            <i className="nav-main-link-icon si si-user"></i>
                            <span className="nav-main-link-name">Profile</span>
                        </a>
                    </li>

                </ul>
            </div>
            {/*// <!-- END Side Navigation -->*/}
        </nav>

            {/*// <!-- Main Container -->*/}
            <main id="main-container " style={{width:'100%'}}>
                {/*// <!-- Hero -->*/}
                <div class="bg-body-light " >
                    <div class="content content-full">
                        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                            <h1 class="flex-sm-fill h3 my-2">
                                Appear <small class="d-block d-sm-inline-block mt-2 mt-sm-0 font-size-base font-w400 text-muted">Animate elements and make them visible on scrolling.</small>
                            </h1>
                            <nav class="flex-sm-00-auto ml-sm-3" aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-alt">
                                    <li class="breadcrumb-item">Components</li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        <a class="link-fx" href="">Appear</a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/*// <!-- END Hero -->*/}

                {/*// <!-- Page Content -->*/}
                {/*// <!-- Appear ([data-toggle="appear"] is initialized in Helpers.coreAppear()) -->*/}
                {/*// <!-- For more info and examples you can check out https://github.com/bas2k/jquery.appear -->*/}
                <div class="content">
                    <h2 class="content-heading">Basic</h2>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-primary text-white mx-auto">
                                            <i class="fa fa-2x fa-brush"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Create</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-success text-white mx-auto">
                                            <i class="fab fa-2x fa-bitcoin"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Bitcoin</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-dark text-white mx-auto">
                                            <i class="fab fa-2x fa-chrome"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Browser</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- END Appear -->*/}

                    {/*// <!-- Animation Classes -->*/}
                    <h2 class="content-heading">Animated <small>You can use the animation classes of your choice</small></h2>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-class="animated bounceIn">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-warning text-white mx-auto">
                                            <i class="si fa-2x si-user"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Users</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-class="animated flipInX">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-danger text-white mx-auto">
                                            <i class="si fa-2x si-settings"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Settings</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-class="animated flash">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-info text-white mx-auto">
                                            <i class="si fa-2x fa-2x si-rocket"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Startup</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- END Animation Classes -->*/}

                    {/*// <!-- Offset -->*/}
                    <h2 class="content-heading">Offset <small>You can add an offset, to make the element appear sooner or later</small></h2>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-offset="-200">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-danger-light text-danger mx-auto">
                                            <i class="si fa-2x si-lock"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Lock</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-offset="200">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-warning-light text-warning mx-auto">
                                            <i class="si fa-2x si-energy"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Energy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-offset="-400">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-info-light text-info mx-auto">
                                            <i class="si fa-2x si-calendar"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Events</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- END Offset -->*/}

                    {/*// <!-- Timeouts -->*/}
                    <h2 class="content-heading">Timeouts <small>You can delay the animation, creating nice effects</small></h2>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-offset="-200">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-body text-primary mx-auto">
                                            <i class="si fa-2x si-speedometer"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Dashboard</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-offset="-200" data-timeout="200">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-body text-danger mx-auto">
                                            <i class="si fa-2x si-printer"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Print</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="block invisible" data-toggle="appear" data-offset="-200" data-timeout="400">
                                <div class="block-content block-content-full">
                                    <div class="py-5 text-center">
                                        <div class="item item-2x item-rounded bg-body text-success mx-auto">
                                            <i class="si fa-2x si-envelope-open"></i>
                                        </div>
                                        <div class="font-size-h4 font-w600 pt-3 mb-0">Messages</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- END Timeouts -->*/}
                </div>
                {/*// <!-- END Page Content -->*/}
            </main>


            {/*// <!-- Footer -->*/}
            <footer id="page-footer" class="bg-body-light ">
                <div class="content py-3">
                    <div class="row font-size-sm">
                        <div class="col-sm-6 order-sm-2 py-1 text-center text-sm-right">
                            Crafted with <i class="fa fa-heart text-danger"></i> by <a class="font-w600" href="https://1.envato.market/ydb" target="_blank">pixelcave</a>
                        </div>
                        <div class="col-sm-6 order-sm-1 py-1 text-center text-sm-left">
                            <a class="font-w600" href="https://1.envato.market/AVD6j" target="_blank">OneUI 4.6</a> &copy; <span data-toggle="year-copy"></span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>




        //loginnnnnnnnnnnnnnnnnnnnnnnnnnnn
        // <div id="page-container">
        //
        //     {/*// <!-- Main Container -->*/}
        //     <main id="main-container">
        //         {/*// <!-- Page Content -->*/}
        //         <div className="bg-image" style={{backgroundImage: 'url(${photo})'}}>
        //             <div className="hero-static bg-white-95">
        //                 <div className="content">
        //                     <div className="row justify-content-center">
        //                         <div className="col-md-8 col-lg-6 col-xl-6">
        //                             {/*// <!-- Sign In Block -->*/}
        //                             <div className="block block-themed block-fx-shadow mb-0">
        //                                 <div className="block-header">
        //                                     <h3 className="block-title">Sign In</h3>
        //                                     <div className="block-options">
        //                                         <a className="btn-block-option font-size-sm"
        //                                            href="op_auth_reminder.html">Forgot Password?</a>
        //                                         <a className="btn-block-option" href="op_auth_signup.html"
        //                                            data-toggle="tooltip" data-placement="left" title="New Account">
        //                                             <i className="fa fa-user-plus"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="block-content">
        //                                     <div className="p-sm-3 px-lg-4 py-lg-5">
        //                                         <h1 className="mb-2">OneUI</h1>
        //                                         <p>Welcome, please login.</p>
        //
        //                                         {/*// <!-- Sign In Form -->*/}
        //                                         {/*// <!-- jQuery Validation (.js-validation-signin class is initialized in js/pages/op_auth_signin.min.js which was auto compiled from _es6/pages/op_auth_signin.js) -->*/}
        //                                         {/*// <!-- For more info and examples you can check out https://github.com/jzaefferer/jquery-validation -->*/}
        //                                         <form className="js-validation-signin" action="be_pages_auth_all.html"
        //                                               method="POST">
        //                                             <div className="py-3">
        //                                                 <div className="form-group">
        //                                                     <input type="text"
        //                                                            className="form-control form-control-alt form-control-lg"
        //                                                            id="login-username" name="login-username"
        //                                                            placeholder="Username"/>
        //                                                 </div>
        //                                                 <div className="form-group">
        //                                                     <input type="password"
        //                                                            className="form-control form-control-alt form-control-lg"
        //                                                            id="login-password" name="login-password"
        //                                                            placeholder="Password"/>
        //                                                 </div>
        //                                                 <div className="form-group">
        //                                                     <div className="custom-control custom-checkbox">
        //                                                         <input type="checkbox" className="custom-control-input"
        //                                                                id="login-remember" name="login-remember"/>
        //                                                         <label className="custom-control-label font-w400"
        //                                                                htmlFor="login-remember">Remember Me</label>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="form-group row">
        //                                                 <div className="col-md-6 col-xl-5">
        //                                                     <button type="submit" className="btn btn-block btn-primary">
        //                                                         <i className="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
        //                                                     </button>
        //                                                 </div>
        //                                             </div>
        //                                         </form>
        //                                         {/*// <!-- END Sign In Form -->*/}
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             {/*// <!-- END Sign In Block -->*/}
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="content content-full font-size-sm text-muted text-center">
        //                     <strong>OneUI 4.6</strong> &copy; <span data-toggle="year-copy"></span>
        //                 </div>
        //             </div>
        //         </div>
        //         {/*// <!-- END Page Content -->*/}
        //     </main>
        //     {/*// <!-- END Main Container -->*/}
        // </div>


//         <h1>{loading === true && (
    //             <p>Hello True</p>
    //         )}{loading === false && (
    //             <p>is</p>
    //         )} </h1>
    //
    //         <button onClick={getTestProfile()}>{loading === true && (
    //             <h1>Loading is True</h1>
    //
    //         )}{loading === false && (
    //             <h1>Loading is false</h1>
    //
    //         )}
    //         </button>
    //
    //     </div>
    )
};

ProfileTest.propTypes = {
    getTestProfile: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

const mapStateToProps = state => ({
    loading: state.loading,

});

export default connect(mapStateToProps, {getTestProfile})(ProfileTest);
