// 111111111111111111111111111111



function calculateTotal (price:number, quantity:number, discount:number = 0 ):number {
  const total:number = price * quantity - price * quantity*discount;
  return Number(total.toFixed(2)); 
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
return orders.filter ((order:Order):boolean =>{ return order.status === status})
}



console.log(filterOrdersByStatus(orders, "delivered"))

// 4444444444444444444444444444444444444444

type ProductInfo = [string, number, number];

interface Inventory {
  [key: string]: number;
}
const inventory: Inventory = 
    {
  "Laptop": 5,
  "Mouse": 10,
}


function updateStock ( inventory: Inventory ,productInfo: ProductInfo): Inventory{
const [name, , quantity] = productInfo; 
  const current:number = inventory[name] || 0;
  inventory[name] = current + quantity;
  return inventory;
}

console.log(updateStock(inventory,["key",22, 5]))