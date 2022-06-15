import Head from 'next/head'

export default function video() {
  return (
    <>   <Head>
    <title>videos | By Glen</title>
    <meta name="keywords" content="videos,rockandroll,webdesign"/>
  </Head>
  <h2>Responsive Iframe</h2>
<h3>Maintain Aspect Ratio 16:9</h3>
<p>Resize the window to see the effect.</p>

<div class="container"> 
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
</div>




    </>
  )
}
