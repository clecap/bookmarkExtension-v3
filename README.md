This extension provides a simple, private and secure bookmark synchronization between chrome browsers.

## Features

If you click on the extension icon, the extension offers three functions:
* Download: Downloads all bookmarks as stored in the bookmark file on the server and merges them with the current bookmarks on the browser.
* Upload: Uploads all bookmarks from the browser to the server. 
* Clear Bookmarks: Clears all bookmarks from the browser.

## Server Requirements

The extension stores the bookmark files on an S3 bucket of AWS. The user thus has to set up an S3
instance on AWS and provide the necessary access data in the option sheet of the extension.
We recommend to use a separate IAM user with restricted rights on S3. The data to be entered there are as follows:

* AWS Access Key ID
* AWS Secret Access Key
* AWS Default Region
* AWS Bucket Name (such as: testing.demo.com)

The extension assumes familiarity with this process and we do not document this further.

In the option sheet you also should enter an AES Password. This is the password which is
used for the end-to-end encryption of the bookmark file. The encryption is under control of the client.

The S3 bucket is assumed to be versioning. Earlier uploads are kept and all previous uploaded
configurations can be restored. Downloads alway pick the most recent version.

## Security

* All data in the configuration is stored as part of chrome local storage. 


## Workflow

* Change local bookmarks.
* Notice the badge, notification and icon change, which reminds of the necessity to upload the bookmarks.
* Downloading several times leads to duplicated bookmarks

## Roadmap

The extension is a quick and dirty hack which I produced when xbrowsersync went out of service.
it does exactly what I need it to do and I offer it here without any warranty, guarantees of whatever.

## Road Map and Known Bugs

* Currently we cannot chose the filename on the S3 bucket, so strictly speaking it is not multi-user.




