User

can signup using valid email-password-name:
    -need a userTable and account table to be saved 
    -endpoint signup/get
    -does not have an account

can signin using valid username-password:
    -need a login table to check if data are correct and matched in database 
    -endpoint login/get
    -have and acc to go in

can edit data Detailes or PostName if author:
    -need login table to be sure of autheticated user
    -endpoint get to view data of blog
    -condit that he is logged in

can delete the post permantly if author need: 
    -login table to br sure of autheticated user 
    -need endpoint delete to delete blog
    -condition that he is logged in

can view any blogs at instants
    -need to access table of all blogs by user or authors so he can view them
    - need endpoint get to view them
    -condition that he is logged in

can create new blogs
    -need to be logged in and a table to add the data in it 
    -need  endpoint post to add new data
    -cond that he is logged in 

