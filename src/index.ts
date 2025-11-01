// 111111111111111111111111111111

import { isJSDocTypeExpression } from "typescript";

function calculateTotal (price:number, quantity:number, discount:number = 0 ):number {
  const total = price * quantity;
  return total - total * discount; 
}
  
// 22222222222222222222222222222222222

type IdType = string | number;

function displayId (id: IdType):void {
if(typeof id === "string"){
console.log(id.toUpperCase())
}
else if (typeof id === "number"){
    console.log(`ID = ${id * 10}`) 
}
}

// 3333333333333333333333333333333333333333333333
type OrderStatus = "pending"| "shipped"| "delivered"

interface Order  {
orderId: string;
amount: number;
status: OrderStatus;    
}

const orders : Order[] = [
    {orderId: '1',
        amount: 20,
        status: "pending"
    },
     {orderId: '2',
        amount: 10,
        status: "shipped"
    },
     {orderId: '100',
        amount: 99,
        status: "delivered"
    }
]

function filterOrdersByStatus (orders: Order[], status: OrderStatus): Order[]{
return orders.filter ((order)=>{ return order.status === status})
}



console.log(filterOrdersByStatus(orders, "delivered"))

// 4444444444444444444444444444444444444444

type ProductInfo = [string, number, number];

function updateStock (inventory:[], productInfo: ProductInfo){

}