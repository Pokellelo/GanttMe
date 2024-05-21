import { Language } from "./enums";

export const days: {
    [Language.Spanish]: string[];
    [Language.English]: string[];
  } = {
    [Language.Spanish]: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    [Language.English]: ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"],
  };

  export const months: {
    [Language.Spanish]: string[];
    [Language.English]: string[];
  } = {
    [Language.Spanish]: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "octubre", "Noviembre", "Diciembre"],
    [Language.English]: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  };
  


  //Miselanea Traductions
  type Words = {
    today_is:string,
    planification: string
  }
  export const miselanea: {
    [Language.Spanish]: Words;
    [Language.English]: Words;
  } = {
    [Language.Spanish]: {today_is: "Hoy es", planification: "Planificación"},
    [Language.English]: {today_is: "Today is",planification: "Planification"},

  }