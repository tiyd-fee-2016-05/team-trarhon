# How does the API handle authentication?

## Do I need to authenticate?
  ##### No, it's not required.  Almost all information and code is available to the public unless you make your repo private.

## What can I do with an unauthenticated request?
  #### You can then handle user interaction on different levels(user/admin).  This would allow access to only certain areas of the code.  On the other hand, if a user is not able to access the repo, they're then directed to a custom error page.

## How can I authenticate my request? (3 ways)
  #### Basic authentication requires the user to simply input their user name and password information related to the site.  Another way is to give the user an OAuth2 Token which is a case sensitive unique code used to replace user-name and password entry.  This token can be sent and used as a parameter or in a header.

# How do I ask the API for...


## The profile information for a specific user?
  #### "GET users/:username" is the command used to request a single user name.  "GET user" searches for a specific authenticated user name.

## The repository listing for a specific user?
  #### "GET /users/:username/repos"  is for a specific user repo
  #### "GET /orgs/:org/repos" looks for a specific organizations repo.
  #### "GET /repositories" will list all public repos.

## The recent, public activity for a specific user?
  #### "GET /repos/:owner/:repo/subscription" will allow you to subscribe to a particular repo based on the user-name.  Replace ":owner" with the user name.

## Is there a limit to the number of requests I can make?
  #### There is a limit of 5000 authenticated requests per hour and a limit of 60 per hour of unauthenticated requests.  The unauthenticated requests are done using your IP address and not your user name and password. Accessing the end point doesn't count against your limit.

## Is there a way of extending that limit?
  #### You can pass your app's client ID and secret as a string to raise the limit.
## What happens when I hit the limit?
  #### Once you reach the limit you'll be presented with an error.  
## What if there is a lot of data returned?

## How can I ask for more (or less) data from a request?

# How do I know that there is more data available?


## What are the endpoints for fetching...

## the profile data for a user?


## the organizations a user belongs to?

## the repositories a user has created?

## a filtered list of repositories?

## a sorted list of repositories?

##  public events for a user?

## When fetching public events for a user...

## How many results are returned by default?
  #### You can receive a maximum of 300 results with 10 pages containing 30 results per page.
## What limitations exist on fetching more results?
  #### Only events logged within the past 90 days are accessible.  
## What is the basic structure of the results?

## What fields are included in each result?

## What are the data types for each field?

## What are some of the different values for the type field?
