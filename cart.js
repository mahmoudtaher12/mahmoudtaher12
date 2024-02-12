let counter = 0;
        let shoese1 = 35;
        let totalPrice = 0;
        let shoese2 = 50;

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
            totalPrice = counter * pricePerUnit * shoese2;
            document.getElementById("aa").textContent = "$" + totalPrice ;
            document.getElementById("totalAmount").textContent = totalPrice;
        }

        function total() {
            alert("Total Price:" + totalPrice);
            window.location.href="reveiw.html";
        }