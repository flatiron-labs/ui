# GPG Signing

This document aims to get you set up with GPG commit signing on MacOS machines.

## Install GPG

```shell
brew install gpg pinentry-mac
```

Note: `gpg` via Homebrew is `gpg2`

## Configure gpg-agent

```shell
echo "pinentry-program /usr/local/bin/pinentry-mac" >> ~/.gnupg/gpg-agent.conf
echo "default-cache-ttl 86400" >> ~/.gnupg/gpg-agent.conf
echo "max-cache-ttl 86400" >> ~/.gnupg/gpg-agent.conf

killall gpg-agent
gpg-agent --daemon
```

Note: Cache TTL is set to ask for your password every 24hrs. Feel free to update.

## Create a new GPG key

```shell
› gpg --full-generate-key
```

- Hit enter to accept the default RSA and RSA key type.
- Set the keysize as 4096 bits
- Set an expiry time or hit enter to accept that the key does not expire
- Follow the prompts to enter your information (**Make sure to enter your verified email address for your GitHub account**)
- Enter a passphrase

## Retrieve GPG key

```shell
gpg --list-secret-keys --keyid-format LONG
```

```
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
/Users/username/.gnupg/pubring.kbx
-----------------------------------
sec   rsa4096/<KEY ID> 2021-02-01 [SC]
      B61064DC975B811DF158841D83F0EF5F84661895
uid                 [ultimate] Your Name (GitHub) <your@email.com>
ssb   rsa4096/6562CEA6E26DE7BE 2021-02-01 [E]
```

## Copy the private GPG key

```shell
gpg --armor --export <KEY ID> | pbcopy
```

## Add Key to GitHub

Login to Github and go to profile [settings](https://github.com/settings/keys) and add the private key copied in the previous step.

## Tell git to auto sign your future commits

```shell
git config --global user.signingkey <KEY ID>
git config --global commit.gpgsign true
```
