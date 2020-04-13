import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Emoji from '../Emoji/emoji'

export default class Like extends Component{
    state = {
        hide: false,
        likes: [],
       
    }
    emoji() {
        this.setState({
            hide: true
        })
    }
    out() {
        this.setState({ 
            hide: false,
        })
      }

      updateLikes(Likes) {
        this.setState({
          Likes
        })
      }
    render() {
        const { Likes, hide, thumpsup, result } = this.state
        const imgStyle = {
            width: 65,
            height: 30,
          }
        return (
            <div>
                <div>
                    {hide&&
                    <Emoji updateLikes={this.updateLikes.bind(this)}/>
                    }
                </div>
                <div>
             <img src={"https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Like-Button.png?fit=1444%2C600"}style={imgStyle} onMouseOver={this.emoji.bind(this)} onClick={this.out.bind(this)}/>
             <img src={"https://image.flaticon.com/icons/svg/2462/2462719.svg"}style={imgStyle}/>{"Comments"}
             <img src={"https://image.flaticon.com/icons/svg/1059/1059106.svg"}style={imgStyle} />{"Share"}
            </div>
            </div>
        )

    }
}
