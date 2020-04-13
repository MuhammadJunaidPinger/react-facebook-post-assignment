import React, { Component } from 'react';
import { render } from '@testing-library/react';
import FbImageLibrary from 'react-fb-image-grid';
import Like from '../Like/like'
export default class FaceBook extends Component{
   
   
    profilePic(){
        this.props.pic()
    }
    render() {
        const {pic,name,date,description,images,emoji} = this.props
        const style = {
            border: "2px solid whiteSmoke",
            margin: "auto",
            textAlign: "left",
            padding: "5px",
            width: "50%",
            marginTop: "10px"
        }
        const fbDiv ={
            height: "400px",
            width: "350px",
            border:"1px solid whiteSmoke",
            margin: "auto"
        }
        return (
            <div style={style}>
                <img src={pic} style={{width: "35px", height: "30px"}}></img>
                <span style={{marginLeft: "10px"}}><b>{name}</b></span><br/>
                <span style={{color:"blue"}}>{date}</span><br/><br/>
                <p>{description} {emoji}</p>
                <div style={fbDiv}>
                <FbImageLibrary images={images} /><br/>
                <Like  />
                </div>
            </div>
        )
    }
}