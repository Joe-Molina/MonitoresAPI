export type publitype = "img" | "banner" | "video";

export interface Post {
  id: number;
  name: string;
  type: publitype;
  position: number;
  duration: number;
  fecha_inicio: Date;
  Fecha_Fin: Date;
}

// export interface FormState {
//   Form: Post;
// }

// export interface PostState {
//   Posts: Post[];
// }
