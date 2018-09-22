module psMovies {
	interface IMovieRating {
		// methods
		$onInit(): void;
		$onChanges(): void;
	}

	angular.module("psMovies")
		.component("movieRating", {
			templateUrl: "/ps-movies/movieRating/movieRating.component.html",
			bindings: {
				value: "<",
				max: "<",
				setRating: "&"
			},
			transclude: true,
			controllerAs: "vm",
			controller: 
				class MovieRating implements IMovieRating {

					// fields
					value: number;
					max: number;
					entries: any[];

					// methods

					$onInit(): void {
						this.entries = new Array(this.max);
					}

					$onChanges(): void {
						this.entries = new Array(this.max);
					}

				}
		});
}