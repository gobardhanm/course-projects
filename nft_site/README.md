## Semantic HTML (More descriptive tags)
    > header - site logo, title and nav
    > section 
    > footer
    > main 

    > Advantage:
    - Better Accessibility
    - more readable
    - better SEO

## Margin acts weird
    > When an element touches its parent, its top and bottom margins will merge with the margins of the parent element.
    > parent -header, element - h1

## Pseudo selector
    > element:hover
    > element:active

## New property
    > text-decoration
    > to center( text-align: center and margin: 0 auto;)

## DRY
    > We should group selectors or write multiple selectors using comma separation for DRY purposes.

## Specificity (Precedence)
    > Higer specificity selector override lower s.s
    > id selector > class selector > element selector (writeen last in css file) > element selector (the same element written earlier before the last file)
    > css has points for selector
      id selector :- 100 points
      class selector :- 10 points
      element selector :- 1 points
    Higher the points higher the specificity 

    > We should avoid using id selector in css as much as possible,
    For, General styles : element selector
         Everything else : class selector 

## Compound Selector (More specific targetting)
    > We can target a specific element inside a specif containter by using space separation and we can also use pseudo classes in those.

    > Ex: .container a{
        properties
    }

    We can get it's specificity by adding the points of the selectors ( class 10, element 1, id 100), So it's specificity in points will be 11 points.

    or

    .container a:hover{
        properties
    }

## Button vs Links
    > Buttons for actions that affect the website's front-end or back-end (JS!)
    >Links for navigation to somewhere on the same page, within the site, or elsewhere in the internet

## Block element, Inline element and Inline-Block element
    >Block Element:
        Stack on top of each other. Ex: div, p , h1
        Height and margin top and bottom can be set.
    
    >Inline Element:
        Sit side by side. Ex: span , a 
        Height and margin top and bottom CANN'T be set.

    >Inline-Block Element:
        Sit side by side . Ex: button , input
        Height and margin top and bottom can be set.
