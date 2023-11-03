import { useState } from "react";

import Question from "./Question";
function Exam() {
   const[optionno,setOptionno]=useState(0)
   const[score,setScore]=useState(0)
   const[answer,setAnswer]=useState(0)
  

   const[a,seta]=useState(0)
  
function next(){
  
    if(a<(Question.length)){
        updatescore();
        seta(a+1);
       }
if(optionno<(Question.length-1)){
 
    setOptionno(optionno+1) 
}

}
 function updatescore(){
    
    if(answer===(Question[optionno].answer))
    {
        setScore(score+1)
    }
}

function newcolor(result){
    setAnswer(result)

   
    
}
 
//console.log(score)

    return ( 
        <div>      
           { Question.length!==a? <div className="container">
            <div className="row">
            <div className="col-md-2"></div>
                <div id="question" className="col-md-8 bg-danger">
                    
                    <div id="ques">
                        {Question[optionno].question}
                    </div>
                    <div>
                        
                   {Question[optionno].options.map((result,i)=>(
                   
                       <ul >    
                            
                            <li> 
                    
                        
                                <button class="btn btn-success btn-lg active"onClick={()=>newcolor(result)}>{result}

                           
                            </button>
                           
                           
                  
                             </li> 
                         
                            
                            
                             </ul>
                   
                 
                  )
                   )}
                   </div>
                   <div>
                    <button style={{marginLeft:"180px"}} className="btn btn-info" onClick={next}>Next</button>
                   </div>
                </div>
                <div className="col-md-2"></div>
               
            </div>
        </div>:<h2 style={{textAlign:"center",marginTop:"200px"}}>  your score is:{(score*100/(Question.length))}% <br></br> total Questions:{Question.length}<br></br>your Right Question is:{score}</h2>}
       
        </div>
    );
}

export default Exam;