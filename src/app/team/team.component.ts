import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
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
