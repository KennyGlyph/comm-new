import { Component } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';

export interface ActivityInfo {
  id: number,
  name: string,
  price: number
}

export interface ActivityList extends Array<ActivityInfo> {
  [index: number]: ActivityInfo
}

interface FilterItem {
  value: string;
  viewValue: string;
}
 
@Component({ 
  selector: 'app-root', 
  templateUrl: './activity.component.html', 
  styleUrls: [ 
    './activity.component.scss' 
  ] 
})
export class ActivityComponent {
  private type = '';
  activityList : ActivityList = [];

  genreFilterList: FilterItem[] = [
    { value: 'genre_all', viewValue: 'All' },
    { value: 'genre_field_trip', viewValue: 'Field Trip' },
    { value: 'genre_festival_celebration', viewValue: 'Festival/Celebration' },
    { value: 'genre_lifeskill', viewValue: 'Lifeskill' },
    { value: 'genre_sport', viewValue: 'Sport' },
    { value: 'genre_technology', viewValue: 'Technology' }
  ];

  typeFilterList: FilterItem[] = [
    { value: 'type_all', viewValue: 'All' },
    { value: 'type_basic', viewValue: 'Basic' },
    { value: 'type_premium', viewValue: 'Premium' }
  ];

  locationFilterList: FilterItem[] = [
    { value: 'type_all', viewValue: 'All' },
    { value: 'type_bukit_merah', viewValue: 'Bukit Merah' },
    { value: 'type_marsiling', viewValue: 'Marsiling' }
  ];

  datetimeFilterList: FilterItem[] = [
    { value: 'type_upcoming', viewValue: 'Upcoming' },
    { value: 'type_latest', viewValue: 'Latest' }
  ];
  
  constructor(
    private route : ActivatedRoute,
    private router : Router) {
    this.type = route.snapshot.queryParams['type'];

    // default display type, basic
    if (this.type === undefined ||
      (this.type != 'basic' && this.type != 'premium')) {
      router.navigate([], { queryParams: { type: 'basic' } });
      this.type = 'basic';
    }

    this.fetchActivityList();
  }

  fetchActivityList() {
    const tmp : ActivityInfo = {
      id: 0,
      name: 'test1',
      price: 100
    };

    for (let i = 0; i < 10; i++) {
      var cpy = JSON.parse(JSON.stringify(tmp));
      cpy.id = i;
      cpy.name = 'test_' + i;
      this.activityList.push(cpy);
    }
  }
} 
