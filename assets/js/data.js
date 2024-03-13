const home = document.querySelector('#home')
const pac = document.querySelector('#bnp')
const drake = document.querySelector('#dnm')
const pusha = document.querySelector('#pnd')
const meg = document.querySelector('#mnn')

const pageData = [
	{
		name: '2pac',
		headerImg: 'https://townsquare.media/site/625/files/2017/06/2pac-greatest-songs-brenda-screenshot-2.png?w=1200&h=0&zc=1&s=0&a=t&q=89',
		act1: 'You Got The Juice Now',
		history: 'Tupac Shakur, commonly known as 2Pac, was an influential American rapper, actor, and activist. He was born on June 16, 1971, in East Harlem, New York City, and raised primarily in the Bronx. 2Pac rose to prominence in the early 1990s as one of the most prominent figures in West Coast hip-hop, particularly through his affiliation with Death Row Records, headed by Suge Knight. He released his debut album, "2Pacalypse Now," in 1991, which addressed social issues such as racism, violence, and poverty.',
		beef: 'Tupac felt betrayed by Biggie and others in the East Coast hip-hop scene. He believed that Biggie, along with other East Coast rappers, had a hand in orchestrating the 1994 shooting where Tupac was shot multiple times. Tupac interpreted this as a sign of disloyalty and a breach of trust.	Tupac\'s response to what he perceived as betrayal was aggressive and personal. He released diss tracks like "Hit \'Em Up," where he directly attacked Biggie, accusing him of stealing his style, betraying their friendship, and even mocking Biggie\'s weight and relationship with Faith Evans. Tupac saw these attacks as a way to defend his honor and reputation.',
		outcome: 'Tupac Shakur\'s life came to a tragic end on September 13, 1996, when he was fatally shot in a drive-by shooting in Las Vegas, Nevada. He was just 25 years old at the time of his death. Tupac\'s murder shocked the hip-hop community and music industry, leaving fans and fellow artists grieving the loss of one of rap\'s most talented and influential figures.',
		quotes: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates repudiandae possimus minima dolores assumenda iste placeat rem cumque nostrum distinctio voluptatum accusantium sunt eos ex? Possimus facilis minus soluta.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa rem dolore harum facere quo, voluptatum nesciunt vitae esse quaerat doloribus, perferendis veritatis. Labore itaque id cumque fugit placeat maxime.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa rem dolore harum facere quo, voluptatum nesciunt vitae esse quaerat doloribus, perferendis veritatis. Labore itaque id cumque fugit placeat maxime.'],
		winner: true,
		opp: () => pageData[1],
		footerImg: 'https://walkoffame.com/wp-content/uploads/2023/05/Image-scaled.jpeg',
	},
	{
		name: 'Biggie',
		headerImg: 'https://i.guim.co.uk/img/media/56062c7b7018e4172bd7ca42a3fab039c6b98b93/0_73_2384_1430/master/2384.jpg?width=1200&quality=85&auto=format&fit=max&s=3f7e83d4c26296631b112c14bd14514b',
		act1: 'Call Me Big Papa',
		history: 'Christopher Wallace, known by his stage names The Notorious B.I.G. and Biggie Smalls, was an iconic American rapper and songwriter. He was born on May 21, 1972, in Brooklyn, New York City. Biggie Smalls emerged as a central figure in the East Coast hip-hop scene during the 1990s. He rose to prominence with his debut album, "Ready to Die," released in 1994. The album showcased Biggie\'s distinctive flow, vivid storytelling, and lyrical prowess, earning critical acclaim and commercial success. Tracks like "Juicy," "Big Poppa," and "One More Chance" became instant classics and solidified his status as one of the greatest rappers of his generation.',
		beef: 'Biggie, on the other hand, may have viewed the conflict with Tupac as a series of misunderstandings that spiraled out of control. While there were tensions between them, Biggie may not have anticipated the level of animosity and violence that would result from their feud. Biggie\'s responses to Tupac\'s diss tracks were more subdued compared to Tupac\'s aggressive attacks. He attempted to downplay the conflict and even expressed regret over the deteriorating relationship between them. Biggie may have hoped for a reconciliation, as evidenced by his efforts to reach out to Tupac through intermediaries.',
		outcome: 'From Biggie\'s perspective, the feud with Tupac likely ended in tragedy. Biggie was devastated by Tupac\'s death and faced increased scrutiny and suspicion in the aftermath. Biggie\'s own life was tragically cut short just months later, further fueling the narrative of the East Coast-West Coast rivalry as a destructive force in hip-hop.',
		quotes: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates repudiandae possimus minima dolores assumenda iste placeat rem cumque nostrum distinctio voluptatum accusantium sunt eos ex? Possimus facilis minus soluta.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa rem dolore harum facere quo, voluptatum nesciunt vitae esse quaerat doloribus, perferendis veritatis. Labore itaque id cumque fugit placeat maxime.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa rem dolore harum facere quo, voluptatum nesciunt vitae esse quaerat doloribus, perferendis veritatis. Labore itaque id cumque fugit placeat maxime.'],
		winner: false,
		opp: () => pageData[0],
		footerImg: () => pageData[0].footerImg,
	}
]

