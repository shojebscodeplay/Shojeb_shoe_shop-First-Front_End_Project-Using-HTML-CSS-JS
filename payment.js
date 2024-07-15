document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const transactionNumber = document.getElementById('transaction-number').value;
    const billingAddress = document.getElementById('billing-address').value;

    // Perform validation and send data to the server
    console.log('Customer Details:', { name, email, address });
    console.log('Payment Details:', { paymentMethod, transactionNumber, billingAddress });

    // Example alert to show that form submission is working
    alert('Payment details submitted successfully!');
});
