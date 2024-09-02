import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "order";

export const PaymentTitle = (record: TPayment): string => {
  return record.order?.toString() || String(record.id);
};
