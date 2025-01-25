import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { allpaidsucces, Deletallpaid, DeletPaiedproduct } from '../../redux/action';

export default function Payment() {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
const id = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // console.log(id.id)
//   const cardlist = useSelector(state=>state.cardList)
//  const ids = cardlist.map(prd=>prd.id)
  // console.log(ids);
  
  const ispayall = useSelector(state=>state.ispayement)
  // console.log(ispayall);
  function pay() {
    if (cardDetails.cardNumber.length === 4 && cardDetails.cvv.length === 3) {
      if(!ispayall){
        alert('Payment processed successfully!');
        dispatch(DeletPaiedproduct(id.id))
        alert('Product paid successfully')
          // alert('dispatch working ')
          navigate('/Card/');
      }else{
        dispatch(Deletallpaid())
        alert(' All Products paid successfully')
        dispatch(allpaidsucces())
        navigate('/Card/');
      }
     

      }
     
  
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Payment</h2>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4">
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            className="form-control"
            value={cardDetails.cardNumber}
            placeholder='1234 1234 1234 1234'
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardNumber: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Card Holder Name</label>
          <input
            type="text"
            className="form-control"
            value={cardDetails.cardHolder}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardHolder: e.target.value })
            }
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Expiry Date</label>
            <input
              type="text"
              className="form-control"
              value={cardDetails.expiryDate}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiryDate: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>CVV</label>
            <input
              type="password"
              className="form-control"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
              required
            />
          </div>
        </div>
        <button className="btn btn-success btn-block" onClick={pay}>
          Pay Now
        </button>
      </form>
    </div>
  );
}
