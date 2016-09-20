namespace app.Services {

  export class MovieService {
    public MovieResource;
    public EditResource;
    public DeleteResource;
    public add (movie) {

      console.log(movie)
      return this.MovieResource.save(movie).$promise
    }
    public getAll(){
     return this.MovieResource.query();
   }

   public edit(movies){
           console.log(movies)
           return this.EditResource.save(movies).$promise
         }
         public delete(id) {
             console.log(id)
          return this.DeleteResource.remove({id:id}).$promise
           }


    constructor(
       private $resource: ng.resource.IResourceService
    ){
      this.MovieResource = $resource('/api/movies/:id'),
      this.EditResource = $resource('/api/movies/edit'),
      this.DeleteResource = $resource('/api/movies/delete/:id')



    }
  }

  angular.module('app').service('movieService', MovieService);

}
