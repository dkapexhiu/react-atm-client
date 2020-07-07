Welcome to a ReactJS ATM App.

The App is a simple representation of an ATM, and it allows a user to view their balance, withdraw said balance, and go into their overdraft. Only one pincode is accepted "1111". 

The UX is designed to be as efficient, and clean as possible. 

Steps to use the app:

Make sure a relatively recent NodeJS is installed.

1. Clone or Download the files.
2. In the root folder run 'npm Install'
3. Run 'npm install react-pin-input --save'
4. Run 'npm install react-router-dom'
5. Run 'npm start' to begin




The App shall open on the ATM console. A successful pin of '1111' is required. 
![ATM1 Screenshot](https://github.com/cris3000/React-ATM/blob/master/Images/ATM1.jpg)

It will then lead you to the Balance page, of which shall contain the account holders balance, and allow them to enter the amount of which they wish to withdraw.
![ATM2 Screenshot](https://github.com/cris3000/React-ATM/blob/master/Images/ATM2.jpg)

Upon submit of the aforementioned balance page, it will lead the user to the Withdrawal page. It displays the new balance, as well as the denominations of the notes withdrawn from the ATM.
![ATM3 Screenshot](https://github.com/cris3000/React-ATM/blob/master/Images/ATM3.png)

If a user enters an amount greater than their account balance, they are asked whether they wish to access their £100 overdraft limit.
![ATM4 Screenshot](https://github.com/cris3000/React-ATM/blob/master/Images/ATM4.png)

New balance is displayed of £220 available, as it includes the maximum overdraft.
![ATM6 Screenshot](https://github.com/cris3000/React-ATM/blob/master/Images/ATM6.png)
