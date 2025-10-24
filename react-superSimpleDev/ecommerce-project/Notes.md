<!--
    Routing:
      - It lets us create multiple pages in React.
      - Routing lets us create multiple pages using 1 HTML file.
      - This let's us re-use our HTML code.

      - We install React-router.
      - <BrowserRouter> added to main, where we're rendering
      - <Routes> component tells React all the pages that are in our website.

      - A single page index.html is shared across the all pages, it's called
        SPA (Single Page Application)

      - There are some shortcuts :
        - path='/' which is used for homepage, we can just write index.
        - We can use self-closing in Route components.

  =====================================================================================
    > When we click a link it reload the pages, as it was a multipages project,
     by default <a/> (link el) reloads the page

     - So, now we are using Routing, a SPA, we don't need to reload everytime, we can use JS
      to switch b/w pages.
      - To do this react-router provide a component called "<link>", it uses a prop "to",
        instead of href of <a/>

    - When using react-router we should use <Link> instead of <a>
    - <Link> goes to another page without loading

      =====================================================================================
  > In this lession:
      - Started the Ecommerce project using React and Vite
      - Git : track of all changes in our code
      - Routing : Create multiple pages in React
      - Created the HomePage, CheckoutPage, OrdersPage
      - Updated all the links to work with routing
      - Separated the Header into a Component.
  -->
  <!--
  > Backend:
      - fetch() : a inbuild function which fetches data from the backend
      - fetch is asynchronous, fetch returns a promise,
        promise : lets us wait for asynchronous code to finish.
        - It has a method .then(), which takes a func, 

        - .json() : gives us data attached to the response, it's also asynchronous.
          it is also a promise, so need to use .then()
    
    - axios : a npm package,helps in cleaner way to make requests to the backend

    - useEffect : lets us control when some code runs.
      - Dependecy array lets us control when useEffect runs.
      - [] runs once
      - Strict mode runs it twice to catch bugs.


========================================================================================

- Async Await :
    - lets us write asynchronous code like normal code.
    - Write now we are using ".then" a promise, which waits.
    - We should use Async-Await instead of promises whenever possible.
    - The inner function in useEffect should not return a promise.
    - When using async-await inside useEffect, we create a func then run it.
    - await should be inside async function.
    - async function returns a promise,but we should not return a promise inside useEffect,
      that's why we use, variables, or create another async func inside useEffect and put it 
      in a variable.

- In this lession (7):

    1. Backend : manages the data
    2. Setup a backend for our project
    3. Data fetching
    4. axios : easier way to make requests to the backend
    5. Generate HTML using data from the backend
    6. Separated into smaller components
    7. Async Await : write asynchronous code like normal code

========================================================================================
- Lession 8:

- Data Mutation and Types of Requests : 
    - axios.get() : gets us data from the backend.
    - axios.post() : create data in the backend.
      - with .post(), we give it another value, a object, this is called the request body.
      - backend needs to know 2 things in order to add a object, here productId, quantity.

- Type of Requests :
    - .get(url-path) : sends GET and /api/cart-items

    - It sends 2 pieces of information:
     1. Type of Request
     2. URL path

    - .post(url-path) :
      - This sends :
        1. Type: POST
        2. URL Path : /api/cart-items

    - The type is also called "HTTP" methods.

    - There are 4 types mainly:
        - GET : gets some data
        - POST : create some data
        - PUT : update some data
        - DELETE : delete some data

========================================================================================
- Issues and Resolutions:
1. Updating all product quantity -> separated it into a new component.


--- 8:33 ---
  -->
