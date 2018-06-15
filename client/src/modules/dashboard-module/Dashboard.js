import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

class Dashboard extends Component {
    onLogoutClick(event) {
        event.preventDefault();
        this.props.logoutUser();
    }

    render() {
        return (
            <div className="mt-5 container">
                <a
                    href=""
                    class="btn btn-danger mx-auto"
                    onClick={this.onLogoutClick.bind(this)}
                >
                    Logout
                </a>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
