import React, {useState} from 'react'
import '/media/surya/we/react/r3/src/App.css'
const Ff = () => {

  
const [inp, setinp] = useState({
    from:"",
    to:"",
    order_no:"",
    challan_no:"",
    date:"",   
    total_amount:""
})
const [group, setgroup] = useState({
    q1:"",
    q2:"",
    q3:"",
    q4:"",
    q5:"",
    q6:"",
    q7:"",
    q8:"",
    p1:"",
    p2:"",
    p3:"",
    p4:"",
    p5:"",
    p6:"",
    p7:"",
    p8:"",
    r1:"",
    r2:"",
    r3:"",
    r4:"",
    r5:"",
    r6:"",
    r7:"",
    r8:"",
    a1:"",
    a2:"",
    a3:"",
    a4:"",
    a5:"",
    a6:"",
    a7:"",
    a8:""
})


const proup = (e) =>{


let fo = e.target.name;
// console.log(fo);
if(fo === "q1"){
setgroup({...group,q1:e.target.value})
console.log(e.target.value)
}
else if(fo === "q2"){
    setgroup({...group,q2:e.target.value});
    console.log(e.target.value)
    }
    else if(fo === "q3"){
        setgroup({...group,q3:e.target.value});
        console.log(e.target.value)
        }
        else if(fo === "q4"){
            setgroup({...group,q4:e.target.value});
            console.log(e.target.value)
            }
            else if(fo === "q5"){
                setgroup({...group,q5:e.target.value});
                console.log(e.target.value)
                }
                else if(fo === "q6"){
                    setgroup({...group,q6:e.target.value});
                    console.log(e.target.value)
                    }
                    else if(fo === "q7"){
                        setgroup({...group,q7:e.target.value});
                        console.log(e.target.value)
                        }
                        else if(fo === "q8"){
                            setgroup({...group,q8:e.target.value});
                            console.log(e.target.value)
                            }
                            else if(fo === "p1"){
                                setgroup({...group,p1:e.target.value})
                                console.log(e.target.value)
                                }
                                else if(fo === "p2"){
                                    setgroup({...group,p2:e.target.value});
                                    console.log(e.target.value)
                                    }
                                    else if(fo === "p3"){
                                        setgroup({...group,p3:e.target.value});
                                        console.log(e.target.value)
                                        }
                                        else if(fo === "p4"){
                                            setgroup({...group,p4:e.target.value});
                                            console.log(e.target.value)
                                            }
                                            else if(fo === "p5"){
                                                setgroup({...group,p5:e.target.value});
                                                console.log(e.target.value)
                                                }
                                                else if(fo === "p6"){
                                                    setgroup({...group,p6:e.target.value});
                                                    console.log(e.target.value)
                                                    }
                                                    else if(fo === "p7"){
                                                        setgroup({...group,p7:e.target.value});
                                                        console.log(e.target.value)
                                                        }
                                                        else if(fo === "p8"){
                                                            setgroup({...group,p8:e.target.value});
                                                            console.log(e.target.value)
                                                            }
                                                            else if(fo === "r1"){
                                                                setgroup({...group,r1:e.target.value})
                                                                console.log(e.target.value)
                                                                }
                                                                else if(fo === "r2"){
                                                                    setgroup({...group,r2:e.target.value});
                                                                    console.log(e.target.value)
                                                                    }
                                                                    else if(fo === "r3"){
                                                                        setgroup({...group,r3:e.target.value});
                                                                        console.log(e.target.value)
                                                                        }
                                                                        else if(fo === "r4"){
                                                                            setgroup({...group,r4:e.target.value});
                                                                            console.log(e.target.value)
                                                                            }
                                                                            else if(fo === "r5"){
                                                                                setgroup({...group,r5:e.target.value});
                                                                                console.log(e.target.value)
                                                                                }
                                                                                else if(fo === "r6"){
                                                                                    setgroup({...group,r6:e.target.value});
                                                                                    console.log(e.target.value)
                                                                                    }
                                                                                    else if(fo === "r7"){
                                                                                        setgroup({...group,r7:e.target.value});
                                                                                        console.log(e.target.value)
                                                                                        }
                                                                                        else if(fo === "r8"){
                                                                                            setgroup({...group,r8:e.target.value});
                                                                                            console.log(e.target.value)
                                                                                            }
                                                                                            else if(fo === "a1"){
                                                                                                setgroup({...group,a1:e.target.value})
                                                                                            console.log(e.target.value)
                                                                                                }
                                                                                                else if(fo === "a2"){
                                                                                                    setgroup({...group,a2:e.target.value});
                                                                                                    console.log(e.target.value)
                                                                                                    }
                                                                                                    else if(fo === "a3"){
                                                                                                        setgroup({...group,a3:e.target.value});
                                                                                                        console.log(e.target.value)
                                                                                                        }
                                                                                                        else if(fo === "a4"){
                                                                                                            setgroup({...group,a4:e.target.value});
                                                                                                            console.log(e.target.value)
                                                                                                            }
                                                                                                            else if(fo === "a5"){
                                                                                                                setgroup({...group,a5:e.target.value});
                                                                                                                console.log(e.target.value)
                                                                                                                }
                                                                                                                else if(fo === "a6"){
                                                                                                                    setgroup({...group,a6:e.target.value});
                                                                                                                    console.log(e.target.value)
                                                                                                                    }
                                                                                                                    else if(fo === "a7"){
                                                                                                                        setgroup({...group,a7:e.target.value});
                                                                                                                        console.log(e.target.value)
                                                                                                                        }
                                                                                                                        else if(fo === "a8"){
                                                                                                                            setgroup({...group,a8:e.target.value});
                                                                                                                            console.log(e.target.value)
                                                                                                                            }
                                                                                            
                                                                                            
                                                                                            
                                                            
                                                            
                                                            
                            
                            
                            
                            

}
const onchange = (e) =>{
let from = e.target.name;
console.log(e.target.value);
if(from === "from"){
setinp({...inp,from:e.target.value})
}
else if(from === "to"){
    setinp({...inp,to:e.target.value})
    }
    else if(from === "order_no"){
        setinp({...inp,order_no:e.target.value})
             }
 else if(from === "challan_no"){
   setinp({...inp,challan_no:e.target.value})
        }
        else if(from === "date"){
            setinp({...inp,date:e.target.value})
                 }
     else if(from === "rateantity"){
       setinp({...inp,rateantity:e.target.value})
            }
            else if(from === "parti"){
                setinp({...inp,parti:e.target.value})
                     }
                     else if(from === "rate"){
                         setinp({...inp,rate:e.target.value})
                              }
                  else if(from === "amount"){
                    setinp({...inp,amount:e.target.value})
                         }
}
const print =()=>{
    window.print();
    
}
const pay = () =>{
    let billing = document.getElementById("billing");
    document.getElementById("wrap").style.display="none";
    document.getElementById("pay").style.display="none";
 
 
    billing.innerHTML=`
    <br/>
    <button style={{marginTop:"20px"}} onclick="print()" id="print" class="btn btn-primary" type="submit">Print Recipt</button>

<br/>
    <div id='bill'>
        <div id='heading_div'>
            <h4>Heading</h4>
        </div>


        <div id='from_to'>
            <div id='from'>From :<p>${inp.from}</p></div>
            <div id='to'>TO:<p>${inp.to}</p></div>
        </div>

<div id="order_block">
    <p  className='block_p'>ORDER NO : ${inp.order_no}</p>
    <p className='block_p'>CHALLAN NO : ${inp.challan_no}</p>
    <p className='block_p'>DATE : ${inp.date}</p>
</div>

<div id="sus"><p>PLEASE RECEIVE THE FOLLOWING GOODS IN GOOD ORDER & CONDITION</p></div>

<div id="tab">
        <table style={{width:"100%"}} id='recipt_table'>
            <tr>
                <th style={{width:"20%",borderLeft:"none",borderTop:"1px solid black"}} id="op">rateality</th>
                <th style={{width:"40%",border:"1px solid black"}}  >Particulars</th>
                <th style={{width:"20%",border:"1px solid black"}}  >Rate</th>
                <th id="am" style={{width:"20%",borderRight:"none",borderTop:"1px solid black"}}  >Amount</th>
            </tr>
            <tr>
                <td id="op">${group.q1}</td>
                <td>${group.p1}</td>
                <td>${group.r1}</td>
                <td style={{borderRight:"none"}} id="am">${group.a1}</td>
            </tr>
            <tr>
            <td id="op">${group.q2}</td>
            <td>${group.p2}</td>
            <td>${group.r2}</td>
            <td style={{borderRight:"none"}} id="am">${group.a2}</td>
            </tr>  
            <tr>
            <td id="op">${group.q3}</td>
            <td>${group.p3}</td>
            <td>${group.r3}</td>
            <td style={{borderRight:"none"}} id="am">${group.a3}</td>
            </tr>  
            <tr>
            <td id="op">${group.q4}</td>
            <td>${group.p4}</td>
            <td>${group.r4}</td>
            <td style={{borderRight:"none"}} id="am">${group.a5}</td>
            </tr>
            <tr>
            <td id="op">${group.q6}</td>
            <td>${group.p6}</td>
            <td>${group.r6}</td>
            <td style={{borderRight:"none"}} id="am">${group.a6}</td>
            </tr> 
            <tr>
            <td id="op">${group.q7}</td>
            <td>${group.p7}</td>
            <td>${group.r7}</td>
            <td style={{borderRight:"none"}} id="am">${group.a7}</td>
            </tr>  
            <tr>
            <td id="op">${group.q8}</td>
            <td>${group.p8}</td>
            <td>${group.r8}</td>
            <td style={{borderRight:"none"}} id="am">${group.a8}</td>
            </tr>
       
            <tr>
                <td style={{borderBottom:"none"}} ></td>
                <td style={{borderBottom:"none"}} ></td>
                <td style={{borderBottom:"none"}} ><b>Total</b></td>
                <td style={{borderBottom:"none",borderRight:"none"}} ><b>surya</b></td>              
            </tr>
        </table>
    </div>

    </div>
    <footer id='footer'>
    <p>This recipt form should be signed by the person <br /> having autority and return it to bearer. <br />
    No complaintswill be entertained if the same are <br />recived after 24 hours after delivery.</p>
</footer>
    `
}
  return (
    <>
    
<form action="">
    <div id="wrap">
    <label htmlFor="from">From</label>        <br />
    <input onChange={onchange} value={inp.from} type="text" name="from" /> <br />
    <label htmlFor="TO">To</label><br />
    <input onChange={onchange} value={inp.to} type="text" name="to" /><br />
    <label htmlFor="order_no">Order No</label><br />
    <input onChange={onchange} value={inp.order_no} type="number" name="order_no" /> <br />
    <label htmlFor="challan_no">Challan No</label><br />
    <input onChange={onchange} value={inp.challan_no} type="number" name="challan_no" /><br />
    <label htmlFor="date">Date</label><br />
    <input onChange={onchange} value={inp.date} type="date" name="date" /><br />
  
  
  <div id="coll">

      <label htmlFor="">Quality</label>
      <label htmlFor="">Particular</label>
      <label htmlFor="">Rate</label>
      <label htmlFor="">Amount</label><br />
      <input type="number"  value={group.q1} onChange={proup} name="q1" id="q1" />
      <input type="number"  value={group.p1} onChange={proup} name="p1" id="p1" />
      <input type="number"  value={group.r1} onChange={proup} name="r1" id="r1" />
      <input type="number"  value={group.a1} onChange={proup} name="a1" id="a1" /><br />
      <input type="number"  value={group.q2} onChange={proup} name="q2" id="q2" />
      <input type="number"  value={group.p2} onChange={proup} name="p2" id="p2" />
      <input type="number"  value={group.r2} onChange={proup} name="r2" id="r2" />
      <input type="number"  value={group.a2} onChange={proup} name="a2" id="a2" /><br />
      <input type="number"  value={group.q3} onChange={proup} name="q3" id="q3" />
      <input type="number"  value={group.p3} onChange={proup} name="p3" id="p3" />
      <input type="number"  value={group.r3} onChange={proup} name="r3" id="r3" />
      <input type="number"  value={group.a3} onChange={proup} name="a3" id="a3" /><br />
      <input type="number"  value={group.q4} onChange={proup} name="q4" id="q4" />
      <input type="number"  value={group.p4} onChange={proup} name="p4" id="p4" />
      <input type="number"  value={group.r4} onChange={proup} name="r4" id="r4" />
      <input type="number"  value={group.a4} onChange={proup} name="a4" id="a4" /><br />
      <input type="number"  value={group.q5} onChange={proup} name="q5" id="q5" />
      <input type="number"  value={group.p5} onChange={proup} name="p5" id="p5" />
      <input type="number"  value={group.r5} onChange={proup} name="r5" id="r5" />
      <input type="number"  value={group.a5} onChange={proup} name="a5" id="a5" /><br />
      <input type="number"  value={group.q6} onChange={proup} name="q6" id="q6" />
      <input type="number"  value={group.p6} onChange={proup} name="p6" id="p6" />
      <input type="number"  value={group.r6} onChange={proup} name="r6" id="r6" />
      <input type="number"  value={group.a6} onChange={proup} name="a6" id="a6" /><br />
      <input type="number"  value={group.q7} onChange={proup} name="q7" id="q7" />
      <input type="number"  value={group.p7} onChange={proup} name="p7" id="p7" />
      <input type="number"  value={group.r7} onChange={proup} name="r7" id="r7" />
      <input type="number"  value={group.a7} onChange={proup} name="a7" id="a7" /><br />
      <input type="number"  value={group.q8} onChange={proup} name="q8" id="q8" />
      <input type="number"  value={group.p8} onChange={proup} name="p8" id="p8" />
      <input type="number"  value={group.r8} onChange={proup} name="r8" id="r8" />
      <input type="number"  value={group.a8} onChange={proup} name="a8" id="a8" /><br />
  </div> 



    <div id="new_in"></div>
    </div>
</form>


<button style={{marginTop:"20px"}}  id="pay" onClick={pay} className="btn btn-primary" type="submit">Fill the recipt</button>
 
   <div id="billing"></div>
    </>
  )
}

export default Ff