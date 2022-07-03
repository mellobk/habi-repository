import AdminLayout from '../../../shared/presentation/layouts/AdminLayout';
import Home from '../presentation/pages/Home';
import SuccessData from '../presentation/pages/SuccessData';
import appRoute from '../../../shared/presentation/redirect-route';
import { homeRoute, resumeRoute, ThankYouRoute } from './routes';
import APARMENT_IMAGE from '../../../shared/application/constants/images';
import {stepRoutes} from '../application/constans/stepRoutes';
import ResumeData from '../presentation/pages/ResumeData';

const homeRouter = {
	
	router: [
		{
			path: homeRoute,
			page: Home,
			routeComponent: appRoute,
			layout: AdminLayout,
			exact: true,
			image:APARMENT_IMAGE,
			information:false, 
		
		},
		{
			path: ThankYouRoute,
			page: SuccessData,
			routeComponent: appRoute,
			layout: AdminLayout,
			exact: true,
			image:APARMENT_IMAGE,
			information:false, 
		
		},
		{
			path: resumeRoute,
			page: ResumeData,
			routeComponent: appRoute,
			layout: AdminLayout,
			exact: true,
			image:APARMENT_IMAGE,
			information:false, 
		
		},
	    ...stepRoutes,

		
	],

	
};


export default homeRouter;
