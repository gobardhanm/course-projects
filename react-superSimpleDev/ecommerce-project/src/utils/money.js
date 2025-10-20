export function fomatMoney(amountCents) {
  return `$${(amountCents / 100).toFixed(2)}`;
}
