# ✔ Sublime test parser
This is a test parser which can automatically parse the tests in from websites like codeforces, codechef, atcoder etc.

## ✔ Why did I make sublime test parser?
1. Most sublime users use a 3 column layout (source.cpp, input.txt, output.txt) file for competitive programming. 
<br>

![image](https://user-images.githubusercontent.com/58136319/148670353-6af45b01-55b5-4ff9-9f8f-a559c5a41371.png)

<br>

2. Their was no test parser which can generate the test cases inside input.txt itself. 
3. I wanted one :p .

## ✔ Pre-requisites for running this.
- You should have node.js installed in your computer. 
- If not, don't worry, just download node js from <a href="https://nodejs.org/en/">here</a>.
- Competitive companion extension in chrome : download from <a href="https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl">here</a>.

## ✔ How to run this?
1. Download the project.
2. Go into the file "index.js".
3. On line number 10, change the "path" to the path of your "input.txt" file or any name of your input file. 
4. Make sure you keep the same name in line no. 28 as well i.e. if your file name is "i" , in line 28, make the first parameter of the function as path + "/i".
5. Go into the project directory using the terminal.
6. Run the command : " npm install " to install all the modules and dependencies of the project.
7. Then run the command : " node app.js " to run the project.

<strong>Now just go to any problem on codeforces, atcoder, codechef etc and click on competitive conmpanion and bam! your inputs are parsed! 😃</strong>
