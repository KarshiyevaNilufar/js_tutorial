import React, { Component } from 'react'
import none from './img/none.7969bf7a.png'
import rock from './img/rock.fae7b245.png'
import paper from './img/paper.24d69089.png'
import scissors from './img/scissors.0dc12241.png'
import styles from './game.module.css'
import {FaRegHandScissors,FaRegHandRock,FaRegHandPaper, FaThemeisle} from 'react-icons/fa'
export default class Game extends Component {
    state={
        round:1,
        you:0,
        opponent:0,
        tie:0,
        images:[
            rock,
            paper,
            scissors
        ],
        icons:[
            <FaRegHandRock/>,
            <FaRegHandPaper/>,
            <FaRegHandScissors/>
        ],
        currentImageIndex:0,
        currentImageYou:0,
        youIcon:0,
        opponentIcon:0,
        roundIcon:1,
        colorYou:null,
        colorOpponent:null

    }
    changeImage = () => {
        const randomNumber = Math.floor(Math.random() * this.state.images.length);
        this.setState({
          currentImageIndex: randomNumber
        });
      }
      getPlay=(id)=>{
          let counter=0;
          let myInterval=  setInterval(()=>{
              counter++;
            this.setState({
                currentImageYou:Math.floor(Math.random() * this.state.images.length),
                currentImageIndex:Math.floor(Math.random() * this.state.images.length)
            })
            if(counter>10){
                clearInterval(myInterval)
            }
          },50)
          this.setState({
            currentImageYou:id
        })
          var newRound=this.state.round+1;
          this.setState({
           round:newRound
          })
          localStorage.setItem('you',this.state.currentImageYou)
          localStorage.setItem('round',this.state.round)
          localStorage.setItem('opponent',this.state.currentImageIndex)
          console.log(this.state.currentImageYou,this.state.currentImageIndex)
            setTimeout(() => {
                if(this.state.currentImageYou==2 && this.state.currentImageIndex==1 || 
                    this.state.currentImageYou==1 && this.state.currentImageIndex==0 || 
                    this.state.currentImageYou==0 && this.state.currentImageIndex==2){

                        this.setState({
                         you:this.state.you+1,
                         colorYou:1,
                         colorOpponent:null
                        })
                        localStorage.setItem('colorYou',this.state.colorYou)
                        localStorage.setItem('colorOpponent',this.state.colorOpponent)
                    }else if(this.state.currentImageYou===this.state.currentImageIndex){
                        this.setState({
                            tie:this.state.tie+1,
                            colorYou:null,
                            colorOpponent:null
                        })
                        localStorage.setItem('colorYou',this.state.colorYou)
                        localStorage.setItem('colorOpponent',this.state.colorOpponent)
                    }else{
                        this.setState({
                            opponent:this.state.opponent+1,
                            colorYou:null,
                            colorOpponent:1
                        })
                        localStorage.setItem('colorYou',this.state.colorYou)
                        localStorage.setItem('colorOpponent',this.state.colorOpponent)
                    }
              }, 1200)
      }
      componentDidMount(){
        window.onload = window.localStorage.clear();
      }
    render() {
        return (
            <div style={{overflow:'hidden'}} >
                <h1>Round-{this.state.round}</h1>
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                   <div>
                       <h3>Win</h3>
                       <p style={{fontSize:'30px'}}>{this.state.you}</p>
                   </div>
                   <div>
                       <h3>Ties</h3>
                       <p style={{fontSize:'30px'}}>{this.state.tie}</p>
                   </div>
                   <div>
                       <h3>Win</h3>
                       <p style={{fontSize:'30px'}}>{this.state.opponent}</p>
                   </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                    <div style={{width:'300px',border:'1px solid rgba(0,0,0,0.1)',height:'400px',paddingTop:'20px'}}>
                    <img id="one" src={this.currentImageYou==0?none:this.state.images[this.state.currentImageYou]}  style={{width:'100%',marginBottom:'100px'}}/>
                    <span style={{display:'inline-block',position:'relative',marginRight:'20px',width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'#E62649'}} onClick={()=>this.getPlay(2)}><FaRegHandScissors style={{marginTop:'15px',fontSize:'30px',transform:'rotate(180deg)'}}/></span>
                    <span style={{display:'inline-block',position:'relative',marginRight:'20px',width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'#E62649'}} onClick={()=>this.getPlay(0)}><FaRegHandRock style={{marginTop:'15px',fontSize:'30px',transform:'rotate(180deg)'}}/></span>

                    <span style={{display:'inline-block',position:'relative',marginRight:'20px',width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'#E62649'}} onClick={()=>this.getPlay(1)}><FaRegHandPaper style={{marginTop:'15px',fontSize:'30px',transform:'rotate(180deg)'}}/></span>

                    </div>
                     
                    <div style={{width:'300px'}}>
                         <h1>Round</h1>
                   {
                       this.state.round>=2?(
                        
                        <div>
                            <span style={{display:'inline-block',marginRight:'20px',fontSize:'30px',transform:'rotate(90deg)'}} className={localStorage.getItem('colorYou')==1?styles.colorfull:styles.colorNo}>{this.state.icons[localStorage.getItem('you')]}</span>
                        <h4 style={{display:'inline-block',fontSize:'20px',color:'rgba(0,0,0,0.7)'}}> {localStorage.getItem('round')}</h4>
                        <span style={{display:'inline-block',marginLeft:'20px',fontSize:'30px',transform:'rotate(-90deg)'}} className={localStorage.getItem('colorOpponent')==1?styles.colorfull:styles.colorNo}>{this.state.icons[localStorage.getItem('opponent')]}</span>
                        </div>
                        
                       ):''
                   }

                   </div>
                    <div style={{width:'300px',border:'1px solid rgba(0,0,0,0.1)',height:'400px',paddingTop:'20px'}}>
                    <img id="one" src={this.currentImageIndex==0? none:this.state.images[this.state.currentImageIndex]} style={{width:'100%',transform:'rotate(180deg)'}}/>

                    </div>
                </div>
            </div>
        )
    }
}
