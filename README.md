# react with caver-js

### dependencies

```
npm i caver-js

npm i -D react-app-rewired url stream-browserify crypto-browserify stream-http https-browserify os-browserify
```

<br />

---

<br />

### config-overrides.js

```
module.exports = function override(config) {
	const fallback = config.resolve.fallback || {};

	Object.assign(fallback, {
		fs: false,
		net: false,
		stream: require.resolve("stream-browserify"),
		crypto: require.resolve("crypto-browserify"),
		http: require.resolve("stream-http"),
		https: require.resolve("https-browserify"),
		os: require.resolve("os-browserify/browser"),
	});

	config.resolve.fallback = fallback;

	return config;
}
```

<br />

---

<br />

### package.json

```
"scripts": {
	"start": "GENERATE_SOURCEMAP=false react-app-rewired start",
	"build": "GENERATE_SOURCEMAP=false react-app-rewired build",
	"test": "react-app-rewired test",
	"eject": "react-scripts eject"
}
```
