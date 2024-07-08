import { prisma } from "../libs/prisma";

import { Post } from "../types";

export const getPublicidades = () => {
  return prisma.publicidad.findMany();
};

export const createPublicidad = async ({
  Fecha_Fin,
  duration,
  fecha_inicio,
  name,
  position,
  type,
}: Post) => {
  return await prisma.publicidad.create({
    data: {
      name,
      type,
      duration,
      position,
      Fecha_Fin,
      fecha_inicio,
    },
  });
};

export const DeletePublicidad = (id: any) => {
  return prisma.publicidad.delete({
    where: {
      id,
    },
  });
};
