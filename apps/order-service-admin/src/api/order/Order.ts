export type Order = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  fulfilledBy: string | null;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
