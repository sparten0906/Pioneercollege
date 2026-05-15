# GitHub Push Guide — PIONEER COLLEGE

Target repository: https://github.com/sparten0906/Pioneercollege.git  
Project folder: `c:\Users\KAARTHIKEYAN\Downloads\college-main\college-main`

---

## STEP 1 — Open a terminal in the project folder

Open PowerShell or Command Prompt, then run:

```powershell
cd "c:\Users\KAARTHIKEYAN\Downloads\college-main\college-main"
```

---

## STEP 2 — Initialize Git (first time only)

```powershell
git init
```

You should see: `Initialized empty Git repository in ...`

---

## STEP 3 — Set your Git identity (first time only)

Replace the values with your actual name and email:

```powershell
git config user.name "Your Name"
git config user.email "Kaarthikeyan.raxgbc@gmail.com"
```

---

## STEP 4 — Connect to your GitHub repository (first time only)

```powershell
git remote add origin https://github.com/sparten0906/Pioneercollege.git
```

Verify it was added:

```powershell
git remote -v
```

You should see:
```
origin  https://github.com/sparten0906/Pioneercollege.git (fetch)
origin  https://github.com/sparten0906/Pioneercollege.git (push)
```

---

## STEP 5 — Stage all project files

```powershell
git add .
```

Check what was staged:

```powershell
git status
```

---

## STEP 6 — Create the first commit

```powershell
git commit -m "Initial commit — PIONEER COLLEGE website"
```

---

## STEP 7 — Set branch to main and push (first push only)

```powershell
git branch -M main
git push -u origin main
```

GitHub will ask for your credentials:
- **Username**: your GitHub username (e.g. `sparten0906`)
- **Password**: use a **Personal Access Token** (PAT), NOT your GitHub password

> To create a PAT: GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic) → Generate new token → tick `repo` scope → copy the token and paste it as the password.

---

## STEP 8 — Done! Verify on GitHub

Open https://github.com/sparten0906/Pioneercollege in your browser.  
All project files should now be visible.

---

## Pushing future changes (every time after the first push)

Whenever you make changes, run these three commands:

```powershell
git add .
git commit -m "describe what you changed"
git push
```

### Examples of good commit messages

```powershell
git commit -m "Add ID card generator with student and teacher templates"
git commit -m "Fix PNG download alignment issue"
git commit -m "Add email field to ID cards"
```

---

## Quick reference — common Git commands

| Command | What it does |
|---|---|
| `git status` | Show changed / staged files |
| `git add .` | Stage all changes |
| `git add src/file.tsx` | Stage a specific file |
| `git log --oneline` | View commit history |
| `git diff` | See unstaged changes |
| `git push` | Upload commits to GitHub |

---

## Troubleshooting

**"remote origin already exists"**  
```powershell
git remote set-url origin https://github.com/sparten0906/Pioneercollege.git
```

**"failed to push — non-fast-forward"**  
```powershell
git pull origin main --rebase
git push
```

**"src refspec main does not match any"**  
You have no commits yet — go back to Step 5 and make sure `git add .` and `git commit` ran successfully.
