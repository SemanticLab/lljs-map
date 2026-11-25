# Linking Lost Jazz Shrines

A static atlas of Brooklyn jazz locations from the Linking Lost Jazz Shrines interviews, plotted on a 1950 street map.

## Local development

From the repository root, run:

```sh
npm ci
npm run build
python3 -m http.server 8000
```

Open [the local atlas](http://localhost:8000). Rebuild after editing the JavaScript modules or the JSON data.

## GitHub Pages

In **Settings → Pages → Build and deployment**, choose **GitHub Actions**. Pushes to the default branch build and deploy the atlas. To redeploy the same revision, run **Deploy atlas to GitHub Pages** from the Actions tab on the default branch.

## License

The atlas software is available under the [MIT License](LICENSE). See the map and portrait credits for their respective sources and rights.
