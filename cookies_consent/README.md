# JS
    > setTimeout - it execute after the given time.
    Ex: setTimeout(function(){
            modal.style.display = 'inline'
        }, 1500)

    > element.style - will alter the css property

    > <form>
        <label for="astronautName">Astronaut Name 👩‍🚀</label>
        <input type="text" id="astronautName">
      </form>

      If we click on the label it will put the focus of the cursor in the input (for="id-of-input")
      
    >To prevent the default behaviour of submiting the form data as query string we can use : preventDefault()

    Ex: loginForm.addEventListener('submit', function(e){
           e.preventDefault()
        })

    > Taking a html element into control and changing it:
     1. setTimeout(function(){
        const uploadText = document.getElementById('upload-text')
        uploadText.innerHTML =  `Making the sale...`
        }, 1500) 

      Can be written as:
            2. setTimeout(function(){
              document.getElementById('upload-text').innerHTML = `Making the sale...` 
              }, 1500) 

      Which can further written as:
            3. setTimeout(function(){
              document.getElementById('upload-text').innerText = `Making the sale...` 
              }, 1500) 

    > FormData : Storing data from a form in an object
      ~ FormData is a special kind of function , when we use the submit a form we can pass the whole form element to this special FormData function. And it return us an object holding all of our form data .

      Syntax: const loginFormData = new FormData(loginForm)

      > FormData.get() : Using the .get() method to see what our object holds 
      Ex: const name = loginFormData.get('astronautName')
          console.log(name)

    > Disabling elements : We can alter the disabled property set in html with the help of js, as the disable attribute is an boolean we can alter it according to that.
    Ex: decrement.disabled = false

    > eventlistner- "mouseover" : it triggered when mouse is hovered over
    > eventlistner- "mouseenter" : it triggered when mouse is hovered over

    > We can add a class and toggle it to an html element using :

      container.classList.toggle('reverse') 
      
      [here 'reverse' is a class, it add or removes the class in the container class]

# HTML
     >   Using button tag is better than input type of submit 
     >   Button can have the type of -> submit , button , reset
     > When we get two button inside a form those two button works as   submit button if the type is not given

     > Disabling elements : controlling when elements are useable
     We can achieve this by putting "disable" attribute in the element

     Ex: 	<button class="quantityBtn" id="decrement" disabled>-</button>

     > For Accessibility Issues, we can use(when we don't want to use label above input field):

        aria-label="Full name" 

  

# CSS
    >Fixed display position (ex: popup)
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

    > In disabling button we can use following style:
    
    .modal-close-btn:disabled{
    color: whitesmoke;
    opacity: 0.2;
    cursor: not-allowed;
    }

    > We can reverse the flex box directiion using - "flex-direction"
      To reverse in row - "flex-direction: row-reverse;"