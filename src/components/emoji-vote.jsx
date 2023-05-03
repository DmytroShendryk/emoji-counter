import React, { useState } from 'react';
import EmojiButton from './button';
import EmojiVoteCount from './counter'


const EmojiVoteApp = () => {
  const [emojiVotes, setEmojiVotes] = useState({});

  const handleVote = (emoji) => {
    setEmojiVotes((prevVotes) => {
      const updatedVotes = { ...prevVotes };
      updatedVotes[emoji] = (updatedVotes[emoji] || 0) + 1;
      return updatedVotes;
    });
  };

const emojis = ['😀', '😍', '🤔', '😢', '😡'];

  return (
    <div>
      <h1>Emoji Vote</h1>
      <div>
        {emojis.map((emoji) => (
          <EmojiButton key={emoji} emoji={emoji} onClick={() => handleVote(emoji)} />
        ))}
      </div>
      <h2>Results:</h2>
      <ul>
        {Object.entries(emojiVotes).map(([emoji, count]) => (
          <EmojiVoteCount key={emoji} emoji={emoji} count={count} />
        ))}
      </ul>
    </div>
  );
};

export default EmojiVoteApp;