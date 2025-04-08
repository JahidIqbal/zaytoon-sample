import { NameValue } from "./Types";

const totalFn = (sum: number, item: NameValue) => sum + item.value;

export const getTotal = (items: NameValue[]) => items.reduce(totalFn, 0);