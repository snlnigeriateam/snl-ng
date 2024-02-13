import { Component, OnInit } from '@angular/core';
import { AlertsComponent } from '../alerts/alerts.component';
import { CareersService } from '../careers.service';
import { UtilitiesService } from '../utilities.service';
import { Router } from '@angular/router';

interface Round {
	url: string,
	r_id: string,
	end_date: string,
	positions: Array<Position>
}

interface Position {
	p_id: string,
	name: string,
	segments: Array<Segment>,
}

interface Segment {
	format: string,
	text: string
}

@Component({
	selector: 'app-careers',
	templateUrl: './careers.component.html',
	styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
	pageLoading: boolean = false;
	loaded: boolean = false;

	rounds: Array<Round> = [];
	preload: string = '';

	constructor(
		private alerts: AlertsComponent,
		private cService: CareersService,
		private utilities: UtilitiesService,
		private router: Router
	) {
		let primary_segs = this.router.parseUrl(this.router.url).root.children['primary'];

		if (primary_segs.segments.length > 1) {
			this.preload = primary_segs.segments[1].path;
			this.loadRound();
		}
		else {
			this.load();
		}
	}

	ngOnInit(): void {
	}

	nav() {
		document.getElementById('job-openings')?.scrollIntoView();
	}

	load() {
		this.pageLoading = true;
		this.cService.loadHiringRounds().subscribe({
			next: (data) => {
				this.pageLoading = false;
				if (data.success) {
					let positions = data.positions;

					for (let i = 0; i < data.rounds.length; i++) {
						let c_round = data.rounds[i];

						c_round.end_date = this.utilities.dateFn(new Date(c_round.end_date), false);

						for (let i = 0; i < c_round.positions.length; i++) {
							let c_pos = c_round.positions[i];

							for (let j = 0; j < positions.length; j++) {
								if (positions[j].p_id === c_pos.p_id) {
									c_pos.name = positions[j].name;
								}
							}

							for (let k = 0; k < c_pos.segments.length; k++) {
								let c_seg = c_pos.segments[k];
								c_seg.text = c_seg.text.replace(/\n/g, '<br>');
							}
						}
					}

					this.rounds = data.rounds;
					this.loaded = true;
				}
				else {
					this.alerts.alert(data.reason, true);
				}
			},
			error: () => {
				this.pageLoading = false;
				this.alerts.alert("Please check your connection", true);
			}
		});
	}

	loadRound() {
		this.pageLoading = true;
		this.cService.loadHiringRound(this.preload).subscribe({
			next: (data) => {
				this.pageLoading = false;
				if (data.success) {
					let positions = data.positions;

					let c_round = data.hiring_round;

					c_round.end_date = this.utilities.dateFn(new Date(c_round.end_date), false);

					for (let i = 0; i < c_round.positions.length; i++) {
						let c_pos = c_round.positions[i];

						for (let j = 0; j < positions.length; j++) {
							if (positions[j].p_id === c_pos.p_id) {
								c_pos.name = positions[j].name;
							}
						}

						for (let k = 0; k < c_pos.segments.length; k++) {
							let c_seg = c_pos.segments[k];
							c_seg.text = c_seg.text.replace(/\n/g, '<br>');
						}
					}

					this.rounds = [c_round];
					this.loaded = true;
				}
				else {
					this.load();
				}
			},
			error: () => {
				this.pageLoading = false;
				this.alerts.alert("Please check your connection", true);
			}
		});
	}

	apply(r_id: string, p_id: string) {
		this.router.navigate(['/careers', r_id, p_id]);
	}
}
