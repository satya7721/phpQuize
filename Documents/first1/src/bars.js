import React, { Component } from 'react';

class bars extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [
              79,1,20,1,40,67,56,8,32,78,23,53,89
          ],
       current:90,
       sorted:false,
        
        };
        
         

        this.sort = this.sort.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
       

        
      }
    
     



 sort()
{
    var a = this.state.data
    var swapp;
    var n = a.length-1;
    var x=a;
    
    do {
        swapp = false;
       
        for (var i=0; i < n; i++)
      
        { 
            this.setState({
              current:i

            })
        
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
               

            setTimeout(function() { 
                this.setState({
                    data:x,
                    
                    
                })
                  
                
                this.sort()

    }.bind(this), 500)

    
            return
            }
            
        }
        n--;
        
    } while (swapp);
  if(!this.state.sorted){
    this.setState({
        sorted:true,
         
     })
  }
}

shuffleArray() {
 
    var array = this.state.data

    for (var i = array.length - 1; (i > 0); i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    this.setState({
        data:array,
        sorted:false,
        current:90
    })
     
 
}




    render() {
        return (
            <div className="container-fluid m-0   ">
                <div className="row justify-content-center">
                    
            <div className="col-12 col-md-9">
                <div className="innerBox container-fluid">
                    <div className="">
                    {
                        
                        this.state.data.map((data,index) => {
                        
                            return (
                              <div key={index} className="row mt-1">
                                  <div className="anime" style={{backgroundColor: (index===this.state.current )? "red"  : (index===this.state.current+1 ) ? "#5ce049" : "#7c72f8",width: data+"%" , marginTop:"3px" ,height:"30px",paddingTop:"3px"}}></div>
                              </div>
                            )
                          })
                      
                      }
                    
                    </div>

                </div>
                <div className="col">
                <span className={this.state.sorted ? "badge badge-success" : "badge badge-warning"} >{ this.state.sorted ? "Sorted" : "unsorted"}</span>
                <div className="container-fluid text-right mb-1">
                      <button className="mybtnR" onClick={this.shuffleArray}>Randomize</button> 
                      <button className="mybtn ml-2 " onClick={this.sort}>Sort</button> 
                </div>
                </div>
            <div className="card">
                    <div className="card-header border-0 pl-5 "></div> 

                <div className="card-body ">
                    <h4>Bubble Sort</h4>
                    <h5 className="card-title">O(n²)</h5>
                    <p className="card-text">Comparing each pair of adjacent items and swapping them if they are in the wrong order</p>
                </div>
            </div>

            </div>

            </div>
            </div> 
          
        );
    }
}

export default bars;
