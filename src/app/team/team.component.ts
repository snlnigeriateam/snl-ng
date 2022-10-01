import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
	t_1: string = `
	Lanre is the co-founder and Managing Director of SNL Global.
	He's an avid aerospace enthusiast with 20 years of technical and leadership experience in aerospace, aviation,
	and defense industries across Africa, Europe, and the United States. He is an alum of Kingston University, UK;
	George Washington University, USA; and University of Michigan, Ann Arbor, USA. He is also a senior member of
	multiple Aerospace and Aviation professional bodies.
	<br><br>
	Lanre's interests in aerospace and science more broadly spring from his desire to see everyday people improve
	through the many applications of science to modern-day society. He is a practical thinker who is mission-minded
	and enjoys well-earned time off with his wife and 3 kids.
	`;
	t_2: string = `
	
	`;

	t_3: string = `
	I am Wale Sanya and am the Director of Operations of SNL Global.
	I manage the day to day activities of the establishment and oversee other departments of our organisation
	<br><br>
	I have a Masters Degree in Mechanical Engineering and am a COREN certified engineer.
	<br><br>
	I've also published a paper with IJSER (International Journal for Scientific and Engineering Research) and
	I believe in dignity, honesty, humanity, dedication and professionalism.
	<br><br>
	I am passionate about success, people's welfare, and learning
	<br><br>
	I enjoy reading as well as watching and playing football.
	`;
	
	t_4: string = `
	I'm Bamkat Ephraim Musa and I am the Project Architect at SNL Global. I work on General building construction
	at SNL Global.
	<br><br>
	I'm a graduate of architecture with the University of Jos, Nigeria, and have worked on projects with:
	<ul>
		<li>UNICEF/European Union (EU), Kebbi state</li>
		<li>Jos University Teaching Hospital(JUTH)</li>
		<li>Bingham University Teaching hospital, Jos.</li>
		<li>Federal Capital Development Authority (FCDA)</li>
	</ul>
	I believe in using advanced solutions to bring about global change and having to explore potentials to
	attain maximum satisfaction.
	<br><br>
	I'm passionate about advanced technology bringing simplicity in our day to day living.
	<br><br>
	In my spare time, I play drums, basketball and cycling.
	`;

	t_5: string = `
	I'm Makan King David, and I coordinate Media and IT endeavours at SNL Global. From sonic and visual elements, to
	things going on in the background that make what we do work. I'm kind of a jack of all trades, a master of one or
	two, but I'll let you be the judge of that.
	<br><br>
	I have worked in the media industry for over 15 years in various capacities. In between, I picked up a degree in
	Information Technology, and have added work in mobile design, web design, and digital marketing since then, with an
	international publication to my repertoire.
	<br><br>
	I strongly believe that people should be at the centre of everything we do, which is why creating the most immersive
	human experiences is all I've dedicated my life to. There's a laundry list of things I have been part of, and look
	forward to being part of that embodies this belief. So I trust that you will be around to not only witness, but
	experience in full all that I will be part of offering with SNL.
	<br><br>
	Shooting the breeze is probably my favourite thing to do whenever I get the chance, because what is life without a
	healthy dose of levity? So, I look forward to having the most meaningful fun with as many people as possible.
	<br><br>
	Let's get it!
	`;

	t_6: string = `
	I'm Daniel Sule and I'm the Lead Software Developer at SNL Global. My job includes managing and working on the
	various digital properties managed by SNL Global, including this one ;) as well as managing other developers on our Team.
	<br><br>
	I started out wanting to be an author, and while that dream is still alive somewhere, I opted for a degree in
	Computer Science from the University of Jos, Nigeria and followed my current path from then on. I work as Lead
	Software Developer/Founder of Nucleus Technologies, Nigeria, overseeing the development and release of in-house and
	client projects.
	<br><br>
	Springing from my undergraduate Thesis, I published a paper on the importance of factual information in a democracy
	and believe in building a just society for all people.
	<br><br>
	I've always been fascinated by the idea of science being used for the benefit of the common man. The fact that
	advances in technology have democratized innovation in addition to being a huge part of my story, gives me hope for
	the strides we can make going forward. That, after all, is what SNL Global stands for.
	<br><br>
	While I spend most of my spare time catching up on the latest news in tech and around the world, I'm an avid reader
	who enjoys a good Tech YouTube video and the occasional binge.
	`;
	// elements: Array<string> = ['h1', 'h2', 'h3', 'h4'];

	constructor() { }

	ngOnInit(): void {
		// let docElements: Array<HTMLElement | null> = [];
		// this.elements.forEach((el)=>{
		// 	docElements.push(document.getElementById(el));
		// });

		// let defOffset = window.innerHeight;

		// document.addEventListener('scroll', (ev)=>{
		// 	docElements.forEach((el)=>{
		// 		if(el){
		// 			let yOffset = el.getBoundingClientRect().y;
		// 			if(yOffset < defOffset && yOffset > 0){
		// 				//should be in view
		// 				if(el.style.position != 'sticky'){
		// 					el.style.position = 'sticky';
		// 				}
		// 			}
		// 			else {
		// 				//should not be in view
		// 				if(el.style.position == 'sticky'){
		// 					el.style.position = 'relative';
		// 				}
		// 			}
		// 		}
		// 	})
		// });
	}
}
