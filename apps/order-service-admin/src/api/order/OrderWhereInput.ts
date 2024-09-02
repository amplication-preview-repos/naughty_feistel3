import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  fulfilledBy?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};
