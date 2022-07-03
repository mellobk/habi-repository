import React from 'react';
import { Route } from 'react-router-dom';
import Proptypes from 'prop-types';





 const appRoute = ({ component: C, layout: Layout, ...rest }) => {

	return (
		<Route
			{...rest}
			render={(props) =>
				// TODO - reverse temporal changes to ==> typeof window !== 'undefined' && !localStorage.getItem('user')
			 (
					<Layout path={rest.path} image={rest.image} information={rest.information} step={rest.step}>
						<C {...props} />
					</Layout>
				) 
			}
		/>
	);
};

appRoute.propTypes = {
	component: Proptypes.elementType.isRequired,
	layout: Proptypes.elementType.isRequired,
};

export default appRoute;