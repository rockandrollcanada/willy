import Image from 'next/image'

export default function Food() {
    return (
      <div className="hello">
        <main>
    <div class="short">
      <h3>A note about style</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
      <a href="">Read more</a>
    </div>
    <div class="tall">
      <img src="img/1.png" alt="model">
    </div>
    <div class="short">
      <h3>A note about style</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
      <a href="">Read more</a>
    </div>
    <div class="tall">
      <img src="img/2.png" alt="model">
    </div>
    <div class="tall">
      <img src="img/3.png" alt="model">
    </div>
    <div class="tall">
      <h3>A note about style</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas perspiciatis natus sit dicta repellendus quia mollitia. Voluptas ullam ipsa dolorem.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse accusamus possimus asperiores fugiat at nostrum odio repellendus voluptates. Iusto asperiores voluptate similique maiores ut omnis dolores corporis, tenetur excepturi quis?</p>
      <a href="">Read more</a>
    </div>
    <div class="short">
      <h3>A note about style</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
      <a href="">Read more</a>
    </div>
    <div class="tall">
      <img src="img/1.png" alt="model">
    </div>
    <div class="short">
      <h3>A note about style</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
      <a href="">Read more</a>
    </div>
    <div class="short">
      <h3>A note about style</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, reprehenderit.</p>
      <a href="">Read more</a>
    </div>
  </main>
        <style jsx>{`
          .hello {
            font: 15px Helvetica, Arial, sans-serif;
            background: blue;
            padding: 100px;
            text-align: center;
            transition: 100ms ease-in background;
          }
          .hello:hover {
            background: #ccc;
          }
        `}</style>
      </div>
    )
  }
  