Robots is a JavaScript application where the user is able to create, modify and delete robots from a list. There are three different pages including the index or landing page, the robot functionality page and the about page. Below is a sample of the code. 

var routes = require('./routes/index');
var robots = require('./routes/robots');
var about = require('./routes/about');

<h3>Add Robots</h3>
       <form action='/robots' method='post'>
         <input type='text' name='name' placeholder='name' />
         <button class='btn btn-waves' type='submit'>Automate</button>
       </form>

Like so many websites today, lists serve as a fundamental base in which information is delivered. I built Robots as a practice application to further my understanding of how JavaScript page routes work together. The Robots list built in the application served as practice with a more creative approach to list creation and modification. 