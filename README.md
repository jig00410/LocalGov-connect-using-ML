# LocalGov Connect using ML
This application enables users to post civic issues to the relevant government authorities.

## Getting Started
For a Quick start to build the project on your own local machine, just follow the below instructed guide for local development of the LocalGov Connect application.

### Prerequisites (For First Time GitHub Users)
Here are some requirements that need to be done before you could start working on the project. You need the GitHub software tool to be installed on your device so as to clone, edit, merge, etc. and other operations to be performed for working on this project. Just follow the steps for your device's Operating System to install the tool correctly and start using it.

#### Linux
To use GitHub on Linux, you need to install Git CLI Tool, set it up and optionally connect it via HTTPS or SSH. Before this make sure you have made an account on the GitHub Signup page to use the Git tool as intended.

Follow the steps to install Git tool on Linux:
1. Open Linux Terminal and paste the below commands.
```sh
sudo apt update
sudo apt install git
```

2. Now paste this below command to verify the installation.
```sh
git --version
```

#### MacOS
For using GitHub on MacOS, you can go with either of the below two options viz. GitHub for Desktop or Git CLI.

**Option 1:**  
GitHub Desktop is an application software that contains the Git tool equipped with GUI for user interaction and enhancement. You can download the GitHub Desktop application for MacOS as an .dmg file installer format. For installing the GitHub Desktop application for MacOS, just click [here.](https://central.github.com/deployments/desktop/desktop/latest/darwin)

**Option 2:**  
Install GitHub as an CLI (Command Line Interface) tool if you wish to work using your Terminal. There are again two ways to install Git tool using command line tools.

1. Open Xcode Command Line Tools and paste the below command. It will open up a prompt asking you whether to install it or not.
```sh
git --version
```

2. Install the Git tool package with Homebrew if you have installed it previously on your device & just run the below command in it.
```sh
brew install git
```

#### Windows
On Windows, you can use GitHub Desktop or the Git CLI tool as an .exe file installer for accessing your GitHub account. Follow the below options to download GitHub on device.

**Option 1:**  
Download the GitHub Desktop application for Windows to use Git tool commands with GUI for an interactive experience with GitHub's Git package. For downloading the GitHub Desktop for Windows click [here.](https://central.github.com/deployments/desktop/desktop/latest/win32)

**Option 2:**  
Use GitHub's Git package as an CLI tool if you prefer to stay with Command Prompt based operations. Just click [here](https://github.com/git-for-windows/git/releases/download/v2.50.1.windows.1/Git-2.50.1-64-bit.exe) to install the Git tool on your Windows device.

#### Common for all OS
For configuring the Git CLI tool with your GitHub Account on your local machine, just follow the below steps:

1. To configure Git on your device, paste these below commands and replace the placeholder's inside the double inverted commas with your GitHub username & registered email and execute them.
```sh
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

2. Generate an SSH key (Recommended) to access the GitHub operations without the need of signing up every time to perform Git operations as in the case of GitHub HTTPS method. Copy-paste the below command and replace the email with your own GitHub registered email.
```sh
ssh-keygen -t ed25519 -C "your@email.com"
```

3. After running the above `ssh-keygen` command, press Enter to set the default path or else provide your own path in the prompt. Also, optionally set the passphrase or press Enter twice to skip them.

4. Then open the saved file named as `ed25519.pub` which contains the public SSH key for your GitHub Account. Copy the entire content (full SSH key) inside the file.

5. Visit your GitHub Profile by signing in and go to **Settings -> SSH and GPG keys -> SSH keys -> New SSH key (button)**. Set the title of the New SSH key and paste the copied content inside the Key textbox. Add the SSH key by clicking on the button below.

6. Run the below command to verify your connection.
```sh
ssh -T git@github.com
```

**Note:** For GitHub Desktop users, you don't need any kind of above configurations.
 
### Installation (Coming Soon...)
Before starting to work on the **LocalGov Connect using ML** project, you need to clone this GitHub repository as recommended below. Also, make sure you have pre-installed Node.js on your local machine.

Just follow the below listed steps to install and configure the project on your device:
1. **Clone the GitHub Repository –**  
  
**For GitHub Desktop Users:**  
Copy the below link and go to **GitHub Desktop -> File -> Clone Repository -> URL Tab (textbox)**. Paste the copied URL and choose a local path on your device where the repo. should be saved.  
  
```sh
https://github.com/A25Coder/LocalGov-connect-using-ML.git
```
  
**For Git CLI Tool Users:**  
Run the below command in your terminal if you prefer cloning the repo. using web URL i.e. over the HTTPS.  
```sh
git clone https://github.com/A25Coder/LocalGov-connect-using-ML.git
```
  
**Or**  
  
Copy-paste and run the below command if you have already setup your SSH key using `ssh-keygen` command as instructed above in the Prerequisites guide.  
```sh
git clone git@github.com:A25Coder/LocalGov-connect-using-ML.git
```

2. **Change current working directory –**  
Next step is to change you current working directory to the project directory using the `cd` command as shown below:
```sh
cd LocalGov-connect-using-ML
cd front-end
```

3. **Install the required packages –**  
Then use the `npm` command as below to install the required packages for running the project. Copy and paste the below command as shown.
```sh
npm install
```

That's all about the installation part of our project. See below on how to run the project on your local machine.

## Usage
To run the project successfully on your device, check the Installation Guide if whether you have installed all the requirements correctly. Then copy-paste the below command on your terminal and execute it to start running the project as a localhost on the device. Follow the mentioned steps on the terminal, to open the project on your favourite web browser.
```sh
npm run dev
```
