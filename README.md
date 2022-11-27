 <p align="center">
  <img src="https://img.shields.io/static/v1?label=Open Graph Dynamic&message=Welcome&color=FFFFFF&labelColor=635FC7" alt="Unsplash welcome!" />
  <img alt="License" src="https://img.shields.io/static/v1?label=version&message=1.0&color=FFFFFF&labelColor=635FC7">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=FFFFFF&labelColor=635FC7">
  <img alt="Stars" src="https://img.shields.io/github/stars/yazaldefilimonepinto/open-graph-dynamic?color=FFFFFF&labelColor=635FC7">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/yazaldefilimonepinto/open-graph-dynamic?color=FFFFFF&labelColor=635FC7">
</p>
<p align="center" >
A package for dynamic generate og image for blog/posts based in templates simples and customs, support all platforms JavaScript & TypeScript.
<P/>

# Start

```bash
npm install open-graph-dynamic

#or with yarn

yarn add open-graph-dynamic
```

- create data with for post content, exemple:

```ts
import { openGraphInputType, openGraphOutputType } from 'open-graph-dynamic';

const data: openGraphInputType = {
  title:
    'Automatically Generate OG Images From Post Content Automatically Generate OG Images From Post Content Automatically Generate OG Images From Post Content',
  tags: ['#next', '#react', '#microfronds'],
  timestamp: 'November 11, 2022',
  url: 'yazaldefilimone.dev',
  user: {
    name: `Yazalde Filimone`,
    username: `@yazaldefilimone`,
    image: 'https://github.com/yazaldefilimonepinto.png',
  },
};

// pass data of function openGraph
let ogImage: openGraphOutputType;

(async function () {
  ogImage = await openGraph(data);
})();
```

- Exemple In ReactJs:

```jsx
function SEO(props) {
  //...
  return (
    //...
    {ogImage && <meta property="og:url" content={ogImage.source} />}
    //...
  )
}
```

Result:

![open graph](https://github.com/yazaldefilimonepinto/open-graph-dynamic/blob/main/.assets/exemple/open-graph.png)

[MIT](https://github.com/yazaldefilimonepinto/dynamic-open-graph/blob/main/LICENSE) © [Yazalde Filimone](https://www.linkedin.com/in/yazalde-filimone/)
