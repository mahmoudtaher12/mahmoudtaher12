let counter = 0;
        let pricePerUnit = 35;
        let totalPrice = 0;

        function buynow() {
            ++counter;
            document.getElementById("text").textContent = counter;
            updateTotal();
        }

        function cou() {
            if (counter > 0) {
                --counter;
                document.getElementById("text").textContent = counter;
                updateTotal();
            }
        }

        function updateTotal() {
            totalPrice = counter * pricePerUnit;
            document.getElementById("aa").textContent = "$" + totalPrice ;
            document.getElementById("totalAmount").textContent = totalPrice;
        }

        function total() {
            alert("Total Price:" + totalPrice);
        }