# How to Bring Live-Reloading back to a Django & React Project

This repository contains a very basic setup demonstrating how to use Webpack's dev server alongside Django's to make development life easy by getting live reloading to work again. You'll need to keep two terminals open running the two dev servers concurrently. 

It accompanies my article by the same name on [Hackernoon here]().

### Setup
1. Clone the repo
2. Open 2 terminal windows - let's refer to them as A and B
3. In A: `pipenv install`
4. In A: `pipenv shell`
5. In A: `python djrhr/manage.py migrate`
6. In A: `python djrhr/manage.py runserver`
7. In B: `npm install`
8. In B: `npm run start:dev`
9. Code away and watch Django reload whenever your React code changes. 