home.innerHTML = `
<div id="" class="left-side side">
<h1>The #Beef is Real!</h1>
</div>
<div id="" class="right-side side">
<section class="gallery">
  <img src="https://assets.teenvogue.com/photos/606c4a09491cbe3d363567f4/16:9/w_2560%2Cc_limit/megan%2520thee%2520stallion.jpg" alt="the beach">
  <img src="https://picsum.photos/id/1011/400/300" alt="a girl doing kayak">
  <img src="https://picsum.photos/id/124/400/300" alt="a small boat in the sea">
  <img src="https://picsum.photos/id/235/400/300" alt="a mountain">
  <img src="https://picsum.photos/id/423/400/300" alt="a forest">
</section>
</div>`

const temp = `<section id="" class="left-side side">
<div style="background-image: url('https://townsquare.media/site/625/files/2017/06/2pac-greatest-songs-brenda-screenshot-2.png?w=1200&h=0&zc=1&s=0&a=t&q=89');" class="parallax">
  <h1 class="parallax-text">2Pac</h1>
</div>
<div class="content">
  <section class="history">
	<div>
	  <h2>Act I: You Got The Juice Now!</h2>
	  <p>Tupac Shakur, commonly known as 2Pac, was an influential American rapper, actor, and activist. He was born on June 16, 1971, in East Harlem, New York City, and raised primarily in the Bronx. 2Pac rose to prominence in the early 1990s as one of the most prominent figures in West Coast hip-hop, particularly through his affiliation with Death Row Records, headed by Suge Knight. He released his debut album, "2Pacalypse Now," in 1991, which addressed social issues such as racism, violence, and poverty.</p>

	</div>
	<div>
	  <blockquote>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates repudiandae possimus minima dolores assumenda iste placeat rem cumque nostrum distinctio voluptatum accusantium sunt eos ex? Possimus facilis minus soluta.
	  </blockquote>
	</div>
  </section>
  <section class="incident">
	<div>
	  <blockquote>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa rem dolore harum facere quo, voluptatum nesciunt vitae esse quaerat doloribus, perferendis veritatis. Labore itaque id cumque fugit placeat maxime.
	  </blockquote>
	</div>
	<div>
	  <h2>Act II: The Beef</h2>
	  <p>Tupac felt betrayed by Biggie and others in the East Coast hip-hop scene. He believed that Biggie, along with other East Coast rappers, had a hand in orchestrating the 1994 shooting where Tupac was shot multiple times. Tupac interpreted this as a sign of disloyalty and a breach of trust.
	  Tupac's response to what he perceived as betrayal was aggressive and personal. He released diss tracks like "Hit 'Em Up," where he directly attacked Biggie, accusing him of stealing his style, betraying their friendship, and even mocking Biggie's weight and relationship with Faith Evans. Tupac saw these attacks as a way to defend his honor and reputation.</p>

	</div>
  </section>
  <section class="outcome">
	<div>
	  <h2>Act III: The Outcome</h2>
	  <p>Tupac Shakur's life came to a tragic end on September 13, 1996, when he was fatally shot in a drive-by shooting in Las Vegas, Nevada. He was just 25 years old at the time of his death. Tupac's murder shocked the hip-hop community and music industry, leaving fans and fellow artists grieving the loss of one of rap's most talented and influential figures.</p>

	</div>
	<div>
	  <blockquote>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa rem dolore harum facere quo, voluptatum nesciunt vitae esse quaerat doloribus, perferendis veritatis. Labore itaque id cumque fugit placeat maxime.
	  </blockquote>
	</div>
  </section>

</div>
<div style="background-image: url('https://walkoffame.com/wp-content/uploads/2023/05/Image-scaled.jpeg');" class="parallax bottom">
  <h1 class="parallax-text">2Pac</h1>
</section>
<section id="" class="right-side side">
<div style="background-image: url('https://i.guim.co.uk/img/media/56062c7b7018e4172bd7ca42a3fab039c6b98b93/0_73_2384_1430/master/2384.jpg?width=1200&quality=85&auto=format&fit=max&s=3f7e83d4c26296631b112c14bd14514b');" class="parallax">
  <h1 class="parallax-text">Biggie</h1>
</div>
<div class="content">
  <section class="history">
	<div>
	  <h2>Act I: Call Me Big Papa!</h2>
	  <p>Christopher Wallace, known by his stage names The Notorious B.I.G. and Biggie Smalls, was an iconic American rapper and songwriter. He was born on May 21, 1972, in Brooklyn, New York City. Biggie Smalls emerged as a central figure in the East Coast hip-hop scene during the 1990s. He rose to prominence with his debut album, "Ready to Die," released in 1994. The album showcased Biggie's distinctive flow, vivid storytelling, and lyrical prowess, earning critical acclaim and commercial success. Tracks like "Juicy," "Big Poppa," and "One More Chance" became instant classics and solidified his status as one of the greatest rappers of his generation.</p>

	</div>
	<div>
	  <blockquote>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates repudiandae possimus minima dolores assumenda iste placeat rem cumque nostrum distinctio voluptatum accusantium sunt eos ex? Possimus facilis minus soluta.
	  </blockquote>
	</div>
  </section>
  <section class="incident">
	<div>
	  <blockquote>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa rem dolore harum facere quo, voluptatum nesciunt vitae esse quaerat doloribus, perferendis veritatis. Labore itaque id cumque fugit placeat maxime.
	  </blockquote>
	</div>
	<div>
	  <h2>Act II: The Beef</h2>
	  <p>Biggie, on the other hand, may have viewed the conflict with Tupac as a series of misunderstandings that spiraled out of control. While there were tensions between them, Biggie may not have anticipated the level of animosity and violence that would result from their feud.
	  Biggie's responses to Tupac's diss tracks were more subdued compared to Tupac's aggressive attacks. He attempted to downplay the conflict and even expressed regret over the deteriorating relationship between them. Biggie may have hoped for a reconciliation, as evidenced by his efforts to reach out to Tupac through intermediaries.</p>

	</div>
  </section>
  <section class="outcome">
	<div>
	  <h2>Act III: The Outcome</h2>
	  <p>From Biggie's perspective, the feud with Tupac likely ended in tragedy. Biggie was devastated by Tupac's death and faced increased scrutiny and suspicion in the aftermath. Biggie's own life was tragically cut short just months later, further fueling the narrative of the East Coast-West Coast rivalry as a destructive force in hip-hop.</p>

	</div>
	<div>
	  <blockquote>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa rem dolore harum facere quo, voluptatum nesciunt vitae esse quaerat doloribus, perferendis veritatis. Labore itaque id cumque fugit placeat maxime.
	  </blockquote>
	</div>
  </section>

</div>
<div style="background-image: url('https://walkoffame.com/wp-content/uploads/2023/05/Image-scaled.jpeg');" class="parallax bottom">
  <h1 class="parallax-text">2Pac</h1>
</section>`

