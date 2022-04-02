import { Proyect as TProyect } from "../api/proyect/Proyect";

export const PROYECT_TITLE_FIELD = "id";

export const ProyectTitle = (record: TProyect): string => {
  return record.id || record.id;
};
