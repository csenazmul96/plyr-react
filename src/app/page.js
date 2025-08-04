 import PlyrComponent from "@/components/PlyrComponent";
 import "plyr-react/plyr.css"
 import Head from "next/head";


 export default function Home() {
  return (
      <>
          <Head>
              <title>
                  Stream Videos Easily with Plyr-React | Modern Video Player Component Guide
              </title>
              <meta
                  name="description"
                  content="Discover how to seamlessly embed, customize, and optimize videos with Plyr-React. Learn best practices for video SEO and performance. Enhance your site's user experience with a modern React video player."
              />
              <meta
                  name="keywords"
                  content="plyr-react, React video player, video SEO, embed videos, modern video player, responsive video, React components"
              />
              <meta property="og:title" content="Modern Video Player with Plyr-React" />
              <meta
                  property="og:description"
                  content="Improve video engagement and SEO on your site. Get started with Plyr-React, the customizable React video player component for seamless streaming and responsive design."
              />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://your-domain.com/" />
              <meta property="og:image" content="https://your-domain.com/preview.jpg" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Modern Video Player with Plyr-React" />
              <meta name="twitter:description" content="Easily add high-performance, SEO-optimized video players to your React site using Plyr-React." />
              <meta name="twitter:image" content="https://your-domain.com/preview.jpg" />
              <link rel="canonical" href="https://your-domain.com/" />
          </Head>

          <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <PlyrComponent />
    </div>
     </>
  );
}
