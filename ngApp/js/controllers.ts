namespace app.Controllers {
  export class HomeController {
    public movies;
        constructor(
          private movieService: app.Services.MovieService,
        ) {
          this.movies = this.movieService.getAll();
             console.log(this.movies);
        }
  }

  export class AddMovieController {
        public title;
        public genre;
        public save() {
          let movie = {
            title:this.title,
            genre:this.genre
          }
          this.movieService.add(movie).then(() => {
             this.$state.go('Home');
           })


              }

    constructor (
      private movieService: app.Services.MovieService,
      public $state:ng.ui.IStateService
    ){

    }
  }
    export class EditMovieController {
        public title;
        public genre;
        public id;
        public update(){
          let movies = {
            title:this.title,
            genre:this.genre,
            id:this.id
          }
          console.log(movies)
         this.movieService.edit(movies).then(() => {
        this.$state.go('Home');
      })
        }
        constructor(
          private movieService: app.Services.MovieService,
          public $stateParams: ng.ui.IStateParamsService,
          public $state:ng.ui.IStateService
      ){
          if($stateParams)  {
          this.id = $stateParams["id"];
          console.log(this.id);
      }
      }
    }
    export class DeleteMovieController  {
          public id;

          public delete(){
            console.log(this.id)

            this.movieService.delete(this.id).then(() => {
                this.$state.go('Home');
              })
            };
            constructor(
              public $stateParams: ng.ui.IStateParamsService,
              public $state:ng.ui.IStateService,
              private movieService: app.Services.MovieService
            ) {

              if($stateParams)  {
                this.id = $stateParams["id"];
                console.log(this.id);
                }
              }
            }

  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AddMovieController', AddMovieController);
  angular.module('app').controller('EditMovieController', EditMovieController);
  angular.module('app').controller('DeleteMovieController', DeleteMovieController)


}
