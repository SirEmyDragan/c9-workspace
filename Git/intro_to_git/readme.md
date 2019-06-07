#Git

##Introduction
* What is Git?
* What is Github?
* Why should you care?
* Novel Writing Analogy
* Installing Git(not really)

#Git Basics
* Git init
* Git status
* Git add (git add, git add *.html //adds all files of that type, git add -A //adds all files and folders from the directory you are in)
* Git reset HEAD <file> //unstage
* Git commit (git commit, git commit -m "message here", git commit -m 'message here')

#Git Checkout
* Git Log
* Git Checkout
* GIt revert --no-commit 0766c053..HEAD

#Cloning and Github Intro
* What is Github?
* Cloning an existing repo

#Pushing to Github
* Creating a repo on Github
* Adding a remote
* Pushing to Github


Ian - Youtube
# Working Directory
- Area where all of our files and directories and changes are living all the time

# Staging Area
- Files and directories that we explicitly add to the staging area

# Git Repository (or git repo)
- Where all our code snapshots are stored


# Git Branches
- Listing all branches (git branch)

- Adding a branch (git checkout -b <branch_name>)

- Changing branches (git checkout <branch_name>)

- Merging a branch (from feature branch: git checkout master, then git merge feature, to merge feature branch in master)

- Removing a branch (git branch -d <branch_name>)

         /-----0---0----0
        /              /
0------0----0----0----0
