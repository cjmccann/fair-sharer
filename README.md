[mockup]: readme_images/mock_up.png

##Project Proposal##

###Title: “Fair Sharer”### 

###Problem Statement:###

Living with roommates often results in a need to share a host of items and expenses. And especially when you live in a tight knit household/apartment, the number of shared items can be very significant. Splitting the cost of groceries and household goods can be a pain, and often small expenditures made by a single roommate are merely unaccounted for. Instead, a sort of informal honor system of “you can buy the next one” arises, because in the end, do you really want to collect $1.20 from your 4 roommates to cover the cost of the toilet paper you just bought? The number of micro-transactions that can occur by attempting to truly account for expenditures can be extremely tedious, and simply unmanageable if almost everything is shared (groceries are a big factor). Our goal is to find a solution to this problem. In short, track and settle all debts within a group of people in a simple and transparent way.

There are many other scenarios where it is difficult and tedious to make sure everyone’s paid their fair share. Living with roommates is simply the most widespread and powerful example of this, and hence we will be using it to demonstrate the power of our product throughout the proposal. But other scenarios include but are by no means limited to: a group of friends that consistently buys meals together and does activities that cost money; a group that is traveling together for an extended period of time, and wants to balance costs.  

###Solution:###

To solve this problem we believe you need to have a single framework that effectively distributes the cost of items and goods across members, and then sets up a recurring payment cycle where all debts are settled at once in order to minimize transactions. This is where our webapp comes in. Once you and your friends/roommates/co-workers have made accounts with the site, you can create a group. From within the group you can post items that you have bought, assign ownership to these items, and also ‘join’ other items (e.g. - if you want to eat burgers that night, you can join the ground beef and buns items posted by another member). The cost of a single item will be split-up among the owners. If you bought a shared item then as others join the item or are added to it, (you can choose to leave an item if you are wrongly added), you are insuring that come the payment date you will be effectively paid back.

The next step is to set up a payment cycle where each person pays what they owe (or receive what they are owed) at given time intervals. To illustrate, I will continue with the apartment/household example. Most apartments collect rent monthly, and most landlords will collect the amount owed from a single point person among the roommates. If the payment cycle is set to when rent is due, and rent is added as a shared expense, then each month the total owed by each roommate will vary depending on how much they spent that month on shared expenses (and how much their roommates spent on shared expenses). So, for example, if I went to Costco in the month of March and bought $200 worth of groceries and goods for the whole house, and no one else posted any other shared expenses, my total “rent” due for March will be reduced by $200 and my roommates’ “rents” will increase proportionately to settle the debt. In this way, with one single payment, a whole number of shared costs, split among different groups of roommates, can all be settled at once. 

Our system eliminates hassle; there is no more need to hound your roommate for the $2.00 he owes you for bread. It also insures equity; a group member who is lactose intolerant does not have to pay for the apartment’s cheese (he simply not part of the item). Our app provides an easy and transparent way to make sure everyone pays their fair share - as it should be.


###Feature list:###

 *User accounts and data (Server-side data persistence)
 *Front-end framework: Bootstrap
 *Client-side data persistence (Logins with cookies)
 *Reporting monthly/weekly expenses (Charts/graphs) (D3 API)
 *Send email to user when they have received a new charger, or when someone has committed to sharing one of your charges (Gmail API)

###Some features###

  *Ability to join mulitple groups (Chetwynd Apartment/Travel Crew/SigEp Seniors)
  *Live updating stream of items added
  *Generate .xl files (or some other kind of spreadsheet) based on expenses
  *Visualize your debts/credits in the past week/month/year/etc...

###Data:###
    *Usernames and passwords
    *List of items added, can belong to one person, can be shared
    *User profile class to store items bought, items shared, expenses, total owed, etc

###Algorithms/Special Techniques:###
    None that we have encountered thus far

###Mock-Ups###
![Computer Generated Mock-Ups][mockup]

