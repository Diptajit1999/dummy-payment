import React, { useState } from 'react'

const Payment = () => {
    const [cardNumber,setCardNumber]=useState("")
const [cardName,setCardName]=useState("")
const [CVV,setCVV]=useState("");
const [expiry,setExpiry]=useState("")
const [isFlipped,setIsFlipped]=useState(false);
const [cvvlimit,setCvvlimit]=useState(false)
const [isCardNumberLimit,setisCardNumberLimit]=useState(false)

const handleChangeCardNumber=(e)=>{
    let input=e.target.value;

    if(input.length==4){
        input=input+" "
    }else if(input.length==9){
        input=input+" "
    }else if(input.length==14){
        input=input+" "
    }

    if(input)
    console.log(input)
if(input.length<=19){
    setCardNumber(input)
    setisCardNumberLimit(false)
}else{
    setisCardNumberLimit(true)
}
    
}
const handleChangeName=(e)=>{
    let input=e.target.value;
    setCardName(input)
}
const handleChangeExpiry=(e)=>{
    let input=e.target.value;
    setExpiry(input)
}
const handleChangeCvv=(e)=>{
let input=e.target.value;
if(input.length<=3){
    setCVV(input)
    setCvvlimit(false)
}else{
    setCvvlimit(true)
}

}
console.log(cardNumber)
  return (
    <div className='cardPay' style={{display:'flex',}}>
        <div className='CardFront' style={{border:"1px solid blue",background:"lightBlue",boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <p>VISA</p>
            <div className='cardNumber'>{cardNumber||"#### #### #### ####"}</div>
            <div className='cardName'>{cardName||"-------"}</div>
            <div className='cardExpiry'>{expiry||"-----"}</div>
        </div>
        <div>
            <div className='cvvNumber'>{CVV||"---"}</div>
        </div>
        <form action="" >
            <input type="text" placeholder='Card Number' value={cardNumber} onChange={handleChangeCardNumber}/>
            {isCardNumberLimit?<p>Card Number Digits must be 16</p>:" "}
            <input type="text" placeholder='Card Name' value={cardName} onChange={handleChangeName} />
            <input type="text" placeholder='Card Expiry' value={expiry} onChange={handleChangeExpiry} />
            <input type="text" placeholder='Card Cvv' value={CVV} onChange={handleChangeCvv} />
            {cvvlimit?<p>CVV limit must be 3</p>:""}
        </form>
    </div>
  )
}

export default Payment;