pageData.forEach( page => {
	if (page.name === '2pac'){
		pac.innerHTML = `<section id="" class="left-side side">
		<div style="background-image: url('${page.headerImg}');" class="parallax">
		  <h1 class="parallax-text">${page.name}</h1>
		</div>
		<div class="content">
		  <section class="history">
			<div>
			  <h2>Act I: ${page.act1}!</h2>
			  <p>${page.history}</p>
		
			</div>
			<div>
			  <blockquote>
				${page.quotes[0]}
			  </blockquote>
			</div>
		  </section>
		  <section class="incident">
			<div>
			  <blockquote>
				${page.quotes[1]}
			  </blockquote>
			</div>
			<div>
			  <h2>Act II: The Beef</h2>
			  <p>${page.beef}</p>
		
			</div>
		  </section>
		  <section class="outcome">
			<div>
			  <h2>Act III: The Outcome</h2>
			  <p>${page.outcome}</p>
		
			</div>
			<div>
			  <blockquote>
				${page.quotes[2]}
			  </blockquote>
			</div>
		  </section>
		
		</div>
		<div style="background-image: url('${page.footerImg}');" class="parallax bottom">
		  <h1 class="parallax-text">${page.name}</h1>
		</section>
		<section id="" class="right-side side">
		<div style="background-image: url('${page.opp().headerImg}');" class="parallax">
		  <h1 class="parallax-text">${page.opp().name}</h1>
		</div>
		<div class="content">
		  <section class="history">
			<div>
			  <h2>Act I: ${page.opp().act1}!</h2>
			  <p>${page.opp().history}</p>
		
			</div>
			<div>
			  <blockquote>
			  ${page.opp().quotes[0]}
			  </blockquote>
			</div>
		  </section>
		  <section class="incident">
			<div>
			  <blockquote>
			  ${page.opp().quotes[1]}
			  </blockquote>
			</div>
			<div>
			  <h2>Act II: The Beef</h2>
			  <p>${page.opp().beef}</p>
		
			</div>
		  </section>
		  <section class="outcome">
			<div>
			  <h2>Act III: The Outcome</h2>
			  <p>${page.opp().outcome}</p>
		
			</div>
			<div>
			  <blockquote>
			  ${page.opp().quotes[2]}
			  </blockquote>
			</div>
		  </section>
		
		</div>
		<div style="background-image: url('${page.opp().footerImg()}');" class="parallax bottom">
		  <h1 class="parallax-text">${page.opp().opp().name}</h1>
		</section>`
	}
})