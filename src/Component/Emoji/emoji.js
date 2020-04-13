import React, { Component } from 'react';
import FacebookEmoji from 'react-facebook-emoji';

export default class Emoji extends Component {
    state = {
        Likes: 0,
        result: false
    }

    fblike() {
        const { updateLikes } = this.props
        const { Likes } = this.state;
        const newLikes = Likes + 1
        updateLikes(newLikes)
        this.setState({
            Likes: Likes + 1,
            result: true
        })
    }
    render() {
        const { Likes, result } = this.state
        return (
            <div>
                {result && <p>You and {Likes} others</p>}
                <a onClick={this.fblike.bind(this)}> 
                <FacebookEmoji type="like" size="xs" /></a>
                <FacebookEmoji type="love" size="xs" />
                <FacebookEmoji type="wow" size="xs" />
                <FacebookEmoji type="yay" size="xs" />
                <FacebookEmoji type="angry" size="xs" />
                <FacebookEmoji type="haha" size="xs" />
                <FacebookEmoji type="sad" size="xs" />
            </div>
        )
    }
}
    
