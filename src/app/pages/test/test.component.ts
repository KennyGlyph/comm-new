import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
 
@Component({ 
  selector: 'app-root', 
  templateUrl: './test.component.html', 
  styleUrls: [ 
    './test.component.scss' 
  ] 
}) 
 
export class TestComponent {
  constructor(private dbService: DatabaseService) {
    dbService.getData('/api/test-get.php')
      .subscribe((data: any) => {
        console.log(data);
      });
  }
} 
