console.log('Hello');

const name = "Mori";

const intro = (
  <div class="intro">
    <h2 id="title">{name}</h2>
    <h3>What is {name}?</h3>  
    <div class="desc">
    {name} is a Discord chat bot that links Reddit and Discord, provides moderation tools and automatic moderation actions, and utilizes open-source libraries and APIs to answer user queries regarding game and time zone information right from the chatroom.<br /><br />

      It also comes with a slightly snarky personality because life's more fun that way. {name} will <em>occasionally</em> comment on whatever you're asking it to do, or say something when a command fails due to an input error.
    </div>
  </div>
);

ReactDOM.render(intro, 
document.getElementById('root'));