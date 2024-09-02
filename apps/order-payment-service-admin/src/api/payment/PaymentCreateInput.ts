export type PaymentCreateInput = {
  amount?: number | null;
  order?: string | null;
  paidBy?: string | null;
  paymentStatus?: "Option1" | null;
};
