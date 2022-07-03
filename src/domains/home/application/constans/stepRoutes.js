import APARMENT_IMAGE from "../../../../shared/application/constants/images";
import AdminLayout from "../../../../shared/presentation/layouts/AdminLayout";
import appRoute from "../../../../shared/presentation/redirect-route";
import {
  addressRoute,
  elevatorRoute,
  emailRoute,
  floorRoute,
  parkingRoute,
  personalDataRoute,
  pictureRoute,
  priceRoute,
  zonesRoute,
} from "../../infrastructure/routes";
import AddressData from "../../presentation/pages/AddressData";
import ElevatorData from "../../presentation/pages/ElevatorData";
import EmailData from "../../presentation/pages/EmailData";
import FloorNumberData from "../../presentation/pages/FloorNumberData";
import ParkingData from "../../presentation/pages/ParkingData";
import PersonalData from "../../presentation/pages/PersonalData";
import PictureData from "../../presentation/pages/PictureData";
import PriceData from "../../presentation/pages/PriceData";
import ZonesData from "../../presentation/pages/ZonesData";

const regularData = {
  routeComponent: appRoute,
  layout: AdminLayout,
  exact: true,
  image: APARMENT_IMAGE,
  information: true,
};
export const stepRoutes = [
  {
    ...regularData,
    path: personalDataRoute,
    page: PersonalData,
    step: 1,
    description: "obtencion de nombre y apellidos del cliente",
    name: "name lastname data",
  },
  {
    ...regularData,
    path: emailRoute,
    page: EmailData,
    step: 2,
    description: "obtencion de correo electronico del cliente",
    name: "email",
  },

  {
    ...regularData,
    path: addressRoute,
    page: AddressData,
    step: 3,
    description: "obtencion de direection ",
    name: "address",
  },

  {
    ...regularData,
    path: floorRoute,
    page: FloorNumberData,
    step: 4,
    description: "obtencion de numero de piso ",
    name: "floor number",
  },

  {
    ...regularData,
    path: zonesRoute,
    page: ZonesData,
    step: 5,
    description: "obtencion de zonas comunes ",
    name: "zones",
  },

  {
    ...regularData,
    path: parkingRoute,
    page: ParkingData,
    step: 6,
    description: "obtencion de informacion parqueadero ",
    name: "parking",
  },
  {
    ...regularData,
    path: priceRoute,
    page: PriceData,
    step: 7,
    description: "obtencion precio del inmueble ",
    name: "price",
  },
  {
    ...regularData,
    path: pictureRoute,
    page: PictureData,
    step: 8,
    description: "obtencion foto inmueble",
    name: "picture",
  },
  {
    ...regularData,
    path: elevatorRoute,
    page: ElevatorData,
    step: 9,
    description: "obtencion foto inmueble",
    name: "picture",
  },
  

];

export default {};
