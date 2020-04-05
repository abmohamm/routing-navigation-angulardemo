import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;

  constructor(
               private route: ActivatedRoute,
               private router: Router
              ) { }

  ngOnInit(): void {
      this.route.data.subscribe((data: { crisis: Crisis }) => {
                          this.editName = data.crisis.name;
                          this.crisis = data.crisis;
                      }
            );
  }

  cancel() {
    this.gotoCrisis();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrisis();
  }

  gotoCrisis() {
      const crisisId = this.crisis ? this.crisis.id : null;
      this.router.navigate(['../', {id: crisisId}], {relativeTo: this.route});
  }

}
