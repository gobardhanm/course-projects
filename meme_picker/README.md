# Concepts>

    > for of
    > radio and cheackbox inputs
    > getElementByClassName
    > querySelector
    > classList.remove
    > import/export
    > .includes()
    > .filter()

# JS
    > for of:
        Ex: for (let character of characters)

        Here the character is the variable and characters is the array, and each object of characters will be assigned to the characters one at a time.

    > import/export:

        we "import" something from a different file using "export" in that file
        
        Ex: we can "export" a array from a file let say "data.js" using:

            "export const dinnerPartyGuests"

            And we can "import" that array in our file let say "index.js" by:

            "import { dinnerPartyGuests } from '/data.js'"

            ** But we'll still get a error here >> To eliminate that error we have to add 'type="module"' in "HTML" script link as:

                <script src="index.js" type="module"></script> 

    > .inclues() : (A method for cheacking if an array holds a given value?) :

        Ex: 
            const emojis = ['🐥','🐯','🐼']
            console.log(emojis.includes('🐴'))
            
            > Here it will log out true or false according to the statement.

    > event.target.id : (To know where did the click came from ?)

        Ex: 
            container.addEventListener('click', function(e){
                console.log(e.target.id)
            })

            Here the "e" is an object and we are accessing the "target.id" in that object.

    > .parentElement : (Accessing the parent when you know the children)

        Ex: 
            container.addEventListener('click', function(e){
                document.getElementById(e.target.id).parentElement.style.backgroundColor = 'lightblue'
            })

            - Here we are accessing the parent element of that targeted id using ".parentElement" on that id.

    > classList add/remove:

        Ex: document.getElementById(e.target.id).parentElement.classList.add('read')
            document.getElementById(e.target.id).parentElement.classList.remove('unread')

            -Here we are adding/ removing a class in a element by targetting it's id and using "classList.add("class")/classList.remove("class").

    > getElementByClassName (Grabbing all elements with a given class with one line of code ):

        Ex:
            const productsArray = document.getElementsByClassName("product")
            for (let product of productsArray){
                product.classList.remove("purchased")
                product.classList.add("on-offer")
            }

        - Here the "getElemetnsByClassName" will get the element with the given class name.

    > querySelector (A more powerful way of grabbing  elements)

        Ex:  
            submitBtn.addEventListener('click', function(){
                const quaryRadio = document.querySelector('input[type="radio"]:checked')
                console.log(quaryRadio.value)
            })

    > checking if "checkbox" is checked or not:

        Ex: 
            continueBtn.addEventListener('click', function(){
  
                if (acceptTerms.checked){
                    console.log("Terms accepted!")    
                }
                else{
                    console.log("Terms refused!")         
                }
            })

            - ".checked" will check if "cheackbox" is cheacked or not.
            - "acceptTerms" is the control of that checkbox.

    > .filter() : (Getting only the elements we want from an array)

        - will return true or false after filtering through the whole array
        
        Ex: 
            const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

            const adults = ages.filter(function(age){
                return age >= 18
            })

            console.log(adults)

            const children = ages.filter(function(age){
                return age < 18
            })

            console.log(children)

        Ex.2 :
            const thrillersSeries = series.filter(function(genre){
            return genre.genres.includes("thriller")
            })

            console.log(thrillersSeries)

    > ** We can use "logical and" in the return statement

        - return cat.emotionTags.includes(selectedEmotion) && cat.isGif
        

    >  

        

# HTML
    > Radio Inputs
        
        A radio type of input can be achieved by:

            <div class="radio">
                <input 
                type="radio"
                id="ducks"
                value="horses"
                name="choice-radios"
                >
                <label for="horses">5 duck-sized horses</label>
            </div>
 
        ** - Here the "type ="radio"" gives us radio inputs
           
           - We give id accordingly
           
           - Value property is important bcoz it tells us what the radio represents, we can give a desciptive name also.
          
          *- "name" of all the radio should be "same" when we dont want to select multiple input.
          
          - "for" in the label used for selecting the radio by clicking on the label 

# CSS

    > The property which change the color of the input radio button:

        accent-color: #bd301d; 