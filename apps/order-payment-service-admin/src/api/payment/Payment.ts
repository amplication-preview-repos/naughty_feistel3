export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  order: string | null;
  paidBy: string | null;
  paymentStatus?: "Option1" | null;
  updatedAt: Date;
};
