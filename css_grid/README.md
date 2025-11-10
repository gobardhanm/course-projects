# CSS Grid (The ultimate layout tool)

    > Flexbox was our first layout tool in CSS.
      - It's amazing. We can do fantastic things with it, and it's super great at being flexible, but it has its limitations.

      - Flexbox only deals with 1-dimension at a time.
        - If we have "flex-direction: row;" we get columns. (We are working on the horizontal dimension)
        - If we have "flex-direction: columns;" , we get row. (We are working on the vertical dimension)

    > What if we want rows & columns?
        - We can use CSS Grid.

        - CSS Grid enables us to create grid, that means we can work on both vertical and horizontal axis at the same time!
        - This opens up new layout possibilities that we simply didn't have before.
        - It also enables us to simplify our markup.
        - It's great because we don't have to think so hard about how content need to be grouped, resulting in much "flatter" HTML.

    > It does come with some added complexity too.
    
      - The ultimate layout tool:
        -  grid-template-columns: ;
        - grid-template-rows: ;
        - grid-auto-columns: ;
        - grid-auto-rows: ;
        - grid-column-start: ;
        - grid-column-end: ;
        - grid-row-start: ;
        - grid-row-end: ;
        - grid-template-areas: ;
        - grid-gap: ;
        - minmax();
        - repeat();
        - fr
        and many more.


## Setting up a grid:

  > The first step to creating a grid is declairing "display:grid;" on the parent element.

  > This creates a new grid formatting context. This is similar to when we declare "display: flex;" in many ways.

  > Margin no longer collapse and the direct children of the element become grid items.

  > Similar to flexbox, when we create a new grid container, the flex children will fall onto the grid.

  > The only real change we'll see at first though, is that the margins no longer collapse. We have no dramatic making columns like if we created a flex container.

  
### To properly use CSS grid we need to define rows and columns.

  - Because flexbox only deals with one dimension, we don't have to worry about rows and columns,we can just swithch back and forth with flex-direction.
  - With grid, we have both. We can explicitly create them and then place items within the grid that we have created.

    - We do that with "template rows and columns" :-

      Ex: 
          grid-template-columns: 200px 200px 350px;

          grid-template-rows: 50px 200px;

        Ex: 
            body {
                display: grid;
                grid-template-columns: 300px 100px 100px 200px;
                grid-template-rows: 750px 500px
            }


            *- Short-hand for grid-template:

              Ex:
                  body {
                      display: grid;
                      grid-template: 100px 400px / 250px 250px 250px;
                  }

                  (grid-template: rows / columns;)

    ### Placing items on the grid:

      > Content will place itself automatically on the grid.
      
      > We can explicitly place items where we want them to be.

      > We can tell grid items exactly where they live within their parent's grid with the following properties:

          - grid-column-start
          - grid-column-end
          - grid-row-start
          - grid-row-end

        
    ### Grid-row and grid-column shorthands:

        Ex:

            .example {
              grid-row: start / end ;
              grid-column: start / end;
            }

          
        > They will overlap if specificly given.

      > .grid {
          display: grid;
          grid-template: 100px 100px 100px / 200px 200px 200px;
        }

        - Here there are 4 rows number and column if we go left to right : (1, 2, 3, 4)
          
          And if we go from left to right it will be : (-1, -2, -3, -4)

          That means: (1 = -4 , 2 = -3, 3 = -2, 4 = -1 )


    ### Some similarities to felxbox :

        > Setting "auto" for a row or column

          - When defining our rows (and sometimes our columns), we don't want to set an exact height, we just want it to match the content.

          - We can do that by using the "auto" keyword.

        > If we don't declare a grid-template-row or if we have more rows than we have defined, they will default to "auto".

            - This is a good thing!, It's the behaviour we want most of the time 

            - But like flexbox, grid items stretch by default.

          > "align-items: ; " in grid:
              - It has two values:
                  - start
                  - end
                  - baseline

          >  "justify-items: ;" in grid:
          

    ### Grid gap:

        > Creating spacing in layouts just got a lot easier!

          - We can add gap between our rows and columns with:

            - grid-column-gap
            - grid-row-gap
            - grid-gap: (shorthand)

        > The "grid-gap" property is being replaced by gap but it is only supported by FireFox.
        > The "gap" (and gap-row and gap-column) property will work for both grid and flexbox.

    ### Implicit and explicit rows and columns:

        > When we declare "display: grid;" on an element, all the grid items are automatically placed inside of a row, even if we haven't created any yet.

        > The same thing happens with the columns, though it will default to only have one column.

        > When we set up grid-template-columns and grid-template rows, we are explicitly stating how big they must be.

        > But sometimes, columns and rows are created automatically.
        - These are Implicit rows and columns.

        > But hwo big are these implicit rows and columns?

          - They'll default to auto ( the width and height of the content.)

        > If we want, we can state how big we want them to be by using:

              - grid-auto-rows
              - grid-auto-columns 

    ### Grid areas:

        > Keeping track of row and column numbers can be a pain at times. We can simply thing by assigning "grid-areas:;" .

        > When we created grid areas, we're effectively giving names to different parts of our grid, and then we can assign items to those areas very easily.

        > IT CAN SEEM LIKE A BIT OF EXTRA WORK AT FIRST, BUT THE PAYOFF IS WELL WORTH IT!

          Ex:
              grid-template-areas: "header header header"
                                   "sidebar content content";

        > It is very easy to assign a grid item to a grid area!

          Ex: .main-content {
                grid-area: content;
              }

    ### minmax() :

        > Setting a min-width and max-width to our template columns and rows.
        
        > When assigning a size to our "grid-template-columns or rows", we don't have to give it a specific size.

        > Using "minmax()" we can assign them a minimum and maximum size.

        > We assign the two values inside of the parenthesis, separated by comma.

            Ex:
                minmax(100px, 300px)
                minmax(3em, 10em)
                minimax(200px, 50%)

    
    ### the "fr" unit :

        > Getting rows and columns to behave more like flex items.

        > The 'fr' unit is used to distribute a fraction of the available space.

        > By using this for the size of a grid-item, it becomes a flexible item and behave more like a flex items does when it's set to 'flex: 1 1 auto;'

        > It's the easiest way to create columns of equeal size.
        
        > When using grid, I tend to use "fr" a lot! But we need to be careful with minmax().

          - Because of how the "fr" unit works, we cannot use it as the minimum size.


    ### repeat() :

        > When defining our template-rows or template-columns, if we have multiple columns that are the same width, we can use "repeat()".

        > This makes our lives easier, and can be very useful with the fr unit to quickly make multiple columns that are all the same size.

        > First, we define how many times we want it to be repeated, and then the size. The two values must be comma separated.

        For example, if we want to create a four column grid:

          .example{
            display: grid;
            grid-template-columns: repeat(4, 300px);
          }  


    ### auto-fit & auto-fill :

        > When using repeat, instead of a set number of times, we can use auto-fit & auto-fill as well.

        > The two of them are different, though the difference can be confusing at first.

        > "auto-fit" will fit the columns you have defined into the available space ( it's a bit more complicated, but essentially this is what it does).

        > "auto-fill" will keep adding in new columns, even if they are empty.

            Ex:
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));



