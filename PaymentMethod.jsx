function PaymentMethod({
  method,
  selected,
  onClick
}) {
  return (
    <button
      className={
        selected
          ? "payment-method active"
          : "payment-method"
      }
      onClick={onClick}
    >
      {method}
    </button>
  );
}

export default PaymentMethod;
