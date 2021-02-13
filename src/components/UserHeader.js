import react, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

const UserHeader = (props) => {
	//^ component did mount
	useEffect(() => {
		props.fetchUser(props.userId);
	}, []);

	if (!props.user) return null;

	return <div className="ui header">{props.user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
	//! we can have a second para -> props of the component
	return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
