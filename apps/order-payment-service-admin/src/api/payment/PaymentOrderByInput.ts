import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  order?: SortOrder;
  paidBy?: SortOrder;
  paymentStatus?: SortOrder;
  updatedAt?: SortOrder;
};
