import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MovieapiService } from '../services/movieapi.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { NaviService } from '../services/navi.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),

  ]
})
export class MovieComponent implements OnInit {
  constructor(private api: MovieapiService, private navi: NaviService) { }
  dataSource!: MatTableDataSource<any>;

  columnsToDisplay = ['title', 'release_date', 'vote_average', 'original_language']
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null;

  dataSource2!: MatTableDataSource<any>;

  columnsToDisplay2 = ['title', 'release_date', 'vote_average', 'rating', 'original_language']
  columnsToDisplayWithExpand2 = [...this.columnsToDisplay2, 'expand'];
  expandedElement2: any | null;


  async getAllFavMovieList() {
    let rawList = await this.api.allTheMovies('favorite');
    // console.log(rawList)
    let output: any = []
    for (let i = 0; i < rawList.length; i++) {
      output = [...rawList[i].results, ...output]
    }
    for (let i = 0; i < output.length; i++) {
      output[i].video_links = await this.api.getTrailer(output[i].id)
    }



    return this.dataSource = new MatTableDataSource(output)
  }

  async getAllRatedMovieList() {
    let rawList = await this.api.allTheMovies('rated');
    console.log(rawList)
    // console.log(rawList)
    let output: any = []
    
    // append the results to one array
    for (let i = 0; i < rawList.length; i++) {
      output = [...rawList[i].results, ...output]
    }
    
    // creates a link for videos
    for (let i = 0; i < output.length; i++) {
      output[i].video_links = await this.api.getTrailer(output[i].id)
    }


    return this.dataSource2 = new MatTableDataSource(output)
  }







  goTo(loc: string) {
    this.navi.goTo(loc)
  }



  getAllData() {

    // this.api.getFavMovie().then(res => {
    //   console.log(res)
    //   res.results.picture = res.results.poster_path
    //   return this.dataSource = new MatTableDataSource(res.results)
    // })

    // this.api.getRatedMovie().then(res => {
    //   console.log(res)
    //   return this.dataSource2 = new MatTableDataSource(res.results)
    // })

    this.getAllFavMovieList();
    this.getAllRatedMovieList();


  }


  buildurl(url: string, title: string) {
    var img = document.createElement('img')
    img.className = 'image'
    img.src = 'https://image.tmdb.org/t/p/w500' + url
    if (!document.getElementById(title)?.hasChildNodes()) {
      document.getElementById(title)?.appendChild(img)
    }
    console.log(title)

  }
  ngOnInit(): void {
    this.getAllData()
    
  
  }







}






