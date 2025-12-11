# Hostinger Deployment Setup Guide

## Overview
Your GitHub Actions workflow is now set up to automatically build and deploy your Little Jonnys website to Hostinger whenever you push to the master branch.

## Required GitHub Secrets

You need to add 4 secrets to your GitHub repository. Go to:
**Settings → Secrets and variables → Actions → New repository secret**

### 1. SSH_HOST
**What it is:** Your Hostinger server address
**Where to find it:**
- Log into Hostinger hPanel
- Go to Advanced → SSH Access
- Look for "Server address" or "Hostname"
- Example: `srv12345.hostinger.com` or your IP address

### 2. SSH_USERNAME
**What it is:** Your SSH username
**Where to find it:**
- In Hostinger hPanel → SSH Access
- Usually shows as "Username" or "SSH Username"
- Often format: `u123456789` or similar

### 3. SSH_PRIVATE_KEY
**What it is:** Your SSH private key (the one you've used before)
**Where to find it:**
- This is the private key you generated previously
- Usually stored on your local machine at `~/.ssh/id_rsa` or `~/.ssh/id_ed25519`
- On Windows: `C:\Users\YourName\.ssh\id_rsa`
- You can view it with: `cat ~/.ssh/id_rsa` (Linux/Mac) or `type %USERPROFILE%\.ssh\id_rsa` (Windows)
- Copy the ENTIRE key including:
  ```
  -----BEGIN OPENSSH PRIVATE KEY-----
  [key content]
  -----END OPENSSH PRIVATE KEY-----
  ```

### 4. REMOTE_PATH
**What it is:** The path on Hostinger where files should be deployed
**Common values:**
- `/public_html` (if littlejonnys.co.uk is your primary domain)
- `/domains/littlejonnys.co.uk/public_html` (if it's an addon domain)
- `/home/u123456789/public_html` (alternative format)

**Where to find it:**
- In Hostinger File Manager, navigate to where your website files should be
- The path is shown at the top of the File Manager

## How to Add Secrets

1. Go to: https://github.com/jonnyallum/littlejonnys.co.uk/settings/secrets/actions
2. Click "New repository secret"
3. Enter the name (e.g., `SSH_HOST`)
4. Paste the value
5. Click "Add secret"
6. Repeat for all 4 secrets

## Testing the Deployment

Once all 4 secrets are added:

1. Go to **Actions** tab in your GitHub repository
2. You should see the "Deploy to Hostinger" workflow
3. Click "Run workflow" → "Run workflow" to manually trigger it
4. Watch it build and deploy
5. Check littlejonnys.co.uk to see your updated packages!

## Future Deployments

After setup, deployments happen automatically:
- Any push to the `master` branch triggers a deployment
- GitHub Actions will:
  1. Check out your code
  2. Install dependencies
  3. Build the React app
  4. Deploy to Hostinger via SSH

## Troubleshooting

If the deployment fails:
1. Check the Actions tab for error messages
2. Common issues:
   - Wrong SSH host/username
   - SSH key not authorized on Hostinger
   - Wrong REMOTE_PATH
3. Make sure your SSH public key is added in Hostinger hPanel → SSH Access

## Need Help?

If you need the SSH public key to add to Hostinger:
- It should match your private key
- Usually at `~/.ssh/id_rsa.pub`
- View with: `cat ~/.ssh/id_rsa.pub`
