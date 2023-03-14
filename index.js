/*
You are a NASA rocket scientist trying to send the next team of astronauts to a distant planet. However, there's one issue - because your NASA rocketship is capable of holding many containers of rocket fuel, we need to create some sort of algorithm that can identify which barrels of rocket fuel are available to reach any desired fuel level, at any point in time.

Write an algorithm that accepts 2 parameters - an array of integers (where each integer represents the amount of rocket fuel in a given container), and an integer representing a desired target fuel level. 

Your function should return true if any pair of numbers in the array adds up to the second parameter (the integer representing the desired fuel level).

Note that the two integers must add up EXACTLY to the desired fuel level. 

For example:
If you were given these inputs: 
[2, 4, 3, 5, 1, 6], 10
Your function should return true since 6 + 4 can add up to 10.

If you were given these inputs:
[2, 4, 3, 5, 1, 6], 12
Your function should return false since no 2 numbers in the array can add up to 12 

Note 2: You can expect that your input array will always contain at least 2 integers. 
Note 3: You can expect that sometimes your input array will contain negative integers. 
*/

// Write your code below: 