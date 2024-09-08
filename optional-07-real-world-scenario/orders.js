// orders.js

// Fungsi untuk menghasilkan ID yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menyimpan data orders
let orders = [];

// Fungsi untuk menambah pesanan
function addOrder(customerName, items) {
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice: items.reduce((total, item) => total + item.price, 0),
    status: "Menunggu",
  };
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const validStatuses = ["Menunggu", "Diproses", "Selesai"];
  if (!validStatuses.includes(status)) {
    throw new Error("Status tidak valid");
  }

  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  } else {
    throw new Error("Order tidak ditemukan");
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
