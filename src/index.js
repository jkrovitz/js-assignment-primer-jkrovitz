 export function calculateTotal(items, tax) {
     let total = 0;
     for (const item of items) {
         const { price, taxable } = item;
         if (taxable) {
             total += price * Math.abs(tax);
         }
         total += price
     }
     return total;
 }