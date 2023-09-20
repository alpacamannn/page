import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor() {}

  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTIwMjczYzgzYjA0OTA2N2ZhZmJlYmQwYmI0MmNiOSIsInN1YiI6IjY1MDE5ZGJjMWJmMjY2MDBlMjVlODI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S5Jcm5oxvJRiow8_iKuY0B1QJBy-I3BtSSyYqRvhFZg'
    }
  };

 

  // async allFavMovies() {
    
  //   const listmoviesresp = await fetch(`https://api.themoviedb.org/3/account/20431051/favorite/movies?language=en-US&page=${1}&sort_by=created_at.asc`, this.options)
  //   const list: MovieType = await listmoviesresp.json();
  //   const arr = []
  //   do {
  //     let temp = await fetch(`https://api.themoviedb.org/3/account/20431051/favorite/movies?language=en-US&page=${list.total_pages--}&sort_by=created_at.asc`, this.options)
  //     const temp2: MovieType = await temp.json();
  //     arr.push(temp2)
  //   }
  //   while (list.total_pages > 0)

  //   return arr

  // }

  // async allRatedMovies() {
   
  //   const listmoviesresp = await fetch(`https://api.themoviedb.org/3/account/20431051/rated/movies?language=en-US&page=1&sort_by=created_at.asc`, this.options)
  //   const list: MovieType = await listmoviesresp.json();
  //   const arr = []
  //   do {
  //     let temp = await fetch(`https://api.themoviedb.org/3/account/20431051/rated/movies?language=en-US&page=${list.total_pages--}&sort_by=created_at.asc`, this.options)
  //     const temp2: MovieType = await temp.json();
  //     arr.push(temp2)
  //   }
  //   while (list.total_pages > 0)
  //   console.log(arr)
  //   return arr

  // }


async Movie(page: number, category: string){
const res = await fetch(`https://api.themoviedb.org/3/account/20431051/${category}/movies?language=en-US&page=${page}&sort_by=created_at.asc`, this.options)
const list: MovieType = await res.json();
return list
}


async allTheMovies(category: string){
const list = await this.Movie(1, category)
const arr: MovieType[] = []
do{
  let tempList = this.Movie(list.total_pages--, category)
  arr.push(await tempList)
}while(list.total_pages > 0)
return await arr
}

start: string = 'https://api.themoviedb.org/3/account/20431051/'
category: 'favorite/' | 'rated/' = 'favorite/'
pagePart: string = 'movies?language=en-US&page='
endPart: string = '&sort_by=created_at.asc'

async allMovies(start: string, category: 'rated' | 'favorite', pagePart: string, endPart: string) {
    const listmoviesresp = await fetch(start + category + pagePart + '1' + endPart, this.options)
    const list: MovieType = await listmoviesresp.json();
    const arr = []
    do {
      let temp = await fetch(`${start}${category}${pagePart}${list.total_pages--}${endPart}`, this.options)
      const temp2: MovieType = await temp.json();
      arr.push(temp2)
    }
    while (list.total_pages > 0)

    return arr
  }

async getTrailer(id: string) {
   


    let res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, this.options)
    const list: TrailerType = await res.json();
    // console.log(list)
    let arr = []

    //list.results[1].key

    for (let i = 0; i < list.results.length; i++) {
      arr.push('https://www.youtube.com/embed/' + list.results[i].key)
    }
    return arr




  }








}


export interface TrailerType {
  id: number,
  results: Test[]
}

interface Test {

  id: string,
  iso_639_1: string,
  iso_3166_1: string,
  key: string,
  name: string,
  official: true,
  published_at: string,
  site: string,
  size: number,
  type: string
}


export interface MovieType {
  page: number,
  results: MovieSubType[],
  total_pages: number,
  total_results: number
}

export interface MovieSubType {

  adult:boolean
  backdrop_path:string
  genre_ids:[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string 
  rating?: number 
  release_date: string
  title: string
  video: boolean
  video_links?: []
  vote_average: number
  vote_count: number


}