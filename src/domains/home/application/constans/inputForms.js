import stepsFields from "./formsHomeFields";

export const personalArrayInput = [
    {
      name: stepsFields.NAME,
      title: "Nombre",
      type: "text",
      placeholder: "Ingresa tu nombre",
      className: "input-name",
    },
    {
      name: stepsFields.LASTNAME,
      title: "Apellidos",
      type: "text",
      placeholder: "Ingresa tu apellido",
      className: "input-last-name",
    },
  ];


  export   const emailArrayInput = [
    {
      name: stepsFields.EMAIL,
      title: "Correo electrónico",
      type: "email",
      placeholder: "Ingresa tu correo electrónico",
      className: "input-email",
    },

  ];


  export   const addressArrayInput = [
    {
      name: stepsFields.ADDRESS,
      title: "Dirección",
      type: "text",
      placeholder: "Ingresa tu dirección",
      className: "input-address",
    },

  ];


  export   const floorNumberArrayInput = [
    {
      name: stepsFields.FLOOR_NUMBER,
      title: "Piso",
      type: "number",
      placeholder: "Ingresa el numero del piso",
      className: "input-floor-number",
    },

  ];

  export   const zoneArrayInput = [

    {
      name: stepsFields.BBQ_AREA,
      title: "Zona BBQ",
      type: "checkbox",
      className: "input-bbq-area",
    },
    {
        name: stepsFields.COMMUNITY_ROOM,
        title: "Salón comunal",
        type: "checkbox",
        className: "input-floor-number",
      },
      {
        name: stepsFields.PLAY_GROUND,
        title: "Parque de juegos",
        type: "checkbox",
        className: "input-floor-number",
      },

  ];

  const YES= 'Si'
  const NO= 'No'

  export const selectOptions = [
    {
      id: 1,
      label: YES,
      value: YES,
    },
    {
      id: 2,
      label: NO,
      value: NO,
    },

  ];