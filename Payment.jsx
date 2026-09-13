import {
  useLocation,
  useNavigate
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import trains from "../data/trains";

function PaymentSuccess() {

  const location = useLocation();
  const navigate = useNavigate();

  const train =
    location.state?.train || trains[0];

  const selectedSeat =
    location.state?.selectedSeat || "A2";

  const passenger =
    location.state?.passenger || {
      name: "Demo Passenger"
    };

  const total =
    location.state?.total ||
    train.fare + 50;

  return (
    <>
      <Navbar />

      <main className="form-page">

        <div className="success-card">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            Payment Successful
          </h1>

          <p>
            Your booking has been confirmed.
          </p>

          <div className="ticket">

            <div className="booking-id">

              <span>Booking ID</span>

              <strong>
                RS2026A1042
              </strong>

            </div>

            <div className="ticket-row">
              <span>Train</span>
              <strong>{train.name}</strong>
            </div>

            <div className="ticket-row">
              <span>Passenger</span>
              <strong>{passenger.name}</strong>
            </div>

            <div className="ticket-row">
              <span>Seat Number</span>
              <strong>{selectedSeat}</strong>
            </div>

            <div className="ticket-row">
              <span>Amount</span>
              <strong>₹{total}</strong>
            </div>

          </div>

          <Button
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>

        </div>

      </main>
    </>
  );
}

export default PaymentSuccess;
