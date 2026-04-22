# Assets

Images and media files are NOT committed to this repository.

## Folder structure expected on the server:
public/
  assets/
    images/
      home/
      missions/
      special-projects/
      missionaries/

## Deployment note:
After running the GitHub Actions build, manually copy the `public/assets/`
folder to the IIS site root at globalreach.victory.com.
Only re-copy when images are added or changed.