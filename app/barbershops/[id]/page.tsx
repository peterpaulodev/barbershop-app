import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";


interface BarbershopsDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopsDetailsPage = async ({
  params,
}: BarbershopsDetailsPageProps) => {
  // TODO: redirecionar
  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    return null;
  }

  return (
    <BarbershopInfo barbershop={barbershop} />
  );
};

export default BarbershopsDetailsPage;
