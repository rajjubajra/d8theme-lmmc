 Run these commands on your local computer.
For an existing project …
Step 1: Navigate to your repository’s directory:

cd /path/to/your/repo
Step 2: Configure your local repository to push to the cPanel-hosted repository:

git remote add origin ssh://yellowcp@yellow-website.com/home/yellowcp/public_html/mindfulnessmeditationcentre.co.uk/themes
git push -u origin master
To start a new project …
Step 1: Clone the cPanel-hosted repository to your local computer and navigate to its directory:

git clone ssh://yellowcp@yellow-website.com/home/yellowcp/public_html/mindfulnessmeditationcentre.co.uk/themes
cd themes
Step 2: Create a README file:

echo "# README" >> README.md
Step 3: Commit the README file to the project:

git add README.md
git commit -m "Initial Commit"
git push -u origin master
