# Pok-mon-API

Choose an app you want to build

Pair up with someone based on your interests

Create a repo using your template

Clone it to one of your machines

npm init

Understand dotenv

npm install dotenv --save

require('dotenv').config() at the top of your main.js

create a .gitignore file in the root folder

add .env to the .gitignore file

create a .env in the root folder and save your API key in it by...

adding something like SECRET_KEY=abcd1234 to the .env file

git add commit push...

Now clone it to your partner's machine

Repeat the .env file process so each of you have a copy of the API key

Work in separate branches (be careful of merge conflicts)

Focus on functionality first

Only style after you have all the functionality working
The projects can become a final project if you like. You can continue building them on your own or together. In class, however, we are just going to focus on accessing the API and doing a few simple things with the data we get back.

Pokemon Collection
[https://www.pokeapi.co/](https://pokeapi.co/)

Sign up for api key
Create an arena that displays two Pokemon battling each other.
Compare the two to see who is likely to win.


Part 1: Testing Your Fetch
Last week you paired up and built an app that fetches data from an API. Today you're going to add unit tests for multiple situations:

Mistyped address
Out of range request
Wrong API key
Hypothetical 4
Hypothetical 5

Instructions
Pair up with your partner again
git status to make sure you each have pushed up and merge all of your changes
Work on one computer and add the 5 unit tests mentioned. You will have to refactor your request a bit to add in fetch as a dependency
