import React, { useEffect, useState } from "react";
import '../style.css'
import cont from '../data.json'
import axios from "axios"
function Landing(){

const[img,setImage]=useState([]);

useEffect(()=>{
    
    const fetchPic= async ()=>{

        const res =await axios.get('https://fakestoreapi.com/products/');
        setImage(res.data);
     }
    fetchPic();
},[]);

console.log(img);


    return(
        <>
        <header>
            <div className="dhead">
                <div className="logo">
                      {/* <a href="">  <img style={{height:60}} src="https://www.edigitalagency.com.au/wp-content/uploads/Google-logo-png-plants.png" alt="png" /> </a> */}
                      <a href="">  <img style={{height:45}} src="https://zerozilla.com/static/media/applogo.753908a08e13c14b01f7976de9884093.svg" alt="png" /> </a>
                 </div>

               <nav className="navbar">
               <ul className="list-unstyled line">
                        <li ><a href="">Home</a></li>
                        <li ><a href="">About</a></li>
                        <li ><a href="">Contact us</a></li>
                       
                    </ul>
               </nav>
                  
               

            </div>
        </header>

            <div className="layouta">
                    <h2 className="txtcenter">Theme Options Panel</h2>
                    <h4 className="txtcont">Customizing Flatsome is very easy with the new <span className="fafanew"> live Theme Option Panel,</span>  Preview<br/> changes instantly without saving</h4>
                    <div className="bgmx">
                        
                    </div>
            </div>
            <div className="layoutb">
                    <h2 className="txtcenter">Unlimited Theme Options</h2>
                    <h4 className="txtcont">There are hundreds of options in the Theme Options Panel, Here are some favourites</h4>
                    <div className="container">
                        <div className="row  mt-5">
                            {cont?.Input.map((img)=>(
                                <>
                                      <div className="col-lg-4 col-md-4 mb-5 ">
                                            <div className="card cust">
                                                 <img className="imgx" src={img.img} key={img.id} alt="png" />
                                                   {img.content && img.content.map(data=>(
                                                    <>
                                                      <h3 className="txtcenter">{data.head}</h3>
                                                      <h6 className="txtcont">{data.body}</h6>
                                
                                                    </>
                                                   ))
                                                  }
                                            </div>
                                        </div>
                                   </>
                            ))}
                        </div>
                </div>    
            </div>
          
         <div className="container">
            <h2 className="head"><span className="htext">FLATSOME MAIN FEATURES</span></h2>
               <div className="row mt-5">
                {cont.cosmo.map((data,key)=>(
                    <>
                     <div className="col-lg-3 col-md-3 mb-5">
                           <div className="cart">
                            
                                <img  className="imgf" src={data.image} alt="png"/>
                                
                                    <h3 className="txtcenter">{data.head}</h3>
                                    <h6 className="txtcont">{data.body}</h6>
                                    
                          </div>
                    </div>
                    </>
                ))}
         
                </div> 
        </div>
        <div className="container">
            <h2 className="head"><span className="htext">FLATSOME ELEMENTS</span></h2>
               <div className="row mt-5 rowspan">
                    {img.slice(0,30).map((e)=>(
                                 <div className="col-lg-1  item">
                                 <div className="cartx">
                                   <img className="imgtx" src={e.image}/>
                                 <h6 className="txtcont">{e.id}</h6>
                                 </div>
                                </div>
                    ))}
              </div>
        </div>

        <footer>
        <div className="container">
          <div className="row">
            <div className=" col-lg-12">
              <div className="row">
                <div className="col-lg-3">
                  <h4 >ABOUT US</h4>
                    <p>
                    cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.
                    </p>
                    <br/>
                    <br/>
                    {/* <Space><FacebookOutlined    style={{ fontSize: '30px', align:"center"}} /></Space>
                    <Space><InstagramOutlined   style={{ fontSize: '30px', align:"center"}} /></Space>
                    <Space><TwitterOutlined    style={{ fontSize: '30px', align:"center"}} /></Space>
                    <Space><MessageOutlined    style={{ fontSize: '30px', align:"center"}} /></Space>
                    <Space><PushpinOutlined    style={{ fontSize: '30px', align:"center"}} /></Space> */}
                </div>

                <div className="col-lg-3">
                  <h4 className="fline">LATEST NEWS</h4>
                  <ul>
                    <li>
                    <p>About</p>
                    </li>
                    <hr />
                    <li>
                    <p>About</p>
                    </li>
                    <hr />
                    <li>
                    <p>About</p>
                    </li>
                    <hr />
                    <li>
                    <p>About</p>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3">
                  <h4 className="fline">TAGS</h4>
                  <ul>
                    <li >
                        <div className="row "   >
                    <div className="form-control-rounded"   >
                    <button type="text" onClick="#"  className="btn btn-outline-light" style={{margin:"5px"}}>bag</button>
                    <button type="text" onClick="#"  className="btn btn-outline-light">Classic</button>
                    <button type="text" onClick="#"  className="btn btn-outline-light" style={{margin:"5px"}} >Converse</button>
                    <button type="text" onClick="#"  className="btn btn-outline-light">Diesel</button>
                    </div>
                    </div>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-lg-3">
                  <h4 className="fline">SIGNUP FOR NEWS LETTER</h4>
                  <p>
                    cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.
                    </p>
                 <form action="#">
                            <div className="form-control-rounded">
                            
                            <input type="text" className="form-control area" id="email" placeholder="Your Email(required)" name="email" />
                            </div>
                            <br/>
                     <button type="submit" className="btn btn-primary fbutton"  >SIGN UP</button>
                 </form>
                    
                </div>
              </div>
            
  
            </div>
          </div>
        </div>
      
        </footer>
           
            
            
        </>
    )
}
export default Landing; 