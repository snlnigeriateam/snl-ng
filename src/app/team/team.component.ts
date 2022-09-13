import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
	b_text: string = `
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas, tempore, provident temporibus
		voluptate quisquam officia hic ducimus delectus cupiditate ut quam dolore quaerat ad? Placeat autem ex
		nihil beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam ab numquam alias,
		eius rem. Eum corporis est, quidem laboriosam veritatis similique impedit error, eveniet porro, deleniti
		culpa expedita. Neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus temporibus
		nulla dicta tempore quam, quia eaque ullam magnam cum rem? Assumenda earum explicabo voluptatibus
		nesciunt ratione. Omnis, reiciendis quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Itaque sit minus sunt ipsum! Ipsum quo, quae dolore doloribus modi voluptatem ipsam vel cumque
		accusamus, enim, minus placeat iure nisi dicta?
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui explicabo laudantium eos alias,
		perspiciatis vitae at dicta molestias possimus, corrupti rem doloremque aliquam, inventore eveniet
		deserunt cupiditate assumenda suscipit?
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium vel sapiente, officia perferendis
		quam magnam cumque accusantium? Tempore, saepe doloremque voluptas, rerum, temporibus illum officia
		alias pariatur officiis sint rem!
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta dolor, ipsa qui sunt, a quasi
		doloribus est velit, dolores rerum veniam corrupti in culpa eius minima molestiae provident eligendi.
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, adipisci corporis consequatur facere
		natus nostrum pariatur suscipit, quia minus enim error in repudiandae quasi ad a commodi ipsum ratione
		quas.
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae repellendus necessitatibus aut
		aperiam voluptates odio dignissimos neque minus est perferendis, delectus omnis illum repellat vel
		labore, sed tempore quos pariatur.
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas inventore eius quasi
		reprehenderit necessitatibus a repellendus reiciendis recusandae provident quia suscipit quis error
		nobis, neque corrupti officiis quam iure.
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas, tempore, provident temporibus
		voluptate quisquam officia hic ducimus delectus cupiditate ut quam dolore quaerat ad? Placeat autem ex
		nihil beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam ab numquam alias,
		eius rem. Eum corporis est, quidem laboriosam veritatis similique impedit error, eveniet porro, deleniti
		culpa expedita. Neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus temporibus
		nulla dicta tempore quam, quia eaque ullam magnam cum rem? Assumenda earum explicabo voluptatibus
		nesciunt ratione. Omnis, reiciendis quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Itaque sit minus sunt ipsum! Ipsum quo, quae dolore doloribus modi voluptatem ipsam vel cumque
		accusamus, enim, minus placeat iure nisi dicta?
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui explicabo laudantium eos alias,
		perspiciatis vitae at dicta molestias possimus, corrupti rem doloremque aliquam, inventore eveniet
		deserunt cupiditate assumenda suscipit?
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium vel sapiente, officia perferendis
		quam magnam cumque accusantium? Tempore, saepe doloremque voluptas, rerum, temporibus illum officia
		alias pariatur officiis sint rem!
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
