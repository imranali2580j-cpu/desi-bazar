let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push(product);
    total += price;

    document.getElementById("cartList").innerHTML = cart.join("<br>");
    document.getElementById("totalPrice").innerHTML = total;
}

function placeOrder() {
    let name = document.getElementById("customerName").value.trim();
    let phone = document.getElementById("customerPhone").value.trim();
    let address = document.getElementById("customerAddress").value.trim();
let area = document.getElementById("customerArea").value;
    if (cart.length === 0) {
        alert("কার্টে কোনো পণ্য নেই!");
        return;
    }

    if (name === "" || phone === "" || address === "") {
        alert("সব তথ্য পূরণ করুন!");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let order = {
        id: orders.length + 1,
        name: name,
        phone: phone,
        address: address,
      area: area,
        products: cart,
        total: total,
        date: new Date().toLocaleString()
    };

    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
let message = 
`🛒 Desi Bazar Order

নাম: ${name}
মোবাইল: ${phone}
ঠিকানা: ${address}
এলাকা: ${area}

পণ্য:
${cart.join(", ")}

মোট: ${total} SAR`;

let whatsapp = "96657 617 7897";

let url = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");
    alert("✅ আপনার অর্ডার সফলভাবে নেওয়া হয়েছে।");

    cart = [];
    total = 0;

    document.getElementById("cartList").innerHTML = "কোনো পণ্য যোগ করা হয়নি।";
    document.getElementById("totalPrice").innerHTML = "0";

    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerAddress").value = "";
}
