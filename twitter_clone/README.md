# Twitter Clone

## What's we'll learn :-

    > .forEach()
    > CDNs (Content Delivery Networks)
        - add icons 
        - generate UUIDs
      ### What is CDN (Content DElivery Networks) ?
            - A remote service
            - Provides assets to web applications 
            - E.g: functions, styles, icons...
            - Gives us a snippet of code that will bring the asset into our application
    > textarea
    > data attributes 
    > conditionally render styles 
    > NOT operator (!)

# Js:

    > forEach() : (A method for iterating over arrays)

        Ex: 
            Datas.forEach(function(data){
                console.log(data.emoji)
            })

            - The parameter in that function represents each element in the array 

        Ex.2: (We can nest a forEach) :-

            characters.forEach(function(character){
            // console.log(character.powers) // [it's commented]
            character.powers.forEach(function(power){
                console.log(power)
            })

      **> We can add a second parameter "index" to get the index of that element.

        Ex.3: 
             
             characters.forEach(function(character, index){
                console.log(index, character.title)
            })

    > Data Attributes: 

        - If we put a event inside a function as "parameter" we get an object, where we can go to "target" > "dataset" > "unique name we have given"

        Ex: 
            document.addEventListener('click', function(e) {
                if (e.target.dataset.share)
                console.log(e.target.dataset.share)
            })

        - Here "share" is the unique name as we have given in the Ex.2 of HTML

    > Copying Object & Arrays: (Not the behaviour we expect!, If we change the value of a object outside the array, it will also  change inside the array)

        *> But if we really want to make a real copy of an object or an arry : We use a method called :- (Making a deep copy.)

    
    > We can just flip a boolean by using "!" (logical NOT operator):

        Ex:  targetTweetObj.isLiked = !targetTweetObj.isLiked

        - If it's liked it will become not liked or vice versa

    > Conditionally render CSS class: 

        - We can conditionally render CSS class using flip boolean method and add the class in that element

    > UUID: (we can import uuid by importing the cdn link to the js file and using that where ever needed)

        Ex: 
            import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

            - We can import like this ( and we can change the name "uuidv4" acc to our convinience)

            cars.push({
                brand: 'Tesla',
                model: 'Model S',
                price: '🤦‍♂️',
                uuid: uuidv4()   // calling //
            })

            - We can call the "uuidv4" like this.

    > .unshift() : It pushes the object in the beginning of the array, (".push()" add an object on the end an array)

# HTML:

    > textarea : (A multiline input field)

        Ex: 
            <textarea 
            placeholder="Ask me anything!" 
            id="chat-input"></textarea>

            - We have to keep the opening tag and closing tag together or it will the break the code.
            - There is a resizing button on the bottom right hand corner by default, we can disable it with a css property:- resize: none;
                Ex: 
                    textarea{
                        width: 239px;
                        height: 50px;
                        margin: 0px;
                        padding: 5px;
                        resize: none;
                    }

    > CDN fontawesome: 
        - First we have to link the "CDN fontawesome" link to html
        - Then we can search and add icons from "fontawesome" homepage

    > Data Attributes: (Storing extra information in HTML elements)

        Syntax: data-* (where * represent the name we give the data attribute)

            So,  data-unique-name = "your data"

        Ex: 
            <img class="img-large" data-size="2650*2650">
        
        Ex.2: 
            <i class="fa-solid fa-share" data-share="image-1"></i>

        **> If we use "uniqueName" in html as camelCase we have to write whole name in small letters in JS.
            - We should not use uppercase letter when naming data attributes in HTML! (If we do we have to write the name in lower case in JS but it's not the best practice)
        **> We should always use dashes in HTML to separate the words in of data attributes naming, AND we should use "camelCase" in JS to write those name

# CSS:

    >

# Mistakes:
    
    > Its ".length" not .length()
