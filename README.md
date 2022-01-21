<h1 align="center">Hi 👋, I'm Francisco Funes</h1>
<h3 align="center">Sharing Data between Angular Components - Four Methods</h3>
<h5 align="center"><a target="_blank" href="https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/">Course Link</a></h5>
<hr>

- 🌱 I’m currently learning **Angular**

- 👨‍💻 All of my projects are available at [https://franciscofunes.netlify.com/](https://franciscofunes.netlify.com/)

- 📫 How to reach me **ffunes90@gmail.com**

<hr>
<p align="left">
</p>

<h3 align="left">Course content ⭐️</h3>

<h4>📕 In this course, they cover different ways to share data between Angular components. </h4>

- Parent to Child the Input Decorator:
  <p>
    📖 When you declare a variable with the Input decorator in the child component, it allows that variable to be received from a parent template. In this case, we define a message variable in the parent, then use square brackets to pass the data to the child. Now the child can display this data in its own template.
  </p>
- Child to Parent via ViewChild:
  <p>
    📖 ViewChild allows a one component to be injected into another, giving the parent access to its attributes and functions. One caveat, however, is that child won't be available until after the view has been initialized. This means we need to implement the AfterViewInit lifecycle hook to receive the data from the child. </br>
    In the AfterViewInit function we can access the message variable defined in the child
  </p>
- Child to Parent via Output and EventEmitter:
  <p>
    📖 Another way to share data is to emit data from the child, which can be listed to by the parent. This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events. </br>

  In the child, we declare a messageEvent variable with the Output decorator and set it equal to a new event emitter. Then we create a function named sendMessage that calls emit on this event with the message we want to send. Lastly, we create a button to trigger this function.</br>

  In the parent, we create a function to receive the message and set it equal to the message variable.</br>

  The parent can now subscribe to this messageEvent that's outputted by the child component, then run the receive message function whenever this event occurs.
  </p>

- Share data between any components:
  <p>
    📖 When passing data between components that lack a direct connection, such as siblings, grandchildren, etc, you should you a shared service. When you have data that should aways been in sync, I find the RxJS `BehaviorSubject` very useful in this situation. The main benefit that a BehaviorSubject ensures that every component consuming the service receives the most recent data. </br>


  In the service, we create a private BehaviorSubject that will hold the current value of the message. We define a currentMessage variable handle this data stream as an observable that will be used by the components. Lastly, we create function that calls next on the BehaviorSubject to change its value. </br>

  The parent, child, and sibling components all receive the same treatment. We inject the DataService in the constructor, then subscribe to the currentMessage observable and set its value equal to the message variable. </br>

  Now if we create a function in any one of these components that changes the value of the message. when this function is executed the new data it's automatically broadcast to all other components.
  </p>
