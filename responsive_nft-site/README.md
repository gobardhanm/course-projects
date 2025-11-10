# What we will be Learning...

    > Thinking "responsively"
    > Relative CSS unit
    > Relative Line height
    > Media queries
    > Mobile-first design
    > Responsive site nav
    > flex-wrap, flex, gap

# HTML

    > &lt; and &gt; 

    > "view port meta data" : This meta tag lets mobile browser know that they should set the width of their viewport to the device width and to scale the content of the page that when it initially load its the 100% of the width of the device .

    

# CSS

    > Thinking responsively:
        - Responsive is not a trend, It is simply a reality.
        - Consider different screen sizes, placing a strong emphasis on the mobile experience.
        - 'Absolute units' like pixels will always appear the same size no matter where you view them.
        - To make a website responsive we have to use "Relative Units".
            Relative units:
                - Relative to another value
                - Dynamic flixibility
                - Resize & scale
     *- "Percentages" unit is one of the relative unit.
        - When using a percentage for 'width', the percentage is based on the width of its parent element.
        
     *- "The em unit": It's a relative unit-
        - 1em is equal to the parent element's font-size value. (Usually: 16px, if parent element font-size is not set) 

    > max-width : It is used to set the max width of an element.
        Ex:
            max-width: 640px;
    
    > min-width : It is used to set the min width of an element.
        Ex:
            min-width: 320px;

    > margin :
        - If we put '2' value in margin, it will be : (top,bottom) | (left,right) 
        - If we put '3' value in margin, it will be : top | (left,right) | bottom
        - If we put '4' value in margin, it will be : top | right | bottom | left

    > "Images" have a displace value of "inline" , so we can make it "block" if something is not working right.

    > "Margin" and "Padding" values in em are relative to the element's current font-size value.

  **> An "em" value can compound from one level to another.
        Ex: 
            .parent-container{
                font-size: 1.2em;
            }

            .child-item{
                font-size: 1.5em; /* Here the font size of the child item is getting compounded by ( 1.2 * 1.5 ) */
            }

            - To resolve this issue we use, "rem"

    > "rem" unit : (The root em) :

        - By default, a "rem" value will be a multiple of 16px.

        ( It will only change if the html root font-size is changed, 
        Ex:
            html{
                font-size: 20 // Now the rem will act according to this, otherwise the default 16px
            })

    > line-height: 

        - The recommended approach for setting line-height value is using a "unitless number" 
        
        - Ex: Setting the line-height value to "1.5" will (150% of the font-size)

        - Set line-height at approximately 1.5 times the font size (150%).

            Ex: 
                p {
                    line-height: 1.5;
                }

    >> Recommended unit according to the element:

        > font-sizes:
            - Use "rem"
            - No compunding
            - More predictable
        
        > Margin & paddings :
            - Use "em"
            - Proportional scaling
            - Based on element's current font-size

        > Line-height : 
            - Unitless number value

        > Width:
            - Use "%"
            - Flexible containers
            - Flexible images

        > max-width:
            - Use "px"
            - Easier to manage
            - Ensures consistency

    > media queries: (We can create different layouts depending on the browser viewport or the device with this feature)

        Ex:
            @media (max-width: 499px) {     // max 499 or narrower
                body {
                    color: #faf9f6;
                    background-color: #202945;
                }
            }

            @media (min-width: 500px) {     // min 500 or wider
                body {
                    color: aliceblue;
                    background-color: cornflowerblue;
                }
            }

        - The points at which media query gets introduced (e.g: min-width: 500px, max-width: 499px) are known as "Breakpoints" :

            > Breakpoints :
                - Change layout
                - Update text size 
                - Page adjustment

        - We can combine "media queries" conditions to create a fix-range breakpoints using the "and" keyword.

            Ex: 
                @media (min-width: 500px) and (max-width: 799px) {
                    body {
                        color: aliceblue;
                        background-color: cornflowerblue;
                    }
                    
                    h1 {
                        font-size: 3.5rem;
                    }
                }

              - Here the properties will be applied between 500px and 799px.

    >>*> We should always design as "Mobile-First"

        > Mobile-first: optimizing the experience for mobile users and putting their needs first.

            - Here we write the base CSS with mobile device in mind first.
            - Use media queries to adjust the layout and design for wider screens.
            
    > Some common "Breakpoints" are :-

        - 480px : For Mobile Devices
        - 768px : For tablets
        - 1024px : For Smaller computer & laptop screen
        - 1280px : For Desktop screens and wider Screen

    > "link" is an inline element, and we can not apply padding on inline elements.

    > "desendent selector" is helpful while aligning using flex.