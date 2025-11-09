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


========================================================================================

Lession: 8 

  1. Data mutation : update data in the backend
  2. Types of requests: GET, POST, PUT, DELETE
  3. POST request : add product to the cart, create an order
  4. PUT request : update the cart
  5. DELETE request : delete a product from a cart 
  6. Dependency Array : to update the payment summary in useEffect 
  7. useNavigate : navigate to another page using our code


========================================================================================

Lession 9 : Automated Tests in React with Vitest (Jest is also a popular testing package)
  
  - There are many ways to run tests:
    1. Unit Tests : test 1 unit or 1 piece of the code
    
    2. Integration Tests: test multiple units of code working together
      - While testing a function we run the function.
      - While testing a component we render the component.

      - We do not directly contact the backend, we "Mock".
      - Mock : create a fake version of this function
      - vi.fn() : creates a fake function.

      - "screen" from the testing-react lib. lets us check the fake web page.

  - Test Hooks :
    - beforEach() : restore the data before each tests
    - afterEach() 
    - beforeAll()
    - afterAll()

  > Mocks don't do anything.


  ===============================================================================

  Mock the Implementation :

    - Means, we make the mock do whatever we want.

    - MemoryRouter : specifically for testing.

    Summary:
      - Automated Tests with Vitest
      - Unit tests : tests 1 piece of the code
      - it(), expect(), describe()
      - Integration tests : tests multiple pieces of code
      - Test a components (using render and screen)
      - Mock : fake version of a function / package
      - Mock the Implementation : make a mock do whatever we want


  ===============================================================================

  Deployment:
    - AWS (Amazon Web Servies)
      - A collection of services that helps us put stuff on the internet.

    Summary:
      - AWS
      - EC2 : rent computer from AWS (IaaS)
      - Elastic Beanstalk : sets up all software (PaaS)
      - Put our backend on the internet
      - Build and optimize the frontend, put it on the internet
      - How to deploy React without backend
      - Added load-balancer and database
      - Set up domain name, SSL certificate, and HTTPS
      - Learned about "vite build- dist folder"

=====================================================================================
TypeScript: JavaScript with extra features
  - Type checking: Verifying that variables and expressions match their declared types.
                   Ensures that variables and expressions conform to their declared types.
  - Type inference: Automatically determining the type of a variable or expression based on its value or usage.
                    Automatically deduces types when they aren’t explicitly specified.

  - Type Alias : works like a variable, but for types


  Ex: 

  let age: number = "20"; // ❌ Error: Type 'string' is not assignable to type 'number'

  let age = 20; // ✅ TypeScript infers 'age' as number automatically



  -->
