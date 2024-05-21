import { Language } from "./enums";

export const days: {
    [Language.Spanish]: string[];
    [Language.English]: string[];
  } = {
    [Language.Spanish]: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    [Language.English]: ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"],
  };
  


  //Miselanea Traductions
  type Words = {
    today_is:string,
  }
  export const miselanea: {
    [Language.Spanish]: Words;
    [Language.English]: Words;
  } = {
    [Language.Spanish]: {today_is: "Hoy es"},
    [Language.English]: {today_is: "Today is"},

  }